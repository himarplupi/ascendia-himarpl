import Image from "next/image";

import LogoKabinet2020 from "@/images/logo-kabinet-2020.png";
import LogoKabinet2021 from "@/images/logo-kabinet-2021.png";
import LogoKabinet2022 from "@/images/logo-kabinet-2022.png";
import LogoKabinet2023 from "@/images/logo-kabinet-2023.png";
import { cn } from "@/lib/utils";

interface LogoKabinetProps {
  className?: string;
  year: "2020" | "2021" | "2022" | "2023";
}

export function LogoKabinet({ className, year }: LogoKabinetProps) {
  const logoKabinet =
    year === "2020"
      ? LogoKabinet2020
      : year === "2021"
        ? LogoKabinet2021
        : year === "2022"
          ? LogoKabinet2022
          : LogoKabinet2023;

  return (
    <div className={cn("relative aspect-video h-32", className)}>
      <Image
        src={logoKabinet}
        alt={`Logo Kabinet ${year}`}
        fill
        className="object-scale-down"
      />
    </div>
  );
}
