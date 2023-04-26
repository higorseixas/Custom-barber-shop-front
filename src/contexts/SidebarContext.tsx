import { ISidebarProps } from '@/interfaces/iSidebarProps';
import React, { useState, createContext, ReactNode } from 'react';


export const SidebarContext = createContext<ISidebarProps>({
  isCollapsed: false,
  setCollapse: () => { },
  selectedContent: '',
  handleSelectedContent: () => { }
});

export function SidebarProvider({ children }: { children: ReactNode }) {
  const [isCollapsed, setCollapse] = useState(false);
  const [selectedContent, setSelectedContent] = useState<string>('caixa')

  const toggleSidebarcollapse = () => {
    setCollapse((prevState) => !prevState);
  };

  const handleSelectedContent = (content: string) => {
    setSelectedContent(content)
  }

  return (
    <SidebarContext.Provider value={
      {
        isCollapsed,
        toggleSidebarcollapse,
        selectedContent,
        handleSelectedContent
      }
    }>
      {children}
    </SidebarContext.Provider>
  );
};
