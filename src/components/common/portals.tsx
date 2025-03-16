"use client";

import { useEffect, useState } from "react";
import { NewspaperIcon } from "lucide-react";

// import Ripple from "@/components//ui/ripple";
import AnimatedGridPattern from "@/components/ui/animated-grid-pattern";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import { cn } from "@/lib/utils";

const portals = [
  {
    Icon: NewspaperIcon,
    name: "Tulisan-tulisan Pengurus HIMARPL",
    description:
      "Tulisan-tulisan pengurus HIMARPL yang berisi informasi dan cerita seputar perkuliahan dan kehidupan kampus.",
    href: "https://blog.himarpl.com",
    cta: "Selengkapnya",
    background: (
      <AnimatedGridPattern
        numSquares={48}
        maxOpacity={0.1}
        duration={3}
        repeatDelay={1}
        className={cn(
          "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
          "absolute inset-x-0 inset-y-[-30%] -top-96 h-[200%] skew-y-12",
        )}
      />
    ),
    className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
  },
  // {
  //   Icon: GraduationCapIcon,
  //   name: "Penerimaan Mahasiswa Baru",
  //   description:
  //     "Informasi penerimaan mahasiswa baru jalur SNBP, SNBT, SM-UPI, dan SM-Prestasi program studi RPL UPI.",
  //   href: "https://pmb.himarpl.com",
  //   cta: "Selengkapnya",
  //   background: (
  //     <Ripple
  //       mainCircleSize={96}
  //       numCircles={12}
  //       mainCircleOpacity={0.28}
  //       className="-left-32 -top-40 md:-left-80"
  //     />
  //   ),
  //   className: "lg:row-start-1 lg:row-end-4 lg:col-start-1 lg:col-end-2",
  // },
  {
    Icon: NewspaperIcon,
    name: "Tulisan-tulisan Pengurus HIMARPL",
    description:
      "Tulisan-tulisan pengurus HIMARPL yang berisi informasi dan cerita seputar perkuliahan dan kehidupan kampus.",
    href: "https://blog.himarpl.com",
    cta: "Selengkapnya",
    background: (
      <AnimatedGridPattern
        numSquares={48}
        maxOpacity={0.1}
        duration={3}
        repeatDelay={1}
        className={cn(
          "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
          "absolute inset-x-0 inset-y-[-30%] -top-96 h-[200%] skew-y-12",
        )}
      />
    ),
    className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
  },
];

export function Portals() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <BentoGrid className="lg:grid-cols-2 lg:grid-rows-2">
      {portals.map((portal) => (
        <BentoCard key={portal.name} {...portal} />
      ))}
    </BentoGrid>
  );
}
