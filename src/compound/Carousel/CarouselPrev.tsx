import React, { useContext } from "react";
import { CarouselContext } from "./CarouselContext";
import styles from "./Carousel.module.css";

export const CarouselPrev: React.FC = () => {
  const context = useContext(CarouselContext);
  if (!context) throw new Error("CarouselPrev must be used within Carousel");
  return (
    <button
      onClick={context.prev}
      aria-label="Previous slide"
      className={styles["carousel-prev"]}
    >
      ◀
    </button>
  );
};
