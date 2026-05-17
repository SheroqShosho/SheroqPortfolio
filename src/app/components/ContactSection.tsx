"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

export default function ContactSection() {
    const t = useTranslations("contact");
    const [hoveredItem, setHoveredItem] = useState<string | null>(null);

    const contacts = [
        { icon: "fa-solid fa-envelope", label: "EMAIL", value: "ssheroq@gmail.com", href: "mailto:ssheroq@gmail.com" },
        { icon: "fa-brands fa-github", label: "GITHUB", value: "@sheroqshosho", href: "https://github.com/sheroqshosho" },
        { icon: "fa-brands fa-linkedin", label: "LINKEDIN", value: "sheroq-shahwan-262406223", href: "https://linkedin.com/in/sheroq-shahwan-262406223" },
    ];

    return (
        <section id="contact" style={{ padding: "80px 40px" }}>
            <div style={{ maxWidth: "1100px", margin: "0 auto", borderTop: "1px solid #A73384", paddingTop: "80px" }}>
                <div style={{ marginBottom: "60px" }}>
                    <div style={{ fontSize: "11px", letterSpacing: "3px", color: "#78529c", fontFamily: "sans-serif", marginBottom: "24px" }}>
                        04 / CONTACT
                    </div>
                    <h2 style={{ fontSize: "clamp(28px, 5vw, 64px)", fontWeight: "900", color: "#2a1a3a", lineHeight: 1.1, maxWidth: "800px" }}>
                        {t("title1")}{" "}
                        <em style={{ color: "#9b6bb5", fontStyle: "italic", fontWeight: "400" }}>{t("title2")}</em>
                    </h2>
                </div>
                <div className="grid-3col" style={{ display: "grid", gap: "16px" }}>
                    {contacts.map((contact) => (
                        <a

                        key={contact.label}
                        href={contact.href}
                        target="_blank"
                        onMouseEnter={() => setHoveredItem(contact.label)}
                        onMouseLeave={() => setHoveredItem(null)}
                        style={{
                        backgroundColor: hoveredItem === contact.label ? "#78529c" : "white",
                        borderRadius: "20px",
                        padding: "28px 24px",
                        textDecoration: "none",
                        display: "flex",
                        flexDirection: "column",
                        gap: "20px",
                        border: "1px solid #e0c8ee",
                        boxShadow: hoveredItem === contact.label ? "0 8px 24px rgba(120, 82, 156, 0.2)" : "none",
                        transform: hoveredItem === contact.label ? "translateY(-4px)" : "translateY(0)",
                        transition: "all 0.2s ease",
                    }}
                        >
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "11px", letterSpacing: "2px", color: hoveredItem === contact.label ? "rgba(255,255,255,0.8)" : "#78529c", fontFamily: "sans-serif" }}>
                        <i className={contact.icon} style={{ fontSize: "14px" }}></i>
                    {contact.label}
                        </div>
                        <span style={{ color: hoveredItem === contact.label ? "white" : "#78529c", fontSize: "16px" }}>↗</span>
            </div>
            <div style={{ fontSize: "16px", fontWeight: "600", color: hoveredItem === contact.label ? "white" : "#2a1a3a", fontFamily: "sans-serif" }}>
                {contact.value}
            </div>
        </a>

    ))}
</div>
</div>
</section>
);
}