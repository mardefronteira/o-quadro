import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FundoCard = styled(Link)`
  position:relative;
  display: flex;
  text-decoration: none;
  color:inherit;
  
  img {
    width: 100%;
    height: 23vh;
    object-fit:cover;
  }
  
  @media(max-width: 800px){
    img {
    width: 100%;
    height: auto;
    object-fit:auto;
  }
  
    flex-direction: column;
    align-items: center;
  }
`;

export const Legenda = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  color: #ffffff;
  position:absolute;
  z-index: 40;
  background-color: rgba( 0, 0, 0, 0.5);
  opacity: 0;
  transition-delay: 0.5s;
  transition: 0.5s;
  &:hover,&:focus {
    opacity: 1;
  }
`;

export const Info = styled.p`
  display: flex;
  flex-direction: column;
  padding: 5% 5%;
  font-weight: bold;
  font-size: 1em;
  text-align: left;
  align-content: flex-end;
  justify-content: flex-end;
  gap: 1.2vh;
`;

export const ItemInfo = styled.p`
line-height: 1.1;
`;

export const InfoMovel = styled.div`
   text-decoration:none;
   display:flex;
   justify-content: center;
   flex-direction: column;
   align-items: center;
   width: 100%;
`;
