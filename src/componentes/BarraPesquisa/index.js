import {Barra,Pesquisa, BotaoPesquisa} from "./estilo";

function BarraPesquisa(){
    return(
        <Barra >
        <Pesquisa type="text" id="busca" placeholder="Buscar nome do Filme"/>
        <BotaoPesquisa type="button" alt="Pesquisar">
            <img className="lupa" src="./imagens/barraPesquisa/lupaIcone.svg" alt=""/> 
            <img className="lupaHover" src="./imagens/barraPesquisa/lupaIconeHover.svg" alt=""/> 
        </BotaoPesquisa>
        </Barra>
    )
}

export default BarraPesquisa;