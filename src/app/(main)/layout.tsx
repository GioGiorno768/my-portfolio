// app/(main)/layout.tsx
"use client";

import CustomCursor from "@/components/CustomCursor/Index";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageTransition from "@/components/PageTransition/PageTransition";
import PageTransitionProvider from "@/components/PageTransition/PageTransitionProvider";
import { useRevealer } from "@/hooks/useRevealer";
import { ViewTransitions } from "next-view-transitions";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function LayoutMain({
  children,
}: {
  children: React.ReactNode;
}) {
  const path = usePathname();
  useRevealer();
  console.log(path);

  return (
    <>
      <ViewTransitions>
        <div className="revealer cursor-none">
          <div className="relative w-full h-full flex justify-center items-center ">
            <Image src="/logo.svg" alt="logo" width={100} height={100} className="translate-y-[-50%]" />
          </div>
        </div>
        <CustomCursor />
        <Navbar />
        {/* <PageTransitionProvider>
      </PageTransitionProvider> */}
        {children}
        {path !== "/contact" && <Footer />}
        {/* <PageTransition>
      </PageTransition> */}
      </ViewTransitions>
    </>
  );
}
