import { useState } from "react";
import { api } from "../api";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async () => {
        try {
            const res = await api.post("/auth/login", { email, password });

            localStorage.setItem("token", res.data.token);
            localStorage.setItem("user", JSON.stringify(res.data.user));

            window.location.href = "/home";
        } catch (err) {
            alert("Login gagal, periksa email & password");
        }
    };

    return (
        <div style={{
            display: "flex",
            height: "100vh",
            alignItems: "center",
            justifyContent: "center",
            background: "linear-gradient(135deg, #A5D6A7, #FFF59D)"
        }}>
            <div style={{
                background: "white",
                padding: "40px",
                borderRadius: "15px",
                width: "320px",
                boxShadow: "0px 6px 15px rgba(0,0,0,0.15)",
                textAlign: "center"
            }}>
                <h2 style={{ color: "#4CAF50", marginBottom: "20px" }}>Login</h2>

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
                    onClick={handleLogin}
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
                    Login
                </button>

                <p style={{ marginTop: "15px" }}>
                    Belum punya akun?{" "}
                    <a href="/register" style={{ color: "#388E3C", fontWeight: "bold" }}>
                        Daftar di sini
                    </a>
                </p>
            </div>
        </div>
    );
}
