import type { Metadata } from "next";

import { Footer, GlobalFooter } from "@/components/common";
import { Portals } from "@/components/common/portals";

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

      <section className="container min-h-64 w-full py-12">
        <Portals />
      </section>
      <Footer />
      <GlobalFooter />
    </>
  );
}
