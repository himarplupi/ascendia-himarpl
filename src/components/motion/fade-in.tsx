"use client";

import { useCallback, useRef } from "react";
import {
  motion,
  type Transition,
  useInView,
  type Variants,
} from "framer-motion";

type MotionTextProps = {
  to?: "top" | "bottom" | "left" | "right";
  delay?: number;
  once?: boolean;
  amount?: number;
  children: React.ReactNode;
  className?: string;
  margin?: string;
};

export function FadeIn({
  delay = 0,
  to = "top",
  once = true,
  amount = 1,
  children,
  className,
  margin,
}: MotionTextProps) {
  const { fadeInVariant, isInView, ref } = useFadeIn(
    delay,
    to,
    once,
    amount,
    margin,
  );

  return (
    <motion.div
      ref={ref}
      variants={fadeInVariant()}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export const useFadeIn = (
  delay = 0,
  to = "top",
  once = true,
  amount = 1,
  margin = "0px",
) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { amount, once, margin });
  const fadeInVariant = useCallback(() => {
    const transition: Transition = {
      type: "spring",
      damping: 64,
      stiffness: 500,
      delay: delay,
    };

    const visible = {
      y: 0,
      x: 0,
      opacity: 1,
      transition,
    };

    const fadeInTop: Variants = {
      hidden: {
        y: 40,
        opacity: 0,
        transition,
      },
      visible,
    };
    const fadeInBottom: Variants = {
      hidden: {
        y: -40,
        opacity: 0,
        transition,
      },
      visible,
    };
    const fadeInRight: Variants = {
      hidden: {
        x: -40,
        opacity: 0,
        transition,
      },
      visible,
    };
    const fadeInLeft: Variants = {
      hidden: {
        y: -40,
        opacity: 0,
        transition,
      },
      visible,
    };

    return to === "top"
      ? { ...fadeInTop }
      : to === "bottom"
        ? { ...fadeInBottom }
        : to === "right"
          ? { ...fadeInRight }
          : { ...fadeInLeft };
  }, [to, delay]);

  return { ref, isInView, fadeInVariant };
};
