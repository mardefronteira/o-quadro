import { ContainerFilmes, InfoFilme, ContainerImgDestaqueDireita, TituloDestaque, subTituloDestaque, TextoVerde, h3Destaque, ImgDestaque, ImgDestaqueDireita, cardFilmeSelecionado } from "./estilo.js";
import { Menu } from "./Menu/index.js";

function SecaoInformacoes() {
  return (<ContainerFilmes>
    <TituloDestaque> TERROR NOTURNO</TituloDestaque>
    <h3Destaque> DE EVANDRO SCORSIN</h3Destaque>
    <ImgDestaque src="/imagens/teste/img-destaque"></ImgDestaque>
    <div>
      <InfoFilme>
        <iframe width="650" height="367"></iframe>
        <subTituloDestaque>TERROR NOTURNO, 2019 </subTituloDestaque>
        <h3Destaque> DE EVANDRO SCORSIN</h3Destaque>
        <div><h3Destaque> COM</h3Destaque>
        <p>Gustavo Piaskoski e Marrara Mara</p>
        </div>
        <div> <h3Destaque> COM</h3Destaque>
        <p>Após uma festa com muita bebedeira e diversão, um casal desperta no dia seguinte sem qualquer recordação sobre os eventos da noite anterior. Quando encontram vestígios de um provável atropelamento no para-choque do carro, passam a acreditar que podem ter cometido um assassinato.</p>
        </div>


      </InfoFilme>
      <ContainerImgDestaqueDireita>
        <imgDestaqueDireita src="/imagens/teste/posterTerror">
        </imgDestaqueDireita>
      </ContainerImgDestaqueDireita></div>
  </ContainerFilmes>);
}

export default SecaoInformacoes;
