"use client";

import { useState, useRef } from "react";

interface Project {
    name: string;
    objectFit?: string;
    year: string;
    description: string;
    tags: string[];
    videoUrl: string;
    githubUrl: string;
}

export default function JavaCard({ project }: { project: Project }) {
    const [hovered, setHovered] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);

    const handleMouseEnter = () => {
        setHovered(true);
        if (videoRef.current && project.videoUrl) {
            videoRef.current.play();
        }
    };

    const handleMouseLeave = () => {
        setHovered(false);
        if (videoRef.current && project.videoUrl) {
            videoRef.current.pause();
            videoRef.current.currentTime = 0;
        }
    };

    return (
        <>
            {/* Modal */}
            {modalOpen && (
                <div
                    onClick={() => setModalOpen(false)}
                    style={{
                        position: "fixed",
                        inset: 0,
                        backgroundColor: "rgba(0,0,0,0.7)",
                        zIndex: 9999,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        backdropFilter: "blur(4px)",
                    }}
                >
                    <div
                        onClick={(e) => e.stopPropagation()}
                        style={{
                            backgroundColor: "white",
                            borderRadius: "20px",
                            padding: "24px",
                            maxWidth: "800px",
                            width: "90%",
                            position: "relative",
                        }}
                    >
                        <button
                            onClick={() => setModalOpen(false)}
                            style={{
                                position: "absolute",
                                top: "16px",
                                right: "16px",
                                backgroundColor: "transparent",
                                border: "none",
                                fontSize: "20px",
                                cursor: "pointer",
                                color: "#78529c",
                            }}
                        >
                            ✕
                        </button>
                        <h3 style={{ fontFamily: "Georgia, serif", color: "#2a1a3a", marginBottom: "16px", fontSize: "20px" }}>
                            {project.name}
                        </h3>
                        {project.videoUrl ? (
                            <video controls autoPlay style={{ width: "100%",   maxHeight: "70vh", borderRadius: "12px", objectFit: "contain",  backgroundColor: "black" }}>
                                <source src={project.videoUrl} />
                            </video>
                        ) : (
                            <div style={{
                                height: "300px",
                                background: "linear-gradient(135deg, #f0d0e8, #d4a0c8)",
                                borderRadius: "12px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                            }}>
                                <p style={{ color: "white", fontSize: "18px", fontFamily: "sans-serif" }}>Video kommer snart</p>
                            </div>
                        )}
                    </div>
                </div>
            )}

            {/* Kort */}
            <div style={{ borderRadius: "16px", overflow: "hidden", backgroundColor: "white", boxShadow: "0 2px 12px rgba(120,82,156,0.08)" }}>

                {/* Video/thumbnail */}
                <div
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    onClick={() => setModalOpen(true)}
                    style={{
                        position: "relative",
                        height: "260px",
                        background: "linear-gradient(135deg, #f0d0e8, #d4a0c8)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        cursor: "pointer",
                        overflow: "hidden",
                    }}
                >
                    {project.videoUrl ? (
                        <video
                            ref={videoRef}
                            muted
                            loop
                            style={{ width: "100%", height: "100%", objectFit: (project.objectFit || "cover") as "cover" | "contain" }}
                        >
                            <source src={project.videoUrl} />
                        </video>
                    ) : (
                        <em style={{ fontSize: "40px", color: "rgba(255,255,255,0.7)", fontFamily: "Georgia, serif" }}>
                            {project.name.split(" ")[0]}
                        </em>
                    )}

                    {/* Hover overlay med play-knapp */}
                    <div style={{
                        position: "absolute",
                        inset: 0,
                        backgroundColor: "rgba(120, 82, 156, 0.3)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        opacity: hovered ? 1 : 0,
                        transition: "opacity 0.3s ease",
                    }}>
                        <div style={{
                            backgroundColor: "white",
                            borderRadius: "50%",
                            width: "56px",
                            height: "56px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: "20px",
                            color: "#78529c",
                        }}>
                            ▷
                        </div>
                    </div>

                    {/* Video badge */}
                    <div style={{
                        position: "absolute",
                        bottom: "12px",
                        left: "12px",
                        backgroundColor: "rgba(255,255,255,0.9)",
                        borderRadius: "20px",
                        padding: "4px 12px",
                        fontSize: "12px",
                        color: "#4a3a5a",
                        fontFamily: "sans-serif",
                        display: "flex",
                        alignItems: "center",
                        gap: "6px",
                        opacity: hovered ? 0 : 1,
                        transition: "opacity 0.3s ease",
                    }}>
                        ▷ {project.videoUrl ? "Se video" : "Video kommer snart"}
                    </div>
                </div>

                {/* Info */}
                <div style={{ padding: "20px 24px" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "8px" }}>
                        <div>
                            <div style={{ fontSize: "18px", fontWeight: "700", color: "#2a1a3a", fontFamily: "Georgia, serif" }}>
                                {project.name}
                            </div>
                            <div style={{ fontSize: "12px", color: "#78529c", fontFamily: "sans-serif" }}>
                                {project.year}
                            </div>
                        </div>
                        <a href={project.githubUrl} target="_blank" style={{ fontSize: "18px", color: "#78529c", textDecoration: "none" }}>
                            ↗
                        </a>
                    </div>
                    <p style={{ fontSize: "14px", color: "#4a3a5a", lineHeight: 1.6, marginBottom: "16px", fontFamily: "sans-serif" }}>
                        {project.description}
                    </p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                        {project.tags.map((tag) => (
                            <span key={tag} style={{
                                border: "1px solid #c4a0d4",
                                borderRadius: "20px",
                                padding: "3px 10px",
                                fontSize: "11px",
                                color: "#4a3a5a",
                                fontFamily: "sans-serif",
                            }}>
                {tag}
              </span>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}