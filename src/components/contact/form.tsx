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
    <section className="relative flex h-screen max-h-[768px] flex-col items-center justify-between overflow-hidden">
      <Photo step={step} />

      <form
        target="_blank"
        action="https://formsubmit.co/5450873b6b6436729ee7a094d8e88f98"
        method="POST"
      >
        <Photo step={step} isMobile={false} />

        {/* Step 0: Header */}
        <motion.div
          initial="visible"
          animate={step === 0 ? "visible" : "hidden"}
          variants={headerVariants}
          className="container absolute bottom-0 left-0 right-0 top-0 flex flex-col justify-end bg-zinc-800 pb-12 pt-64 text-zinc-50 md:flex-row md:items-end md:gap-x-12"
        >
          <div className="">
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
          </div>

          <FadeIn amount={0.5} className="space-y-6">
            <p className="mt-2 leading-6 tracking-tight md:bg-zinc-50 md:p-6 md:text-lg md:text-zinc-800">
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
          className="container absolute bottom-0 left-0 right-0 top-0 flex flex-col justify-between pb-12 pt-80 md:right-auto md:w-1/2 md:pt-32"
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
          <div className="md:space-y-6">
            <label htmlFor="email-input">
              <h3 className="font-serif text-5xl font-semibold italic tracking-wide md:text-7xl">
                <span className="text-blue-ribbon-600">Email</span>
                <span>{" Anda"}</span>
              </h3>
            </label>

            <div className="mt-2 space-y-6 md:mt-0 md:space-y-12">
              <MotionInput
                id="email-input"
                name="email"
                type="email"
                placeholder="contoh@domain.com"
                className="text-blue-ribbon-600"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="off"
              />

              <Button
                variant="outline"
                className="w-full max-w-80"
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
          className="container absolute bottom-0 left-0 right-0 top-0 flex flex-col justify-between bg-bright-sun-50 pb-12 pt-80 md:right-auto md:w-1/2 md:pt-32"
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
          <div className="md:space-y-6">
            <label htmlFor="name-input">
              <h3 className="font-serif text-5xl font-semibold italic tracking-wide md:text-7xl">
                <span className="text-bright-sun-500">Nama</span>
                <span>{" Anda"}</span>
              </h3>
            </label>

            <div className="mt-2 space-y-6 md:mt-0 md:space-y-12">
              <MotionInput
                id="name-input"
                name="name"
                type="text"
                placeholder="cth. John Titor"
                className="text-bright-sun-500"
                value={name}
                onChange={(e) => setName(e.target.value)}
                autoComplete="off"
              />

              <Button
                variant="outline"
                className="w-full max-w-80"
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
          className="container absolute bottom-0 left-0 right-0 top-0 flex flex-col justify-between pb-12 pt-80 md:right-auto md:w-1/2 md:pt-32"
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
          <div className="md:space-y-6">
            <label htmlFor="pesan-input">
              <h3 className="font-serif text-5xl font-semibold italic tracking-wide md:text-7xl">
                Pesan
              </h3>
            </label>

            <div className="mt-2 space-y-6 md:mt-0 md:space-y-12">
              <MotionTextArea
                id="pesan-input"
                name="pesan"
                placeholder="Halo HIMARPL, "
                className="h-20 w-full resize-none pl-2"
                value={pesan}
                onChange={(e) => setPesan(e.target.value)}
              />

              <Button
                className="w-full max-w-80"
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
const photoDesktopVariants: Variants = {
  "step-0": {
    zIndex: 1,
    transition: {
      type: "spring",
      damping: 64,
      stiffness: 100,
    },
  },
  "step-1": {
    zIndex: 1,
    height: "100%",
    width: "50%",
    transition: {
      type: "spring",
      damping: 64,
      stiffness: 100,
    },
  },
  "step-2": {
    zIndex: 1,
    height: "100%",
    width: "50%",
    transition: {
      type: "spring",
      damping: 64,
      stiffness: 100,
    },
  },
  "step-3": {
    zIndex: 1,
    height: "100%",
    width: "50%",
    transition: {
      type: "spring",
      damping: 64,
      stiffness: 100,
    },
  },
};

const photoDesktopImgVariants: Variants = {
  "step-0": {
    y: "-80%",
    x: "0%",
    scale: 2,
    originX: 0,
    originY: 0,
    transition: {
      type: "spring",
      damping: 64,
      stiffness: 100,
    },
  },
  "step-1": {
    y: "-25%",
    x: "0%",
    scale: 2.5,
    originX: 0,
    originY: 0,
    transition: {
      type: "spring",
      damping: 64,
      stiffness: 100,
    },
  },
  "step-2": {
    y: "-40%",
    x: "-190%",
    scale: 3,
    originX: 0,
    originY: 0,
    transition: {
      type: "spring",
      damping: 64,
      stiffness: 100,
    },
  },
  "step-3": {
    y: "-25%",
    x: "-60%",
    scale: 2.5,
    originX: 0,
    originY: 0,
    transition: {
      type: "spring",
      damping: 64,
      stiffness: 100,
    },
  },
};

function Photo({
  step,
  isMobile = true,
}: {
  step: number;
  isMobile?: boolean;
}) {
  if (!isMobile) {
    return (
      <motion.div
        className="absolute right-0 top-0 mt-16 h-[300px] w-[768px] overflow-hidden before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:z-[1] before:bg-opacity-75 before:bg-dark-transparent-dark-gradient"
        initial="step-0"
        animate={`step-${step}`}
        variants={photoDesktopVariants}
      >
        <motion.div
          initial="step-0"
          animate={`step-${step}`}
          variants={photoDesktopImgVariants}
          className="absolute h-full w-full bg-home-1 bg-contain bg-no-repeat"
        />
      </motion.div>
    );
  }

  return (
    <div className="relative z-[1] mt-16 h-48 w-full overflow-hidden md:hidden">
      <motion.div
        initial="step-0"
        animate={`step-${step}`}
        variants={photoVariants}
        className="absolute h-full w-full bg-home-1 bg-cover bg-center"
      />
    </div>
  );
}
