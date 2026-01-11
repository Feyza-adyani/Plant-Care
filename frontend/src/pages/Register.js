import { useState } from "react";
import { api } from "../api";

export default function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleRegister = async () => {
        try {
            await api.post("/auth/register", {
                name,
                email,
                password
            });

            alert("Registrasi berhasil! Silakan login.");
            window.location.href = "/";
        } catch (err) {
            alert("Registrasi gagal, coba email lain.");
        }
    };

    return (
        <div style={{
            display: "flex",
            height: "100vh",
            alignItems: "center",
            justifyContent: "center",
            background: "linear-gradient(135deg, #C5E1A5, #FFF59D)"
        }}>
            <div style={{
                background: "white",
                padding: "40px",
                borderRadius: "15px",
                width: "320px",
                boxShadow: "0px 6px 15px rgba(0,0,0,0.15)",
                textAlign: "center"
            }}>
                <h2 style={{ color: "#4CAF50", marginBottom: "20px" }}>Register</h2>

                <input
                    placeholder="Nama Lengkap"
                    onChange={(e) => setName(e.target.value)}
                    style={{
                        width: "100%",
                        padding: "12px",
                        marginTop: "10px",
                        border: "1px solid #A5D6A7",
                        borderRadius: "5px"
                    }}
                />

                <input
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                    style={{
                        width: "100%",
                        padding: "12px",
                        marginTop: "10px",
                        border: "1px solid #A5D6A7",
                        borderRadius: "5px"
                    }}
                />

                <input
                    type="password"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                    style={{
                        width: "100%",
                        padding: "12px",
                        marginTop: "10px",
                        border: "1px solid #A5D6A7",
                        borderRadius: "5px"
                    }}
                />

                <button
                    onClick={handleRegister}
                    style={{
                        width: "100%",
                        background: "#4CAF50",
                        color: "white",
                        border: "none",
                        padding: "12px",
                        cursor: "pointer",
                        borderRadius: "5px",
                        marginTop: "20px",
                        fontWeight: "bold"
                    }}
                >
                    Daftar
                </button>

                <p style={{ marginTop: "15px" }}>
                    Sudah punya akun? <a href="/" style={{ color: "#388E3C", fontWeight: "bold" }}>Login</a>
                </p>
            </div>
        </div>
    );
}
