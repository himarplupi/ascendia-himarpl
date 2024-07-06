import Link from "next/link";

import { History } from "@/components/about/history";
import { Missions } from "@/components/about/missions";
import { OrganizationDocuments } from "@/components/about/organization-documents";
import { OrganizationStructure } from "@/components/about/organization-structure";
import { LogoAscendia } from "@/components/brand/logo-ascendia";
import { LogoHIMARPL } from "@/components/brand/logo-himarpl";
import { FadeIn } from "@/components/motion/fade-in";
import { MotionText } from "@/components/motion/motion-text";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function AboutPage() {
  return (
    <main className="min-h-screen pb-10 md:container lg:pb-0">
      {/* Section 1 */}
      <section className="relative h-screen w-full bg-about-1 bg-cover bg-center bg-no-repeat before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:z-[1] before:bg-opacity-75 before:bg-dark-transparent-dark-gradient before:backdrop-blur-sm before:backdrop-brightness-75 md:max-h-[1080px]">
        <div className="relative z-[2] flex h-full w-full items-center justify-center md:container md:justify-end ">
          <div className="w-full">
            <div className="container flex w-full flex-col items-center justify-center gap-2 md:h-40">
              <FadeIn>
                <LogoHIMARPL className="w-32" />
              </FadeIn>

              <h4 className="text-center font-serif text-2xl font-semibold tracking-wide text-zinc-50 md:text-4xl">
                <MotionText
                  type="word"
                  text={"Himpunan Mahasiswa Rekayasa Perangkat Lunak"}
                  hidden={{
                    y: 64,
                  }}
                  amount={0.5}
                />
              </h4>

              <h2 className="text-center font-serif text-6xl font-bold italic tracking-wider text-bright-sun-300 md:text-8xl">
                <MotionText
                  type="char"
                  text={"HIMARPL"}
                  hidden={{
                    y: 128,
                  }}
                  amount={0.5}
                  delay={2.6}
                />
              </h2>

              <FadeIn delay={6} amount={0.5}>
                <p className="mt-4 text-center leading-6 tracking-tight text-zinc-200 md:max-w-[768px] md:text-lg">
                  Ditetapkan di Kabupaten Bandung pada tanggal 14 Desember 2019.
                  HIMARPL merupakan organisasi kemahasiswaan yang sah dan
                  berdaulat di Program Studi Rekayasa Perangkat Lunak
                  Universitas Pendidikan Indonesia.
                </p>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 */}

      <section className="container flex w-full flex-col items-center bg-opacity-50 bg-white-paper bg-[length:100px_100px] bg-repeat py-12 md:flex-row md:gap-x-12">
        <FadeIn amount={0.5}>
          <LogoAscendia className="w-32 md:w-64" />
        </FadeIn>

        <div className="flex flex-col">
          <h3 className="mt-4 text-center font-serif text-4xl font-semibold tracking-wide text-blue-ribbon-600 md:text-left md:text-6xl">
            <MotionText
              type="word"
              text={"Kabinet Ascendia"}
              hidden={{
                y: 64,
              }}
              amount={0.5}
              delay={0.6}
            />
          </h3>

          <FadeIn amount={0.5} delay={1.6}>
            <p className="mt-4 text-center leading-6 tracking-tight md:text-left md:text-lg">
              {`“Ascend” berarti naik. Nama Acendia ini mencerminkan harapan HIMARPL
          untuk terus naik hingga menjadi yang terbaik.`}
            </p>
          </FadeIn>

          <FadeIn amount={0.5} delay={2.2}>
            <Link
              href="/about/logo-philosophy"
              className={cn(buttonVariants({}), "mt-6 w-full md:w-64")}
            >
              Filosofi Logo
            </Link>
          </FadeIn>
        </div>
      </section>

      <section className="bg-zinc-800">
        <div className="relative w-full bg-about-2 bg-cover bg-center bg-no-repeat py-12 before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:z-[1] before:bg-opacity-75 before:bg-dark-transparent-dark-gradient before:backdrop-blur-sm before:backdrop-brightness-75 md:max-h-[256px]">
          <div className="relative z-[2] flex h-full w-full items-center justify-center md:container md:justify-end ">
            <div className="w-full">
              <div className="container flex w-full flex-col items-center justify-center gap-2 md:h-40">
                <h2 className="text-center font-serif text-6xl font-bold tracking-wider text-bright-sun-300 md:text-8xl">
                  <MotionText
                    type="word"
                    text={"Visi & Misi"}
                    hidden={{
                      y: 128,
                    }}
                    delay={0.2}
                  />
                </h2>
              </div>
            </div>
          </div>
        </div>

        <div className="container flex flex-col gap-y-6 py-12 text-zinc-200 md:flex-row md:justify-between md:gap-x-12">
          <div className="md:flex md:w-1/2 md:max-w-[600px] md:flex-col md:justify-between">
            <div>
              <h3 className="font-serif text-4xl font-semibold tracking-wide text-zinc-50 md:text-6xl">
                <MotionText
                  type="word"
                  text={"Visi"}
                  hidden={{
                    y: 64,
                  }}
                  amount={0.5}
                />
              </h3>

              <FadeIn amount={0.5}>
                <p className="mt-1 leading-6 tracking-tight md:text-lg">
                  {
                    "Menjadikan HIMARPL sebagai wadah pemersatu, penampung aspirasi, dan penyalur minat serta bakat mahasiswa rekayasa perangkat lunak."
                  }
                </p>
              </FadeIn>
            </div>

            <FadeIn amount={1}>
              <div className="container hidden w-full flex-col items-center place-self-end bg-opacity-50 bg-white-paper bg-[length:100px_100px] bg-repeat py-12 md:flex">
                <OrganizationDocuments className="w-full md:max-w-80" />
              </div>
            </FadeIn>
          </div>

          <div className="md:w-1/2 md:max-w-[600px] ">
            <h3 className="font-serif text-4xl font-semibold tracking-wide text-zinc-50 md:text-6xl">
              <MotionText
                type="word"
                text={"Misi"}
                hidden={{
                  y: 64,
                }}
                amount={0.5}
              />
            </h3>

            <Missions />
          </div>
        </div>

        <FadeIn amount={1}>
          <div className="container flex w-full flex-col items-center bg-opacity-50 bg-white-paper bg-[length:100px_100px] bg-repeat py-12 md:hidden">
            <OrganizationDocuments className="w-full" />
          </div>
        </FadeIn>
      </section>

      <section>
        <div className="container flex w-full flex-col items-center bg-opacity-50 bg-white-paper bg-[length:100px_100px] bg-repeat py-12 md:flex-row md:gap-x-12">
          <div className="flex flex-col">
            <h3 className="mt-4 font-serif text-4xl font-semibold tracking-wide text-blue-ribbon-600 md:text-6xl">
              <MotionText
                type="word"
                text={"Struktur Organisasi"}
                hidden={{
                  y: 64,
                }}
                amount={0.5}
                delay={0.6}
              />
            </h3>

            <FadeIn amount={0.5} delay={1.6}>
              <p className="mt-4 leading-6 tracking-tight md:max-w-[768px] md:text-lg">
                {`Lembaga eksekutif di HIMARPL adalah BE HIMARPL sebagai Badan pelaksana kegiatan kemahasiswaan, sedangkan lembaga legislatif di HIMARPL adalah DP HIMARPL sebagai Dewan Perwakilan Mahasiswa`}
              </p>
            </FadeIn>

            <FadeIn amount={0.5} delay={2.2}>
              <div className="mt-6 flex flex-col gap-y-2 md:flex-row md:gap-x-6">
                <Link
                  href="/about/be"
                  className={cn(buttonVariants(), "w-full md:w-64")}
                >
                  Badan Eksekutif
                </Link>
                <Link
                  href="/about/dp"
                  className={cn(buttonVariants(), "w-full md:w-64")}
                >
                  Dewan Perwakilan
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>

        <OrganizationStructure />
      </section>

      <section>
        <div className="relative h-fit w-full bg-about-3 bg-cover bg-center bg-no-repeat py-12 before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:z-[1] before:bg-opacity-75 before:bg-dark-transparent-dark-gradient before:backdrop-blur-sm before:backdrop-brightness-75 before:md:backdrop-blur-none">
          <div className="relative z-[2] flex h-full w-full items-center justify-center md:justify-end ">
            <div className="w-full space-y-6">
              <div className="container flex w-full flex-col items-center justify-center gap-2">
                <h2 className="flex flex-col gap-y-1">
                  <span className="text-center font-serif text-4xl font-bold italic tracking-wider text-bright-sun-300 md:text-6xl">
                    <MotionText
                      type="word"
                      text={"Perjalanan"}
                      hidden={{
                        y: 128,
                      }}
                      delay={0.2}
                    />
                  </span>
                  <span className="text-center font-serif text-6xl font-bold italic tracking-wider text-bright-sun-300 md:text-8xl">
                    <MotionText
                      type="word"
                      text={"HIMARPL"}
                      hidden={{
                        y: 128,
                      }}
                      delay={0.6}
                    />
                  </span>
                </h2>
              </div>

              <div className="hidden w-full overflow-hidden bg-zinc-100 bg-opacity-75 py-6 md:block">
                <FadeIn delay={1.2} amount={0.5}>
                  <History />
                </FadeIn>
              </div>
            </div>
          </div>
        </div>

        <div className="py-12 md:hidden">
          <FadeIn delay={1.2} amount={0.5}>
            <History />
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
