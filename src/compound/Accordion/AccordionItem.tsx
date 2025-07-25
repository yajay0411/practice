import React, { createContext } from "react";
import styles from "./Accordion.module.css";

export const AccordionItemIndexContext = createContext<number | undefined>(
  undefined
);

type AccordionItemProps = {
  index: number;
  children: React.ReactNode;
};

export const AccordionItem: React.FC<AccordionItemProps> = ({
  index,
  children,
}) => (
  <AccordionItemIndexContext.Provider value={index}>
    <div className={styles["accordion-item"]}>{children}</div>
  </AccordionItemIndexContext.Provider>
);
