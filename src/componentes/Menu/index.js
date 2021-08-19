import {ConteinerItensMenu, ConteinerMenu, ConteinerLinguagem, ItemMenu , ItemLang, Logo} from "./estilo.js";
import { Link } from "react-router-dom";



function Menu({estado = 1}) {
  return (
  <ConteinerMenu>
    <Logo src="/imagens/oquadro_verde_vertical1.svg" ></Logo>
    <ConteinerItensMenu>
      <ul className="filmes">
        <ItemMenu as={Link} to="/filmes" >FILMES </ItemMenu>
        <li><ItemMenu  as={Link} to="/filmes">LONGAS METRAGEM </ItemMenu></li>
        <li><ItemMenu as={Link} to="/filmes">CURTAS METRAGENS </ItemMenu></li>
        <li><ItemMenu as={Link} to="/filmes">MÉDIAS METRAGENS </ItemMenu></li>
      </ul>
      <ItemMenu as={Link} to="/metro">FESTIVAL METRÔ </ItemMenu>
      <ItemMenu as={Link} to="/publicacoes">PUBLICAÇÕES </ItemMenu>
      <ItemMenu as={Link} to="/quem-somos">QUEM SOMOS </ItemMenu>
    </ConteinerItensMenu>
    <ConteinerLinguagem>
      <ItemLang>PT </ItemLang>/
      <ItemLang>EN</ItemLang>
    </ConteinerLinguagem>
  </ConteinerMenu>
  )
}

export default Menu;
