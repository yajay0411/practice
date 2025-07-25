import React, { useState } from "react";
import { TabsContext } from "./TabsContext";
import { TabsList } from "./TabsList";
import { Tab } from "./Tab";
import { Panel } from "./Panel";

type TabsProps = {
  defaultIndex?: number;
  children: React.ReactNode;
};

export const Tabs: React.FC<TabsProps> & {
  List: typeof TabsList;
  Tab: typeof Tab;
  Panel: typeof Panel;
} = ({ defaultIndex = 0, children }) => {
  const [activeIndex, setActiveIndex] = useState(defaultIndex);

  return (
    <TabsContext.Provider value={{ activeIndex, setActiveIndex }}>
      <div className="tabs">{children}</div>
    </TabsContext.Provider>
  );
};

Tabs.List = TabsList;
Tabs.Tab = Tab;
Tabs.Panel = Panel;
