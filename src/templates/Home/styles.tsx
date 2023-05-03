import React from "react";
import styled, { createGlobalStyle } from "styled-components";


export const Section = styled.section`
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

export const ContentContainer = styled.div`
  padding: 2rem;
`;

export const BoxesContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 5rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Box = styled.div`
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

export const BoxTitle = styled.h3`
  font-size: 2rem;
  margin-bottom: 2rem;
  text-align: center;
  font-weight: bold;
`;

export const ServicesContainer = styled.section`
  background-color: #333;
  padding: 2rem;
  text-align: center;
`;

export const ServicesTitle = styled.h2`
  font-size: 3rem;
  margin-bottom: 1rem;
  color: white;
`;

export const ServicesBoxesContainer = styled.div`
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

export const ServicesBox = styled.div`
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

export const ServicesBoxTitle = styled.h3`
  font-size: 2.1rem;
  margin-bottom: 2rem;
`;

export const ServicesBoxText = styled.p`
  font-size: 2.7rem;
  text-align: center;
  font-weight: bold;
`;

export const PlansContainer = styled.section`
  background-color: #333;
  padding: 1rem;
  text-align: center;
`;

export const PlansTitle = styled.h2`
  font-size: 3rem;
  margin-bottom: 1rem;
  color: white;
`;

export const PlansBoxesContainer = styled.div`
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

export const PlanBox = styled.div`
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

export const PlanBoxTitle = styled.h3`
  font-size: 2.3rem;
  margin-bottom: 1rem;
  color: white;
`;

export const PlanBoxText = styled.p`
  font-size: 2.1rem;
  text-align: center;
  color: white;
`;

export const PlanBoxPrice = styled.p`
  font-size: 2.1rem;
  text-align: center;
  color: orange;
`;

export const Icon = styled.img`
  max-width: 100%;
  height: auto;
  margin-bottom: 5px;
`;

export const Line = styled.hr`
  border-bottom: 1px solid;
  width: 70%;
  color: #e9c664;
  background: #e9c664;
`
