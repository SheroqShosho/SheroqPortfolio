"use client";

import Navbar from "@/app/components/Navbar";
import HeroSection from "@/app/components/HeroSection";
import AboutSection from "@/app/components/AboutSection";
import JavaSection from "@/app/components/JavaSection";
import ContactSection from "@/app/components/ContactSection";
import Footer from "@/app/components/Footer";
import DesignSection from "@/app/components/DesignSection";

export default function Home() {
    return (
        <main style={{ backgroundColor: "#f5e6f5", minHeight: "100vh", fontFamily: "Georgia, serif" }}>
            <Navbar />
            <HeroSection />
            <AboutSection />
            <JavaSection />
            <DesignSection />
            <ContactSection />
            <Footer />
        </main>
    );
}