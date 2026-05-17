"use client";

import { useTranslations } from "next-intl";

export default function AboutSection() {
    const t = useTranslations("about");

    const stack = [
        { label: "LANGUAGES", tags: ["Java", "JavaScript", "TypeScript", "C++"] },
        { label: "FRAMEWORKS & LIBRARIES", tags: ["Spring Boot", "Micronaut", "Hibernate", "JPA", "React", "Next.js", "Node.js"] },
        { label: "WEB", tags: ["REST APIs", "JSON", "OAuth 2.0", "JWT", "HTML", "CSS"] },
        { label: "DATABASES", tags: ["MySQL", "PostgreSQL", "DynamoDB", "Firebase", "NoSQL"] },
        { label: "TOOLS & CLOUD", tags: ["Git", "Maven", "Gradle", "Docker", "AWS", "IntelliJ IDEA", "Visual Studio Code", "Apache Tomcat"] },
        { label: "DEVOPS & TESTING", tags: ["GitHub Actions", "GitLab CI", "JUnit", "Mockito"] },
        { label: "METHODS", tags: ["Scrum", "Kanban", "TDD", "Jira", "Figma"] },
    ];

    return (
        <section id="about" className="section-pad">
            <div className="section-inner">
                <div className="about-flex" style={{ display: "flex", gap: "80px" }}>
                    <div className="about-side" style={{ minWidth: "280px", maxWidth: "360px" }}>
                        <div style={{ fontSize: "11px", letterSpacing: "3px", color: "#78529c", fontFamily: "sans-serif", marginBottom: "24px" }}>
                            01 / ABOUT
                        </div>
                        <h2 style={{ fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 900, color: "#2a1a3a", lineHeight: 1.2, marginBottom: "40px" }}>
                            {t("title1")}{" "}
                            <em style={{ color: "#9b6bb5", fontStyle: "italic", fontWeight: 400 }}>{t("title2")}</em>
                            {" "}{t("title3")}
                        </h2>
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                        <p style={{ fontSize: "clamp(14px, 1.5vw, 18px)", color: "#4a3a5a", lineHeight: 1.8, marginBottom: "24px", fontFamily: "sans-serif" }}>{t("p1")}</p>
                        <p style={{ fontSize: "clamp(14px, 1.5vw, 18px)", color: "#4a3a5a", lineHeight: 1.8, marginBottom: "24px", fontFamily: "sans-serif" }}>{t("p2")}</p>
                        <p style={{ fontSize: "clamp(14px, 1.5vw, 18px)", color: "#4a3a5a", lineHeight: 1.8, marginBottom: "24px", fontFamily: "sans-serif" }}>{t("p3")}</p>
                        <p style={{ fontSize: "clamp(14px, 1.5vw, 18px)", color: "#4a3a5a", lineHeight: 1.8, marginBottom: "48px", fontFamily: "sans-serif" }}>{t("p4")}</p>
                        <div style={{ fontSize: "11px", fontWeight: 800, letterSpacing: "3px", color: "#78529c", fontFamily: "sans-serif", marginBottom: "24px" }}>
                            STACK
                        </div>

                        {stack.map((category) => (
                            <div key={category.label} className="stack-row">
                                <div className="stack-label" >{category.label}  </div>
                                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px"}}>
                                    {category.tags.map((tag) => (
                                        <span key={tag} style={{ border: "1px solid #c4a0d4", borderRadius: "20px", padding: "4px 14px", fontSize: "14px", color: "#4a3a5a", fontFamily: "sans-serif", backgroundColor: "white" }}>
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                        <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "#78529c", fontFamily: "sans-serif", fontSize: "14px", marginTop: "32px" }}>
                            <i className="fa-solid fa-location-dot" style={{ fontSize: "14px", color: "#78529c" }}></i>
                            {t("location")}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
