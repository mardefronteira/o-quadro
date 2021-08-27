import {Barra,Pesquisa, BotaoPesquisa} from "./estilo";

function BarraPesquisa(){
    return(
        <Barra >
        <Pesquisa type="text" id="busca" placeholder="Buscar nome do Filme"/>
        <BotaoPesquisa type="button" >
            <img className="lupa" src="./imagens/barraPesquisa/lupaIcone.svg"/> 
            <img className="lupaHover" src="./imagens/barraPesquisa/lupaIconeHover.svg"/> 
        </BotaoPesquisa>
        </Barra>
    )
}

export default BarraPesquisa;