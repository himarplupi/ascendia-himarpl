import type { Metadata } from "next";

import { GlobalFooter, LenisSmoothScroll } from "@/components/common";

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
    <LenisSmoothScroll>
      {children}
      <GlobalFooter />
    </LenisSmoothScroll>
  );
}
