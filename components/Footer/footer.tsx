import styled, { createGlobalStyle } from "styled-components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faClock, faPhone } from '@fortawesome/free-solid-svg-icons';
import { iconInterface } from "@/pages/interfaces/iconInterface";
import { faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Montserrat',sans-serif;
  }
`
const Icon = ({ icon }: iconInterface) => {
  return <FontAwesomeIcon icon={icon} />;
};

const FooterContainer = styled.footer`
  background-color: #f2f2f2;
  padding: 20px 0;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const Logo = styled.img`
  height: 200px;
  margin-left: 50px;

  @media (max-width: 768px) {
    margin: 0;
    margin-bottom: 20px;
  }
`;

const HelpColumn = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
`;

const HelpLink = styled.a`
  margin-bottom: 5px;
  color: #333;
  text-decoration: none;
  line-height: 1.0;
  font-size: 20px;

  &:hover {
    text-decoration: underline;
  }
`;

const InfoColumn = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 50px;

  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 20px;
  }
`;

const Title = styled.h4`
  margin: 0 0 10px;
  font-size: 24px;
  font-weight: bold;
`;

const InfoItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
`;

const InfoText = styled.p`
  margin: 0 0 0 5px;
  font-size: 20px;
  line-height: 1.5;
`;

const Line = styled.hr`
  margin: 20px 0;
  border: 0;
  height: 1px;
  background-color: #ccc;
`;

const Copyright = styled.p`
  margin: 0;
  font-size: 14px;
  text-align: center;
`;

const StyledIcon = styled(Icon)`
  margin-right: 5px;
`;

const SocialColumn = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
`;

const SocialContainer = styled.div`
  display: flex;
  align-items: center;
`;

const SocialLink = styled.a`
  color: #333;
  font-size: 40px;
`;

const SocialIcon = styled(FontAwesomeIcon)`
  margin-right: 5px;
`;

export const Footer = () =>{
  return(
      <FooterContainer>
      <GlobalStyle />
      <FooterContent>
        <Logo src="/images/logo.png" alt="Logo" />

        <HelpColumn>
          <Title>Ajuda</Title>
          <HelpLink href="/">Home</HelpLink>
          <HelpLink href="/about">Sobre</HelpLink>
          <HelpLink href="/opening-hours">Horário de funcionamento</HelpLink>
        </HelpColumn>

        <InfoColumn>
          <Title>Informações</Title>
          <ul>
            <InfoItem>
              <StyledIcon icon={faLocationDot} />
              <InfoText>Rua Lorem Ipsum, 123</InfoText>
            </InfoItem>
          </ul>
          <ul>
            <InfoItem>
              <StyledIcon icon={faClock}/>
              <InfoText>Seg - Sex: 8:00 - 18:00</InfoText>
            </InfoItem>
          </ul>
          <ul>
            <InfoItem>
              <StyledIcon icon={faPhone}/>
              <InfoText>(43 9999-999)</InfoText>
            </InfoItem>
          </ul>
        </InfoColumn>

        <SocialColumn>
          <Title>Redes Sociais</Title>
          <SocialContainer>
            <SocialLink href="https://www.instagram.com/hlsolucoes"><SocialIcon icon={faInstagram} /></SocialLink>
            <SocialLink href="https://api.whatsapp.com/send?phone=554399999999"><SocialIcon icon={faWhatsapp} /></SocialLink>
          </SocialContainer>
        </SocialColumn>

      </FooterContent>
      <Line />
      <Copyright>
        Copyright©2023- Todos os direitos reservados | HLSoluções
      </Copyright>
    </FooterContainer>
  )
}