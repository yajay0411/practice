import React, { useContext } from "react";
import { TabsContext } from "./TabsContext";
import styles from "./Tabs.module.css";

type PanelProps = {
  index: number;
  children: React.ReactNode;
};

export const Panel: React.FC<PanelProps> = ({ index, children }) => {
  const context = useContext(TabsContext);
  if (!context) throw new Error("Panel must be used within Tabs");

  return context.activeIndex === index ? (
    <div className={styles["tab-panel"]} role="tabpanel" tabIndex={0}>
      {children}
    </div>
  ) : null;
};
