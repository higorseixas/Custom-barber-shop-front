import { useState } from "react";
import styled from "styled-components"
import React from "react";
import { FaEye } from "react-icons/fa";
import { PasswordRecoverButton, PasswordRevealButton, PrimaryButton } from "@/components/Buttons/button";
import { InputLogin } from "@/components/Forms/primaryInput";
import { PrimaryLogo } from "@/components/Logo/primaryLogo";
import { ContainerImage, ContainerInput } from "@/components/Container/primaryContainer";
import { PimaryBox } from "@/components/Box/primaryBox";
import Link from "next/link";
import { SubTitleH3 } from "@/components/Titles/primaryTitles";
import { StyledSelect } from "@/components/Select/PrimarySelect";
import { useUserRegister } from "@/hooks/useUserRegister";
import { userInterface } from "@/interfaces/userInterface";

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
  const [cpf, setCpf] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [cellphone, setCellphone] = useState("");
  const [userType, setUserType] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => setShowPassword(!showPassword);

  const handleSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault();

    // TODO: Implementar a lógica de cadastro do usuário aqui
  };

  const handleRegister = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    const user: userInterface = {
      name: name,
      password: password,
      cpf: cpf,
      cellphone: cellphone,
      typeId: 2
    }
    return useUserRegister(user)
      .then((response) => {
        console.log(response)
      })
      .catch((error) => {
        console.error(error)
      })
  }

  return (
    <ContainerImage backgroundImage="/images/homem-a-barba.jpg">
      <PimaryBox>
        <PrimaryLogo src="/images/logo.png" marginBottom="10px" />
        <SubTitleH3 fontSize="1.5rem">Cadastro de Usuário</SubTitleH3>

        <FormContainer onSubmit={handleRegister}>
          <InputLogin
            type="text"
            value={cpf}
            onChange={(event) => setCpf(event.target.value)}
            placeholder="CPF"
          />

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

          <InputLogin
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Nome completo"
          />

          <InputLogin
            type="text"
            value={cellphone}
            onChange={(event) => setCellphone(event.target.value)}
            placeholder="Telefone"
          />

          <StyledSelect
            value={userType}
            onChange={(event) => setUserType(event.target.value)}
          >
            <option value="">Selecione o tipo de usuário</option>
            <option value="0">Barbeiro</option>
            <option value="1">Administrador</option>
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