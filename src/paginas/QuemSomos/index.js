import React from 'react';
import { useGlobal } from '../../AcessoGlobal';
// importar estilo
import {
  Titulo, Conteiner, FotoPrincipal, Artigo, GridIntegrantes, Card, Nome, FotoPerfil,
} from './estilo';
// importar componentes
import Base from '../../componentes/Base';

function QuemSomos() {
  // eslint-disable-next-line no-unused-vars
  const [global, mudarGlobal] = useGlobal();

  const somos = global.db.quemSomos;
  return (
    <Base menuSocialVermelho={false}>
      <Titulo>{global.ptBr ? 'QUEM SOMOS' : 'ABOUT US'}</Titulo>
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
          <Card key={membro.nome}>
            <Nome>{membro.nome.toUpperCase()}</Nome>
            <FotoPerfil src={membro.img.src} alt={membro.img.desc} />
          </Card>
        ))}

      </GridIntegrantes>
    </Base>
  );
}

export default QuemSomos;
