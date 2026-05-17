"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

export default function HeroSection() {
    const [hoveredWork, setHoveredWork] = useState(false);
    const [hoveredContact, setHoveredContact] = useState(false);
    const t = useTranslations("hero");

    return (
        <section className="hero-section" style={{ maxWidth: "1100px", margin: "0 auto", position: "relative", padding: "60px 40px" }}>
            <img src="/logo.png" alt="SS" className="hero-logo-watermark" style={{
                position: "absolute",
                right: "clamp(-200px, -15vw, -40px)",
                top: "clamp(-70px, -20vw, -80px)",
                width: "clamp(200px, 80vw, 1000px)",
                height: "auto",
                objectFit: "contain",
                opacity: 0.35,
                pointerEvents: "none",
                userSelect: "none",
            }} />
            <div>
                <div className="hero-badge" style={{ display: "inline-flex", alignItems: "center", gap: "8px", marginBottom: "16px", marginTop: "clamp(80px, 20vw, 250px)", fontFamily: "sans-serif", fontSize: "11px", letterSpacing: "2px", color: "#78529c" }}>
                    <span style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "#9b4f8e", display: "inline-block" }} />
                    {t("badge")}
                </div>
                <div style={{ fontSize: "11px", letterSpacing: "2px", color: "#78529c", fontFamily: "sans-serif", marginBottom: "32px" }}>
                    {t("breadcrumb")}
                </div>
                <h1 className="hero-title" style={{ fontSize: "clamp(40px, 8vw, 96px)", lineHeight: 1.1, color: "#2a1a3a", maxWidth: "800px", marginBottom: "32px", marginTop: "40px", fontWeight: 900 }}>
                    {t("title1")}{" "}
                    <em style={{ color: "#9b6bb5", fontStyle: "italic", fontWeight: 400 }}>{t("title2")}</em>
                    {" "}{t("title3")}{" "}
                    <em style={{ color: "#c4a0d4", fontStyle: "italic", fontWeight: 400 }}>{t("title4")}</em>
                    {" "}{t("title5")}
                </h1>
                <p style={{ fontSize: "clamp(14px, 2vw, 18px)", color: "#4a3a5a", maxWidth: "500px", lineHeight: 1.7, marginBottom: "40px", marginTop: "24px", fontFamily: "sans-serif" }}>
                    {t("description")}
                </p>
                <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
                    <a href="#java"
                       onMouseEnter={() => setHoveredWork(true)}
                       onMouseLeave={() => setHoveredWork(false)}
                       style={{
                           backgroundColor: hoveredWork ? "#5a3a7a" : "#78529c",
                           color: "white", padding: "14px 28px", borderRadius: "30px",
                           textDecoration: "none", fontSize: "14px", fontFamily: "sans-serif",
                           display: "flex", alignItems: "center", gap: "8px",
                           transform: hoveredWork ? "translateY(-2px)" : "translateY(0)",
                           boxShadow: hoveredWork ? "0 8px 20px rgba(120, 82, 156, 0.35)" : "none",
                           transition: "all 0.2s ease",
                       }}>
                        {t("cta1")}
                    </a>
                    <a href="#contact"
                       onMouseEnter={() => setHoveredContact(true)}
                       onMouseLeave={() => setHoveredContact(false)}
                       style={{
                           backgroundColor: hoveredContact ? "#2a1a3a" : "transparent",
                           color: hoveredContact ? "white" : "#2a1a3a",
                           padding: "14px 28px", borderRadius: "30px",
                           textDecoration: "none", fontSize: "14px", fontFamily: "sans-serif",
                           border: "2px solid #2a1a3a",
                           transform: hoveredContact ? "translateY(-2px)" : "translateY(0)",
                           boxShadow: hoveredContact ? "0 8px 20px rgba(42, 26, 74, 0.2)" : "none",
                           transition: "all 0.2s ease",
                       }}>
                        {t("cta2")}
                    </a>
                </div>
            </div>
        </section>
    );
}
