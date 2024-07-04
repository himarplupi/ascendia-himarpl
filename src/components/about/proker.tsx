"use client";

import React, { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";

const listAnimation: Variants = {
  hidden: {
    opacity: 0,
    y: 32,
    transition: {
      type: "spring",
      damping: 64,
      stiffness: 500,
    },
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 64,
      stiffness: 500,
    },
  },
};

interface ProkerProps {
  list: string[];
}

export function Proker({ list }: ProkerProps) {
  const ref = useRef<HTMLUListElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <motion.ul
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{
        staggerChildren: 0.6,
      }}
      className="ml-4 mt-1 list-outside list-disc leading-6 tracking-tight md:text-lg"
    >
      {list.map((item, i) => (
        <motion.li key={`${i}_${item}`} variants={listAnimation}>
          {item}
        </motion.li>
      ))}
    </motion.ul>
  );
}
