"use client";

import { useRef } from "react";
import {
  motion,
  type Transition,
  useInView,
  type Variant,
  type Variants,
} from "framer-motion";

const charAnimation: Variants = {
  hidden: {
    y: 40,
    transition: {
      type: "spring",
      damping: 64,
      stiffness: 500,
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

const wordAnimation: Variants = {
  hidden: {
    y: 40,
    transition: {
      type: "spring",
      damping: 80,
      stiffness: 500,
      mass: 4,
    },
  },
  visible: {
    y: 0,
    transition: {
      type: "spring",
      damping: 80,
      stiffness: 500,
      mass: 4,
    },
  },
};

type MotionTextProps = {
  text: string | string[];
  hidden?: Variant;
  visible?: Variant;
  type?: "word" | "char";
  transition?: Transition;
  delay?: number;
  once?: boolean;
};

export function MotionText({
  visible,
  hidden,
  text,
  transition,
  delay = 0,
  type = "char",
  once = true,
}: MotionTextProps) {
  const textArray = Array.isArray(text) ? text : [text];
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { amount: 1, once: once });

  if (type === "word") {
    return (
      <>
        <span className="sr-only">{text}</span>
        <motion.span
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{
            staggerChildren: 0.5,
            delayChildren: delay,
            ...transition,
          }}
          aria-hidden
        >
          {textArray.map((line, i) => (
            <span key={`${line}${i}`} className="block">
              {line.split(" ").map((word, j) => (
                <span
                  key={`${word}${j}`}
                  className="inline-block overflow-hidden"
                >
                  <motion.span
                    key={i}
                    className="inline-block"
                    variants={{
                      hidden: { ...wordAnimation.hidden, ...hidden },
                      visible: { ...wordAnimation.visible, ...visible },
                    }}
                  >
                    {word}
                    {j !== line.split(" ").length - 1 && (
                      <span className="inline-block">&nbsp;</span>
                    )}
                  </motion.span>
                </span>
              ))}
            </span>
          ))}
        </motion.span>
      </>
    );
  }

  return (
    <>
      <span className="sr-only">{text}</span>
      <motion.span
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{
          staggerChildren: 0.4,
          ...transition,
          delayChildren: delay,
        }}
        aria-hidden
      >
        {textArray.map((line, i) => (
          <span key={`${line}${i}`} className="block">
            {line.split(" ").map((word, j) => (
              <span
                key={`${word}${j}`}
                className="inline-block overflow-hidden"
              >
                {word.split("").map((char, i) => (
                  <motion.span
                    key={i}
                    className="inline-block"
                    variants={{
                      hidden: { ...charAnimation.hidden, ...hidden },
                      visible: { ...charAnimation.visible, ...visible },
                    }}
                  >
                    {char}
                  </motion.span>
                ))}
                {j !== line.split(" ").length - 1 && (
                  <span className="inline-block">&nbsp;</span>
                )}
              </span>
            ))}
          </span>
        ))}
      </motion.span>
    </>
  );
}
