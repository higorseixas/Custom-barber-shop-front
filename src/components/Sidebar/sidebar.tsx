import styled from 'styled-components';
import { SidebarContext } from '@/contexts/SidebarContext';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import { SideBarButton } from '../Buttons/button';
import { PrimaryLogo } from '../Logo/primaryLogo';
import { LeftSidearrowIncon } from '../Svgs';
import { SubTitleSideBarH3 } from '../Titles/primaryTitles';
import {BrowserRouter as Router, Routes, Route, Link, useLocation} from 'react-router-dom';
import CaixaPage from '@/pages/caixaPage';
import App from '@/pages';
import { sidebarData } from './sidebarData';


const SidebarContainer = styled.div<{ Collapsed: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: ${({ Collapsed }) => (Collapsed ? "50px" : "200px")};
  height: 100vh;
  background-color: #f2f2f2;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.1);
  position: relative;

  @media screen and (max-width: 768px) {
    height: unset;
  }
`;

const Line = styled.hr`
  margin: 10px 0;
  border: 0;
  height: 1px;
  background-color: #ccc;
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
`;

const NavContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const NavItem = styled.div<{ Collapsed: boolean }>`
  display: flex;
  align-items: center;
  padding: ${({ Collapsed }) => (Collapsed ? "10px" : "10px 20px")};
  /* padding: 10px; */
  border-radius: 20px;
  margin-bottom: 10px;
  cursor: pointer;

  &:hover {
    background-color: #ccc;
  }
`;

const NavItemIcon = styled.div<{ Collapsed: boolean }>`
  display: flex;
  align-items: center;
  justify-content: ${({ Collapsed }) => (Collapsed ? "center" : "flex-start")};
  margin-right: ${({ Collapsed }) => (Collapsed ? "0" : "10px")};
`;

const UserContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  margin-top: auto;
`;

const UserAvatar = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 10px;
`;


export default function Sidebar() {
  const router = useRouter();
  const { isCollapsed, toggleSidebarcollapse } = useContext(SidebarContext);

  return (
    <Router>
      <SidebarContainer Collapsed={isCollapsed}>
        <SideBarButton onClick={toggleSidebarcollapse}>
          {!isCollapsed ? <LeftSidearrowIncon style={{transform: "scaleX(-1)"}} /> : <LeftSidearrowIncon/>}
        </SideBarButton>
        <NavContainer>
          <LogoContainer>
            <PrimaryLogo 
                src="/images/logo.png"
                width="60px"
                height="60px"
                />
          </LogoContainer>
          <Line/>
          {sidebarData.map((item) => (
            <Link
            style={{ textDecoration: "none", color: "inherit" }}
            to={item.path}
            key={item.name}
            >
            <NavItem
              Collapsed={isCollapsed}
              style={{
                backgroundColor:
                location.pathname === item.path ? "#10b981" : "",
              }}
              >
              <NavItemIcon Collapsed={isCollapsed}>{item.icon}</NavItemIcon>
              {!isCollapsed && (
                <SubTitleSideBarH3>{item.name}</SubTitleSideBarH3>
                )}
            </NavItem>
          </Link>
          ))}
        </NavContainer>
        {/* <Routes>
          <Route path="/" element={<App/>}>
            <Route path="/caixaPage" element={<CaixaPage/>} />
          </Route>
          <Route path="/agendamentosPage" element={<h1>Topics</h1>} />
          <Route path="/" element={<h1>Home</h1>} />
        </Routes> */}
        <UserContainer>
          <UserAvatar src="/images/logo.png" alt="User Avatar" />
          {!isCollapsed && <SubTitleSideBarH3>John Doe</SubTitleSideBarH3>}
        </UserContainer>
      </SidebarContainer>
    </Router>
  );
}
