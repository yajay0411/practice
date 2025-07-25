import React, { useState } from "react";
import { CarouselContext } from "./CarouselContext";
import { CarouselSlide } from "./CarouselSlide";
import { CarouselNext } from "./CarouselNext";
import { CarouselPrev } from "./CarouselPrev";
import { CarouselIndicators } from "./CarouselIndicators";
import styles from "./Carousel.module.css";

type CarouselProps = {
  children: React.ReactNode;
};

export const Carousel: React.FC<CarouselProps> & {
  Slide: typeof CarouselSlide;
  Next: typeof CarouselNext;
  Prev: typeof CarouselPrev;
  Indicators: typeof CarouselIndicators;
} = ({ children }) => {
  const slides = React.Children.toArray(children).filter(
    (child: any) => child.type && child.type.displayName === "CarouselSlide"
  );
  const [activeIndex, setActiveIndex] = useState(0);
  const slideCount = slides.length;
  const next = () => setActiveIndex((i) => (i + 1) % slideCount);
  const prev = () => setActiveIndex((i) => (i - 1 + slideCount) % slideCount);

  return (
    <CarouselContext.Provider
      value={{ activeIndex, setActiveIndex, slideCount, next, prev }}
    >
      <div className={styles.carousel}>{children}</div>
    </CarouselContext.Provider>
  );
};

Carousel.Slide = CarouselSlide;
Carousel.Next = CarouselNext;
Carousel.Prev = CarouselPrev;
Carousel.Indicators = CarouselIndicators;
