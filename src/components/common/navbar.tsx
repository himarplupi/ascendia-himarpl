"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import {
  BookUserIcon,
  FlameIcon,
  HeartHandshakeIcon,
  HomeIcon,
  MenuIcon,
  NewspaperIcon,
  XIcon,
} from "lucide-react";

import { Nav } from "@/components/common/nav";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import LogoLandscapeHIMARPLDark from "@/images/logo-landscape-dark.png";
import LogoLandscapeHIMARPLLight from "@/images/logo-landscape-light.png";
import { cn } from "@/lib/utils";

interface BrandLogoProps {
  className?: string;
}

function BrandLogo({ className }: BrandLogoProps) {
  const { resolvedTheme } = useTheme();

  return (
    <div
      id="brand-logo"
      className={cn("relative aspect-video w-32", className)}
    >
      <Image
        className="object-scale-down"
        src={
          resolvedTheme === "dark"
            ? LogoLandscapeHIMARPLDark
            : LogoLandscapeHIMARPLLight
        }
        alt="logo landscape HIMARPL"
        fill
      />
    </div>
  );
}

export function Navbar() {
  return (
    <nav className="container fixed z-50 flex items-center justify-between bg-background shadow">
      <BrandLogo />

      <Nav
        className="hidden md:flex"
        links={[
          {
            title: "Beranda",
            href: "/",
            icon: HomeIcon,
            variant: "ghost",
          },
          {
            title: "Dedikasi",
            href: "/dedication",
            icon: HeartHandshakeIcon,
            variant: "ghost",
          },
          {
            title: "Berita",
            href: "/news",
            icon: NewspaperIcon,
            variant: "ghost",
          },
          {
            title: "Tentang Kami",
            href: "/about",
            icon: FlameIcon,
            variant: "ghost",
          },
          {
            title: "Kontak",
            href: "/contact",
            icon: BookUserIcon,
            variant: "ghost",
          },
        ]}
      />

      <Sheet>
        <SheetTrigger asChild>
          <Button size="icon" variant="outline">
            <MenuIcon />
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="flex flex-col justify-between">
          <div>
            <SheetHeader>
              <BrandLogo className="w-40" />
            </SheetHeader>
            <Nav
              links={[
                {
                  title: "Beranda",
                  href: "/",
                  icon: HomeIcon,
                  variant: "ghost",
                },
                {
                  title: "Dedikasi",
                  href: "/dedication",
                  icon: HeartHandshakeIcon,
                  variant: "ghost",
                },
                {
                  title: "Berita",
                  href: "/news",
                  icon: NewspaperIcon,
                  variant: "ghost",
                },
                {
                  title: "Tentang Kami",
                  href: "/about",
                  icon: FlameIcon,
                  variant: "ghost",
                },
                {
                  title: "Kontak",
                  href: "/contact",
                  icon: BookUserIcon,
                  variant: "ghost",
                },
              ]}
            />
          </div>
          <SheetFooter>
            <SheetClose asChild>
              <Button variant="ghost">
                <XIcon />
              </Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </nav>
  );
}
