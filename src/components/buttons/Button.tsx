import { 
  ButtonProps, 
  PasswordRecoverButtonProps, 
  PasswordRevealButtonProps 
} from "@/interfaces/buttonProps";
import styled from "styled-components";

export const PrimaryButton = styled.button<ButtonProps>`
  display: ${(props) => props.display || 'auto'};
  background-color: ${(props) => props.backgroundColor || 'orange'};
  color: ${(props) => props.color || '#FFFFFF'};
  padding: ${(props) => props.padding || '10px 20px'};
  border: ${(props) => props.border || 'none'};
  border-radius: ${(props) => props.borderRadius || '4px'};
  cursor: ${(props) => props.cursor || 'pointer'};
  font-size: ${(props) => props.fontSize || '16px'};
  margin: ${(props) => props.margin || '0'};
  margin-left: ${(props) => props.marginLeft || 'unset'};
  margin-bottom: ${(props) => props.marginBottom || 'unset'};
  width: ${(props) => props.width || 'auto'};
  
  &:hover {
    background-color: ${(props) => props.hoverBackgroundColor || '#3e8e41'};
  }
  
  span {
    margin-left: ${(props) => props.span?.marginLeft || "unset"};
  }
`;

export const PasswordRevealButton = styled.button<PasswordRevealButtonProps>`
  right: ${(props) => props.right || "0.75rem"};
  margin-bottom: ${(props) => props.marginBottom || "10px"};
  position: ${(props) => props.position || "absolute"};
  border: none;
  background: transparent;
  border-radius: ${(props) => props.borderRadius || "10px"};
  display: ${(props) => props.display || "flex"};
  padding: ${(props) => props.padding || "0.75rem"};
  transition: ${(props) => props.transition || "all 0.3s ease 0s"};
  cursor: ${(props) => props.cursor || "pointer"};

  &:hover {
    background-color: ${(props) => props.backgroundColor || "transparent"};
  }
`;

export const PasswordRecoverButton = styled.button<PasswordRecoverButtonProps>`
  background: transparent;
  margin-bottom: ${(props) => props.marginBottom || "10px"};
  border: ${(props) => props.border || "none"};
  outline: ${(props) => props.outline || "none"};
  font-size: ${(props) => props.fontSize || "1rem"};
  text-decoration: ${(props) => props.textDecoration || "none"};
  color: ${(props) => props.color || "orange"};
  cursor: ${(props) => props.cursor || "pointer"};

  &:hover {
    text-decoration: ${(props) => props.textDecoration || "underline"};
  }
`;

export const SideBarButtonNavigation = styled.button`
  background: none;
  border: none;
  border-radius: 50%;
  color: inherit;
  font: inherit;
  text-decoration: none;
  cursor: pointer;
  padding: 0;
`;

export const SideBarButton = styled.button`
  position: absolute;
  right: 0;
  top: 33rem;
  border: none;
  background-color: #fff;
  width: 2rem;
  height: 2rem;
  border: 1px solid #505050;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transform: translateX(50%);
`;