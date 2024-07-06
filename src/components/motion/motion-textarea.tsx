"use client";

import React, { useState } from "react";
import { type HTMLMotionProps, motion, type Variants } from "framer-motion";

import { cn } from "@/lib/utils";

const motionTextAreaAnimation: Variants = {
  hidden: {
    y: "-100%",
    transition: {
      type: "spring",
      damping: 64,
      stiffness: 500,
      delay: 0.2,
    },
  },
  visible: {
    y: 0,
    transition: {
      type: "spring",
      damping: 64,
      stiffness: 500,
    },
  },
};

const MotionTextArea = React.forwardRef<
  HTMLTextAreaElement,
  HTMLMotionProps<"textarea">
>(({ className, ...props }, ref) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="relative overflow-hidden">
      <motion.textarea
        className={cn(
          "h-32 bg-transparent font-serif text-2xl leading-6 tracking-tight placeholder:text-muted-foreground focus-visible:outline-none md:text-4xl",
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
        variants={motionTextAreaAnimation}
        className={cn("absolute bottom-0 left-0 h-full w-[2px] bg-zinc-800")}
      />
    </div>
  );
});

MotionTextArea.displayName = "MotionTextArea";

export { MotionTextArea };
