import Sidebar from "../components/Sidebar";

export default function Profile() {
    const user = JSON.parse(localStorage.getItem("user"));

    return (
        <div style={{ display: "flex", background: "linear-gradient(135deg, #D8F3DC, #FFF9C4)", minHeight: "100vh" }}>
            <Sidebar />

            <div style={{
                marginLeft: "250px",
                padding: "30px",
                width: "100%",
            }}>
                <h2 style={{ color: "#1B5E20" }}>Profil Saya</h2>

                <div style={{
                    background: "white",
                    padding: "20px",
                    borderRadius: "10px",
                    width: "350px",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.15)"
                }}>
                    <p><b>Nama:</b> {user?.name}</p>
                    <p><b>Email:</b> {user?.email}</p>

                    <button
                        onClick={() => {
                            localStorage.clear();
                            window.location.href = "/";
                        }}
                        style={{
                            background: "#E53935",
                            color: "white",
                            padding: "10px",
                            width: "100%",
                            borderRadius: "6px",
                            border: "none",
                            marginTop: "20px",
                            cursor: "pointer",
                            fontWeight: "bold"
                        }}
                    >
                        Logout
                    </button>
                </div>
            </div>
        </div>
    );
}
