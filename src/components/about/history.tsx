"use client";

import { LogoKabinet } from "@/components/about/logo-kabinet";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export function History() {
  return (
    <Carousel
      opts={{
        align: "center",
      }}
      className="w-full"
    >
      <CarouselContent className="-ml-4">
        <CarouselItem className="flex flex-col items-center justify-center pl-4 md:basis-1/2 lg:basis-1/4">
          <LogoKabinet year="2020" />
          <h6 className="mt-2 text-lg font-bold tracking-wide">
            {"Inisiator"}
          </h6>
          <span className="mt-1 font-medium">{"(2020)"}</span>
        </CarouselItem>
        <CarouselItem className="flex flex-col items-center justify-center pl-4 md:basis-1/2 lg:basis-1/4">
          <LogoKabinet year="2021" />
          <h6 className="mt-2 text-lg font-bold tracking-wide">{"Inspira"}</h6>
          <span className="mt-1 font-medium">{"(2021)"}</span>
        </CarouselItem>
        <CarouselItem className="flex flex-col items-center justify-center pl-4 md:basis-1/2 lg:basis-1/4">
          <LogoKabinet year="2022" />
          <h6 className="mt-2 text-lg font-bold tracking-wide">{"Explora"}</h6>
          <span className="mt-1 font-medium">{"(2022)"}</span>
        </CarouselItem>
        <CarouselItem className="flex flex-col items-center justify-center pl-4 md:basis-1/2 lg:basis-1/4">
          <LogoKabinet year="2023" />
          <h6 className="mt-2 text-lg font-bold tracking-wide">{"Manifest"}</h6>
          <span className="mt-1 font-medium">{"(2023)"}</span>
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  );
}
