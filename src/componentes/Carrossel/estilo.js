import styled from 'styled-components';

export const ConteinerCards = styled.div`
  display: flex;
  justify-content:center;
  gap:2%;
  align-items: center;
  width: 100%;
  height: auto;
  align-items:flex-start;
  @media (max-width: 800px) {
    width: 70%;
    display: flex;
    height: 100%;
    gap:2%;
    flex-direction:row !important;
    align-items:flex-start !important;
    justify-content:center;
    align-self:center;
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
  align-items:center;
  margin: 0 auto;
  @media (max-width: 800px) {
    margin:0;
    display:flex;
    align-items:center;
    
  }
`;

export const TituloCarrossel = styled.h2`
  font-weight: 300;
  @media (max-width: 800px) {
    margin: 3vh 10vw;
  }
`;

export const Conteiner = styled.div`
  display: flex;
  flex-direction: row;
  align-items:center;
  width:100%;
  @media (max-width: 800px) {
    display:flex !important;
    flex-direction:row !important;
    justify-content:space-evenly;
    align-items:center;
    width:100%;
    height:auto;
  }
`;

export const SetaCarrossel = styled.button`
  background:none;
  border:none;
  display:flex;
  .arrow-left{
    transform:rotate(90deg);
  }
  .arrow-right{
    transform:rotate(-90deg);
  }

  @media (max-width: 800px) {
    width:10%;
    height:auto;
    background:transparent !important;
    border:transparent !important;
    align-self:center !important; 
    img{
    width:100%;
    height:100%;
    } 
  }
`;
