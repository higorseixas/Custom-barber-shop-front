import { ISidebarProps } from '@/interfaces/iSidebarProps';
import styled from 'styled-components';
import { SideBarButton } from './Buttons/button';
import { PrimaryLogo } from './Logo/primaryLogo';
import { CalenderIcon, ClientIcon, ConfigIncon, LeftSidearrowIncon, MenuDashboardIcon, PaymentIcon, ServicesIcon } from './Svgs';
import { SubTitleSideBarH3 } from './Titles/primaryTitles';


const SidebarContainer = styled.div<ISidebarProps>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: ${props => (props.collapsed ? '60px' : '200px')};
  height: 100vh;
  background-color: #f2f2f2;
  transition: width 0.2s ease-in-out;
  position: relative;
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

const NavItem = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  border-radius: 20px;
  margin-bottom: 10px;
  cursor: pointer;

  &:hover {
    background-color: #ccc;
  }
`;

const NavItemIcon = styled.img`
  width: 20px;
  margin-right: 10px;
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


export default function Sidebar(props: ISidebarProps) {
  const { collapsed, onCollapse } = props;

  return (
    <SidebarContainer collapsed={collapsed}>
      <SideBarButton onClick={onCollapse}>
        {!collapsed ? <LeftSidearrowIncon style={{transform: "scaleX(-1)"}} /> : <LeftSidearrowIncon/>}
      </SideBarButton>
      <NavContainer>
        <LogoContainer>
          <PrimaryLogo 
              src="/images/logo.png"
              width="60px"
              height="60px"
            />
        </LogoContainer>
        <NavItem>
          <MenuDashboardIcon style={{
              marginRight:"10px", 
              height:"30px", 
              width: "30px" 
          }}/>
          {!collapsed && <SubTitleSideBarH3>Menu</SubTitleSideBarH3>}
        </NavItem>
        <NavItem>
          <PaymentIcon style={{
              marginRight:"10px", 
              height:"30px", 
              width: "30px" 
          }}/>
          {!collapsed && <SubTitleSideBarH3>Caixa</SubTitleSideBarH3>}
        </NavItem>
        <NavItem>
          <CalenderIcon style={{
              marginRight:"10px", 
              height:"30px", 
              width: "30px" 
          }}/>
          {!collapsed && <SubTitleSideBarH3>Agendamento</SubTitleSideBarH3>}
        </NavItem>
        <NavItem>
          <ClientIcon style={{
              marginRight:"10px", 
              height:"30px", 
              width: "30px" 
          }}/>
          {!collapsed && <SubTitleSideBarH3>Clientes</SubTitleSideBarH3>}
        </NavItem>
        <NavItem>
          <ServicesIcon style={{
              marginRight:"10px", 
              height:"30px", 
              width: "30px" 
          }}/>
          {!collapsed && <SubTitleSideBarH3>Produtos & Serviços</SubTitleSideBarH3>}
        </NavItem>
        <NavItem>
          <ConfigIncon style={{
              marginRight:"10px", 
              height:"30px", 
              width: "30px" 
            }}
          />
          {!collapsed && <SubTitleSideBarH3>Configurações</SubTitleSideBarH3>}
        </NavItem>
      </NavContainer>
      <UserContainer>
        <UserAvatar src="/images/logo.png" alt="User Avatar" />
        {!collapsed && <SubTitleSideBarH3>John Doe</SubTitleSideBarH3>}
      </UserContainer>
    </SidebarContainer>
  );
}
