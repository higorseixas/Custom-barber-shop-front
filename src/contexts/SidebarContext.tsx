import { ISidebarProps } from '@/interfaces/iSidebarProps';
import React, { useState, createContext, ReactNode } from 'react';


export const SidebarContext = createContext<ISidebarProps>({
  isCollapsed: false,
  setCollapse: () => {},
});

export function SidebarProvider({ children }: { children: ReactNode }) {
  const [isCollapsed, setCollapse] = useState(false);

  const toggleSidebarcollapse = () => {
    setCollapse((prevState) => !prevState);
  };

  return (
    <SidebarContext.Provider value={{ isCollapsed, toggleSidebarcollapse }}>
      {children}
    </SidebarContext.Provider>
  );
};
