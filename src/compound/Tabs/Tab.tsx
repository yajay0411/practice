import React, { useContext } from "react";
import { TabsContext } from "./TabsContext";
import styles from "./Tabs.module.css";

type TabProps = {
  index: number;
  children: React.ReactNode;
};

export const Tab: React.FC<TabProps> = ({ index, children }) => {
  const context = useContext(TabsContext);
  if (!context) throw new Error("Tab must be used within Tabs");

  const isActive = context.activeIndex === index;

  return (
    <button
      onClick={() => context.setActiveIndex(index)}
      className={`${styles.tab} ${isActive ? styles.active : ""}`}
      role="tab"
      aria-selected={isActive}
      tabIndex={isActive ? 0 : -1}
    >
      {children}
    </button>
  );
};
