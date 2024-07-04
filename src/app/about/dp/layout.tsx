import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tentang Dewan Perwakilan",
  description:
    "Mengenal lebih dekat Dewan Perwakilan HIMARPL, simak selengkapnya di sini!",
};

export default function AboutDPLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
