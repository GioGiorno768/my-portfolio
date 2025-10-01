// Usage with custom transition
// components/CustomTransitionLink.tsx
"use client";
import { useCustomTransition } from "@/hooks/useCustomTransition";
import { usePathname } from "next/navigation";

interface CustomTransitionLinkProps {
  href: string;
  children: React.ReactNode;
  transitionType?: "slide" | "fade" | "scale" | "clip" | "curtain";
  className?: string;
}

export const CustomTransitionLink = ({
  href,
  children,
  transitionType = "slide",
  className = "",
}: CustomTransitionLinkProps) => {
  const pathname = usePathname();
  const { navigateWithTransition } = useCustomTransition(transitionType);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();

    if (href === pathname) return;

    navigateWithTransition(href);
  };

  return (
    <a href={href} onClick={handleClick} className={className}>
      {children}
    </a>
  );
};
