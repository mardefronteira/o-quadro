import {ConteinerItensMenu, ConteinerMenu, ConteinerLinguagem, ItemMenu , ItemLang} from "./estilo.js";



function Menu() {
  return <ConteinerMenu>
  <ConteinerItensMenu><ItemMenu>FILMES </ItemMenu>
  <ItemMenu>FESTIVAL METRÔ </ItemMenu>
  <ItemMenu>PUBLICAÇÕES </ItemMenu>
  <ItemMenu>QUEM SOMOS </ItemMenu>
  </ConteinerItensMenu>
  <ConteinerLinguagem>
    <ItemLang>PT </ItemLang>/
  <ItemLang>EN</ItemLang></ConteinerLinguagem></ConteinerMenu>
}

export default Menu;
