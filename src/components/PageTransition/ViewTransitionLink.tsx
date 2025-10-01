// app/components/ViewTransitionLink.tsx
"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { ReactNode, MouseEvent } from "react";

interface ViewTransitionLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  viewTransitionName?: string;
}

export function ViewTransitionLink({
  href,
  children,
  className,
  viewTransitionName,
}: ViewTransitionLinkProps) {
  const router = useRouter();

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    // Check if View Transitions API is supported
    if (!document.startViewTransition) {
      // Fallback for browsers that don't support View Transitions
      router.push(href);
      return;
    }

    // Start view transition
    document.startViewTransition(() => {
      router.push(href);
    });
  };

  return (
    <Link
      href={href}
      className={className}
      onClick={handleClick}
      style={{ viewTransitionName }}
    >
      {children}
    </Link>
  );
}
