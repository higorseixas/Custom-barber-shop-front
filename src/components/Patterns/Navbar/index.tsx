'use client';

import { faClock, faPhone, faUser } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { PrimaryButton } from '../../Buttons/button';
import { PrimaryLogo } from '../../Logo/primaryLogo';
import { NavbarButtonContainer, NavbarContainer, StyledIcon, VerticalLine } from './styles';


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
