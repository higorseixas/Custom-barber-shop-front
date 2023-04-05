import styled from 'styled-components'
import { iconInterface } from '@/interfaces/iconInterface';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faPhone, faUser } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { PrimaryButton } from '../buttons/Button';
import { PrimaryLogo } from '../logo/PrimaryLogo';

const Icon = ({ icon }: iconInterface) => {
  return <FontAwesomeIcon icon={icon} />;
}

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: center;
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

  @media (max-width: 768px) {
    justify-content: center;

    button:not(:last-child) {
      display: none;
    }
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
      <PrimaryLogo 
      src="/images/logo.png" 
      alt="Logo"
      width="70px"
      height="70px"/>

      <NavbarButtonContainer>
        <PrimaryButton span={{ marginLeft: "10px" }}>
          <StyledIcon icon={faPhone} />
          <span>(43) 9999-9999</span>
        </PrimaryButton>
        <PrimaryButton
          marginLeft='10px'
          span={{ marginLeft: "10px" }}
        >
          <StyledIcon icon={faClock} />
          <span>AGENDAR HORÁRIO</span>
        </PrimaryButton>
      </NavbarButtonContainer>

      <VerticalLine />
      <Link href={'/login'}>
        <PrimaryButton span={{ marginLeft: "10px" }}>
          <StyledIcon icon={faUser} />
          <span>Login</span>
        </PrimaryButton>
      </Link>
    </NavbarContainer>
  );
};
