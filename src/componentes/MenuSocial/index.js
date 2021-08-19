import { ItemMenuSocial, ConteinerMenuSocial } from "./estilo";

function MenuSocial({vermelho = false}) {

  return (
    <ConteinerMenuSocial 
    taVermelho = {vermelho}
    >
      <ItemMenuSocial href = ""> 
        <img src="./imagens/icone/vimeoIcone.svg">
        </img> 
      </ItemMenuSocial>
      <ItemMenuSocial href = ""> 
        <img src="./imagens/icone/youtubeIcone.svg">
        </img> 
      </ItemMenuSocial>
      <ItemMenuSocial href = ""> 
        <img src="./imagens/icone/instagramIcone.svg">
        </img> 
      </ItemMenuSocial>
      <ItemMenuSocial href = ""> 
        <img src="./imagens/icone/facebookIcone.svg">
        </img> 
      </ItemMenuSocial>
      <ItemMenuSocial href = ""> 
        <img src="./imagens/icone/emailIcone.svg">
        </img> 
      </ItemMenuSocial>
    
    </ConteinerMenuSocial>);
}

export default MenuSocial;
