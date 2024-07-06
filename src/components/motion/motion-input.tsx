"use client";

import React, { useState } from "react";
import { type HTMLMotionProps, motion, type Variants } from "framer-motion";

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

const MotionInput = React.forwardRef<
  HTMLInputElement,
  HTMLMotionProps<"input">
>(({ className, type, ...props }, ref) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="relative overflow-hidden">
      <motion.input
        type={type}
        className={cn(
          "h-10 bg-transparent font-serif text-2xl leading-6 tracking-tight placeholder:text-muted-foreground focus-visible:outline-none md:text-4xl",
          className,
        )}
        ref={ref}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        {...props}
      />

      <motion.div
        initial={"hidden"}
        animate={isFocused ? "visible" : "hidden"}
        variants={underlineAnimation}
        className={cn("absolute bottom-0 left-0 h-[2px] w-full bg-zinc-800")}
      />
    </div>
  );
});

MotionInput.displayName = "MotionInput";

export { MotionInput };
