"use client";

import ContactSection from "@/components/(contact)/ContactSection";
import "@/components/Button/button.css";
import { useRevealer } from "@/hooks/useRevealer";

// app/(main)/contact/page.tsx
export default function contact() {
  useRevealer();
  return (
    <>
      <div className="w-full relative bg-blackTheme">
        <ContactSection />
      </div>
    </>
  );
}
