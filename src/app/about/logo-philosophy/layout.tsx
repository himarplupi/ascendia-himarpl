import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Filosofi Logo HIMARPL",
  description:
    "Tinjau makna dari logo HIMARPL dan logo Kabinet Ascendia, simak selengkapnya di sini!",
};

export default function LogoPhilosophyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
