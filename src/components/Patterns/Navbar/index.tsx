import { faClock, faPhone, faUser } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { PrimaryButton } from '../../buttons/Button';
import { PrimaryLogo } from '../../logo/PrimaryLogo';
import { LinkDiv, NavbarButtonContainer, NavbarContainer, StyledIcon, VerticalLine } from './styles';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useEffect, useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';

export const NavBar = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <Menu
        id="collapsed-menu-navbar"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>
          <PrimaryButton span={{ marginLeft: "10px" }}>
            <StyledIcon icon={faPhone} />
            <span>(43) 9999-9999</span>
          </PrimaryButton>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <PrimaryButton>
            <StyledIcon icon={faClock} />
            <span>AGENDAR HORÁRIO</span>
          </PrimaryButton>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <LinkDiv>
            <Link href={'/login'}>
              <PrimaryButton span={{ marginLeft: "10px" }}>
                <StyledIcon icon={faUser} />
                <span>Login</span>
              </PrimaryButton>
            </Link>
          </LinkDiv>
        </MenuItem>
      </Menu>
      <NavbarContainer>
        <PrimaryLogo
          src="/images/logo.png"
          alt="Logo"
          width="70px"
          height="70px" />
        {windowWidth >= 690 ?
          (<><NavbarButtonContainer>
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
            <LinkDiv>
              <Link href={'/login'}>
                <PrimaryButton span={{ marginLeft: "10px" }}>
                  <StyledIcon icon={faUser} />
                  <span>Login</span>
                </PrimaryButton>
              </Link>
            </LinkDiv>
          </>) : <></>}
        <PrimaryButton
          id="basic-button"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
          padding='5px 10px 5px 10px'
          style={{ display: windowWidth < 690 ? 'block' : 'none' }}
        >
          <MenuIcon />
        </PrimaryButton>
      </NavbarContainer>
    </>
  );
};
