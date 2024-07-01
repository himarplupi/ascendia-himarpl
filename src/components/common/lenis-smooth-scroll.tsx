"use client";

import * as React from "react";
import { ReactLenis } from "lenis/react";

import { cn } from "@/lib/utils";

interface LenisSmoothScrollProps {
  children: React.ReactNode;
  className?: string;
  root?: boolean;
}

export function LenisSmoothScroll({
  children,
  className,
  root = false,
}: LenisSmoothScrollProps) {
  return (
    <ReactLenis
      root={root}
      className={cn("max-h-screen overflow-y-auto", className)}
    >
      {children}
    </ReactLenis>
  );
}
