import styled from "styled-components"
import { iconInterface } from "@/interfaces/iconInterface";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Icon = ({ icon }: iconInterface) => {
  return <FontAwesomeIcon icon={icon} />;
};

export const FooterContainer = styled.footer`
  background-color: #f2f2f2;
  padding: 20px 0;
`;

export const FooterContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(256px, 1fr));
  gap: 2rem;
  margin-left: 30px;

  @media (max-width: 768px){
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-items: center;
  }
`;


export const HelpLink = styled.a`
  margin-bottom: 5px;
  color: #333;
  text-decoration: none;
  line-height: 1.0;
  font-size: 20px;
  
  &:hover {
    text-decoration: underline;
  }
  `;

export const HelpColumn = styled.div`
    min-width: 234px;
    display: flex;
    flex-direction: column;
`;

export const InfoColumn = styled.div`
  min-width: 234px;
  display: flex;
  flex-direction: column;
`;

export const SocialColumn = styled.div`
  min-width: 234px;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h4`
  margin: 0 0 10px;
  font-size: 24px;
  font-weight: bold;
`;

export const InfoItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
`;

export const InfoText = styled.p`
  margin: 0 0 0 5px;
  font-size: 20px;
  line-height: 1.5;
`;

export const Line = styled.hr`
  margin: 20px 0;
  border: 0;
  height: 1px;
  background-color: #ccc;
`;

export const Copyright = styled.p`
  margin: 0;
  font-size: 14px;
  text-align: center;
`;

export const StyledIcon = styled(Icon)`
  margin-right: 5px;
`;



export const SocialContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const SocialLink = styled.a`
  color: #333;
  font-size: 40px;
`;

export const SocialIcon = styled(FontAwesomeIcon)`
  margin-right: 5px;
`;