import styled from 'styled-components';

export const ConteinerCards = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: auto;
  margin: 0;
  padding: 0;
  @media (max-width: 800px){
    width: 90%;
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
  padding-bottom: 10vh;
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
`;

export const SetaCarrossel = styled.button`
  background: none;
  border: none;
  @media (max-width: 800px) {
  padding: 0 3vw;
  }
`;
