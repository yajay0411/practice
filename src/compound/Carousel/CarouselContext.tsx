import React from "react";

type CarouselContextProps = {
  activeIndex: number;
  setActiveIndex: (index: number) => void;
  slideCount: number;
  next: () => void;
  prev: () => void;
  visibleSlides: number;
};

export const CarouselContext = React.createContext<
  CarouselContextProps | undefined
>(undefined);
