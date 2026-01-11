import { useEffect, useState } from "react";
import { api } from "../api";
import Sidebar from "../components/Sidebar";
import { useParams } from "react-router-dom";

export default function EditPlant() {
    const { id } = useParams();
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [needsWaterEvery, setNeeds] = useState("");

    useEffect(() => {
        loadPlant();
    }, []);

    const loadPlant = async () => {
        const token = localStorage.getItem("token");

        const res = await api.get("/plant", {
            headers: { Authorization: token }
        });

        const plant = res.data.find((p) => p.id === Number(id));

        setName(plant.name);
        setAge(plant.age);
        setNeeds(plant.needsWaterEvery);
    };

    const handleUpdate = async () => {
        const token = localStorage.getItem("token");

        await api.put(`/plant/${id}`, {
            name,
            age,
            needsWaterEvery
        }, {
            headers: { Authorization: token }
        });

        alert("Tanaman berhasil diupdate!");
        window.location.href = "/home";
    };

    return (
        <div style={{ display: "flex" }}>
            <Sidebar />

            {/* Background cantik */}
            <div
                style={{
                    width: "100%",
                    minHeight: "100vh",
                    background: "linear-gradient(135deg, #C5E1A5, #FFF59D)",
                    padding: "40px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "flex-start"
                }}
            >
                {/* Card putih */}
                <div
                    style={{
                        background: "white",
                        width: "400px",
                        padding: "30px",
                        borderRadius: "15px",
                        boxShadow: "0 6px 15px rgba(0,0,0,0.15)"
                    }}
                >
                    <h2
                        style={{
                            color: "#4CAF50",
                            textAlign: "center",
                            marginBottom: "20px",
                            fontWeight: "bold"
                        }}
                    >
                        Edit Tanaman
                    </h2>

                    {/* Input Nama */}
                    <label style={labelStyle}>Nama Tanaman</label>
                    <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        style={inputStyle}
                    />

                    {/* Input Umur */}
                    <label style={labelStyle}>Umur (hari)</label>
                    <input
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                        type="number"
                        style={inputStyle}
                    />

                    {/* Input disiram setiap */}
                    <label style={labelStyle}>Perlu disiram setiap (hari)</label>
                    <input
                        value={needsWaterEvery}
                        onChange={(e) => setNeeds(e.target.value)}
                        type="number"
                        style={inputStyle}
                    />

                    {/* Tombol Update */}
                    <button
                        onClick={handleUpdate}
                        style={{
                            width: "100%",
                            background: "#4CAF50",
                            color: "white",
                            padding: "12px",
                            border: "none",
                            borderRadius: "8px",
                            marginTop: "15px",
                            fontWeight: "bold",
                            cursor: "pointer"
                        }}
                    >
                        Update
                    </button>
                </div>
            </div>
        </div>
    );
}

const inputStyle = {
    width: "100%",
    padding: "12px",
    borderRadius: "8px",
    border: "1px solid #A5D6A7",
    background: "#FAFAFA",
    marginBottom: "15px",
    marginTop: "5px"
};

const labelStyle = {
    fontWeight: "bold",
    color: "#388E3C",
    marginBottom: "5px",
    display: "block"
};
