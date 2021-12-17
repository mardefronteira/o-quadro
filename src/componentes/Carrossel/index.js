/* importar react */
import React, { useState } from 'react';
import MediaQuery from 'react-responsive';

// import PropTypes from 'prop-types';
/* importar componentes */
import Card from './Card/index';
/* importar estilos */
import {
  FundoCarrossel,
  Conteiner,
  ConteinerCards,
  SetaCarrossel,
  TituloCarrossel,
} from './estilo';

const Carrossel = ({ categoria, taVermelho = true }) => {
  const restringir = (val, min, max) => {
    let valor = val;
    if (val < min) {
      valor = min;
    } else if (val > max) {
      valor = max;
    }
    return valor;
  };

  const DefinirPos = () => {
    const [pos, defPos] = useState(0);

    const moverCarrossel = (direcao, numItens) => {
      const moverPara = pos + 3 * direcao;
      defPos(restringir(moverPara, 0, numItens - 3));
    };

    return [pos, moverCarrossel];
  };
  /* variável pra conter a posição do Carrossel */
  const [pos, moverCarrossel] = DefinirPos(0);

  return (
    <>
      <MediaQuery maxWidth={799}>

        <FundoCarrossel>

          <TituloCarrossel taVermelho>
            {taVermelho ? 'LIVROS' : 'FILMES'}
          </TituloCarrossel>
          <Conteiner>
            <SetaCarrossel
              className={pos > 0 ? '' : 'transparente'}
              onClick={() => {
                moverCarrossel(-1, categoria.length);
              }}
            >
              {/* {"<"} */}
              <svg className="arrow-left" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 64 64" fill="none">
                <path d="M17.293 29.707C16.9023 29.3164 16.9023 28.6836 17.293 28.293C17.6836 27.9023 18.3164 27.9023 18.707 28.293L32 41.5858L45.293 28.293C45.6836 27.9023 46.3164 27.9023 46.707 28.293C46.9023 28.4883 47 28.7442 47 29C47 29.2559 46.9023 29.5117 46.707 29.707L32.707 43.707C32.3164 44.0976 31.6836 44.0976 31.293 43.707L17.293 29.707Z" fill={taVermelho ? '#CF0018' : '#007F50'} />
                <path d="M32 64C49.6731 64 64 49.6731 64 32C64 14.3269 49.6731 0 32 0C14.3268 0 0 14.3269 0 32C0 49.6731 14.3268 64 32 64ZM32 62C15.4579 62 2 48.5421 2 32C2 15.458 15.4579 2 32 2C48.5421 2 62 15.458 62 32C62 48.5421 48.5421 62 32 62Z" fill={taVermelho ? '#CF0018' : '#007F50'} />
              </svg>

            </SetaCarrossel>
            <ConteinerCards>

              <Card
                taVermelho={taVermelho}
                img={categoria[pos].imgPoster}
                titulo={categoria[pos].titulo}
                desc={categoria[pos].desc}
                url={categoria[pos].url}
              />
              <Card
                taVermelho={taVermelho}
                img={categoria[pos + 1].imgPoster}
                titulo={categoria[pos + 1].titulo}
                desc={categoria[pos + 1].desc}
                url={categoria[pos + 1].url}
              />
              {/* <Card
                taVermelho={taVermelho}
                img={categoria[pos + 2].imgPoster}
                titulo={categoria[pos + 2].titulo}
                desc={categoria[pos + 2].desc}
                url={categoria[pos + 2].url}
              /> */}
            </ConteinerCards>
            <SetaCarrossel
              className={pos < categoria.length - 2 ? '' : 'transparente'}
              onClick={() => {
                moverCarrossel(1, categoria.length);
              }}
            >
              {/* {'>'} */}
              <svg className="arrow-right" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 64 64" fill="none">
                <path d="M17.293 29.707C16.9023 29.3164 16.9023 28.6836 17.293 28.293C17.6836 27.9023 18.3164 27.9023 18.707 28.293L32 41.5858L45.293 28.293C45.6836 27.9023 46.3164 27.9023 46.707 28.293C46.9023 28.4883 47 28.7442 47 29C47 29.2559 46.9023 29.5117 46.707 29.707L32.707 43.707C32.3164 44.0976 31.6836 44.0976 31.293 43.707L17.293 29.707Z" fill={taVermelho ? '#CF0018' : '#007F50'} />
                <path d="M32 64C49.6731 64 64 49.6731 64 32C64 14.3269 49.6731 0 32 0C14.3268 0 0 14.3269 0 32C0 49.6731 14.3268 64 32 64ZM32 62C15.4579 62 2 48.5421 2 32C2 15.458 15.4579 2 32 2C48.5421 2 62 15.458 62 32C62 48.5421 48.5421 62 32 62Z" fill={taVermelho ? '#CF0018' : '#007F50'} />
              </svg>
            </SetaCarrossel>
          </Conteiner>
        </FundoCarrossel>
      </MediaQuery>
      <MediaQuery minWidth={800}>
        <FundoCarrossel>
          <TituloCarrossel taVermelho>
            {taVermelho ? 'LIVROS' : 'FILMES'}
          </TituloCarrossel>
          <Conteiner>
            <SetaCarrossel
              className={pos > 0 ? '' : 'transparente'}
              onClick={() => {
                moverCarrossel(-1, categoria.length);
              }}
            >
              {/* {'<'} */}
              <svg className="arrow-left" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 64 64" fill="none">
                <path d="M17.293 29.707C16.9023 29.3164 16.9023 28.6836 17.293 28.293C17.6836 27.9023 18.3164 27.9023 18.707 28.293L32 41.5858L45.293 28.293C45.6836 27.9023 46.3164 27.9023 46.707 28.293C46.9023 28.4883 47 28.7442 47 29C47 29.2559 46.9023 29.5117 46.707 29.707L32.707 43.707C32.3164 44.0976 31.6836 44.0976 31.293 43.707L17.293 29.707Z" fill={taVermelho ? '#CF0018' : '#007F50'} />
                <path d="M32 64C49.6731 64 64 49.6731 64 32C64 14.3269 49.6731 0 32 0C14.3268 0 0 14.3269 0 32C0 49.6731 14.3268 64 32 64ZM32 62C15.4579 62 2 48.5421 2 32C2 15.458 15.4579 2 32 2C48.5421 2 62 15.458 62 32C62 48.5421 48.5421 62 32 62Z" fill={taVermelho ? '#CF0018' : '#007F50'} />
              </svg>
            </SetaCarrossel>
            <ConteinerCards>
              <Card
                taVermelho={taVermelho}
                img={categoria[pos].imgPoster}
                titulo={categoria[pos].titulo}
                desc={categoria[pos].desc}
                url={categoria[pos].url}
              />
              <Card
                taVermelho={taVermelho}
                img={categoria[pos + 1].imgPoster}
                titulo={categoria[pos + 1].titulo}
                desc={categoria[pos + 1].desc}
                url={categoria[pos + 1].url}
              />
              <Card
                taVermelho={taVermelho}
                img={categoria[pos + 2].imgPoster}
                titulo={categoria[pos + 2].titulo}
                desc={categoria[pos + 2].desc}
                url={categoria[pos + 2].url}
              />
            </ConteinerCards>
            <SetaCarrossel
              className={pos < categoria.length - 3 ? '' : 'transparente'}
              onClick={() => {
                moverCarrossel(1, categoria.length);
              }}
            >
              {/* {'>'} */}
              <svg className="arrow-right" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 64 64" fill="none">
                <path d="M17.293 29.707C16.9023 29.3164 16.9023 28.6836 17.293 28.293C17.6836 27.9023 18.3164 27.9023 18.707 28.293L32 41.5858L45.293 28.293C45.6836 27.9023 46.3164 27.9023 46.707 28.293C46.9023 28.4883 47 28.7442 47 29C47 29.2559 46.9023 29.5117 46.707 29.707L32.707 43.707C32.3164 44.0976 31.6836 44.0976 31.293 43.707L17.293 29.707Z" fill={taVermelho ? '#CF0018' : '#007F50'} />
                <path d="M32 64C49.6731 64 64 49.6731 64 32C64 14.3269 49.6731 0 32 0C14.3268 0 0 14.3269 0 32C0 49.6731 14.3268 64 32 64ZM32 62C15.4579 62 2 48.5421 2 32C2 15.458 15.4579 2 32 2C48.5421 2 62 15.458 62 32C62 48.5421 48.5421 62 32 62Z" fill={taVermelho ? '#CF0018' : '#007F50'} />
              </svg>
            </SetaCarrossel>
          </Conteiner>
        </FundoCarrossel>
      </MediaQuery>
    </>
  );
};

// Carrossel.propTypes = {
//   categoria: PropTypes.objectOf(PropTypes.string).isRequired,
//   taVermelho: PropTypes.bool.isRequired,
// };

export default Carrossel;
