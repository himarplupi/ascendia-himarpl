import { Montserrat as FontSans } from "next/font/google";
import localFont from "next/font/local";

import { Navbar } from "@/components/common";
import { LenisSmoothScroll } from "@/components/common";
import { CSPostHogProvider } from "@/components/posthog-provider";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import { TRPCReactProvider } from "@/trpc/react";

import "@/styles/globals.css";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontSerif = localFont({
  src: [
    {
      path: "./fonts/minion-pro/MinionPro-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/minion-pro/MinionPro-It.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "./fonts/minion-pro/MinionPro-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/minion-pro/MinionPro-MediumIt.otf",
      weight: "500",
      style: "italic",
    },
    {
      path: "./fonts/minion-pro/MinionPro-Semibold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/minion-pro/MinionPro-SemiboldIt.otf",
      weight: "600",
      style: "italic",
    },
    {
      path: "./fonts/minion-pro/MinionPro-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/minion-pro/MinionPro-BoldIt.otf",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-serif",
});

export const metadata = {
  title: "HIMARPL",
  description:
    "Wujud kebersamaan, kolaborasi, dedikasi, inspirasi, inovasi, dan prestasi kami, mahasiswa RPL. HIMARPL adalah organisasi kemahasiswaan program studi Rekayasa Perangkat Lunak Universitas Pendidikan Indonesia",
  icons: [
    {
      rel: "icon",
      url: "/favicon.ico",
    },
  ],
  metadataBase: new URL("https://www.himarpl.com"),
  openGraph: {
    title: "HIMARPL",
    description:
      "Wujud kebersamaan, kolaborasi, dedikasi, inspirasi, inovasi, dan prestasi kami, mahasiswa RPL. HIMARPL adalah organisasi kemahasiswaan program studi Rekayasa Perangkat Lunak Universitas Pendidikan Indonesia",
    url: "https://www.himarpl.com",
    siteName: "HIMARPL",
    images: "https://www.himarpl.com/opengraph-image.gif",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "HIMARPL",
    description:
      "Wujud kebersamaan, kolaborasi, dedikasi, inspirasi, inovasi, dan prestasi kami, mahasiswa RPL. HIMARPL adalah organisasi kemahasiswaan program studi Rekayasa Perangkat Lunak Universitas Pendidikan Indonesia",
    creator: "@himarpl",
    images: ["https://www.himarpl.com/twitter-image.gif"], // Must be an absolute URL
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <CSPostHogProvider>
        <body
          className={cn(
            "min-h-screen font-sans antialiased",
            fontSans.variable,
            fontSerif.variable,
          )}
        >
          <TRPCReactProvider>
            <ThemeProvider
              forcedTheme="light"
              attribute="class"
              defaultTheme="light"
            >
              <LenisSmoothScroll root>
                <Navbar />
                {children}
              </LenisSmoothScroll>
            </ThemeProvider>
          </TRPCReactProvider>
        </body>
      </CSPostHogProvider>
    </html>
  );
}
