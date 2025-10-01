// app/(main)/page.tsx
"use client";
import ContentSection from "@/components/(home)/ContentSection";
import HeroSection from "@/components/(home)/HeroSection";
import Navbar from "@/components/Navbar";
import { useRevealer } from "@/hooks/useRevealer";

export default function HomePage() {
  useRevealer();
  return (
    <>
      <main className="z-[10] bg-white relative shadow-footer shadow-black/30">
        {/* Hero Section */}
        <HeroSection />
        <ContentSection />
      </main>
    </>
  );
}
