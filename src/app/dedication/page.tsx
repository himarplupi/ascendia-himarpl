import Link from "next/link";

import { HorizontalScrollText } from "@/components/common/horizontal-scroll-text";
import { Lampiran } from "@/components/dedication/lampiran";
import { FadeIn } from "@/components/motion/fade-in";
import { MotionText } from "@/components/motion/motion-text";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function DedicationPage() {
  return (
    <main className="min-h-screen pb-10 pt-20 md:container lg:pb-0">
      <section className="container md:px-0">
        <div className="mt-4 flex flex-col">
          <h2 className="font-serif text-2xl font-bold italic tracking-wide md:text-4xl">
            <MotionText type="word" text={"Penangguhan dan Cicilan"} />
          </h2>
          <div className="gap-x-4 md:flex lg:gap-x-8">
            <h2 className="font-serif text-7xl font-bold italic tracking-wider text-blue-ribbon-600 md:text-9xl">
              <MotionText
                type="char"
                text={"UKT"}
                hidden={{
                  y: 118,
                }}
                delay={1.6}
              />
            </h2>
            <p className="mt-4 leading-6 tracking-tight md:w-[410px] md:text-lg lg:mt-6 lg:w-[682px]">
              <FadeIn
                amount={0.5}
                to="right"
                delay={3}
                className="inline-block"
              >
                Mahasiswa dapat mengajukan permohonan dengan melampirkan dokumen
                pendukung. Program ini diharapkan membantu mahasiswa
                menyelesaikan studi tanpa tekanan finansial yang berlebihan.
              </FadeIn>
            </p>
          </div>
        </div>
      </section>

      <FadeIn amount={0.5} delay={1.6}>
        <div className="mt-8 h-64 w-full bg-dedication-1 bg-cover bg-center bg-no-repeat md:h-80">
          <div className="flex h-full w-full items-center justify-center bg-dark-transparent-dark-gradient md:container md:justify-end ">
            <div className="w-full bg-opacity-50 bg-white-paper bg-[length:100px_100px] bg-repeat py-8 mix-blend-luminosity md:w-96">
              <section className="container flex w-full flex-col justify-center gap-2 md:h-40">
                <Lampiran type="dedication-1" />
                <Link
                  target="_blank"
                  href="https://wa.me/+6282219093410"
                  className={cn(buttonVariants({ variant: "outline" }))}
                >
                  Hubungi Advokastra
                </Link>
              </section>
            </div>
          </div>
        </div>
      </FadeIn>

      <FadeIn>
        <HorizontalScrollText textClassName="text-4xl text-muted-foreground font-medium">
          KEEP STRUGGLE ● STAY TOGETHER ● KEEP STRUGGLE ● STAY TOGETHER ● KEEP
          STRUGGLE ● STAY TOGETHER ●
        </HorizontalScrollText>
      </FadeIn>

      <FadeIn amount={0.5}>
        <div className="relative">
          <div className="h-64 w-full bg-dedication-2 bg-cover bg-no-repeat md:h-fit lg:h-[512px] lg:w-1/2">
            <div className="flex h-full w-full items-center justify-center bg-white-transparent-white-gradient md:py-12 lg:absolute lg:left-[50%] lg:h-fit lg:w-96 lg:bg-opacity-0">
              <section className="container w-full">
                <h2 className="mt-4 font-serif text-7xl font-bold italic tracking-wide text-bright-sun-500 md:text-9xl">
                  <MotionText
                    type="word"
                    text={"Cuti Kuliah"}
                    hidden={{
                      y: 118,
                    }}
                    delay={1}
                  />
                </h2>
              </section>
            </div>
          </div>

          <section className="container md:px-0 lg:absolute lg:bottom-[6%] lg:right-0 lg:flex lg:w-[92vw] lg:max-w-[1300px] lg:items-center lg:gap-x-6 lg:bg-background lg:px-12 lg:py-4">
            <p className="mt-4 leading-6 tracking-tight lg:mt-0 lg:text-lg">
              Membantu mahasiswa yang akan mengambil cuti dengan menyediakan
              panduan dan dukungan administratif. Mahasiswa dapat mengajukan
              cuti melalui formulir dan dokumen pendukung yang akan dibantu oleh
              Staff Advokastra HIMARPL.
            </p>
            <Lampiran type="dedication-2" className="mt-4 w-full lg:w-96" />
          </section>
        </div>
      </FadeIn>

      <FadeIn amount={0.2}>
        <div className="lg:flex">
          <section className="container my-8 lg:w-1/2">
            <div className="flex gap-x-2 md:gap-x-8">
              <h2 className="flex flex-col font-serif text-7xl font-bold italic tracking-wider  text-blue-ribbon-600 md:text-9xl">
                <MotionText
                  type="word"
                  text={"Ad"}
                  hidden={{
                    y: 118,
                  }}
                  delay={0.5}
                  amount={0.5}
                />
                <MotionText
                  type="word"
                  text={"For"}
                  hidden={{
                    y: 118,
                  }}
                  delay={1.5}
                  amount={0.5}
                />
                <MotionText
                  type="word"
                  text={"You"}
                  hidden={{
                    y: 118,
                  }}
                  delay={2}
                  amount={0.5}
                />
              </h2>

              <aside className="space-y-4 pt-9 md:space-y-6 md:pt-16">
                <h4 className="flex flex-col text-2xl font-semibold italic tracking-wide md:text-4xl">
                  <MotionText type="word" text={"vo-kastra"} delay={1} />
                </h4>

                <FadeIn delay={2.5}>
                  <p className="mt-4 leading-6 tracking-tight md:text-lg">
                    merupakan proker advokastra untuk menyebarkan poster dan
                    pemberitahuan dalam penyaluran bantuan kepada mahasiswa yang
                    membutuhkan bantuan atau sedang tertimpa musibah.
                  </p>
                </FadeIn>
              </aside>
            </div>
          </section>

          <div className="h-64 w-full bg-dedication-advo bg-cover bg-center bg-no-repeat md:h-80 lg:h-[512px] lg:w-1/2">
            <div className="flex h-full w-full items-end justify-center lg:relative">
              <div className="w-full bg-opacity-50 bg-white-paper bg-[length:100px_100px] bg-repeat py-8 mix-blend-luminosity lg:absolute lg:bottom-6 lg:right-6 lg:w-64">
                <section className="container flex w-full flex-col gap-2">
                  <Link
                    target="_blank"
                    href="https://wa.me/+6282219093410"
                    className={cn(buttonVariants({ variant: "outline" }))}
                  >
                    Hubungi Advokastra
                  </Link>
                </section>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>

      <FadeIn amount={0.5}>
        <div className="lg:bg-dedication-burta">
          <div className="lg:container lg:flex lg:flex-row-reverse lg:bg-dark-transparent-dark-gradient lg:py-24">
            <div className="h-64 w-full bg-dedication-burta bg-cover bg-no-repeat md:h-80 md:bg-center lg:h-[512px] lg:w-1/2 lg:bg-background">
              <div className="flex h-full w-full items-end justify-center bg-dark-transparent-dark-gradient pb-6 lg:opacity-0">
                <section className="container w-full">
                  <h2 className="mt-4 text-center font-serif text-5xl font-bold italic leading-tight tracking-wide text-background md:text-7xl lg:hidden">
                    <MotionText
                      type="word"
                      text={"Respiration"}
                      hidden={{
                        y: 52,
                      }}
                      delay={1}
                    />
                  </h2>
                </section>
              </div>
            </div>
            <section className="container my-8 space-y-4 md:px-0 lg:my-0 lg:flex lg:h-[512px] lg:w-1/2 lg:flex-col lg:justify-center lg:space-y-6 lg:bg-background lg:px-12">
              <h2 className="hidden font-serif text-7xl font-bold italic tracking-wide lg:block">
                <MotionText
                  type="word"
                  text={"Respiration"}
                  hidden={{
                    y: 80,
                  }}
                  delay={1}
                />
              </h2>

              <FadeIn amount={0.5} delay={1.6}>
                <p className="leading-6 tracking-tight md:text-lg">
                  {`Reservoir of Resources' Aspiration, Program ini bertujuan untuk
          mengumpulkan masukan dan saran aspirasi perihal akademik maupun
          organisasi HIMARPL. Mari suarakan aspirasi Anda untuk kemajuan kita
          semua!`}
                </p>
              </FadeIn>
              <FadeIn amount={0.5} delay={2.2}>
                <Link
                  target="_blank"
                  href="https://docs.google.com/forms/d/e/1FAIpQLSfGpum-Zp7UvtXizPldhjxPjLi4vUIqXzWb-L-rj02Ry1KZZQ/viewform"
                  className={cn("w-full", buttonVariants())}
                >
                  Formulir Respiration
                </Link>
              </FadeIn>
            </section>
          </div>
        </div>
      </FadeIn>
    </main>
  );
}
