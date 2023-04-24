import styled from "styled-components"
import React from "react";
import Link from "next/link";
import { useState } from "react";
import { FaEye } from "react-icons/fa";
import { PasswordRecoverButton, PasswordRevealButton, PrimaryButton } from "@/components/Buttons/button";
import { InputLogin } from "@/components/Forms/primaryInput";
import { PrimaryLogo } from "@/components/Logo/primaryLogo";
import { SubTitleH3 } from "@/components/Titles/primaryTitles";
import { StyledSelect } from "@/components/Select/PrimarySelect";
import { useUserRegister } from "@/hooks/UserRegisterHook";
import { userInterface } from "@/interfaces/userInterface";
import { ContainerImage, ContainerInput } from "@/components/Container/primaryContainer";
import { PimaryBox } from "@/components/Box/primaryBox";
import { SubmitHandler, useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { ErrorMessage } from "@/components/ErrorMessage/errorMessage";

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export default function Register() {
  const { register, handleSubmit } = useForm<userInterface>();
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [error, setError] = useState<string>('');

  const toggleShowPassword = () => setShowPassword(!showPassword);

  const onSubmit: SubmitHandler<userInterface> = (data) => {
    useUserRegister(data)
      .then((response) => {
        response.ok && response.status >= 200 && response.status < 300
        ? router.push('/login')
        : setError('Erro ao criar usuário');
      })
      .catch((error) => {
        console.error(error);
        setError('Erro ao criar usuário');
      });
  };

  return (
    <ContainerImage backgroundImage="/images/homem-a-barba.jpg">
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <PimaryBox>
        <PrimaryLogo src="/images/logo.png" marginBottom="10px" />
        <SubTitleH3 fontSize="1.5rem">Cadastro de Usuário</SubTitleH3>

        <FormContainer onSubmit={handleSubmit(onSubmit)}>
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

          <InputLogin
            {...register('name')}
            name="name"
            type="text"
            placeholder="Nome completo"
          />

          <InputLogin
            {...register('cellphone')}
            name="cellphone"
            type="text"
            placeholder="Telefone"
          />

          <StyledSelect {...register('typeId')} name="typeId">
            <option value="">Selecione o tipo de usuário</option>
            <option value={1}>Barbeiro</option>
            <option value={2}>Administrador</option>
          </StyledSelect>

          <PrimaryButton
            type="submit"
            width="100%"
            marginBottom="10px"
            backgroundColor="#4CAF50"
          >
            Cadastrar
          </PrimaryButton>
        </FormContainer>

        <Link href={'/login'}>
          <PasswordRecoverButton>
            Possui uma conta? <br />Faça login aqui.
          </PasswordRecoverButton>
        </Link>
      </PimaryBox>
    </ContainerImage>
  );
}