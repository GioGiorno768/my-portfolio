// app/(main)/about/page.tsx

"use client";
import AboutSection from "@/components/(about)/AboutSection";
import { useRevealer } from "@/hooks/useRevealer";

export default function about() {
  useRevealer();
  return (
    <main className="z-[10] bg-white relative pb-[8rem] shadow-footer shadow-black/30">
      {/* Add padding top to avoid content being hidden behind navbar */}
      <AboutSection />
    </main>
  );
}
