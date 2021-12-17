import React from 'react';
import dataBase from '../../db';
// importar estilo
import {
  Titulo, Conteiner, FotoPrincipal, Artigo, GridIntegrantes, Card, Nome, FotoPerfil,
} from './estilo';
// importar componentes
import Base from '../../componentes/Base';

function QuemSomos() {
  const somos = dataBase.quemSomos;
  console.log(somos);
  return (
    <Base menuSocialVermelho={false}>
      <Titulo>{somos.titulo.toUpperCase()}</Titulo>
      <Conteiner>
        <FotoPrincipal>
          <img src={somos.imgDestaque.src} alt={somos.imgDestaque.desc} />
        </FotoPrincipal>
        <Artigo>

          <p>
            {somos.texto.primeiroParagrafo}
          </p>

          <p>
            {somos.texto.segundoParagrafo}
          </p>

          <p>
            {somos.texto.terceiroParagrafo}
          </p>

          <p>
            {somos.texto.quartoParagrafo}
          </p>

        </Artigo>
      </Conteiner>
      <GridIntegrantes>
        {somos.membros.map((membro) => (
          <Card>
            <Nome>{membro.nome.toUpperCase()}</Nome>
            <FotoPerfil src={membro.img.src} alt={membro.img.desc} />
          </Card>
        ))}

      </GridIntegrantes>
    </Base>
  );
}

export default QuemSomos;
