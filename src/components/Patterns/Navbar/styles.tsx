import styled from "styled-components";
import { iconInterface } from '@/interfaces/iconInterface';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export const Icon = ({ icon }: iconInterface) => {
  return <FontAwesomeIcon icon={icon} />;
}

export const NavbarContainer = styled.nav`
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

export const NavbarButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  margin: 0 auto;
`;

export const VerticalLine = styled.div`
  border-left: 1px solid #ccc;
  height: 30px;
  margin: 0 10px;
`;

export const StyledIcon = styled(Icon)`
  margin-right: 15px;
`;
