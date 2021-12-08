import styled from 'styled-components';

export const ContainerFilmes = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8vh;

  iframe {
    width: 40vw;
    height: 45vh;
  }

  .caixa-texto {
    width: 40%;
    height: auto;
  }

  .titulo-secao {
    align-items: center;
  }

  .galeria-fotos {
    flex-wrap: wrap;
    gap: 30px;
    align-items: center;
    justify-content: center;
    padding-top: 5vh;
    width: 100%;
    img {
      width: 30%;
      height: auto;
    }
  }

  .equipe {
    align-self: flex-start;
    gap: 10px;
    width: 100%;
    p {
      line-height: 2em;
    }
  }

  #mais-equipe {
    gap: 1.5%;
    flex-wrap: wrap;
    transition: 1s ease-in-out;
    overflow: hidden;
  }
  .secaoPrincipal {
    justify-content: space-between;
    width: 100%;
    height: auto;
  }

  #sinopse {
    width: 60%;
    text-align: justify;
  }

  .info-filme {
    width: 40vw;
    gap: 15px;
  }
  @media (max-width: 800px) {
    gap: 4vh;
    div {
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    .info-filme {
      width: 100%;
    }
    #sinopse,
    .caixa-texto {
      width: 85%;
    }
    #mais-equipe p {
      width: 85%;
      transition: 1s ease-in-out;
      overflow: hidden;
    }
    .galeria-fotos div{
      display: flex;
      flex-direction: row;
      flex-wrap:wrap;
      gap:3%;      
      width: 100%;
      img {
        width: 40%;
        height: 30%;
      }
    }
  }
`;
export const DivFlex = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.eColuna ? 'column' : 'row')};
`;
export const InfoFilme = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  @media (max-width: 800px) {
    width: 100%;
    iframe {
      width: 100%;
      height: 20vh;
    }
    h2 {
      font-size: 1.1em;
      font-weight: bold;
    }
    h3 {
      font-size: 0.9rem;
      font-weight: semi-bold;
    }
  }
`;

export const TituloDestaque = styled.h1`
  color: ${(props) => (props.eVermelho ? '#CF0018' : 'inherit')};
  font-size: 3em;
  font-weight: bold;
  line-height: 1.2;
  @media (max-width: 800px) {
    text-align: center;
    width: 100%;
    font-size: 2.5em;
  }
`;
export const SubTituloDestaque = styled.h2`
  padding: 4vh 0 1.5vh 0;
  font-size: 1.7em;
  line-height: 1.2;
`;

export const H3Destaque = styled.h3`
  color: ${(props) => (props.eVermelho ? '#CF0018' : 'inherit')};
  display: flex;
  font-size: 1em;
  font-weight: bold;
  @media (max-width: 800px) {
    font-size: 1em;
    font-weight: bold;
  }
`;

export const ImgDestaque = styled.img`
  height: 38vh;
  width: 100%;
  object-fit: cover;
`;
export const ImgDestaqueDireita = styled.img`
  width: auto;
  max-width: 50%;
  height: 70vh;
  object-fit: cover;
`;

export const MaisInfo = styled.button`
  transform: ${(props) => (props.girou ? 'rotate(180dg)' : 'rotate(0dg)')};
  border: none;
  background: none;
  align-self: center;
`;
