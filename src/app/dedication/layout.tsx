import type { Metadata } from "next";

import { Footer, GlobalFooter } from "@/components/common";

export const metadata: Metadata = {
  title: "Dedikasi HIMARPL",
  description:
    "Dedikasi dari program kerja pengurus HIMARPL, yakni penangguhan dan cicilan UKT, cuti kuliah, AdForYou, serta forum Respiration, simak selengkapnya di sini!",
};

export default function DedicationLayout({
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
