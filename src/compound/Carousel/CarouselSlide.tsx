import React, { useContext } from "react";
import { CarouselContext } from "./CarouselContext";
import styles from "./Carousel.module.css";

export const CarouselSlide: React.FC<{
  index: number;
  children: React.ReactNode;
}> = ({ index, children }) => {
  const context = useContext(CarouselContext);
  if (!context) throw new Error("CarouselSlide must be used within Carousel");
  return context.activeIndex === index ? (
    <div
      className={styles["carousel-slide"]}
      role="group"
      aria-roledescription="slide"
    >
      {children}
    </div>
  ) : null;
};
CarouselSlide.displayName = "CarouselSlide";
