// importar estilos
import {ConteinerPrincipal, Poster, Conteiner, Logo, Artigo, Embarque} from "./estilo.js";
// importar componentes
import Base from "../../componentes/Base";

function FestivalMetro() {
   return (
  <Base 
  menuSocialVermelho = {false}>
    <ConteinerPrincipal>
      <Conteiner>
      <Logo>
        FESTIVAL METRÔ
      </Logo>
      <Artigo>
        Desde 2017, O Quadro produz o Metrô – Festival do Cinema Universitário Brasileiro. 
        Voltado para a exibição, a reflexão e o debate sobre o cinema e as coisas da vida, 
        o festival busca construir uma estação imaginária em que se encontrem e se cruzem 
        diferentes formas de criação artística e de pessoas. 
      </Artigo>
      <Embarque type="button">Embarque</Embarque>
    </Conteiner>
    <Poster src="./imagens/4edicao.png"/>
    </ConteinerPrincipal>
  </Base>
  );
}

export default FestivalMetro;