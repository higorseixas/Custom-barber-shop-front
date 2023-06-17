import { faLocationDot, faClock, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { PrimaryLogo } from "../../logo/PrimaryLogo";
import { 
  Copyright,
  FooterContainer,
  FooterContent,
  HelpColumn,
  HelpLink,
  InfoColumn,
  InfoItem,
  InfoText, 
  Line,
  SocialColumn, 
  SocialContainer, 
  SocialIcon,
  SocialLink, 
  StyledIcon, 
  Title 
} from './styles';


export const Footer = () =>{
  return(
      <FooterContainer>
      <FooterContent>
        <PrimaryLogo 
          src="/images/logo.png" 
          alt="Logo"
          height="200px"
          width="200px"
          media={{
            mobile: { margin: '0', marginBottom: '20px' },
          }}
        />

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