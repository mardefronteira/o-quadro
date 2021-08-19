//importar react
import React from "react";
// importar estilos
import { FundoCard, Subtitulo, Desc, ImagemCard } from "./estilo";

const Card = ({ img, titulo, desc }) => {
  console.log(img);
  return (
    <FundoCard>
      <ImagemCard src={`/imagens/teste/${img}`}></ImagemCard>
      <Subtitulo>{titulo}</Subtitulo>
      <Desc>{desc}</Desc>
    </FundoCard>
  );
};

export default Card;