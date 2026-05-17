"use client";

import { useTranslations } from "next-intl";
import JavaCard from "./JavaCard";

export default function JavaSection() {
    const t = useTranslations("java");

    const projects = [
        { name: t("nm.lager"), objectFit: "cover", year: "2026", description: t("projects.lager"),
            tags: ["Java", "Spring Boot", "REST API", "JWT", "React", "Vite", "Docker", "TDD"],
            videoUrl: "/videos/examens-projekt.mp4", githubUrl: "https://github.com/sheroqshosho/Lager-uthyrning-Examen" },

        { name: t("nm.finans"), objectFit: "contain", year: "2026", description: t("projects.finans"),
            tags: ["Java", "Spring Boot", "Micronaut", "Microservices", "REST API", "OAuth2", "React", "NEXT.js", "TypeScript", "MySQL", "NoSQL/DynamoDB", "AWS"],
            videoUrl: "/videos/omegabank.mp4", githubUrl: "https://github.com/sheroqshosho" },

        { name:  t("nm.portfolio"), objectFit: "contain", year: "2026", description: t("projects.portfolio"),
            tags: ["TypeScript", "React", "Vercel"],
            videoUrl: "/videos/sh-portfolio.mp4", githubUrl: "https://github.com/sheroqshosho" },
    ];

    return (
        <section id="java" className="section-pad">
            <div className="section-inner">
                <div style={{ marginBottom: "48px" }}>
                    <div style={{ fontSize: "11px", letterSpacing: "3px", color: "#78529c", fontFamily: "sans-serif", marginBottom: "16px" }}>
                        02 — JAVA
                    </div>
                    <h2 style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 900, color: "#2a1a3a" }}>{t("title")}</h2>
                </div>
                <div className="grid-2col" style={{ display: "grid", gap: "32px" }}>
                    {projects.map((project) => (
                        <JavaCard key={project.name} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
}
