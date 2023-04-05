import { useState } from "react";
import React from "react";
import styled from "styled-components";
import { FaEye } from "react-icons/fa";
import { PasswordRecoverButton, PasswordRevealButton, PrimaryButton } from "@/components/buttons/Button";
import { InputLogin } from "@/components/Forms/Input";
import { PrimaryLogo } from "@/components/logo/PrimaryLogo";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-image: url('/images/homem-a-barba.jpg');
  background-size: cover;
  background-position: center;
`

const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  opacity: 0.9;
  align-items: center;
  background-color: #333;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
`

const InputContainer = styled.div`
  position: relative;
  margin-bottom: 0px;
  display: flex;
  align-items: center;
`;

export default function Login() {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => setShowPassword(!showPassword);
  return (
    <Container>
      <Box>
        <PrimaryLogo 
          src="/images/logo.png"
          marginBottom="10px"
        />
        <InputLogin type="text" placeholder="Usuário" />
        <InputContainer>
          <InputLogin
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Senha"
          />
          <PasswordRevealButton onClick={toggleShowPassword}>
            <FaEye />
          </PasswordRevealButton>
        </InputContainer>
        <PasswordRecoverButton>Esqueceu a senha?</PasswordRecoverButton>
        <PrimaryButton 
          width="100%"
          marginBottom="10px" 
          backgroundColor="#4CAF50"
        >
          Login
        </PrimaryButton>
        <PasswordRecoverButton>Cadastrar-se</PasswordRecoverButton>
      </Box>
    </Container>
  )
}
