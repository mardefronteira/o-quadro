import { DivFlex, ContainerFilmes, InfoFilme, ContainerImgDestaqueDireita, TituloDestaque, SubTituloDestaque, TextoVerde, H3Destaque, ImgDestaque, ImgDestaqueDireita, MaisInfo } from "./estilo.js";
import Carrossel from "../Carrossel"
import dataBase from "../../db"
import useState from 'react'
function SecaoInformacoes() {
  const [taAtivo,setTaAtivo] = useState(false);

  return (<ContainerFilmes>
    <DivFlex className="titulo-secao" eColuna={true}>
      <TituloDestaque> TERROR NOTURNO</TituloDestaque>
      <H3Destaque> DE EVANDRO SCORSIN</H3Destaque>
    </DivFlex>
    <ImgDestaque src="https://placekitten.com//375/235"></ImgDestaque>
    <DivFlex className="secaoPrincipal" style={{justifyContent:'space-around'}}>
      <InfoFilme>
        <iframe width="100%" height="367" src="https://www.youtube.com/embed/hv6xxNDV8PA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <SubTituloDestaque>TERROR NOTURNO, 2019 </SubTituloDestaque>
        <H3Destaque> DE EVANDRO SCORSIN</H3Destaque>
        <DivFlex>
          <DivFlex className="caixa-texto" eColuna={true}><H3Destaque> COM</H3Destaque>
            <p>Gustavo Piaskoski e Marrara Mara</p>
          </DivFlex>
          <DivFlex className="caixa-texto" eColuna={true}><H3Destaque> SINOPSE</H3Destaque>
            <p>Após uma festa com muita bebedeira e diversão, um casal desperta no dia seguinte sem qualquer recordação sobre os eventos da noite anterior. Quando encontram vestígios de um provável atropelamento no para-choque do carro, passam a acreditar que podem ter cometido um assassinato.</p>
          </DivFlex>
        </DivFlex>
      </InfoFilme>
      <ImgDestaqueDireita src="https://placekitten.com//900/500">
      </ImgDestaqueDireita>
    </DivFlex>
    <DivFlex className="filmes">
      <img src="https://placekitten.com//375/235"></img>
      <img src="https://placekitten.com//375/235"></img>
      <img src="https://placekitten.com//375/235"></img>
      <img src="https://placekitten.com//375/235"></img>
      <img src="https://placekitten.com//375/235"></img>
      <img src="https://placekitten.com//375/235"></img>
    </DivFlex>
    <DivFlex className="equipe" eColuna={true}>
      <SubTituloDestaque>EQUIPE</SubTituloDestaque>
      <DivFlex eColuna={false}><TextoVerde>Direção e roteiro:</TextoVerde><span>Evandro Scorsin</span> </DivFlex>
      <DivFlex eColuna={false}><TextoVerde>Produção:</TextoVerde><span>Anderson Simão</span></DivFlex>
      <DivFlex eColuna={false}><TextoVerde>Montagem:</TextoVerde><span>Christopher Faust</span></DivFlex>
      <DivFlex eColuna={false}><TextoVerde>Produção:</TextoVerde><span>Wellington Sari</span></DivFlex>
      <DivFlex eColuna={false}><TextoVerde>Coordenação:</TextoVerde><span>Gustavo Duarte</span></DivFlex>
      <DivFlex eColuna={false}><TextoVerde>Direção de fotografia:</TextoVerde><span>André Senna</span></DivFlex>
      <DivFlex eColuna={false}><TextoVerde>Trilha Sonora:</TextoVerde><span>Felipe Ayres</span></DivFlex>
      <DivFlex eColuna={false}><TextoVerde>Finalização de som:</TextoVerde><span>Vitor Coroa e Vitor Morales</span></DivFlex>
      <MaisInfo><img src="../imagens/seta_para_baixo.svg" onClick={ () =>{
        setTaAtivo(true);
        if(setTaAtivo === true){        
          console.log('tô funcionando')
      }}} />
      <img src="../imagens/seta_para_cima.svg" style={{display:"none"}} />
      </MaisInfo>
      { }
    </DivFlex>
    <DivFlex className="mais-equipe" eColuna={false}>
    <TextoVerde>Elenco de apoio:</TextoVerde><span>Martha Chapieski e Altamar Cezar</span>
    <TextoVerde>Operador de câmera:</TextoVerde><span>André Senna |</span>
    <TextoVerde>Assistente de câmera:</TextoVerde><span>Bianca Ono | </span>
    <TextoVerde>Assistente de fotografia:</TextoVerde><span>Murilo Lazarin |</span>
    <TextoVerde>Elétrica:</TextoVerde><span>Morgana Horst |</span>
    <TextoVerde>Arte, figurino e maquiagem:</TextoVerde><span>Lucas Machado |</span>
    <TextoVerde>Estúdio de correção de cor: </TextoVerde><span>House Films |</span>
    <TextoVerde>Correção de cor:</TextoVerde><span>Lucas Machado |</span>
    <TextoVerde>Logger e assistente de direção:</TextoVerde><span>Christopher Faust |</span>
    <TextoVerde>Som direto:</TextoVerde><span>Anderson Simão |</span>
    <TextoVerde>Edição de som:</TextoVerde><span>Rodrigo Sacic, Vitor Coroa e Vitor Moraes |</span>
    <TextoVerde>Foley:</TextoVerde><span>Vitor Moraes |</span>
    <TextoVerde>Dublagem:</TextoVerde><span>Luiz Lepchak |</span>
    <TextoVerde>Estúdio de mixagem:</TextoVerde><span>Estúdio Desterro</span>
    <TextoVerde>Designer gráfico:</TextoVerde><span>Pietro Luigi</span>
    <TextoVerde>Acessibilidade:</TextoVerde><span>Etc Filmes</span>
    <TextoVerde>Traduções:</TextoVerde><span>O Editorial – Traduções e Edições</span>
    <TextoVerde>Sincronização português e tradução inglês:</TextoVerde><span>Paulo Scarpa</span>
    <TextoVerde>Tradução espanhol:</TextoVerde><span>Niala Pessuto</span>
    
    </DivFlex>
    <Carrossel categoria={dataBase} >
    </Carrossel>
  </ContainerFilmes>);
}

export default SecaoInformacoes;
