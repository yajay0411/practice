import React from "react";

type TabsContextProps = {
  activeIndex: number;
  setActiveIndex: (index: number) => void;
};

export const TabsContext = React.createContext<TabsContextProps | undefined>(
  undefined
);
