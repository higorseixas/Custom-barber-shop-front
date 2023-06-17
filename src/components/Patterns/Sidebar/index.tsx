import { SidebarContext } from '@/contexts/SidebarContext';
import { useContext } from 'react';
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
import { SideBarButton, SideBarButtonNavigation } from '../../../components/buttons/Button';
import { PrimaryLogo } from '../../../components/logo/PrimaryLogo';


export default function Sidebar() {
  const { isCollapsed, toggleSidebarcollapse, handleSelectedContent } = useContext(SidebarContext);
  const { selectedContent } = useContext(SidebarContext);

  const handleChangeContent = (content: string) => {
    handleSelectedContent(content)
  }

  const handleToggleSidebar = () => {
    if (toggleSidebarcollapse) {
      toggleSidebarcollapse();
    }
  }

  return (
    <SidebarContainer Collapsed={isCollapsed || false}>
      <SideBarButton onClick={handleToggleSidebar}>
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
          <SideBarButtonNavigation key={item.name}
            onClick={() => handleChangeContent(item.href)}
          >
            <NavItem
              Collapsed={isCollapsed || false}
              style={{
                backgroundColor:
                  selectedContent === item.href ? "rgba(108, 99, 255, 0.7)" : "none",
              }}
            >
              <NavItemIcon Collapsed={isCollapsed || false}>{item.icon}</NavItemIcon>
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
