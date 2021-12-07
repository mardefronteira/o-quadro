import styled from 'styled-components';

export const ConteinerCards = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: auto;
  margin: 0;
  padding: 0;
  @media (max-width: 800px) {
    width: 70%;
    display: flex !important;
    height: auto;
    gap:2%;
    flex-direction: row !important;
    align-items:center !important;
    justify-content:center !important;

  }
`;

export const TituloAnimado = styled.h2`
  font-family: Arial, sans-serif;
  font-weight: 100;
  font-size: 3.75rem;
  padding: 0;
  padding-bottom: 3vh;
  margin: 0;
`;

export const FundoCarrossel = styled.div`
  padding: 5vh 0;
  width: 100%;
  height: auto;
  margin-bottom: 5vh;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  @media (max-width: 800px) {
    margin:
    
  }
`;

export const TituloCarrossel = styled.h2`
  font-weight: 300;
  @media (max-width: 800px) {
    margin: 0 10vw;
  }
`;

export const Conteiner = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 800px) {
    display: flex !important;
    flex-direction: row !important;
    width: fit-content;
    height:auto;
    justify-content:space-around !important;
    gap:2%;

  }
`;

export const SetaCarrossel = styled.button`
  background: none;
  border: none;
  display:flex;
  align-self:center;
  .arrow-left {
    transform: rotate(90deg);
  }
  .arrow-right{
    transform:rotate(-90deg);
  }

  @media (max-width: 800px) {
    width: 10vw;
    height:auto;
    
  }
`;
