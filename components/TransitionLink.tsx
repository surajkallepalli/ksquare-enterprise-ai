"use client";

import { useRouter } from "next/navigation";
import { useCallback } from "react";

interface TransitionLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

export default function TransitionLink({ href, children, className, style, onClick }: TransitionLinkProps) {
  const router = useRouter();

  const handleClick = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    onClick?.();
    setTimeout(() => router.push(href), 300);
  }, [href, router, onClick]);

  return (
    <a href={href} onClick={handleClick} className={className} style={style}>{children}</a>
  );
}