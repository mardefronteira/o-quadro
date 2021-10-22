import styled from 'styled-components';
// import { Link } from "react-router-dom";

export const Subtitulo = styled.h3`
  font-family: Arial, sans-serif;
  font-weight: 100;
  font-size: 1em;
  line-height: 1.15em;
  margin: 0;
  padding: 2vh 0;
  color: ${(props) => (props.taVermelho ? '#CF0018' : '#009F66')}
`;

export const FundoCard = styled.a`
  width: 15vw;
  height: auto;
  text-align: center;
  text-decoration: none;
  color: inherit;
  padding: 4vh 2vw;
  transition-duration: 0.7s;
  &:hover,
  &:focus {
    box-shadow: 2px 2px 5px #000000;
  }
  @media (max-width: 800px) {
  width:20vw;
  }
`;

export const Desc = styled.div`
  font-family: "Roboto Mono", monospace;
  font-weight: 500;
  font-size: 1rem;
  width: 100%;
`;

export const ImagemCard = styled.img`
  width: 100%;
  height: auto;
`;
