"use client";

import { useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";

import { UnderlineHover } from "../motion/underline-hover";

export function Footer() {
  const pathname = usePathname();
  const pathSegments = useCallback(
    () => pathname.split("/").filter(Boolean),
    [pathname],
  )();

  return (
    <footer className="bg-secondary/50">
      <div className="container">
        <div className="flex flex-col justify-between gap-4 py-8 text-sm sm:flex-row sm:items-center md:px-8">
          <div className="space-y-3">
            <Breadcrumb>
              <BreadcrumbList>
                {pathname.length > 1 && (
                  <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                      <Link href="/">home</Link>
                    </BreadcrumbLink>
                    <BreadcrumbSeparator />
                  </BreadcrumbItem>
                )}

                {pathSegments.map((segment, index) => {
                  const href = `/${pathSegments.slice(0, index + 1).join("/")}`;

                  return index !== pathSegments.length - 1 ? (
                    <BreadcrumbItem key={segment}>
                      <BreadcrumbLink asChild>
                        <Link href={href}>{segment}</Link>
                      </BreadcrumbLink>
                      <BreadcrumbSeparator />
                    </BreadcrumbItem>
                  ) : (
                    <BreadcrumbItem key={segment}>
                      <BreadcrumbPage>{segment}</BreadcrumbPage>
                    </BreadcrumbItem>
                  );
                })}
              </BreadcrumbList>
            </Breadcrumb>

            <p className="max-w-[512px] text-balance leading-5 text-muted-foreground [&:not(:first-child)]:mt-2">
              HIMARPL merupakan organisasi kemahasiswaan program studi Rekayasa
              Perangkat Lunak Universitas Pendidikan Indonesia Kampus UPI di
              Cibiru.
            </p>
          </div>

          <div className="flex h-64 items-center gap-x-4">
            <Separator orientation="vertical" />
            <ul className="flex flex-col gap-y-1">
              <li>
                <UnderlineHover className="h-[2px] bg-muted-foreground">
                  <Link href="/" className="text-muted-foreground">
                    Beranda
                  </Link>
                </UnderlineHover>
              </li>
              <li>
                <UnderlineHover className="h-[2px] bg-muted-foreground">
                  <Link href="/dedication" className="text-muted-foreground">
                    Dedikasi
                  </Link>
                </UnderlineHover>
              </li>
              <li>
                <UnderlineHover className="h-[2px] bg-muted-foreground">
                  <Link href="/news" className="text-muted-foreground">
                    Berita
                  </Link>
                </UnderlineHover>
              </li>
              <li>
                <UnderlineHover className="h-[2px] bg-muted-foreground">
                  <Link href="/about" className="text-muted-foreground">
                    Tentang Kami
                  </Link>
                </UnderlineHover>
              </li>
              <li>
                <UnderlineHover className="h-[2px] bg-muted-foreground">
                  <Link href="/about/be" className="text-muted-foreground">
                    Badan Eksekutif
                  </Link>
                </UnderlineHover>
              </li>
              <li>
                <UnderlineHover className="h-[2px] bg-muted-foreground">
                  <Link href="/about/dp" className="text-muted-foreground">
                    Dewan Perwakilan
                  </Link>
                </UnderlineHover>
              </li>
              <li>
                <UnderlineHover className="h-[2px] bg-muted-foreground">
                  <Link href="/contact" className="text-muted-foreground">
                    Kontak
                  </Link>
                </UnderlineHover>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
