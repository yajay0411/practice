import React, { useState } from "react";
import { ModalContext } from "./ModalContext";
import { ModalTrigger } from "./ModalTrigger";
import { ModalOverlay } from "./ModalOverlay";
import { ModalContent } from "./ModalContent";
import styles from "./Modal.module.css";

type ModalProps = {
  children: React.ReactNode;
};

export const Modal: React.FC<ModalProps> & {
  Trigger: typeof ModalTrigger;
  Overlay: typeof ModalOverlay;
  Content: typeof ModalContent;
} = ({ children }) => {
  const [open, setOpen] = useState(false);

  return (
    <ModalContext.Provider value={{ open, setOpen }}>
      <div className={styles["modal-root"]}>{children}</div>
    </ModalContext.Provider>
  );
};

Modal.Trigger = ModalTrigger;
Modal.Overlay = ModalOverlay;
Modal.Content = ModalContent;
