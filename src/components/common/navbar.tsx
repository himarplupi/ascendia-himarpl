"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import {
  BookUserIcon,
  FlameIcon,
  HeartHandshakeIcon,
  HomeIcon,
  NewspaperIcon,
} from "lucide-react";

import LogoLandscapeHIMARPLDark from "@/images/logo-landscape-dark.png";
import LogoLandscapeHIMARPLLight from "@/images/logo-landscape-light.png";

import { Nav } from "./nav";
export function Navbar() {
  const { resolvedTheme } = useTheme();

  return (
    <nav className="container bg-zinc-200">
      <div id="brand-logo" className="relative aspect-video w-32">
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
    </nav>
  );
}
