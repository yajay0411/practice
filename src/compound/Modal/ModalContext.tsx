import React from "react";

type ModalContextProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

export const ModalContext = React.createContext<ModalContextProps | undefined>(
  undefined
);
