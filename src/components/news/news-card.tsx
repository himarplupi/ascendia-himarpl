import Image from "next/image";
import Link from "next/link";

import { abbreviation, momentId } from "@/lib/utils";
import { type AppRouter } from "@/server/api/root";
import { type inferRouterOutputs } from "@trpc/server";

import { FadeIn } from "../motion/fade-in";
import { MotionText } from "../motion/motion-text";
import { UnderlineHover } from "../motion/underline-hover";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export type RouterOutputs = inferRouterOutputs<AppRouter>;

type News = RouterOutputs["post"]["newest"][0];

export function NewsCard({ news }: { news: News }) {
  return (
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
            <AvatarFallback>{abbreviation(news?.author.name)}</AvatarFallback>
          </Avatar>

          <h4 className="flex gap-x-2 text-sm font-medium tracking-tight text-zinc-700">
            <span>
              <Link href={`https://blog.himarpl.com/@${news?.author.username}`}>
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
  );
}
