"use client";

import React from "react";
import { motion, type Variants } from "framer-motion";

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

export default function Missions() {
  return (
    <motion.ul
      initial="hidden"
      viewport={{ once: true, amount: 1 }}
      animate="visible"
      transition={{
        staggerChildren: 0.6,
      }}
      className="ml-4 mt-1 list-outside list-disc leading-6 tracking-tight md:text-lg"
    >
      <motion.li variants={listAnimation}>
        {
          "Menciptakan iklim organisasi berdasarkan asas kekeluargaan dengan budaya demokratis."
        }
      </motion.li>

      <motion.li variants={listAnimation}>
        {"Mewadahi sumber daya manusia dalam bidang akademik dan non-akademik."}
      </motion.li>
      <motion.li variants={listAnimation}>
        {
          "Mendorong mahasiswa untuk tetap kreatif dan inovatif melalui program kerja yang adaptif."
        }
      </motion.li>
      <motion.li variants={listAnimation}>
        {
          "Mempersatukan seluruh anggota himpunan mahasiswa rekayasa perangkat lunak."
        }
      </motion.li>
      <motion.li variants={listAnimation}>
        {
          "Meningkatkan kualitas seluruh anggota himpunan mahasiswa rekayasa perangkat lunak."
        }
      </motion.li>
    </motion.ul>
  );
}
