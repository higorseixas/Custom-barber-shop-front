import { useState } from "react";
import React from "react";
import { FaEye } from "react-icons/fa";
import { PasswordRecoverButton, PasswordRevealButton, PrimaryButton } from "@/components/Buttons/button";
import { InputLogin } from "@/components/Forms/primaryInput";
import { PrimaryLogo } from "@/components/Logo/primaryLogo";
import { ContainerImage, ContainerInput } from "@/components/Container/primaryContainer";
import { PimaryBox } from "@/components/Box/primaryBox";


export default function Login() {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => setShowPassword(!showPassword);
  return (
    <ContainerImage backgroundImage="/images/homem-a-barba.jpg">
      <PimaryBox>
        <PrimaryLogo 
          src="/images/logo.png"
          marginBottom="10px"
        />
        <InputLogin type="text" placeholder="Usuário" />
        <ContainerInput>
          <InputLogin
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Senha"
          />
          <PasswordRevealButton onClick={toggleShowPassword}>
            <FaEye />
          </PasswordRevealButton>
        </ContainerInput>
        <PasswordRecoverButton>Esqueceu a senha?</PasswordRecoverButton>
        <PrimaryButton 
          width="100%"
          marginBottom="10px" 
          backgroundColor="#4CAF50"
        >
          Login
        </PrimaryButton>
        <PasswordRecoverButton>Cadastrar-se</PasswordRecoverButton>
      </PimaryBox>
    </ContainerImage>
  )
}
