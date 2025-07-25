import React, { useContext } from "react";
import { ModalContext } from "./ModalContext";

type ModalTriggerProps = {
  children: React.ReactNode;
};

export const ModalTrigger: React.FC<ModalTriggerProps> = ({ children }) => {
  const context = useContext(ModalContext);
  if (!context) throw new Error("ModalTrigger must be used within Modal");

  return (
    <button
      onClick={() => context.setOpen(true)}
      aria-haspopup="dialog"
      aria-expanded={context.open}
      className={context.open ? "open" : ""}
    >
      {children}
    </button>
  );
};
