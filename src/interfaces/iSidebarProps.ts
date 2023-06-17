export interface ISidebarProps {
  isCollapsed?: boolean;
  setCollapse?: (collapsed: boolean) => void;
  toggleSidebarcollapse?: () => void;
  selectedContent: string;
  handleSelectedContent: (contentName: string) => void;
}
