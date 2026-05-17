export default function Footer() {
    return (
        <footer style={{ borderTop: "1px solid #A73384", padding: "24px 16px" }}>
            <div className="footer-row" style={{ maxWidth: "1100px", margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", fontFamily: "sans-serif", fontSize: "13px", color: "#78529c", flexWrap: "wrap", gap: "16px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", justifyContent: "center" }}>
                    <img src="/logo.png" alt="logo" style={{ width: "40px", height: "40px", objectFit: "contain" }} />
                    © 2026 Sheroq Shahwan. ssheroq@gmail.com
                </div>
                <div style={{ display: "flex", gap: "8px", alignItems: "center", flexWrap: "wrap", justifyContent: "center" }}>
                    {["Java", "JavaScript", "TypeScript", "C++"].map((tech, i, arr) => (
                        <span key={tech} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                            {tech}
                            {i < arr.length - 1 && <span style={{ opacity: 0.4 }}>·</span>}
                        </span>
                    ))}
                </div>
            </div>
        </footer>
    );
}
