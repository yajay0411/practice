import React, { useContext } from "react";
import { AccordionContext } from "./AccordionContext";
import { AccordionItemIndexContext } from "./AccordionItem";
import styles from "./Accordion.module.css";

export const AccordionHeader: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const context = useContext(AccordionContext);
  const index = useContext(AccordionItemIndexContext);
  if (!context || index === undefined)
    throw new Error("AccordionHeader must be used within Accordion.Item");

  const isOpen = context.openIndexes.includes(index);

  return (
    <button
      onClick={() => context.toggleIndex(index)}
      aria-expanded={isOpen}
      aria-controls={`accordion-panel-${index}`}
      className={
        isOpen
          ? `${styles["accordion-header"]} ${styles.open}`
          : styles["accordion-header"]
      }
      role="button"
    >
      {children}
    </button>
  );
};
