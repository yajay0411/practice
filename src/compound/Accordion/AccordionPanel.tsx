import React, { useContext } from "react";
import { AccordionContext } from "./AccordionContext";
import { AccordionItemIndexContext } from "./AccordionItem";
import styles from "./Accordion.module.css";

export const AccordionPanel: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const context = useContext(AccordionContext);
  const index = useContext(AccordionItemIndexContext);
  if (!context || index === undefined)
    throw new Error("AccordionPanel must be used within Accordion.Item");

  const isOpen = context.openIndexes.includes(index);

  return isOpen ? (
    <div
      id={`accordion-panel-${index}`}
      className={styles["accordion-panel"]}
      role="region"
      aria-labelledby={`accordion-header-${index}`}
    >
      {children}
    </div>
  ) : null;
};
