import styled from 'styled-components';
import { DivFlex, TituloDestaque, H3Destaque } from '../../componentes/SecaoInformacoes/estilo';
import { ImgPatrocinadores } from '../Publicacoes/estilo';

export const DivFlexPublicacao = styled(DivFlex)`
#conteiner-principal {
  display: flex;
  align-items: center;
  gap: 2em;
  

}
#secao-cabecalho {
  align-items: center;
  padding-bottom: 7vh;
  @media (max-width: 800px){
    width: 90%;
    text-align: center;
    padding: 5vh 5vw;
  }
  
}
#conteiner-info {
  gap: 2em;
  width:100%;
  @media (max-width: 800px) {
    flex-direction: column;
  }
}
#secao-info {
  width:50%;
  @media (max-width: 800px) {
    width: 90%;
    padding: 0 5vw;
  }
}
#secao-titulo {
 
  p{
    text-align: justify;
    padding-bottom: 2vh;
  }
}
#artigo{
  p{
    text-align: justify;
    padding-bottom: 2vh;
  }

}
#ficha-tecnica {

}
`;

export const ImgDestaqueDireita = styled.img`
width: 40%;
height: 100%;
@media (max-width: 800px){
  width: 80%;
  padding: 0 10vw;
}
`;

export const TituloLivro = styled(TituloDestaque)`
font-size: 2.5em;
`;

export const TituloVermelho = styled(H3Destaque)`
padding-bottom: 0.85vh;
`;

export const NomeAutor = styled.h3`

`;

export const ImgPatrocinio = styled(ImgPatrocinadores)`
width: 100%;
padding-top: 10vh;

`;

export const Linha = styled.hr`
margin: 5vh 0;
background-color: #000000;
border: 0.5px solid #000000;
opacity: 0.4;
@media(max-width: 800px){
  margin: 5vh 5vw;
}
`;
