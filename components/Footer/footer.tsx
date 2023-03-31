import styled from "styled-components"

const FooterContainer = styled.footer`
  background-color: #f2f2f2;
  padding: 20px 0;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.img`
  height: 50px;
`;

const HelpColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

const HelpTitle = styled.h4`
  margin: 0 0 10px;
  font-size: 18px;
`;

const HelpLink = styled.a`
  margin-bottom: 5px;
  color: #333;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const InfoColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

const InfoTitle = styled.h4`
  margin: 0 0 10px;
  font-size: 18px;
`;

const InfoText = styled.p`
  margin: 0;
  font-size: 16px;
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

export const Footer = () =>{
    return(
        <FooterContainer>
        <FooterContent>
          <Logo src="/images/logo.png" alt="Logo" />
  
          <HelpColumn>
            <HelpTitle>Ajuda</HelpTitle>
            <HelpLink href="/">Home</HelpLink>
            <HelpLink href="/about">Sobre</HelpLink>
            <HelpLink href="/opening-hours">Horário de funcionamento</HelpLink>
          </HelpColumn>
  
          <InfoColumn>
            <InfoTitle>Informações</InfoTitle>
            <InfoText>Rua Lorem Ipsum, 123</InfoText>
            <InfoText>Seg - Sex: 8:00 - 18:00</InfoText>
          </InfoColumn>
        </FooterContent>
        <Line />
        <Copyright>
          © 2023 Todos os direitos reservados | Empresa XYZ
        </Copyright>
      </FooterContainer>
    )
}