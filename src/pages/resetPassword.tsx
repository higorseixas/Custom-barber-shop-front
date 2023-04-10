import { useState } from "react";
import React from "react";
import { FaEye } from "react-icons/fa";
import { PasswordRecoverButton, PasswordRevealButton, PrimaryButton } from "@/components/Buttons/button";
import { InputLogin } from "@/components/Forms/primaryInput";
import { PrimaryLogo } from "@/components/Logo/primaryLogo";
import { ContainerImage, ContainerInput } from "@/components/Container/primaryContainer";
import { PimaryBox } from "@/components/Box/primaryBox";
import { SubTitleH3 } from "@/components/Titles/primaryTitles";

export default function ResetPassword() {
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => setShowPassword(!showPassword);

  return (
    <ContainerImage backgroundImage="/images/homem-a-barba.jpg">
      <PimaryBox>
        <PrimaryLogo src="/images/logo.png" marginBottom="10px" />
        <SubTitleH3 fontSize="1.5rem">Redefinir Senha</SubTitleH3>
        <ContainerInput 
          flexDirection="column" 
          marginBottom="10px"
          gap="10px">
          <InputLogin
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Nova Senha"
            marginBottom="unset"
          />
          <PasswordRevealButton onClick={toggleShowPassword}>
            <FaEye />
          </PasswordRevealButton>
          <InputLogin
            type={showPassword ? "text" : "password"}
            value={passwordConfirmation}
            onChange={(event) => setPasswordConfirmation(event.target.value)}
            placeholder="Digite novamente"
            marginBottom="unset"
          />
        </ContainerInput>
        <PrimaryButton
          width="100%"
          marginBottom="10px"
          backgroundColor="#4CAF50"
          disabled={password !== passwordConfirmation}
        >
          Enviar
        </PrimaryButton>
      </PimaryBox>
    </ContainerImage>
  );
}