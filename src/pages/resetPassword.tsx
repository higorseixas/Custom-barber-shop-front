import { useState } from "react";
import React from "react";
import { FaEye } from "react-icons/fa";
import { PasswordRecoverButton, PasswordRevealButton, PrimaryButton } from "@/components/Buttons/button";
import { InputLogin } from "@/components/Forms/primaryInput";
import { PrimaryLogo } from "@/components/Logo/primaryLogo";
import { ContainerImage } from "@/components/Container/primaryContainer";
import { PimaryBox } from "@/components/Box/primaryBox";
import { SubTitleH3 } from "@/components/Titles/primaryTitles";

export default function ResetPassword() {
  return (
    <ContainerImage backgroundImage="/images/homem-a-barba.jpg">
      <PimaryBox>
        <PrimaryLogo 
          src="/images/logo.png"
          marginBottom="10px"
        />
        <SubTitleH3 fontSize="1.5rem">Redefinir Senha</SubTitleH3>
        <InputLogin type="text" placeholder="Email" />
        <PrimaryButton 
          width="100%"
          marginBottom="10px" 
          backgroundColor="#4CAF50">
          Enviar
        </PrimaryButton>
        <PasswordRecoverButton>Cadastrar-se</PasswordRecoverButton>
      </PimaryBox>
    </ContainerImage>
  )
}
