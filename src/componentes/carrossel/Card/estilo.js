import styled from "styled-components";
// import { Link } from "react-router-dom";

export const Subtitulo = styled.h3`
  font-family: Arial, sans-serif;
  font-weight: 100;
  font-size: 1.65rem;
  color: #009F66;
`;

export const FundoCard = styled.a`
  width: 13vw;
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
`;

export const Desc = styled.div`
  font-family: "Roboto Mono", monospace;
  font-weight: 500;
  font-size: 1.25rem;
  width: 100%;
`;

export const ImagemCard = styled.img`
  width: 100%;
  height: auto;
`;