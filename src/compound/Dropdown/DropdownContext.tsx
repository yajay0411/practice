import React from "react";

type DropdownContextProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

export const DropdownContext = React.createContext<
  DropdownContextProps | undefined
>(undefined);
