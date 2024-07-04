import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tentang Badan Eksekutif",
  description:
    "Mengenal lebih dekat Badan Eksekutif HIMARPL, simak selengkapnya di sini!",
};

export default function AboutBELayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
