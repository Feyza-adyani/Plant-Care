import { useState } from "react";

export default function Sidebar() {
    const [open, setOpen] = useState(true);

    return (
        <div>
            {/* Tombol buka/tutup sidebar */}
            <button
                onClick={() => setOpen(!open)}
                style={{
                    position: "fixed",
                    top: 15,
                    left: open ? 230 : 10,
                    zIndex: 1000,
                    background: "#66BB6A",
                    border: "none",
                    padding: "8px 12px",
                    borderRadius: "6px",
                    cursor: "pointer",
                    color: "white",
                    fontWeight: "bold"
                }}
            >
                {open ? "⟨" : "⟩"}
            </button>

            {/* Sidebar */}
            {open && (
                <div
                    style={{
                        width: "220px",
                        height: "100vh",
                        background: "#C8E6C9",
                        padding: "20px",
                        boxSizing: "border-box",
                        display: "flex",
                        flexDirection: "column",
                        position: "fixed",
                        left: 0,
                        top: 0,
                        boxShadow: "3px 0 10px rgba(0,0,0,0.1)",
                        transition: "0.3s"
                    }}
                >
                    <h2 style={{ color: "#1B5E20", marginBottom: "30px" }}>
                        Plant Care
                    </h2>

                    <ul style={{ listStyle: "none", padding: 0 }}>
                        <li style={styles.menu} onClick={() => window.location.href = "/home"}>Home</li>
                        <li style={styles.menu} onClick={() => window.location.href = "/add"}>Tambah Tanaman</li>
                        <li style={styles.menu} onClick={() => window.location.href = "/profile"}>Profil</li>
                    </ul>
                </div>
            )}
        </div>
    );
}

const styles = {
    menu: {
        background: "white",
        padding: "12px",
        borderRadius: "8px",
        marginBottom: "12px",
        cursor: "pointer",
        fontWeight: "bold",
        color: "#1B5E20",
        boxShadow: "0 3px 6px rgba(0,0,0,0.1)"
    }
};
