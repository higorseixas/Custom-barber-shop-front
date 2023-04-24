import React, { useContext } from "react";
import Link from "next/link";
import { useState } from "react";
import { FaEye } from "react-icons/fa";
import { PasswordRecoverButton, PasswordRevealButton, PrimaryButton } from "@/components/Buttons/button";
import { InputLogin } from "@/components/Forms/primaryInput";
import { PrimaryLogo } from "@/components/Logo/primaryLogo";
import { useForm } from "react-hook-form";
import { AuthContext } from '../contexts/AuthContext'
import { useGetUserFromToken } from "@/hooks/getUserFromToken";
import { GetUserFromTokenInterface } from "@/interfaces/getUserFromTokenInterface";
import { PimaryBox } from "@/components/Box/PrimaryBox";
import { ContainerImage, ContainerInput } from "@/components/container/PrimaryContainer";


export default function Login() {
  const { register, handleSubmit } = useForm();
  const { signIn } = useContext(AuthContext)

  async function handSignIn(data: any) {
    const signInData = { ...data, password };
    await signIn(signInData) //Alerar para realizar um then com o retorno e ver se ha algum erro.
  }

  const teste = async () => {
    const user: GetUserFromTokenInterface = {
      token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VydHlwZSI6Miwic3ViIjoxMCwiaWF0IjoxNjgyMjk1NjE3LCJleHAiOjE2ODIzODIwMTd9.AsXHb6ZmzxGS2nDThBMePwwfHDJpb2-J5QalB9ZFAS8"
    }
    useGetUserFromToken(user)
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
        <form onSubmit={handleSubmit(teste)}>
          <InputLogin
            {...register('cpf')}
            name="cpf"
            type="text"
            placeholder="CPF"
          />
          <ContainerInput>
            <InputLogin
              {...register('password')}
              name="password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Senha"
            />
            <PasswordRevealButton type="button" onClick={toggleShowPassword}>
              <FaEye />
            </PasswordRevealButton>
          </ContainerInput>
          <PrimaryButton
            width="100%"
            marginBottom="10px"
            backgroundColor="#4CAF50"
          >
            Login
          </PrimaryButton>
        </form>
        <Link href={'/recoverdPassword'}>
          <PasswordRecoverButton>Esqueceu a senha?</PasswordRecoverButton>
        </Link>
        <Link href={'/register'}>
          <PasswordRecoverButton>Cadastrar-se</PasswordRecoverButton>
        </Link>
      </PimaryBox>
    </ContainerImage>
  )
}
