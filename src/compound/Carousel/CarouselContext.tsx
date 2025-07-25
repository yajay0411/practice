import React from "react";

type CarouselContextProps = {
  activeIndex: number;
  setActiveIndex: (index: number) => void;
  slideCount: number;
  next: () => void;
  prev: () => void;
};

export const CarouselContext = React.createContext<
  CarouselContextProps | undefined
>(undefined);
