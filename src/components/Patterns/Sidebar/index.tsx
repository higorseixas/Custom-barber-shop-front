import { SidebarContext } from '@/contexts/SidebarContext';
import { useContext } from 'react';
import { SideBarButton, SideBarButtonNavigation } from '../../Buttons/button';
import { PrimaryLogo } from '../../Logo/primaryLogo';
import { LeftSidearrowIncon } from '../../Svgs';
import { SubTitleSideBarH3 } from '../../Titles/primaryTitles';
import { 
  Line, 
  LogoContainer, 
  NavContainer, 
  NavItem, 
  NavItemIcon, 
  SidebarContainer, 
  UserAvatar, 
  UserContainer
} from './styles';
import { SidebarData } from './sidebarData';


export default function Sidebar() {
  const { isCollapsed, toggleSidebarcollapse, handleSelectedContent } = useContext(SidebarContext);
  const { selectedContent } = useContext(SidebarContext);

  const handleChangeContent = (content: string) => {
    handleSelectedContent(content)
  }

  return (
    <SidebarContainer Collapsed={isCollapsed}>
      <SideBarButton onClick={toggleSidebarcollapse}>
        {!isCollapsed ? <LeftSidearrowIncon style={{ transform: "scaleX(-1)" }} /> : <LeftSidearrowIncon />}
      </SideBarButton>
      <NavContainer>
        <LogoContainer>
          <PrimaryLogo
            src="/images/logo.png"
            width="60px"
            height="60px"
          />
        </LogoContainer>
        <Line />
        {SidebarData.map((item) => (
          <SideBarButtonNavigation
            onClick={() => handleChangeContent(item.href)}
          >
            <NavItem
              Collapsed={isCollapsed}
              style={{
                backgroundColor:
                selectedContent === item.href ? "#10b981" : "",
              }}
            >
              <NavItemIcon Collapsed={isCollapsed}>{item.icon}</NavItemIcon>
              {!isCollapsed && (
                <SubTitleSideBarH3>{item.name}</SubTitleSideBarH3>
              )}
            </NavItem>
          </SideBarButtonNavigation>
        ))}
      </NavContainer>
      <UserContainer>
        <UserAvatar src="/images/logo.png" alt="User Avatar" />
        {!isCollapsed && <SubTitleSideBarH3>John Doe</SubTitleSideBarH3>}
      </UserContainer>
    </SidebarContainer>
  );
}
