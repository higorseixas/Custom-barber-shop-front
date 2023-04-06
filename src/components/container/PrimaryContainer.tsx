import { ContainerInputProps, ContainerProps } from "@/interfaces/containerProps";
import styled from "styled-components";

export const ContainerImage = styled.div<ContainerProps>`
  display: ${(props) => props.display || 'flex'};
  align-items: ${(props) => props.alignItems || 'center'};
  justify-content: ${(props) => props.justifyContent || 'center'};
  height:  ${(props) => props.height || '100vh'};
  background-image: url(${(props) => props.backgroundImage});
  background-size: ${(props) => props.backgroundSize || 'cover'};
  background-position: ${(props) => props.backgroundPosition || 'center'};
`;

export const ContainerInput = styled.div<ContainerInputProps>`
  position: ${(props) => props.position || 'relative'};
  margin-bottom: ${(props) => props.marginBottom || '0px'};
  display: ${(props) => props.display || 'flex'};
  align-items: ${(props) => props.alignItems || 'center'};
`;