import { StyledSelectProps } from "@/interfaces/selectProps";
import styled from "styled-components";

export const StyledSelect = styled.select<StyledSelectProps>`
  -webkit-appearance: ${props => props.appearance || 'none'};
  -moz-appearance: ${props => props.appearance || 'none'};
  appearance: ${props => props.appearance || 'none'};
  background-color: ${props => props.backgroundColor || '#fff'};
  border: ${props => props.border || '1px solid #ccc'};
  border-radius: ${props => props.borderRadius || '4px'};
  padding: ${props => props.padding || '8px'};
  font-size: ${props => props.fontSize || '15px'};
  font-weight: bold;
  color: ${props => props.color || '#333'};

  &:focus {
    outline: none;
    border: 2px solid orange;
  }

  option {
    background-color: #fff;
    color: #333;
    font-weight: normal;
  }

  option:hover {
    background-color: #f2f2f2;
    color: #333;
  }
`;