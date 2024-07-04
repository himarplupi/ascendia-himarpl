import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";

import { FadeIn } from "../motion/fade-in";
import { buttonVariants } from "../ui/button";

interface DepartmentCardProps {
  name?: string | null;
  image?: string | null;
  acronym?: string | null;
  type?: string | null;
}

export function DepartmentCard({
  name,
  image,
  type,
  acronym,
}: DepartmentCardProps) {
  return (
    <FadeIn className="w-full">
      <div className="flex w-full flex-col items-center justify-center">
        <div className="relative h-64 w-full overflow-hidden bg-cover bg-center bg-no-repeat before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:z-[1] before:bg-opacity-75 before:bg-dark-transparent-dark-gradient md:h-80 md:rounded-lg">
          <Image
            fill
            src={image ?? ""}
            alt={`${name} image`}
            className="object-cover object-[center_25%]"
          />
          <div className="relative z-[2] flex h-full items-center justify-center md:justify-end">
            <div className="container flex h-full w-full flex-col items-center justify-between gap-2 py-2 md:items-start">
              <h3 className="text-center font-serif text-4xl font-semibold uppercase italic tracking-wide text-zinc-50 md:text-left md:text-6xl">
                {acronym}
              </h3>

              <h6 className="line-clamp-2 text-center text-2xl font-semibold tracking-wide text-zinc-50 md:max-w-[65%] md:text-left md:text-4xl lg:max-w-[100%]">
                {name}
              </h6>
            </div>
          </div>

          <div className="container absolute bottom-0 right-0 z-[2] w-80 py-2">
            <Link
              href={`/about/${type?.toLowerCase()}/${acronym}`}
              className={cn(
                buttonVariants({
                  variant: "outline",
                }),
                "mt-4 hidden w-full md:inline-flex",
              )}
            >
              Selengkapnya
            </Link>
          </div>
        </div>

        <div className="container md:hidden">
          <Link
            href={`/about/${type?.toLowerCase()}/${acronym}`}
            className={cn(
              buttonVariants({
                variant: "outline",
              }),
              "mt-4 w-full",
            )}
          >
            Selengkapnya
          </Link>
        </div>
      </div>
    </FadeIn>
  );
}
