import React from "react";
import styles from "./Tabs.module.css";

type TabsListProps = { children: React.ReactNode };
export const TabsList: React.FC<TabsListProps> = ({ children }) => (
  <div className={styles["tabs-list"]} role="tablist">
    {children}
  </div>
);
