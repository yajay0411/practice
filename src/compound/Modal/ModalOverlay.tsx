import React, { useContext } from "react";
import { ModalContext } from "./ModalContext";

export const ModalOverlay: React.FC = () => {
  const context = useContext(ModalContext);
  if (!context) throw new Error("ModalOverlay must be used within Modal");

  if (!context.open) return null;

  return (
    <div
      className="modal-overlay"
      onClick={() => context.setOpen(false)}
      aria-hidden="true"
      style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.5)" }}
    />
  );
};
