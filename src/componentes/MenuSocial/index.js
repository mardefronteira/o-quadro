import { ItemMenuSocial, ConteinerMenuSocial } from "./estilo";

function MenuSocial() {
  return <ConteinerMenuSocial>
      <ItemMenuSocial href = ""> 
        <img src="./imagens/vimeoIcone.svg">
        </img> 
      </ItemMenuSocial>
      <ItemMenuSocial href = ""> 
        <img src="./imagens/youtubeIcone.svg">
        </img> 
      </ItemMenuSocial>
      <ItemMenuSocial href = ""> 
        <img src="./imagens/instagramIcone.svg">
        </img> 
      </ItemMenuSocial>
      <ItemMenuSocial href = ""> 
        <img src="./imagens/facebookIcone.svg">
        </img> 
      </ItemMenuSocial>
      <ItemMenuSocial href = ""> 
        <img src="./imagens/emailIcone.svg">
        </img> 
      </ItemMenuSocial>
    
    </ConteinerMenuSocial>;
}

export default MenuSocial;
