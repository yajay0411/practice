import React, { useContext, useEffect, useRef } from "react";
import { ModalContext } from "./ModalContext";

export const ModalContent: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const context = useContext(ModalContext);
  const ref = useRef<HTMLDivElement>(null);
  if (!context) throw new Error("ModalContent must be used within Modal");

  useEffect(() => {
    if (!context.open) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") context.setOpen(false);
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [context]);

  useEffect(() => {
    if (context.open && ref.current) {
      ref.current.focus();
    }
  }, [context.open]);

  if (!context.open) return null;

  return (
    <div
      className="modal-content"
      role="dialog"
      aria-modal="true"
      tabIndex={-1}
      ref={ref}
      style={{
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        background: "#fff",
        padding: 24,
        borderRadius: 8,
        minWidth: 300,
      }}
    >
      {children}
      <button
        onClick={() => context.setOpen(false)}
        aria-label="Close modal"
        style={{ position: "absolute", top: 8, right: 8 }}
      >
        ×
      </button>
    </div>
  );
};
