import React from "react";

type AccordionContextProps = {
  openIndexes: number[];
  toggleIndex: (index: number) => void;
  allowMultiple: boolean;
};

export const AccordionContext = React.createContext<
  AccordionContextProps | undefined
>(undefined);
