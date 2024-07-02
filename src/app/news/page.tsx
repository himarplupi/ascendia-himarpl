import Image from "next/image";
import Link from "next/link";

import { FadeIn } from "@/components/motion/fade-in";
import { MotionText } from "@/components/motion/motion-text";
import { UnderlineHover } from "@/components/motion/underline-hover";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { buttonVariants } from "@/components/ui/button";
import { abbreviation, cn, momentId } from "@/lib/utils";
import { api } from "@/trpc/server";

export default async function NewsPage() {
  const news = await api.post.newest();
  const latestNews = news[0];
  const filteredNews = news.slice(1);

  return (
    <main className="min-h-screen pb-24 md:container">
      <section className="relative flex min-h-screen w-full items-end bg-zinc-800">
        {latestNews && (
          <>
            <div className="absolute right-0 top-16">
              <FadeIn>
                <div className="relative h-[512px] w-[100vw] before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:z-[1] before:bg-opacity-75 before:bg-dark-transparent-dark-gradient md:w-[80vw]">
                  <Image
                    src={latestNews?.image ?? ""}
                    alt={`${latestNews?.metaTitle} thumbnail`}
                    layout="fill"
                    objectFit="cover"
                    className="object-cover"
                  />
                </div>
              </FadeIn>
            </div>

            <div className="container z-[2] pb-6">
              <h2 className="line-clamp-2 font-serif text-4xl font-bold capitalize tracking-wide text-zinc-50 md:text-6xl">
                <Link
                  href={`https://blog.himarpl.com/@${latestNews.author.username}/${latestNews.slug}`}
                >
                  <UnderlineHover className="bg-zinc-100">
                    <MotionText
                      type="word"
                      className="inline-block"
                      text={latestNews?.title}
                      delay={0.6}
                      hidden={{
                        y: 100,
                      }}
                    />
                  </UnderlineHover>
                </Link>
              </h2>
              <FadeIn amount={0.5} delay={1.6}>
                <p className="mt-4 line-clamp-3 leading-6 tracking-tight text-zinc-50 md:text-lg lg:mt-6 lg:w-[682px]">
                  {latestNews?.content}
                </p>
              </FadeIn>

              <FadeIn amount={0.5} delay={2}>
                <div className="mt-4 flex items-center justify-between gap-x-2 md:gap-x-4">
                  <div className="flex items-center gap-x-2 md:gap-x-4">
                    <Avatar>
                      <AvatarImage
                        src={latestNews.author.image ?? ""}
                        alt={`${latestNews.author.name} profile picture`}
                        className="scale-125 object-cover object-center"
                      />
                      <AvatarFallback>
                        {abbreviation(latestNews.author.name)}
                      </AvatarFallback>
                    </Avatar>

                    <h4 className="flex flex-col text-sm font-medium tracking-tight text-zinc-200 md:flex-row md:gap-x-2">
                      <span>
                        <Link
                          href={`https://blog.himarpl.com/@${latestNews.author.username}`}
                        >
                          <UnderlineHover className="h-[2px] bg-zinc-300">
                            {latestNews.author.name}
                          </UnderlineHover>
                        </Link>
                      </span>
                      <span className="hidden md:inline">●</span>
                      <span>{momentId(latestNews.publishedAt).fromNow()}</span>
                    </h4>
                  </div>

                  <Link
                    className={cn(
                      buttonVariants({
                        variant: "outline",
                      }),
                      "hidden md:inline-flex",
                    )}
                    href={`https://blog.himarpl.com/@${latestNews.author.username}/${latestNews.slug}`}
                  >
                    Selengkapnya
                  </Link>
                </div>
              </FadeIn>
            </div>
          </>
        )}

        {!latestNews && (
          <div className="container pb-20">
            <h2 className="line-clamp-2 flex flex-col font-serif text-4xl font-bold capitalize tracking-wide text-zinc-50 md:text-6xl">
              Tidak ada berita terbaru
            </h2>
            <p className="mt-4 line-clamp-3 leading-6 tracking-tight text-zinc-50 md:text-lg lg:mt-6 lg:w-[682px]">
              Kunjungi website blog HIMARPL untuk postingan artikel lainnya.
            </p>
          </div>
        )}

        <FadeIn amount={0.3} delay={2.4} className="z-[2] hidden md:flex">
          <ul className="h-80 w-[256px] flex-col gap-y-2 bg-background px-6 pt-3">
            <li>
              <Link
                className={cn(
                  "w-full !justify-start",
                  buttonVariants({
                    variant: "ghost",
                  }),
                )}
                href="https://blog.himarpl.com/tag/berita"
              >
                Berita
              </Link>
            </li>
            <li>
              <Link
                className={cn(
                  "w-full !justify-start",
                  buttonVariants({
                    variant: "ghost",
                  }),
                )}
                href="https://blog.himarpl.com/tag/berita-himarpl"
              >
                Berita HIMARPL
              </Link>
            </li>
            <li>
              <Link
                className={cn(
                  "w-full !justify-start",
                  buttonVariants({
                    variant: "ghost",
                  }),
                )}
                href="https://blog.himarpl.com/tag/berita-pmb"
              >
                Berita PMB
              </Link>
            </li>
          </ul>
        </FadeIn>
      </section>

      {filteredNews.length > 0 && (
        <section className="container mt-6 flex flex-col items-center gap-y-4 md:px-0 lg:gap-y-6">
          <h2 className="mt-4 text-center font-serif text-4xl font-bold capitalize italic tracking-wide md:text-6xl">
            <MotionText
              type="word"
              text={"Berita Lainnya"}
              hidden={{
                y: 118,
              }}
              delay={0.5}
            />
          </h2>

          <ul className="grid w-full gap-6 md:grid-cols-2 md:justify-items-center md:gap-y-12 lg:grid-cols-3">
            {filteredNews.map((news) => (
              <li key={news?.id}>
                <div className="flex flex-col gap-y-2">
                  <FadeIn amount={0.5}>
                    <div className="relative aspect-video w-full">
                      <Image
                        src={news?.image ?? ""}
                        alt={`${news?.metaTitle} thumbnail`}
                        layout="fill"
                        objectFit="cover"
                        className="object-cover"
                      />
                    </div>
                  </FadeIn>

                  <FadeIn amount={0.5} delay={0.6}>
                    <div className="flex items-center gap-x-1 md:gap-x-4">
                      <Avatar>
                        <AvatarImage
                          src={news?.author.image ?? ""}
                          alt={`${news?.author.name} profile picture`}
                          className="scale-125 object-cover object-center"
                        />
                        <AvatarFallback>
                          {abbreviation(news?.author.name)}
                        </AvatarFallback>
                      </Avatar>

                      <h4 className="flex gap-x-2 text-sm font-medium tracking-tight text-zinc-700">
                        <span>
                          <Link
                            href={`https://blog.himarpl.com/@${news?.author.username}`}
                          >
                            <UnderlineHover className="h-[2px] bg-zinc-600">
                              {news?.author.name}
                            </UnderlineHover>
                          </Link>
                        </span>
                        <span>●</span>
                        <span>{momentId(news?.publishedAt).fromNow()}</span>
                      </h4>
                    </div>
                  </FadeIn>

                  <h3 className="line-clamp-2 font-serif text-3xl font-semibold tracking-wide md:text-5xl ">
                    <Link
                      href={`https://blog.himarpl.com/@${news?.author.username}/${news?.slug}`}
                    >
                      <UnderlineHover className="bg-zinc-800">
                        <MotionText
                          amount={0.5}
                          type="word"
                          className="inline-block"
                          text={news?.title ?? "Tidak ada judul"}
                          delay={1.6}
                          hidden={{
                            y: 64,
                          }}
                        />
                      </UnderlineHover>
                    </Link>
                  </h3>
                </div>
              </li>
            ))}
          </ul>

          <FadeIn amount={0.5} delay={2.4}>
            <Link
              className={cn(
                buttonVariants({
                  variant: "outline",
                }),
                "mt-8 w-full md:w-fit",
              )}
              href="https://blog.himarpl.com/tag/berita"
            >
              Lihat Berita Lainnya
            </Link>
          </FadeIn>
        </section>
      )}
    </main>
  );
}
