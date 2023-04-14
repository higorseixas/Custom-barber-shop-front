import React, { useContext } from "react";
import Link from "next/link";
import { useState } from "react";
import { FaEye } from "react-icons/fa";
import { PasswordRecoverButton, PasswordRevealButton, PrimaryButton } from "@/components/Buttons/button";
import { InputLogin } from "@/components/Forms/primaryInput";
import { PrimaryLogo } from "@/components/Logo/primaryLogo";
import { ContainerImage, ContainerInput } from "@/components/Container/primaryContainer";
import { PimaryBox } from "@/components/Box/primaryBox";
import { useForm } from "react-hook-form";
import { AuthContext } from '../contexts/AuthContext'


export default function Login() {
  const { register, handleSubmit} = useForm();
  const { signIn } = useContext( AuthContext )

  async function handSignIn(data: any) {
    await signIn(data) //Alerar para realizar um then com o retorno e ver se ha algum erro.
  }

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
        <form onSubmit={handleSubmit(handSignIn)}>
          <InputLogin 
            {...register('cpf')} 
            type="text" 
            placeholder="CPF" 
          />
          <ContainerInput>
            <InputLogin
              {...register('password')}
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Senha"
            />
            <PasswordRevealButton onClick={toggleShowPassword}>
              <FaEye />
            </PasswordRevealButton>
          </ContainerInput>
        </form>
        <Link href={'/recoverdPassword'}>
        <PasswordRecoverButton>Esqueceu a senha?</PasswordRecoverButton>
        </Link>
        <PrimaryButton 
          width="100%"
          marginBottom="10px" 
          backgroundColor="#4CAF50"
        >
          Login
        </PrimaryButton>
        <Link href={'/register'}>
        <PasswordRecoverButton>Cadastrar-se</PasswordRecoverButton>
        </Link>
      </PimaryBox>
    </ContainerImage>
  )
}
