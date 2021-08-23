import { DivFlex, ContainerFilmes, InfoFilme, ContainerImgDestaqueDireita, TituloDestaque, SubTituloDestaque, TextoVerde, H3Destaque, ImgDestaque, ImgDestaqueDireita, cardFilmeSelecionado } from "./estilo.js";
import GaleriaFilmes from "../../componentes/GaleriaFilmes"
function SecaoInformacoes() {
  return (<ContainerFilmes>
    <TituloDestaque> TERROR NOTURNO</TituloDestaque>
    <H3Destaque> DE EVANDRO SCORSIN</H3Destaque>
    <ImgDestaque src="/imagens/teste/img-destaque"></ImgDestaque>
    <DivFlex>
      <InfoFilme>
        <iframe width="650" height="367"></iframe>
        <SubTituloDestaque>TERROR NOTURNO, 2019 </SubTituloDestaque>
        <H3Destaque> DE EVANDRO SCORSIN</H3Destaque>
        <DivFlex>
          <DivFlex eColuna={true}><H3Destaque> COM</H3Destaque>
            <p>Gustavo Piaskoski e Marrara Mara</p>
          </DivFlex>
          <DivFlex eColuna={true}><H3Destaque> SINOPSE</H3Destaque>
            <p>Após uma festa com muita bebedeira e diversão, um casal desperta no dia seguinte sem qualquer recordação sobre os eventos da noite anterior. Quando encontram vestígios de um provável atropelamento no para-choque do carro, passam a acreditar que podem ter cometido um assassinato.</p>
          </DivFlex>
        </DivFlex>
      </InfoFilme>
      <ImgDestaqueDireita src="/imagens/teste/posterTerror">
      </ImgDestaqueDireita>
    </DivFlex>
    <GaleriaFilmes />
  </ContainerFilmes>);
}

export default SecaoInformacoes;
