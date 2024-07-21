import type { Metadata } from "next";

import { Footer, GlobalFooter } from "@/components/common";
import { Portals } from "@/components/common/portals";

export const metadata: Metadata = {
  title: "Kontak HIMARPL",
  description:
    "Narahubung dan sosial media HIMARPL, jangan ragu untuk menghubungi kami!",
};

export default function ContactLayout({
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
