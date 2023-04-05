import { logoPropsInterface } from "@/interfaces/logoPropsInterface";
import styled from "styled-components";

export const PrimaryLogo = styled.img<logoPropsInterface>`
  width: ${(props) => props.width || '100px'};
  height: ${(props) => props.height || '100px'};
  margin-bottom: ${(props) => props.marginBottom || 'unset'};
  margin-left: ${(props) => props.marginLeft || 'unset'};

    // Media query para mobile
    @media only screen and (max-width: 767px) {
    ${(props) => props.media?.mobile?.margin &&
    `margin: ${props.media?.mobile.margin};`}
    
    ${(props) => props.media?.mobile?.marginBottom &&
    `margin-bottom: ${props.media?.mobile.marginBottom};`}
  }
`
