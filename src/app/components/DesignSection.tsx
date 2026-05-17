"use client";

import { useTranslations } from "next-intl";
import JavaCard from "./JavaCard";

export default function DesignSection() {
    const t = useTranslations("design");

    const projects = [
        { name:  t("nm.mat"), objectFit: "contain", year: "2024",
            description: t("projects.mat"),
            tags: ["UX/UI Design", "Figma", "User Interface", "Interaction Design", "Problem Solving", "Mobil Design"],
            videoUrl: "/videos/mobilappen-figma.mp4", githubUrl: "https://github.com/sheroqshosho" },

        { name:  t("nm.spis"), objectFit: "contain", year: "2024",
            description: t("projects.spis"),
            tags: ["C++", "Arduino", "Interaction Design", "UX Design", "Embedded Systems"],
            videoUrl: "/videos/stove.mp4", githubUrl: "https://github.com/sheroqshosho" },

        { name:  t("nm.halsa"), objectFit: "contain", year: "2024",
            description: t("projects.halsa"),
            tags: ["C++", "Arduino", "Figma", "Physical Prototype", "UX Design", "Embedded Systems"],
            videoUrl: "/videos/hopehops.mp4", githubUrl: "https://github.com/sheroqshosho" },
    ];

    return (
        <section id="design" className="section-pad">
            <div className="section-inner">
                <div style={{ marginBottom: "48px" }}>
                    <div style={{ fontSize: "11px", letterSpacing: "3px", color: "#78529c", fontFamily: "sans-serif", marginBottom: "16px" }}>
                        03 — DESIGN
                    </div>
                    <h2 style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 900, color: "#2a1a3a" }}>{t("title")}</h2>
                </div>
                <div className="grid-2col" style={{ display: "grid", gap: "32px" }}>
                    {projects.map((project, index) => (
                        <JavaCard key={project.name || index} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
}
