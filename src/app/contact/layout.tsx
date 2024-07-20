import type { Metadata } from "next";

import { Footer, GlobalFooter } from "@/components/common";

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

      <Footer />
      <GlobalFooter />
    </>
  );
}
