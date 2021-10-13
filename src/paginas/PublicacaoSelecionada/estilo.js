import styled from 'styled-components';
import { DivFlex, TituloDestaque, H3Destaque } from '../../componentes/SecaoInformacoes/estilo';

export const DivFlexPublicacao = styled(DivFlex)`
#conteiner-principal {
  display: flex;
  align-items: center;
  gap: 2em;
}
#secao-cabecalho {
  align-items: center;
  padding-bottom: 7vh;
  
}
#conteiner-info {
  gap: 2em;
  width:100%;
}
#secao-info {
  width:50%;
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
`;

export const TituloLivro = styled(TituloDestaque)`
font-size: 2.5em;
`;

export const TituloVermelho = styled(H3Destaque)`
padding-bottom: 0.85vh;
`;

export const NomeAutor = styled.h3`

`;
