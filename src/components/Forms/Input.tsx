import styled from "styled-components";

export const Input = styled.input`
  display: block;
  padding: 10px;
  font-size: 16px;
  margin-bottom: 10px;
  border: none;
  border-radius: 4px;
  transition: border 0.2s ease-in-out;
`;

export const InputLogin = styled(Input)`
  &:hover {
    border-radius: 4px;
    transition: all 0.1s ease 0s;
    box-shadow: orange 0px 0px 0px 4px, rgba(123, 123, 123, 0.5) 0px 0px 0px 5px;
  }
 
  &:focus {
    outline: none;
    box-shadow: orange 0px 0px 0px 4px, rgba(123, 123, 123, 0.5) 0px 0px 0px 5px;
  }
`;