"use client";

import * as React from "react";
import { ReactLenis } from "lenis/react";

import { cn } from "@/lib/utils";

interface LenisSmoothScrollProps {
  children: React.ReactNode;
  className?: string;
}

export function LenisSmoothScroll({
  children,
  className,
}: LenisSmoothScrollProps) {
  return (
    <ReactLenis className={cn("max-h-screen overflow-y-auto", className)}>
      {children}
    </ReactLenis>
  );
}
