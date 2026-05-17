"use client";

import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useLocale } from "next-intl";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [hoveredItem, setHoveredItem] = useState<string | null>(null);
    const [githubHovered, setGithubHovered] = useState(false);
    const [activeSection, setActiveSection] = useState<string>("");
    const [menuOpen, setMenuOpen] = useState(false);
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);

            const sections = ["about", "java", "design", "contact"];

            // Bottom of page -> alltid contact (fixar att Contact inte highlightades)
            const nearBottom =
                window.innerHeight + window.scrollY >= document.body.offsetHeight - 50;
            if (nearBottom) {
                setActiveSection("contact");
                return;
            }

            // Hitta sektionen vars topp är närmast under navbaren
            const offset = 140;
            let current = "";
            for (const section of sections) {
                const el = document.getElementById(section);
                if (el) {
                    const rect = el.getBoundingClientRect();
                    if (rect.top <= offset && rect.bottom >= offset) {
                        current = section;
                        break;
                    }
                }
            }
            setActiveSection(current);
        };


        handleScroll();
        window.addEventListener("scroll", handleScroll, { passive: true });
        window.addEventListener("resize", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleScroll);
        };
    }, []);

    const switchLanguage = () => {
        const newLocale = locale === "sv" ? "en" : "sv";
        const newPath = pathname.replace(`/${locale}`, `/${newLocale}`);
        router.push(newPath);
    };

    return (
        <>
            <nav
                className="nav-bar"
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "12px 24px",
                    borderBottom: "1px solid #A73384",
                    backgroundColor: isScrolled ? "rgba(196, 160, 212, 0.95)" : "rgba(211, 166, 210, 0.85)",
                    backdropFilter: "blur(10px)",
                    WebkitBackdropFilter: "blur(10px)",
                    boxShadow: isScrolled ? "0 4px 24px rgba(120, 82, 156, 0.15)" : "none",
                    // FIXED i stället för sticky -> navbaren rör sig aldrig
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    zIndex: 1000,
                    transition: "background-color 0.3s ease, box-shadow 0.3s ease",
                }}
            >
                <div
                    className="nav-inner"
                    style={{
                        maxWidth: "1100px",
                        margin: "0 auto",
                        width: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: "12px",
                        position: "relative",
                    }}
                >
                    {/* Hamburger - syns bara på mobil via CSS */}
                    <button
                        className="nav-hamburger"
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle menu"
                        style={{
                            backgroundColor: "transparent",
                            border: "none",
                            cursor: "pointer",
                            fontSize: "24px",
                            color: "#78529c",
                            zIndex: 2,
                        }}
                    >
                        {menuOpen ? "✕" : "☰"}
                    </button>

                    {/* Logga + namn - centreras på mobil via CSS */}
                    <a
                        className="nav-logo"
                        href="#"
                        onClick={(e) => {
                            e.preventDefault();
                            window.scrollTo({ top: 0, behavior: "smooth" });
                        }}
                        style={{ textDecoration: "none" }}
                    >
                        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                            <img
                                src="/logo.png"
                                alt="logo"
                                style={{ width: "50px", height: "50px", objectFit: "contain" }}
                            />
                            <div>
                                <div style={{ fontWeight: "bold", fontSize: "14px", color: "#3a2a4a" }}>Sheroq</div>
                                <div style={{ fontSize: "10px", color: "#78529c", letterSpacing: "2px" }}>SHAHWAN</div>
                            </div>
                        </div>
                    </a>

                    {/* Desktop links */}
                    <div className="nav-links" style={{ gap: "8px" }}>
                        {["About", "Java", "Design", "Contact"].map((item) => {
                            const isActive = activeSection === item.toLowerCase();
                            const isHovered = hoveredItem === item;
                            const highlight = isActive || isHovered;
                            return (
                                <a
                                    key={item}
                                    href={`#${item.toLowerCase()}`}
                                    onMouseEnter={() => setHoveredItem(item)}
                                    onMouseLeave={() => setHoveredItem(null)}
                                    style={{
                                        color: highlight ? "#78529c" : "#3a2a4a",
                                        textDecoration: "none",
                                        fontSize: "14px",
                                        fontFamily: "'Georgia', serif",
                                        fontStyle: highlight ? "italic" : "normal",
                                        fontWeight: highlight ? 600 : 400,
                                        letterSpacing: highlight ? "1px" : "0px",
                                        padding: "8px 16px",
                                        borderRadius: "20px",
                                        backgroundColor: isActive
                                            ? "rgba(120, 82, 156, 0.2)"
                                            : isHovered
                                                ? "rgba(120, 82, 156, 0.08)"
                                                : "transparent",
                                        borderBottom: isActive ? "2px solid #78529c" : "2px solid transparent",
                                        transition: "all 0.2s ease",
                                    }}
                                >
                                    {item}
                                </a>
                            );
                        })}
                    </div>

                    {/* Right side - språk + github */}
                    <div className="nav-right" style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                        <div
                            style={{
                                display: "flex",
                                backgroundColor: "rgba(120, 82, 156, 0.15)",
                                borderRadius: "30px",
                                padding: "3px",
                                gap: "2px",
                            }}
                        >
                            {["sv", "en"].map((lang) => {
                                const isActive = locale === lang;
                                return (
                                    <button
                                        key={lang}
                                        onClick={switchLanguage}
                                        style={{
                                            backgroundColor: isActive ? "#78529c" : "transparent",
                                            color: isActive ? "white" : "rgba(120, 82, 156, 0.5)",
                                            border: "none",
                                            borderRadius: "24px",
                                            padding: "6px 14px",
                                            cursor: "pointer",
                                            fontSize: "12px",
                                            fontWeight: "bold",
                                            fontFamily: "sans-serif",
                                            letterSpacing: "1px",
                                            transition: "all 0.2s ease",
                                        }}
                                    >
                                        {lang.toUpperCase()}
                                    </button>
                                );
                            })}
                        </div>

                        <a
                            className="nav-github"
                            href="https://github.com/sheroqshosho"
                            target="_blank"
                            onMouseEnter={() => setGithubHovered(true)}
                            onMouseLeave={() => setGithubHovered(false)}
                            style={{
                                color: githubHovered ? "white" : "#3a2a4a",
                                textDecoration: "none",
                                fontSize: "14px",
                                fontFamily: "sans-serif",
                                padding: "8px 20px",
                                borderRadius: "20px",
                                border: "1.5px solid #78529c",
                                backgroundColor: githubHovered ? "#78529c" : "transparent",
                                transition: "all 0.2s ease",
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "6px",
                            }}
                        >
                            <i className="fa-brands fa-github" style={{ fontSize: "14px" }}></i>
                            GitHub
                        </a>
                    </div>
                </div>
            </nav>

            {/* Spacer så att innehållet inte hamnar under fixed navbar */}
            <div className="nav-spacer" />

            {menuOpen && (

                <div
                    className="nav-mobile-menu"
                    style={{
                        position: "fixed",
                        top: "64px",
                        left: 0,
                        right: 0,
                        height: "auto",
                        backgroundColor: "rgba(196, 160, 212, 0.98)",
                        backdropFilter: "blur(10px)",
                        padding: "6px 12px",
                        zIndex: 999,
                        display: "flex",
                        flexDirection: "column",
                        gap: "4px",
                    }}
                >
                    {["About", "Java", "Design", "Contact"].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            onClick={() => setMenuOpen(false)}
                            style={{
                                color: activeSection === item.toLowerCase() ? "#78529c" : "#3a2a4a",
                                textDecoration: "none",
                                fontSize: "18px",
                                fontFamily: "'Georgia', serif",
                                padding: "6px 12px",
                                borderRadius: "12px",
                                fontWeight: activeSection === item.toLowerCase() ? 600 : 400,
                                backgroundColor:
                                    activeSection === item.toLowerCase() ? "rgba(120, 82, 156, 0.2)" : "transparent",
                            }}
                        >
                            {item}
                        </a>
                    ))}
                    <a
                        href="https://github.com/sheroqshosho"
                        target="_blank"
                        onClick={() => setMenuOpen(false)}
                        style={{
                            color: "#3a2a4a",
                            textDecoration: "none",
                            fontSize: "18px",
                            fontFamily: "'Georgia', serif",
                            padding: "6px 12px",
                            borderRadius: "12px",
                            display: "flex",
                            alignItems: "center",
                            gap: "8px",
                        }}
                    >
                        <i className="fa-brands fa-github"></i> GitHub
                    </a>
                </div>
            )}
        </>
    );
}
