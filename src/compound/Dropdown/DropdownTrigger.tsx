import React, { useContext } from 'react';
import { DropdownContext } from './DropdownContext';
import styles from './Dropdown.module.css';

type DropdownTriggerProps = {
  children: React.ReactNode;
};

export const DropdownTrigger: React.FC<DropdownTriggerProps> = ({ children }) => {
  const context = useContext(DropdownContext);
  if (!context) throw new Error('DropdownTrigger must be used within Dropdown');

  return (
    <button
      onClick={() => context.setOpen(!context.open)}
      aria-haspopup="menu"
      aria-expanded={context.open}
      className={context.open ? `${styles['dropdown-trigger']} ${styles.open}` : styles['dropdown-trigger']}
    >
      {children}
    </button>
  );
}; 