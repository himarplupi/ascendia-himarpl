"use client";

import React, { useEffect, useState } from "react";
import { motion, type Variants } from "framer-motion";
import { MoveRightIcon, SendIcon } from "lucide-react";
import { z } from "zod";

import { FadeIn } from "@/components/motion/fade-in";
import { MotionInput } from "@/components/motion/motion-input";
import { MotionText } from "@/components/motion/motion-text";
import { MotionTextArea } from "@/components/motion/motion-textarea";
import { Button } from "@/components/ui/button";

const headerVariants: Variants = {
  hidden: {
    x: "100%",
    transition: {
      type: "spring",
      damping: 32,
      stiffness: 200,
    },
  },
  visible: {
    x: 0,
    transition: {
      type: "spring",
      damping: 64,
      stiffness: 200,
    },
  },
};

const inputVariants: Variants = {
  hidden: {
    x: "-100%",
    transition: {
      type: "spring",
      damping: 32,
      stiffness: 200,
    },
  },
  visible: {
    x: 0,
    transition: {
      type: "spring",
      damping: 64,
      stiffness: 200,
    },
  },
  exit: {
    x: "100%",
    transition: {
      type: "spring",
      damping: 32,
      stiffness: 200,
    },
  },
};

export function Form() {
  const [step, setStep] = useState(0);
  const [email, setEmail] = useState("");
  const [isValidateEmail, setIsValidateEmail] = useState(false);
  const [name, setName] = useState("");
  const [isValidateName, setIsValidateName] = useState(false);
  const [pesan, setPesan] = useState("");

  useEffect(() => {
    const emailSchema = z.string().email();
    setIsValidateEmail(emailSchema.safeParse(email).success);
  }, [email]);

  useEffect(() => {
    setIsValidateName(name.length > 0);
  }, [name]);

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-between overflow-hidden">
      <Photo step={step} />

      <form
        target="_blank"
        action="https://formsubmit.co/8d3c0884af2f04a9fcdc5db85ca20543"
        method="POST"
      >
        {/* Step 0: Header */}
        <motion.div
          initial="visible"
          animate={step === 0 ? "visible" : "hidden"}
          variants={headerVariants}
          className="container absolute bottom-0 left-0 right-0 top-0 flex flex-col justify-end bg-zinc-800 pb-12 text-zinc-50"
        >
          <h2 className="font-serif text-6xl font-bold uppercase italic tracking-wider md:text-8xl">
            <MotionText
              type="word"
              text={"HUBUNGI KAMI"}
              hidden={{
                y: 128,
              }}
              delay={0.2}
            />
          </h2>

          <FadeIn amount={0.5} className="space-y-6">
            <p className="mt-2 leading-6 tracking-tight md:text-lg">
              Jika Anda memiliki pertanyaan, masukan, atau ingin mengetahui
              lebih lanjut tentang layanan kami, jangan ragu untuk menghubungi
              kami.
            </p>

            <Button
              variant="outline"
              className="w-full"
              onClick={() => {
                setStep(1);
              }}
              type="button"
            >
              <MoveRightIcon className="h-8 w-8 text-zinc-800" />
            </Button>
          </FadeIn>
        </motion.div>

        {/* Step 1: Input Email */}
        <motion.div
          initial="hidden"
          animate={step > 1 ? "exit" : step === 1 ? "visible" : "hidden"}
          variants={inputVariants}
          className="container absolute bottom-0 left-0 right-0 top-0 flex flex-col justify-between pb-12 pt-80"
        >
          <div>
            <p className="leading-6 tracking-tight md:text-lg">
              Tuliskan pertanyaan atau masukkan apapun
            </p>

            <div className="mt-4 flex items-center justify-between">
              <h6 className="font-semibold leading-6 tracking-tight md:text-lg">
                Langkah 1
              </h6>

              <Button
                onClick={() => {
                  setStep((prev) => prev - 1);
                }}
                variant="ghost"
                size="sm"
                type="button"
              >
                Kembali
              </Button>
            </div>
          </div>
          <div>
            <label htmlFor="email-input">
              <h3 className="font-serif text-5xl font-semibold italic tracking-wide md:text-7xl">
                <span className="text-blue-ribbon-600">Email</span>
                <span>{" Anda"}</span>
              </h3>
            </label>

            <div className="mt-2 space-y-6">
              <MotionInput
                id="email-input"
                name="email"
                type="email"
                placeholder="contoh@domain.com"
                className="text-blue-ribbon-600"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <Button
                variant="outline"
                className="w-full"
                disabled={!isValidateEmail}
                onClick={() => {
                  setStep((prev) => prev + 1);
                }}
                type="button"
              >
                <MoveRightIcon className="h-8 w-8 text-zinc-800" />
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Step 2: Input Name */}
        <motion.div
          initial="hidden"
          animate={step > 2 ? "exit" : step === 2 ? "visible" : "hidden"}
          variants={inputVariants}
          className="container absolute bottom-0 left-0 right-0 top-0 flex flex-col justify-between bg-bright-sun-50 pb-12 pt-80"
        >
          <div>
            <p className="leading-6 tracking-tight md:text-lg">
              Tuliskan pertanyaan atau masukkan apapun
            </p>

            <div className="mt-4 flex items-center justify-between">
              <h6 className="font-semibold leading-6 tracking-tight md:text-lg">
                Langkah 2
              </h6>

              <Button
                onClick={() => {
                  setStep((prev) => prev - 1);
                }}
                variant="ghost"
                size="sm"
                type="button"
              >
                Kembali
              </Button>
            </div>
          </div>
          <div>
            <label htmlFor="name-input">
              <h3 className="font-serif text-5xl font-semibold italic tracking-wide md:text-7xl">
                <span className="text-bright-sun-500">Nama</span>
                <span>{" Anda"}</span>
              </h3>
            </label>

            <div className="mt-2 space-y-6">
              <MotionInput
                id="name-input"
                name="name"
                type="text"
                placeholder="cth. John Titor"
                className="text-bright-sun-500"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

              <Button
                variant="outline"
                className="w-full"
                disabled={!isValidateName}
                onClick={() => {
                  setStep((prev) => prev + 1);
                }}
                type="button"
              >
                <MoveRightIcon className="h-8 w-8 text-zinc-800" />
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Step 3: Input Message */}
        <motion.div
          initial="hidden"
          animate={step > 3 ? "exit" : step === 3 ? "visible" : "hidden"}
          variants={inputVariants}
          className="container absolute bottom-0 left-0 right-0 top-0 flex flex-col justify-between pb-12 pt-80"
        >
          <div>
            <p className="leading-6 tracking-tight md:text-lg">
              Tuliskan pertanyaan atau masukkan apapun
            </p>

            <div className="mt-4 flex items-center justify-between">
              <h6 className="font-semibold leading-6 tracking-tight md:text-lg">
                Langkah 3
              </h6>

              <Button
                onClick={() => {
                  setStep((prev) => prev - 1);
                }}
                variant="ghost"
                size="sm"
                type="button"
              >
                Kembali
              </Button>
            </div>
          </div>
          <div>
            <label htmlFor="pesan-input">
              <h3 className="font-serif text-5xl font-semibold italic tracking-wide md:text-7xl">
                Pesan
              </h3>
            </label>

            <div className="mt-2 space-y-6">
              <MotionTextArea
                id="pesan-input"
                name="pesan"
                placeholder="Halo HIMARPL, "
                className="h-20 w-full resize-none pl-2"
                value={pesan}
                onChange={(e) => setPesan(e.target.value)}
              />

              <Button
                className="w-full"
                disabled={pesan.length === 0}
                onClick={() => {
                  setStep(0);
                }}
                type="submit"
              >
                Kirim <SendIcon className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </motion.div>
      </form>
    </section>
  );
}

const photoVariants: Variants = {
  "step-0": {
    y: "-10%",
    x: "-10%",
    scale: 1.2,
    originX: 0,
    originY: 0,
    transition: {
      type: "spring",
      damping: 64,
      stiffness: 100,
    },
  },
  "step-1": {
    y: "-120%",
    x: "-120%",
    scale: 2.2,
    originX: 0,
    originY: 0,
    transition: {
      type: "spring",
      damping: 64,
      stiffness: 100,
    },
  },
  "step-2": {
    y: "-120%",
    x: "0%",
    scale: 2.2,
    originX: 0,
    originY: 0,
    transition: {
      type: "spring",
      damping: 64,
      stiffness: 100,
    },
  },
  "step-3": {
    y: "-180%",
    x: "-70%",
    scale: 3,
    originX: 0,
    originY: 0,
    transition: {
      type: "spring",
      damping: 64,
      stiffness: 100,
    },
  },
};

function Photo({ step }: { step: number }) {
  return (
    <div className="relative z-[1] mt-16 h-48 w-full overflow-hidden">
      <motion.div
        initial="step-0"
        animate={`step-${step}`}
        variants={photoVariants}
        className="absolute h-full w-full bg-home-1 bg-cover bg-center"
      />
    </div>
  );
}
