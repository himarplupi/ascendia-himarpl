"use client";

import Image from "next/image";
import { useTheme } from "next-themes";

import LogoLandscapeHIMARPLDark from "@/images/logo-landscape-dark.png";
import LogoLandscapeHIMARPLLight from "@/images/logo-landscape-light.png";
import { cn } from "@/lib/utils";

interface LogoHIMARPLLandscapeProps {
  className?: string;
}

export function LogoHIMARPLLandscape({ className }: LogoHIMARPLLandscapeProps) {
  const { resolvedTheme } = useTheme();

  return (
    <div
      id="brand-logo"
      className={cn("relative aspect-video w-32", className)}
    >
      <Image
        className="object-scale-down"
        src={
          resolvedTheme === "dark"
            ? LogoLandscapeHIMARPLDark
            : LogoLandscapeHIMARPLLight
        }
        alt="logo landscape HIMARPL"
        fill
      />
    </div>
  );
}
