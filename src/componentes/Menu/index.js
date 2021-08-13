import {ConteinerItensMenu, ConteinerMenu, ConteinerLinguagem, ItemMenu , ItemLang, Logo} from "./estilo.js";



function Menu() {
  return <ConteinerMenu>
    <Logo src="/imagens/oquadro_verde_vertical1.svg" ></Logo>
  <ConteinerItensMenu><ul className="filmes"><ItemMenu >FILMES </ItemMenu>
  <li><ItemMenu>LONGAS METRAGEM </ItemMenu></li>
  <li><ItemMenu>CURTAS METRAGENS </ItemMenu></li>
  <li><ItemMenu>MÉDIAS METRAGENS </ItemMenu></li></ul>
  <ItemMenu>FESTIVAL METRÔ </ItemMenu>
  
  <ItemMenu>PUBLICAÇÕES </ItemMenu>
  <ItemMenu>QUEM SOMOS </ItemMenu>
  </ConteinerItensMenu>
  <ConteinerLinguagem>
    <ItemLang>PT </ItemLang>/
  <ItemLang>EN</ItemLang></ConteinerLinguagem></ConteinerMenu>
}

export default Menu;
