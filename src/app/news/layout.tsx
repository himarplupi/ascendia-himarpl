import type { Metadata } from "next";

import { Footer, GlobalFooter } from "@/components/common";

export const metadata: Metadata = {
  title: "Berita HIMARPL",
  description: "Berita terkini dari HIMARPL, simak selengkapnya di sini!",
};

export default function NewsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}

      <Footer />
      <GlobalFooter />
    </>
  );
}
