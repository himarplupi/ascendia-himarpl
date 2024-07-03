import Link from "next/link";

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
      <section className="bg-about-1 relative h-screen w-full bg-cover bg-center bg-no-repeat before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:z-[1] before:bg-opacity-75 before:bg-dark-transparent-dark-gradient before:backdrop-blur-sm before:backdrop-brightness-75 md:max-h-[1080px]">
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
          <LogoAscendia className="w-32 md:w-96" />
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
    </main>
  );
}
