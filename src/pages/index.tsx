import React from "react";
import styled from "styled-components";
import { Layout } from '../../components/Layout/layout'

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
`;

const BoxTitle = styled.h3`
  font-size: 2rem;
  margin-bottom: 2rem;
  text-align: center;
  font-weight: bold;
`;

const PlansContainer = styled.section`
  background-color: #333;
  padding: 5rem;
  text-align: center;
  min-height: 100vh;
`;

const PlansTitle = styled.h2`
  font-size: 3rem;
  margin-bottom: 5rem;
  color: white;
`;

const PlansBoxesContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: stretch;
  margin-bottom: 5rem;
  margin: 0 1rem;
`;

const PlanBox = styled.div`
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
`;

const PlanBoxTitle = styled.h3`
  font-size: 2rem;
  margin-bottom: 2rem;
`;

const PlanBoxText = styled.p`
  font-size: 1.5rem;
  text-align: center;
`;

export default function Home() {
  return (
    <Layout>
        <Section>
          <h1>CUSTOM BARBEARIA</h1>
        <ContentContainer>
          <BoxesContainer>
          <Box>
            <BoxTitle>Nossos Serviços</BoxTitle>
          </Box>
          <Box>
            <BoxTitle>Nossos Planos</BoxTitle>
          </Box>
          <Box>
            <BoxTitle>Sobre Nós</BoxTitle>
          </Box>
        </BoxesContainer>
        </ContentContainer>
        </Section>
      <PlansContainer>
        <PlansTitle>NOSSOS SERVIÇOS</PlansTitle>
        <PlansBoxesContainer>
          <PlanBox>
            <PlanBoxTitle>Plan A</PlanBoxTitle>
            <PlanBoxText>Basic plan for small websites.</PlanBoxText>
            <PlanBoxText>Features:</PlanBoxText>
            <PlanBoxText>Starting at $9.99/month</PlanBoxText>
          </PlanBox>
          <PlanBox>
            <PlanBoxTitle>Plan B</PlanBoxTitle>
            <PlanBoxText>Advanced plan for larger websites.</PlanBoxText>
            <PlanBoxText>Features:</PlanBoxText>
            <PlanBoxText>Starting at $19.99/month</PlanBoxText>
          </PlanBox>
          <PlanBox>
            <PlanBoxTitle>Plan C</PlanBoxTitle>
            <PlanBoxText>Ultimate plan for businesses.</PlanBoxText>
            <PlanBoxText>Features:</PlanBoxText>
            <PlanBoxText>Starting at $49.99/month</PlanBoxText>
          </PlanBox>
          <PlanBox>
            <PlanBoxTitle>Plan C</PlanBoxTitle>
            <PlanBoxText>Ultimate plan for businesses.</PlanBoxText>
            <PlanBoxText>Features:</PlanBoxText>
            <PlanBoxText>Starting at $49.99/month</PlanBoxText>
          </PlanBox>
        </PlansBoxesContainer>
      </PlansContainer>
    </Layout>
  )
}
