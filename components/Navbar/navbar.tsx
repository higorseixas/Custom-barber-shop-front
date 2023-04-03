import styled from 'styled-components'
import { iconInterface } from '@/pages/interfaces/iconInterface';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faPhone, faUser } from '@fortawesome/free-solid-svg-icons';

const Icon = ({ icon }: iconInterface) => {
  return <FontAwesomeIcon icon={icon} />;
}

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
  span {
    margin-left: 8px;
  }
`;

const NavbarButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  margin: 0 auto;
`;

const VerticalLine = styled.div`
  border-left: 1px solid #ccc;
  height: 30px;
  margin: 0 10px;
`;

const StyledIcon = styled(Icon)`
  margin-right: 15px;
`;

export const NavBar = () => {
  return (
    <NavbarContainer>
      <Logo src="/images/logo.png" alt="Logo" />
      
      <NavbarButtonContainer>
        <NavbarButton>
          <StyledIcon icon={faPhone} />
          <span>(43) 9999-9999</span>
        </NavbarButton>
        <NavbarButton>
          <StyledIcon icon={faClock} />
          <span>AGENDAR HORÁRIO</span>
        </NavbarButton>
      </NavbarButtonContainer>

      <VerticalLine />
      <NavbarButton>
        <StyledIcon icon={faUser} />
        <span>Login</span>
      </NavbarButton>
    </NavbarContainer>
  );
};
