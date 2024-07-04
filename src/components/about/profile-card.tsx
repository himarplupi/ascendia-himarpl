import Image from "next/image";
import Link from "next/link";
import { UserCircle2Icon } from "lucide-react";

import { cn } from "@/lib/utils";
import { SiGithub, SiInstagram } from "@icons-pack/react-simple-icons";

import { FadeIn } from "../motion/fade-in";
import { MotionText } from "../motion/motion-text";
import { Button, buttonVariants } from "../ui/button";

interface ProfileCardProps {
  name?: string | null;
  title?: string | null;
  username?: string | null;
  image?: string | null;
  instagram?: string | null;
  github?: string | null;
}

export function ProfileCard({
  name,
  title,
  username,
  image,
  instagram,
  github,
}: ProfileCardProps) {
  return (
    <div className="flex w-full flex-col overflow-hidden md:flex-row md:rounded-lg">
      <div className="relative flex h-96 w-full items-center justify-end before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:z-[1] before:bg-opacity-25 before:bg-profile-dark-gradient before:backdrop-blur-sm">
        <Image
          src={image ?? ""}
          alt={name + " background profile picture"}
          fill
          className="object-cover"
        />
        <div className="relative h-full w-[85%] before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:z-[2] before:bg-opacity-25 before:bg-profile-dark-gradient  md:w-[60%]">
          <Image
            src={image ?? ""}
            alt={name + " profile picture"}
            fill
            className="z-[1] object-cover object-center"
          />
        </div>
        <div className="container absolute left-0 top-0 z-[3] flex h-full w-full flex-col justify-between py-2">
          <h3 className="mt-4 font-serif text-4xl font-semibold uppercase tracking-wide text-zinc-50 md:text-6xl">
            <MotionText
              type="word"
              text={title ?? ""}
              hidden={{
                y: 64,
              }}
              delay={0.6}
            />
          </h3>

          <div className="md:space-y-2">
            <FadeIn delay={1} amount={0.5}>
              <h6 className="mt-2 line-clamp-2 text-2xl font-semibold tracking-wide text-zinc-50 md:text-4xl">
                {name}
              </h6>
            </FadeIn>

            <div className="flex gap-x-6">
              {instagram ? (
                <Link
                  target="_blank"
                  href={`https://instagram.com/${instagram}`}
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "icon" }),
                  )}
                >
                  {/* @ts-expect-error: Entahlah SimpleIcon gaje */}
                  <SiInstagram className="h-6 w-6 text-zinc-100" />
                </Link>
              ) : (
                <Button variant="ghost" size="icon" disabled>
                  {/* @ts-expect-error: Entahlah SimpleIcon gaje */}
                  <SiInstagram className="h-6 w-6 text-zinc-100" />
                </Button>
              )}
              {github ? (
                <Link
                  target="_blank"
                  href={`https://github.com/${instagram}`}
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "icon" }),
                  )}
                >
                  {/* @ts-expect-error: Entahlah SimpleIcon gaje */}
                  <SiGithub className="h-6 w-6 text-zinc-100" />
                </Link>
              ) : (
                <Button variant="ghost" size="icon" disabled>
                  {/* @ts-expect-error: Entahlah SimpleIcon gaje */}
                  <SiGithub className="h-6 w-6 text-zinc-100" />
                </Button>
              )}
              {username ? (
                <Link
                  target="_blank"
                  href={`https://blog.himarpl.com/@${username}`}
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "icon" }),
                  )}
                >
                  <UserCircle2Icon className="h-6 w-6 text-zinc-100" />
                </Link>
              ) : (
                <Button variant="ghost" size="icon" disabled>
                  <UserCircle2Icon className="h-6 w-6 text-zinc-100" />
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
