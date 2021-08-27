import { DivFlex, ContainerFilmes, InfoFilme, ContainerImgDestaqueDireita, TituloDestaque, SubTituloDestaque, TextoVerde, H3Destaque, ImgDestaque, ImgDestaqueDireita, cardFilmeSelecionado } from "./estilo.js";
import GaleriaFilmes from "../../componentes/GaleriaFilmes"
function SecaoInformacoes() {
  return (<ContainerFilmes>
    <DivFlex className="section-title" eColuna={true}>
      <TituloDestaque> TERROR NOTURNO</TituloDestaque>
      <H3Destaque> DE EVANDRO SCORSIN</H3Destaque>
    </DivFlex>
    <ImgDestaque src="/imagens/teste/img-destaque"></ImgDestaque>
    <DivFlex>
      <InfoFilme>
        <iframe width="650" height="367" src="https://www.youtube.com/embed/hv6xxNDV8PA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <SubTituloDestaque>TERROR NOTURNO, 2019 </SubTituloDestaque>
        <H3Destaque> DE EVANDRO SCORSIN</H3Destaque>
        <DivFlex>
          <DivFlex className="text-box" eColuna={true}><H3Destaque> COM</H3Destaque>
            <p>Gustavo Piaskoski e Marrara Mara</p>
          </DivFlex>
          <DivFlex className="text-box" eColuna={true}><H3Destaque> SINOPSE</H3Destaque>
            <p>Após uma festa com muita bebedeira e diversão, um casal desperta no dia seguinte sem qualquer recordação sobre os eventos da noite anterior. Quando encontram vestígios de um provável atropelamento no para-choque do carro, passam a acreditar que podem ter cometido um assassinato.</p>
          </DivFlex>
        </DivFlex>
      </InfoFilme>
      <ImgDestaqueDireita src="/imagens/teste/posterTerror">
      </ImgDestaqueDireita>
    </DivFlex>
    <DivFlex className="movies">
      <img src="https://placekitten.com//375/235"></img>
      <img src="https://placekitten.com//375/235"></img>
      <img src="https://placekitten.com//375/235"></img>
      <img src="https://placekitten.com//375/235"></img>
      <img src="https://placekitten.com//375/235"></img>
      <img src="https://placekitten.com//375/235"></img>
    </DivFlex>
    <DivFlex className="team">
      <DivFlex><span className="TextoVerde">Direção e roteiro:</span><span></span> </DivFlex>
      <DivFlex><span className="TextoVerde">Produção:</span><span></span></DivFlex>
      <DivFlex><span className="TextoVerde">Montagem:</span><span></span></DivFlex>
      <DivFlex><span className="TextoVerde"></span><span></span></DivFlex>
      <DivFlex><span className="TextoVerde"></span><span></span></DivFlex>
      <DivFlex><span className="TextoVerde"></span><span></span></DivFlex>
      <DivFlex><span className="TextoVerde"></span><span></span></DivFlex>
      <DivFlex><span className="TextoVerde"></span><span></span></DivFlex>
      <DivFlex><span className="TextoVerde"></span><span></span></DivFlex>

    </DivFlex>
  </ContainerFilmes>);
}

export default SecaoInformacoes;
