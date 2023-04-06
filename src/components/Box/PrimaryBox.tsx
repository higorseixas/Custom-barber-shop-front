import { BoxProps } from "@/interfaces/boxProps";
import styled from "styled-components";


export const PimaryBox = styled.div<BoxProps>`
  display: ${(props) => props.display || 'flex'};
  flex-direction: ${(props) => props.flexDirection || 'column'};
  justify-content: ${(props) => props.justifyContent || 'center'};
  opacity: ${(props) => props.opacity || '0.9'};
  align-items: ${(props) => props.alignItems || 'center'};
  background-color: ${(props) => props.backgroundColor || '#333'};
  padding: ${(props) => props.padding || '30px'};
  border-radius: ${(props) => props.borderRadius || '8px'};
  box-shadow: ${(props) => props.boxShadow || '0px 0px 20px 0px rgba(0, 0, 0, 0.2)'};
`