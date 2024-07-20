"use client";

import Image from "next/image";
import Link from "next/link";

import LogoLandscapeHIMARPLLight from "@/images/logo-landscape-light.png";
import { cn } from "@/lib/utils";

interface LogoHIMARPLLandscapeProps {
  className?: string;
}

export function LogoHIMARPLLandscape({ className }: LogoHIMARPLLandscapeProps) {
  return (
    <Link
      href="/"
      id="brand-logo"
      className={cn("relative inline-block aspect-video w-32", className)}
    >
      <Image
        className="object-scale-down"
        src={LogoLandscapeHIMARPLLight}
        alt="logo landscape HIMARPL"
        fill
      />
    </Link>
  );
}
