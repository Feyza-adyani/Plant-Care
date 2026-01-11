import { useState } from "react";
import Sidebar from "../components/Sidebar";
import { api } from "../api";

export default function AddPlant() {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [needs, setNeeds] = useState("");
    const [wateringTime, setWatering] = useState("");

    const submit = async () => {
        const token = localStorage.getItem("token");

        await api.post("/plant", {
            name,
            age,
            needsWaterEvery: needs,
            wateringTime
        }, {
            headers: { Authorization: token }
        });

        alert("Tanaman berhasil ditambahkan!");
        window.location.href = "/home";
    };

    return (
        <div
            style={{
                display: "flex",
                minHeight: "100vh",
                background: "linear-gradient(135deg, #d8f3c8, #fbf7c0)"
            }}
        >
            <Sidebar />

            <div
                style={{
                    flex: 1,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingTop: "50px"
                }}
            >
                <div
                    style={{
                        background: "white",
                        padding: "30px",
                        borderRadius: "15px",
                        width: "380px",
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
                        Tambah Tanaman Baru
                    </h2>

                    <input
                        placeholder="Nama Tanaman"
                        onChange={e => setName(e.target.value)}
                        style={styles.input}
                    />

                    <input
                        placeholder="Umur (hari)"
                        type="number"
                        onChange={e => setAge(e.target.value)}
                        style={styles.input}
                    />

                    <input
                        placeholder="Perlu disiram tiap (hari)"
                        type="number"
                        onChange={e => setNeeds(e.target.value)}
                        style={styles.input}
                    />

                    <input
                        placeholder="Jam Penyiraman"
                        type="time"
                        onChange={e => setWatering(e.target.value)}
                        style={styles.input}
                    />

                    <button onClick={submit} style={styles.btnAdd}>
                        Tambah
                    </button>
                </div>
            </div>
        </div>
    );
}

const styles = {
    input: {
        width: "100%",
        padding: "12px",
        borderRadius: "8px",
        border: "1px solid #A5D6A7",
        background: "#FAFAFA",
        marginBottom: "15px",
        fontSize: "14px"
    },
    btnAdd: {
        width: "100%",
        padding: "12px",
        background: "#4CAF50",
        color: "white",
        border: "none",
        borderRadius: "8px",
        cursor: "pointer",
        fontWeight: "bold",
        fontSize: "15px",
        marginTop: "5px"
    }
};
