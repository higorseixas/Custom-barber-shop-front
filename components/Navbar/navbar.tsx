import styled from 'styled-components'

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #333;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1); 
  top: 0;
  left: 0;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Logo = styled.img`
  width: 70px;
  height: 70px;
`;

const NavbarButton = styled.button`
  padding: 10px 20px;
  margin-left: 10px;
  background-color: orange;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
`;

const NavbarButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  margin: 0 auto;
`;

export const NavBar = () => {
    return (
      <NavbarContainer>
        <Logo src="/images/logo.png" alt="Logo" />
        <NavbarButtonContainer>
          <NavbarButton>Button 1</NavbarButton>
          <NavbarButton>Button 2</NavbarButton>
          <NavbarButton>Button 3</NavbarButton>
        </NavbarButtonContainer>
      </NavbarContainer>
    );
};
