import React from 'react';
// importar estilo
import {
  Titulo, Conteiner, FotoPrincipal, Artigo, GridIntegrantes, Card, Nome, Info,
} from './estilo';
// importar componentes
import Base from '../../componentes/Base';

function QuemSomos() {
  return (
    <Base menuSocialVermelho={false}>
      <Titulo>QUEM SOMOS</Titulo>
      <Conteiner>
        <FotoPrincipal>
          <img src="./imagens/teste/FotoPerfilQuadro1.png" alt="Criadores do Quadro na praia" />
        </FotoPrincipal>
        <Artigo>

          <p>
            {/* eslint-disable-next-line max-len */}
            Formada em 2010, O Quadro é uma produtora voltada para os filmes, com a paixão de quem gosta de fazer cinema porque ama ver cinema.
          </p>

          <p>
            {/* eslint-disable-next-line max-len */}
            Depois de mais de uma dezena de curtas-metragens premiados, com circulação nos principais festivais de cinema nacionais, além de canais de TV, como TNT, Canal Brasil, TCM, entre outros), a produtora lançou, em 2017, seu primeiro longa-metragem, “Bye Bye Jaqueline”. Com estreia em diversas capitais e exibido em festivais em Portugal e na África do Sul, o filme é uma comédia de espírito livre, que reúne diversas das características dos curtas-metragens realizados pela produtora ao longo dos anos.
          </p>

          <p>
            {/* eslint-disable-next-line max-len */}
            A partir de 2017, O Quadro passou a apontar o telescópio para outros quadrantes da galáxia, criando o Metrô – Festival do Cinema Universitário Brasileiro e produzindo o longa-metragem “Euller Miller Entre Dois Mundos”, dirigido por Fernando Severo.
          </p>

          <p>Isso é só o começo.</p>

        </Artigo>
      </Conteiner>
      <GridIntegrantes>
        <Card>
          <Nome>ANDERSON</Nome>
          <img src="http://placekitten.com/400/400" alt="" />
          <Info>
            <p>
              lorem ipsum dolor sit amet, consectetur
              lorem ipsum dolor sit amet, consectetur
              lorem ipsum dolor sit amet, consectetur
            </p>
          </Info>
        </Card>
        <Card>
          <Nome>CHRISTOPHER</Nome>
          <img src="http://placekitten.com/300/300" alt="" />
          <Info>
            <p>
              lorem ipsum dolor sit amet, consectetur
              lorem ipsum dolor sit amet, consectetur
              lorem ipsum dolor sit amet, consectetur
            </p>
          </Info>
        </Card>
        <Card>
          <Nome>EVANDRO</Nome>
          <img src="http://placekitten.com/200/200" alt="" />
          <Info>
            <p>
              lorem ipsum dolor sit amet, consectetur
              lorem ipsum dolor sit amet, consectetur
              lorem ipsum dolor sit amet, consectetur
            </p>
          </Info>
        </Card>
        <Card>
          <Nome>WELLINGTON</Nome>
          <img src="http://placekitten.com/500/500" alt="" />
          <Info>
            <p>
              lorem ipsum dolor sit amet, consectetur
              lorem ipsum dolor sit amet, consectetur
              lorem ipsum dolor sit amet, consectetur
            </p>
          </Info>
        </Card>
      </GridIntegrantes>
    </Base>
  );
}

export default QuemSomos;
