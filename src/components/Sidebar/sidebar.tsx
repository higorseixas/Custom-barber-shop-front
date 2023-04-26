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


export default function Sidebar() {
  const router = useRouter();
  const { isCollapsed, toggleSidebarcollapse, handleSelectedContent } = useContext(SidebarContext);

  const sidebarItems = [
    {
      name: "Home",
      href: "dashboard",
      icon: <MenuDashboardIcon style={{
        marginRight: "10px",
        height: "30px",
        width: "30px"
      }} />,
    },
    {
      name: "Caixa",
      href: "caixa",
      icon: <PaymentIcon style={{
        marginRight: "10px",
        height: "30px",
        width: "30px"
      }} />,
    },
    {
      name: "Agendamento",
      href: "agendamento",
      icon: <CalenderIcon style={{
        marginRight: "10px",
        height: "30px",
        width: "30px"
      }} />,
    },
    {
      name: "Clientes",
      href: "clientes",
      icon: <ClientIcon style={{
        marginRight: "10px",
        height: "30px",
        width: "30px"
      }} />,
    },
    {
      name: "Produtos &\n Serviços",
      href: "produtosEServiços",
      icon: <ServicesIcon style={{
        marginRight: "10px",
        height: "30px",
        width: "30px"
      }} />,
    },
    {
      name: "Configurações",
      href: "configurações",
      icon: <ConfigIncon style={{
        marginRight: "10px",
        height: "30px",
        width: "30px"
      }} />,
    },
  ];

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
        {sidebarItems.map((item) => (
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
