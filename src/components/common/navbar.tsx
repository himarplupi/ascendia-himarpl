"use client";

import {
  BookUserIcon,
  FlameIcon,
  HeartHandshakeIcon,
  HomeIcon,
  MenuIcon,
  NewspaperIcon,
  XIcon,
} from "lucide-react";

import { LogoHIMARPLLandscape } from "@/components/brand/logo-himarpl-landscape";
import { Nav } from "@/components/common/nav";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export function Navbar() {
  return (
    <div className="fixed top-0 z-10 flex w-full justify-center bg-background shadow">
      <nav className="container flex items-center justify-between">
        <LogoHIMARPLLandscape />

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
            <Button className="md:hidden" size="icon" variant="outline">
              <MenuIcon />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="flex flex-col justify-between">
            <div>
              <SheetHeader>
                <SheetTitle className="sr-only">HIMARPL</SheetTitle>
                <LogoHIMARPLLandscape className="w-40" />
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
    </div>
  );
}
