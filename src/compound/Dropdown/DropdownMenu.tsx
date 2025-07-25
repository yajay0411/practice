import React, { useContext } from "react";
import { DropdownContext } from "./DropdownContext";
import styles from "./Dropdown.module.css";

type DropdownMenuProps = {
  children: React.ReactNode;
};

export const DropdownMenu: React.FC<DropdownMenuProps> = ({ children }) => {
  const context = useContext(DropdownContext);
  if (!context) throw new Error("DropdownMenu must be used within Dropdown");

  return context.open ? (
    <div className={styles["dropdown-menu"]} role="menu">
      {children}
    </div>
  ) : null;
};
