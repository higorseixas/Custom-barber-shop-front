import { TitleProps } from "@/interfaces/titleProps";
import styled from "styled-components";

export const SubTitleH3 = styled.h3<TitleProps>`
  font-size: ${(props) => props.fontSize || '2rem'};
  color: ${(props) => props.color || 'white'};
  margin: ${(props) => props.margin || 'unset'};
  margin-left: ${(props) => props.marginLeft || 'unset'};
  margin-bottom: ${(props) => props.marginBottom || '1rem'};
`;

export const SubTitleSideBarH3 = styled.h3<TitleProps>`
  font-size: ${(props) => props.fontSize || '18px'};
  margin: ${(props) => props.margin || 'unset'};
`;
