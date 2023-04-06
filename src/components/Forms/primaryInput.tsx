import { InputLoginProps, InputProps } from "@/interfaces/inputProps";
import styled from "styled-components";

export const PrimaryInput = styled.input<InputProps>`
  display: ${(props) => props.display || 'block'};
  padding: ${(props) => props.padding || '10px'};
  font-size: ${(props) => props.fontSize || '16px'};
  width: ${(props) => props.width || 'unset'};
  margin-bottom: ${(props) => props.marginBottom || '10px'};
  border: ${(props) => props.border || 'none'};
  border-radius: ${(props) => props.borderRadius || '4px'};
  transition: ${(props) => props.transition || 'border 0.2s ease-in-out'};
`;

export const InputLogin = styled(PrimaryInput)<InputLoginProps>`
  &:hover {
    border-radius: ${(props) => props.hoverBorderRadius || '4px'};
    transition: ${(props) => props.hoverTransition || 'all 0.1s ease 0s'};
    box-shadow: ${(props) => props.hoverBoxShadow || 'orange 0px 0px 0px 4px, rgba(123, 123, 123, 0.5) 0px 0px 0px 5px'};
  }
 
  &:focus {
    outline:  ${(props) => props.focusOutline || 'none'};
    box-shadow: ${(props) => props.focusBoxShadow || 'orange 0px 0px 0px 4px, rgba(123, 123, 123, 0.5) 0px 0px 0px 5px'};
  }
`;