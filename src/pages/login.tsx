import React, { useContext } from "react";
import Link from "next/link";
import { useState } from "react";
import { FaEye } from "react-icons/fa";
import { PasswordRecoverButton, PasswordRevealButton, PrimaryButton } from "@/components/Buttons/button";
import { InputLogin } from "@/components/Forms/primaryInput";
import { PrimaryLogo } from "@/components/Logo/primaryLogo";
import { useForm } from "react-hook-form";
import { AuthContext } from '../contexts/AuthContext'
import { ContainerImage, ContainerInput } from "@/components/Container/primaryContainer";
import { PimaryBox } from "@/components/Box/primaryBox";


export default function Login() {
  const { register, handleSubmit } = useForm();
  const { signIn } = useContext(AuthContext)

  const handSignIn = async (data: any) => {
    const signInData = { ...data, password };
    await signIn(signInData); //Alert to perform a 'then' with the return and check for any errors.
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
            {...register('cpf', {required: true})}
            name="cpf"
            type="text"
            placeholder="CPF"
          />
          <ContainerInput>
            <InputLogin
              {...register('password', {required: true})}
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
