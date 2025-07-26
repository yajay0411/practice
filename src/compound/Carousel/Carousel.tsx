import React, { useState } from "react";
import { CarouselContext } from "./CarouselContext";
import { CarouselSlide } from "./CarouselSlide";
import { CarouselNext } from "./CarouselNext";
import { CarouselPrev } from "./CarouselPrev";
import { CarouselIndicators } from "./CarouselIndicators";
import styles from "./Carousel.module.css";

type CarouselProps = {
  children: React.ReactNode;
  visibleSlides?: number;
  gap?: string; // e.g. '1rem', '16px'
};

type CarouselSlideElement = React.ReactElement<{ index: number }>;

function hasDisplayName(child: React.ReactElement, name: string): boolean {
  return (
    typeof child.type === "function" &&
    (child.type as React.FC).displayName === name
  );
}

export const Carousel: React.FC<CarouselProps> & {
  Slide: typeof CarouselSlide;
  Next: typeof CarouselNext;
  Prev: typeof CarouselPrev;
  Indicators: typeof CarouselIndicators;
} = ({ children, visibleSlides = 1, gap = "1rem" }) => {
  const slides = React.Children.toArray(children)
    .filter((child): child is React.ReactElement => React.isValidElement(child))
    .filter((child) => hasDisplayName(child, "CarouselSlide"));
  const [activeIndex, setActiveIndex] = useState(0);
  const slideCount = slides.length;
  const next = () => setActiveIndex((i) => (i + 1) % slideCount);
  const prev = () => setActiveIndex((i) => (i - 1 + slideCount) % slideCount);

  // Compute visible indices in correct order
  const visibleIndices = Array.from(
    { length: visibleSlides },
    (_, i) => (activeIndex + i) % slideCount
  );
  const visibleSlidesArr = visibleIndices.map((idx) => {
    // Find the slide with the matching index prop
    return slides.find(
      (slide) => (slide as CarouselSlideElement).props.index === idx
    );
  });

  return (
    <CarouselContext.Provider
      value={{
        activeIndex,
        setActiveIndex,
        slideCount,
        next,
        prev,
        visibleSlides,
      }}
    >
      <div
        className={styles.carousel}
        style={{ ["--carousel-gap"]: gap } as React.CSSProperties}
      >
        <div className={styles["carousel-slider"]}>{visibleSlidesArr}</div>
        {React.Children.toArray(children).filter(
          (child) =>
            React.isValidElement(child) &&
            !(
              child.type &&
              typeof child.type === "function" &&
              (child.type as React.FC).displayName === "CarouselSlide"
            )
        )}
      </div>
    </CarouselContext.Provider>
  );
};

Carousel.Slide = CarouselSlide;
Carousel.Next = CarouselNext;
Carousel.Prev = CarouselPrev;
Carousel.Indicators = CarouselIndicators;
