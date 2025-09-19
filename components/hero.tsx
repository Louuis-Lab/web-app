"use client";
import * as React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Hero() {
  const itemCount = 5;
  const [activeIndex, setActiveIndex] = useState(0);

  // Autoplay effect
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % itemCount);
    }, 2500);
    return () => clearInterval(interval);
  }, [itemCount]);

  return (
    <div className="flex justify-center items-center min-h-[70vh]">
      <Carousel
        opts={{ align: "center" }}
        className="w-full max-w-6xl"
        value={activeIndex}
        onValueChange={setActiveIndex}
      >
        <CarouselContent>
          {Array.from({ length: itemCount }).map((_, index) => (
            <CarouselItem key={index} className="basis-1/3 flex justify-center items-center">
              <Card className="w-full h-full" style={{ background: "var(--pink)" }}>
                <CardContent className="p-0 w-full h-full">
                    <div className="aspect-square w-full h-full overflow-hidden">
                    <Image
                        src={`https://picsum.photos/seed/${index}/800`}
                        alt={`Mock ${index + 1}`}
                        width={10000}
                        height={1000}
                        className="object-fill w-full h-full"
                    />
                    </div>
                </CardContent>
                </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious
          className="w-5 h-5 text-xs"
          style={{ background: "var(--pink)", color: "#fff" }}
        />
        <CarouselNext
          className="w-5 h-5 text-xs"
          style={{ background: "var(--pink)", color: "#fff" }}
        />
      </Carousel>
    </div>
  );
}