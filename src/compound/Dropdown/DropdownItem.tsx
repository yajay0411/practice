import React, { useContext } from "react";
import { DropdownContext } from "./DropdownContext";
import styles from "./Dropdown.module.css";

type DropdownItemProps = {
  children: React.ReactNode;
  onClick?: () => void;
};

export const DropdownItem: React.FC<DropdownItemProps> = ({
  children,
  onClick,
}) => {
  const context = useContext(DropdownContext);
  if (!context) throw new Error("DropdownItem must be used within Dropdown");

  const handleClick = () => {
    onClick?.();
    context.setOpen(false);
  };

  return (
    <div
      className={styles["dropdown-item"]}
      role="menuitem"
      tabIndex={0}
      onClick={handleClick}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") handleClick();
      }}
    >
      {children}
    </div>
  );
};
