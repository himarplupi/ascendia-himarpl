import type { Metadata } from "next";

import { GlobalFooter, LenisSmoothScroll } from "@/components/common";

export const metadata: Metadata = {
  title: "Tentang HIMARPL",
  description:
    "Mengenal lebih dekat HIMARPL dari sejarah, visi dan misi, serta struktur organisasi HIMARPL, simak selengkapnya di sini!",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <LenisSmoothScroll>
      {children}
      <GlobalFooter />
    </LenisSmoothScroll>
  );
}
