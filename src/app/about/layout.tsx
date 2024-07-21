import type { Metadata } from "next";

import { Footer, GlobalFooter } from "@/components/common";
import { Portals } from "@/components/common/portals";

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
    <>
      {children}

      <section className="container min-h-64 w-full py-12">
        <Portals />
      </section>
      <Footer />
      <GlobalFooter />
    </>
  );
}
