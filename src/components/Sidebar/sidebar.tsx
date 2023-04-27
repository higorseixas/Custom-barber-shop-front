import styled from 'styled-components';
import Link from 'next/link';
import { SidebarContext } from '@/contexts/SidebarContext';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import { SideBarButton } from '../Buttons/button';
import { PrimaryLogo } from '../Logo/primaryLogo';
import { CalenderIcon, ClientIcon, ConfigIncon, LeftSidearrowIncon, MenuDashboardIcon, PaymentIcon, ServicesIcon } from '../Svgs';
import { SubTitleSideBarH3 } from '../Titles/primaryTitles';
import { Line, LogoContainer, NavContainer, NavItem, NavItemIcon, SidebarContainer, UserAvatar, UserContainer } from './styles';
import { SidebarData } from './sidebarData';


export default function Sidebar() {
  const router = useRouter();
  const { isCollapsed, toggleSidebarcollapse, handleSelectedContent } = useContext(SidebarContext);

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
        </LogoContainer>s
        <Line />
        {SidebarData.map((item) => (
          <button
            style={{ textDecoration: "none", color: "inherit" }}
            onClick={() => handleChangeContent(item.href)}
          >
            <NavItem
              Collapsed={isCollapsed}
              style={{
                backgroundColor:
                  router.pathname === item.href ? "#10b981" : "",
              }}
            >
              <NavItemIcon Collapsed={isCollapsed}>{item.icon}</NavItemIcon>
              {!isCollapsed && (
                <SubTitleSideBarH3>{item.name}</SubTitleSideBarH3>
              )}
            </NavItem>
          </button>
        ))}
      </NavContainer>
      <UserContainer>
        <UserAvatar src="/images/logo.png" alt="User Avatar" />
        {!isCollapsed && <SubTitleSideBarH3>John Doe</SubTitleSideBarH3>}
      </UserContainer>
    </SidebarContainer>
  );
}
