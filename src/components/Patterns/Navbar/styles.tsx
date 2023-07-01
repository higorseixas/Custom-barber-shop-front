import styled from "styled-components";
import { iconInterface } from '@/interfaces/iconInterface';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export const Icon = ({ icon }: iconInterface) => {
  return <FontAwesomeIcon icon={icon} />;
}

export const NavbarContainer = styled.nav`
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

export const NavbarButtonContainer = styled.div`
  width: 830px;
`;

export const VerticalLine = styled.div`
  border-left: 1px solid #ccc;
  height: 50px;
  margin: 0 10px;
`;

export const StyledIcon = styled(Icon)`
  margin-right: 15px;
`;

export const LinkDiv = styled.div`
  min-width: 105px;
`
