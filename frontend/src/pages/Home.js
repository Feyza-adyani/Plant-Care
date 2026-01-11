import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import { api } from "../api";

export default function Home() {
    const [plants, setPlants] = useState([]);

    useEffect(() => {
        loadPlants();
        const timer = setInterval(checkWateringTime, 60000);
        return () => clearInterval(timer);
    }, []);

    const loadPlants = async () => {
        const token = localStorage.getItem("token");
        const res = await api.get("/plant", { headers: { Authorization: token } });
        setPlants(res.data);
    };

    // Perbaikan tandai sudah disiram (bekerja 100%)
    const markWatered = async (id) => {
        const token = localStorage.getItem("token");

        await api.put(
            `/plant/${id}`,
            { isWatered: true },
            { headers: { Authorization: token } }
        );

        loadPlants();
    };

    const deletePlant = async (id) => {
        const token = localStorage.getItem("token");
        await api.delete(`/plant/${id}`, { headers: { Authorization: token } });
        loadPlants();
    };

    const checkWateringTime = () => {
        const now = new Date();
        const current = now.toTimeString().slice(0, 5);

        plants.forEach((p) => {
            if (p.wateringTime === current) {
                alert(`Waktunya menyiram tanaman: ${p.name}`);
            }
        });
    };

    return (
        <div style={{
            display: "flex",
            background: "linear-gradient(135deg, #D8F3DC, #FFF9C4)",
            minHeight: "100vh"
        }}>
            <Sidebar />

            <div style={{
                marginLeft: "250px",
                padding: "30px",
                width: "100%",
                transition: "0.3s"
            }}>

                <h1 style={{ color: "#1B5E20" }}>Selamat Datang di Plant Care! 🌿</h1>
                <p style={{ color: "#33691E", marginBottom: "20px" }}>
                    Selamat merawat dan menumbuhkan tanamanmu setiap hari!
                </p>

                <h2 style={{ color: "#2E7D32" }}>Daftar Tanaman Kamu</h2>

                <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(270px, 1fr))",
                    gap: "20px",
                    marginTop: "20px"
                }}>
                    {plants.map((p) => (
                        <div
                            key={p.id}
                            style={{
                                background: "white",
                                padding: "20px",
                                borderRadius: "12px",
                                boxShadow: "0 4px 10px rgba(0,0,0,0.15)"
                            }}
                        >
                            <h3 style={{ margin: 0 }}>{p.name}</h3>
                            <p>Umur: {p.age} hari</p>

                            <p style={{ marginTop: "10px", fontWeight: "bold" }}>
                                Atur Pengingat Penyiraman:
                            </p>
                            <p>{p.wateringTime}</p>

                            <button
                                style={styles.btnEdit}
                                onClick={() => window.location.href = `/edit/${p.id}`}
                            >
                                Edit
                            </button>

                            <button
                                style={styles.btnDelete}
                                onClick={() => deletePlant(p.id)}
                            >
                                Hapus
                            </button>

                            {!p.isWatered ? (
                                <button
                                    style={styles.btnWater}
                                    onClick={() => markWatered(p.id)}
                                >
                                    Tandai Sudah Disiram
                                </button>
                            ) : (
                                <button style={styles.btnDone}>Sudah Aman ✔</button>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

const styles = {
    btnEdit: {
        background: "#66BB6A",
        padding: "8px 12px",
        border: "none",
        color: "white",
        borderRadius: "6px",
        marginRight: "8px",
        cursor: "pointer",
        fontWeight: "bold"
    },
    btnDelete: {
        background: "#E57373",
        padding: "8px 12px",
        border: "none",
        color: "white",
        borderRadius: "6px",
        cursor: "pointer",
        fontWeight: "bold"
    },
    btnWater: {
        background: "#43A047",
        width: "100%",
        padding: "10px",
        marginTop: "10px",
        borderRadius: "6px",
        color: "white",
        border: "none",
        cursor: "pointer",
        fontWeight: "bold"
    },
    btnDone: {
        background: "#A5D6A7",
        width: "100%",
        padding: "10px",
        marginTop: "10px",
        borderRadius: "6px",
        color: "#1B5E20",
        border: "none",
        cursor: "default",
        fontWeight: "bold"
    }
};
