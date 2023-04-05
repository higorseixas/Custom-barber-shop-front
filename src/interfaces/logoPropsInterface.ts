import { CSSObject } from "styled-components";

export interface logoPropsInterface {
  width?: string;
  height?: string;
  marginBottom?: string;
  marginLeft?: string;
  media?: {
    mobile?: {
      margin?: string;
      marginBottom?: string;
    }      
  };
}