import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { Layout } from '../components/Layout/layout'

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Montserrat',sans-serif;
  }
`
const scrollToSection = (mySection: any) => {
  const section = document.querySelector(mySection)
    section.scrollIntoView({ behavior: 'smooth' });
};

const Section = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url('/images/homem-a-barba.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;

  &:after {
    content: "";
    background: rgba(0, 0, 0, 0.6);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
  }

  h1 {
    font-size: 4rem;
    text-align: center;
    color: white;
  }
`;

const ContentContainer = styled.div`
  padding: 2rem;
`;

const BoxesContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 5rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Box = styled.div`
  background-color: white;
  width: 25%;
  margin-left: 10px;
  margin-right: 10px;
  height: 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 1rem;
  padding: 2rem;
  opacity: 0.8;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);

  @media screen and (max-width: 768px) {
    width: 80%;
    height: auto;
    margin-top: 2rem;
  }

  &:hover {
    cursor: pointer;
  }
`;

const BoxTitle = styled.h3`
  font-size: 2rem;
  margin-bottom: 2rem;
  text-align: center;
  font-weight: bold;
`;

const ServicesContainer = styled.section`
  background-color: #333;
  padding: 2rem;
  text-align: center;
`;

const ServicesTitle = styled.h2`
  font-size: 3rem;
  margin-bottom: 1rem;
  color: white;
`;

const ServicesBoxesContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: stretch;
  margin-bottom: 5rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    height: auto;
  }
`;

const ServicesBox = styled.div`
  background-color: white;
  width: 20rem;
  height: 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
  margin: 1rem;

  @media screen and (max-width: 768px) {
    width: 80%;
    margin-top: 2rem;
  }

  &:hover {
    border-radius: 0.88rem;
    transition: all 0.1s ease 0s;
    box-shadow: 0 0.5rem 1rem orange;
  }
`;

const ServicesBoxTitle = styled.h3`
  font-size: 2.1rem;
  margin-bottom: 2rem;
`;

const ServicesBoxText = styled.p`
  font-size: 2.7rem;
  text-align: center;
  font-weight: bold;
`;

const PlansContainer = styled.section`
  background-color: #333;
  padding: 1rem;
  text-align: center;
`;

const PlansTitle = styled.h2`
  font-size: 3rem;
  margin-bottom: 1rem;
  color: white;
`;

const PlansBoxesContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: stretch;
  margin-bottom: 2rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    height: auto;
  }
`;

const PlanBox = styled.div`
  width: 20rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  margin: 1rem;

  @media screen and (max-width: 768px) {
    width: 80%;
    margin-top: 2rem;
  }

`;

const PlanBoxTitle = styled.h3`
  font-size: 2.3rem;
  margin-bottom: 1rem;
  color: white;
`;

const PlanBoxText = styled.p`
  font-size: 2.1rem;
  text-align: center;
  color: white;
`;

const PlanBoxPrice = styled.p`
  font-size: 2.1rem;
  text-align: center;
  color: orange;
`;

const Icon = styled.img`
  max-width: 100%;
  height: auto;
  margin-bottom: 5px;
`;

const Line = styled.hr`
  border-bottom: 1px solid;
  width: 70%;
  color: #e9c664;
  background: #e9c664;
`


export default function Home() {
  return (
    <Layout>
      <GlobalStyle />
      <Section>
        <h1>CUSTOM BARBEARIA</h1>
        <ContentContainer>
          <BoxesContainer>
            <Box onClick={() => scrollToSection("#services")}>
              <BoxTitle>Nossos Serviços</BoxTitle>
            </Box>
            <Box onClick={() => scrollToSection("#plans")}>
              <BoxTitle>Nossos Planos</BoxTitle>
            </Box>
            <Box onClick={() => scrollToSection("#promo")}>
              <BoxTitle>Promoções</BoxTitle>
            </Box>
          </BoxesContainer>
        </ContentContainer>
      </Section>

      <ServicesContainer id="services">
        <ServicesTitle>NOSSOS SERVIÇOS</ServicesTitle>
        <ServicesBoxesContainer>
          <ServicesBox>
            <ServicesBoxTitle>CABELO + BARBA</ServicesBoxTitle>
            <ServicesBoxText>R$ 70,00</ServicesBoxText>
          </ServicesBox>
          <ServicesBox>
            <ServicesBoxTitle>CORTE CABELO</ServicesBoxTitle>
            <ServicesBoxText>R$ 40,00</ServicesBoxText>
          </ServicesBox>
          <ServicesBox>
            <ServicesBoxTitle>CORTE BARBA</ServicesBoxTitle>
            <ServicesBoxText>R$ 40,00</ServicesBoxText>
          </ServicesBox>
          <ServicesBox>
            <ServicesBoxTitle>CORTE SOMBRANCELHA</ServicesBoxTitle>
            <ServicesBoxText>R$ 10,00</ServicesBoxText>
          </ServicesBox>
        </ServicesBoxesContainer>
        <Line/>
      </ServicesContainer>
      <PlansContainer id="plans">
        <PlansTitle>NOSSOS PLANOS</PlansTitle>
        <PlansBoxesContainer>
          <PlanBox>
            <PlanBoxTitle>OLD SCHOLL</PlanBoxTitle>
            <Icon src="/images/Plano-Old-School.png" alt="Logo"/>
            <PlanBoxPrice>R$ 70,00</PlanBoxPrice>
            <Line/>
            <PlanBoxText>Corte Cabelo 2x no mês Desconto de R$10</PlanBoxText>
          </PlanBox>
          <PlanBox>
            <PlanBoxTitle>VIKINGS</PlanBoxTitle>
            <Icon src="/images/Plano-Viking.png" alt="Logo"/>
            <PlanBoxPrice>R$ 70,00</PlanBoxPrice>
            <Line/>
            <PlanBoxText>Corte Barba 2x No Mês Desconto de R$10</PlanBoxText>
          </PlanBox>
          <PlanBox>
            <PlanBoxTitle>LENHADOR</PlanBoxTitle>
            <Icon src="/images/Plano-Lenhador.png" alt="Logo"/>
            <PlanBoxPrice>R$ 120,00</PlanBoxPrice>
            <Line/>
            <PlanBoxText>Corte Barba e Cabelo 2x No Mês Desconto de R$40</PlanBoxText>
          </PlanBox>
        </PlansBoxesContainer>
        <Line/>
      </PlansContainer>

      <PlansContainer id="promo">
        <PlansTitle>PROMOÇÕES</PlansTitle>
        <PlansBoxesContainer>
          <PlanBox>
            <Icon src="/images/promo-one.png" alt="Logo"/>
          </PlanBox>
          <PlanBox>
            <Icon src="/images/promo-two.png" alt="Logo"/>
          </PlanBox>
        </PlansBoxesContainer>
      </PlansContainer>
    </Layout>
  )
}
