import styled from "styled-components";

export const SidebarContainer = styled.div<{ Collapsed: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: ${({ Collapsed }) => (Collapsed ? "50px" : "220px")};
  height: 100vh;
  background-color: #f2f2f2;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.1);
  position: relative;

  @media screen and (max-width: 768px) {
    height: unset;
  }
`;

export const Line = styled.hr`
  margin: 10px 0;
  border: 0;
  height: 1px;
  background-color: #ccc;
`;

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
`;

export const NavContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const NavItem = styled.div<{ Collapsed: boolean }>`
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

export const NavItemIcon = styled.div<{ Collapsed: boolean }>`
  display: flex;
  align-items: center;
  justify-content: ${({ Collapsed }) => (Collapsed ? "center" : "flex-start")};
  margin-right: ${({ Collapsed }) => (Collapsed ? "0" : "10px")};
`;

export const UserContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  margin-top: auto;
`;

export const UserAvatar = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 10px;
`;