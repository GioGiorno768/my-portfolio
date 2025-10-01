// app/(main)/about/page.tsx
"use client";

import ProjectSection from "@/components/(project)/ProjectSection";
import Navbar from "@/components/Navbar";
import { useRevealer } from "@/hooks/useRevealer";

export default function project() {
  useRevealer();
  return (
    <main className="z-[10] bg-white relative pb-[8rem] shadow-footer shadow-black/30">
      <ProjectSection />
    </main>
  );
} 