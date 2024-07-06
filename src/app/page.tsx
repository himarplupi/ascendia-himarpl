import Link from "next/link";

import { LogoAscendia } from "@/components/brand/logo-ascendia";
import { Footer } from "@/components/common";
import { GlobalFooter } from "@/components/common/global-footer";
import { HorizontalScrollText } from "@/components/common/horizontal-scroll-text";
import { FadeIn } from "@/components/motion/fade-in";
import { MotionText } from "@/components/motion/motion-text";
import { WordRotate } from "@/components/motion/word-rotate";
import { NewsCard } from "@/components/news/news-card";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { api } from "@/trpc/server";

export default async function Home() {
  const news = await api.post.newest();

  return (
    <>
      <main className="min-h-screen md:container">
        <section className="h-[100vh] max-h-[1080px] min-h-[740px]  w-full space-y-6 pb-12">
          <div className="h-96 w-full bg-home-1 bg-cover bg-center md:bg-[center_70%]" />

          <div className="container">
            <h3 className="font-serif text-3xl font-semibold tracking-wide md:text-6xl lg:text-8xl">
              <MotionText
                text="Wujud "
                type="word"
                hidden={{
                  y: 124,
                }}
              />
              <WordRotate
                words={[
                  "Kebersamaan",
                  "Dedikasi",
                  "Prestasi",
                  "Inovasi",
                  "Kolaborasi",
                  "Inspirasi",
                ]}
                parentClassName="inline-block"
                className="inline-block text-blue-ribbon-600"
              />
            </h3>
            <h3 className="mt-2 font-serif text-3xl font-semibold tracking-wide md:text-6xl">
              <MotionText
                text="Kami, Mahasiswa RPL"
                type="word"
                hidden={{
                  y: 64,
                }}
              />
            </h3>

            <div className="mt-6 flex flex-col gap-y-3 sm:flex-row sm:gap-x-6">
              <Link
                href="/dedication"
                className={cn(buttonVariants(), "w-full max-w-80")}
              >
                Lihat Dedikasi
              </Link>
              <Link
                href="/contact"
                className={cn(
                  buttonVariants({ variant: "outline" }),
                  "w-full max-w-80",
                )}
              >
                Hubungi Kami
              </Link>
            </div>
          </div>
        </section>

        <FadeIn>
          <section className="container flex flex-col bg-zinc-800 py-6 text-zinc-50 md:flex-row md:gap-x-6">
            <h4 className="mt-2 font-serif text-4xl font-semibold italic tracking-wide md:text-6xl">
              HIMARPL
            </h4>
            <div>
              <p className="mt-2 leading-6 tracking-tight md:max-w-[768px] md:text-lg">
                adalah organisasi kemahasiswaan program studi Rekayasa Perangkat
                Lunak Universitas Pendidikan Indonesia
              </p>
              <Link
                href="/about"
                className={cn(
                  buttonVariants({ variant: "outline" }),
                  "mt-4 w-full max-w-80 text-zinc-950",
                )}
              >
                Mengenal HIMARPL
              </Link>
            </div>
          </section>
        </FadeIn>

        <FadeIn amount={0.2}>
          <div className="lg:flex">
            <section className="container my-8 lg:w-1/2">
              <div className="flex gap-x-2 md:gap-x-8">
                <h2 className="flex flex-col font-serif text-7xl font-bold italic tracking-wider text-blue-ribbon-600 md:text-9xl">
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
                      pemberitahuan dalam penyaluran bantuan kepada mahasiswa
                      yang membutuhkan bantuan atau sedang tertimpa musibah.
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
                      href="/dedication"
                      className={cn(buttonVariants({ variant: "outline" }))}
                    >
                      Lihat Dedikasi Lainnya
                    </Link>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>

        <FadeIn>
          <HorizontalScrollText textClassName="text-4xl text-muted-foreground font-medium">
            Adkes ● Advokastra ● Ekraf ● Keuangan ● Kominfo ● PD ● PPM ● PSDO ●
            Baleg ● Burta ● Komisi ●
          </HorizontalScrollText>
        </FadeIn>

        {news.length > 2 && (
          <section className="container mb-12 flex flex-col items-center gap-y-4 md:px-0 lg:gap-y-6">
            <h2 className="mt-4 text-center font-serif text-4xl font-bold capitalize italic tracking-wide md:text-6xl">
              <MotionText
                type="word"
                text={"Berita"}
                hidden={{
                  y: 118,
                }}
                delay={0.5}
              />
            </h2>

            <ul className="grid w-full gap-6 md:grid-cols-2 md:justify-items-center md:gap-y-12 lg:grid-cols-3">
              {news.map((news) => (
                <li key={news?.id}>
                  <NewsCard news={news} />
                </li>
              ))}
            </ul>

            <FadeIn
              amount={0.5}
              delay={2.4}
              className="flex w-full justify-center"
            >
              <Link
                className={cn(
                  buttonVariants({
                    variant: "outline",
                  }),
                  "w-full md:w-fit",
                )}
                href="/news"
              >
                Lihat Berita Lainnya
              </Link>
            </FadeIn>
          </section>
        )}

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
                {`Kabinet Ascendia merupakan nama untuk kabinet HIMARPL tahun ini. Nama Ascendia ini mencerminkan harapan HIMARPL untuk terus naik hingga menjadi yang terbaik.`}
              </p>
            </FadeIn>

            <FadeIn
              amount={0.5}
              delay={2.2}
              className="mt-6 flex flex-col gap-y-3 md:flex-row md:gap-x-6"
            >
              <Link
                href="/about/be"
                className={cn(buttonVariants({}), "w-full md:w-64")}
              >
                Pengurus Badan Eksekutif
              </Link>
              <Link
                href="/about/dp"
                className={cn(buttonVariants({}), "w-full md:w-64")}
              >
                Pengurus Dewan Perwakilan
              </Link>
            </FadeIn>
          </div>
        </section>
      </main>

      <div className="md:container">
        <Footer />
        <GlobalFooter />
      </div>
    </>
  );
}
