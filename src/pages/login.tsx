import { useState } from "react";
import styled from "styled-components";
import { FaEye } from "react-icons/fa";
import { faEye } from "@fortawesome/free-solid-svg-icons";


const Container =styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-image: url('/images/homem-a-barba.jpg');
  background-size: cover;
  background-position: center;
`

const Logo = styled.img`
  width: 100px;
  height: 100px;
`

const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #333;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
`
const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
  color: white;
  font-weight: bold;
`
const InputContainer = styled.div`
  position: relative;
`;
const Input = styled.input`
  display: block;
  padding: 10px;
  font-size: 16px;
  margin-bottom: 10px;
  border: none;
  border-radius: 4px;
  transition: border 0.2s ease-in-out;

  &:hover {
    border-radius: 4px;
    transition: all 0.1s ease 0s;
    border: 3px solid orange;
  }

  &:focus {
    outline: none;
    border: 3px solid orange;
  }
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: #4CAF50;
  color: #FFFFFF;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-bottom: 5px;
  
  &:hover {
    background-color: #3e8e41;
  }
`;

const PasswordRevealButton = styled.button`
  position: center;
  top: -30px;
  left: 220px;
  background-color: #FFFFFF;
  border: none;
  cursor: pointer;
`;

export default function Login() {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => setShowPassword(!showPassword);
  return(
    <Container>
      <Box>
        <Logo src="/images/logo.png"/>
        <Title>LOGIN</Title>
        <Input type="text" placeholder="Usuário" />
        <InputContainer>
          <Input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Senha"
          />
          <PasswordRevealButton onClick={toggleShowPassword}>
            <FaEye />
          </PasswordRevealButton>
        </InputContainer>
        <Button>Entrar</Button>
        <Button>Recuperar Senha</Button>
      </Box>
  </Container>
  )
}
