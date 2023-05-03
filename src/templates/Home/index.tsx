import { Layout } from "@/components/Layout/layout";
import { 
  Box, 
  BoxesContainer, 
  BoxTitle, 
  ContentContainer, 
  Icon, 
  Line, 
  PlanBox, 
  PlanBoxPrice, 
  PlanBoxText, 
  PlanBoxTitle, 
  PlansBoxesContainer, 
  PlansContainer, 
  PlansTitle, 
  Section, 
  ServicesBox, 
  ServicesBoxesContainer, 
  ServicesBoxText, 
  ServicesBoxTitle, 
  ServicesContainer, 
  ServicesTitle 
} from "./styles";

export default function Site() {
  const scrollToSection = (mySection: any) => {
    const section = document.querySelector(mySection)
      section.scrollIntoView({ behavior: 'smooth' });
  };
  
  return (
    <Layout>
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