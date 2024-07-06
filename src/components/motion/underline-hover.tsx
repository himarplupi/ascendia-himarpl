"use client";

import * as React from "react";
import { motion, type Variants } from "framer-motion";

import { cn } from "@/lib/utils";

const underlineAnimation: Variants = {
  hidden: {
    x: "-100%",
    transition: {
      type: "spring",
      damping: 64,
      stiffness: 500,
      delay: 0.2,
    },
  },
  visible: {
    x: 0,
    transition: {
      type: "spring",
      damping: 64,
      stiffness: 500,
    },
  },
};

interface UnderlineHoverProps {
  children: React.ReactNode;
  className?: string;
}

export function UnderlineHover({ children, className }: UnderlineHoverProps) {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <span
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative inline-block overflow-hidden"
    >
      {children}

      <motion.div
        initial={"hidden"}
        animate={isHovered ? "visible" : "hidden"}
        variants={underlineAnimation}
        className={cn(
          "absolute bottom-0 left-0 h-1 w-full bg-blue-ribbon-500",
          className,
        )}
      />
    </span>
  );
}
