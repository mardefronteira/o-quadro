import {ConteinerItensMenu, ConteinerMenu, ConteinerLinguagem, ItemMenu , ItemLang, Logo} from "./estilo.js";
import { Link } from "react-router-dom";



function Menu({estado = 1}) {
  return (
  <ConteinerMenu estado={estado}>
    {estado === 0 ? (<Logo src="/imagens/oquadro_verde_vertical1.svg" estado={estado} >
    </Logo>):""}
    <ConteinerItensMenu estado={estado}>
      <ul className="filmes">
        <ItemMenu  as={Link} to="/filmes" estado={estado} >FILMES </ItemMenu>
        <li><ItemMenu  as={Link} to="/filmes" estado={estado}>LONGAS METRAGEM </ItemMenu></li>
        <li><ItemMenu as={Link} to="/filmes" estado={estado}>CURTAS METRAGENS </ItemMenu></li>
        <li><ItemMenu as={Link} to="/filmes" estado={estado}>MÉDIAS METRAGENS </ItemMenu></li>
      </ul>
      <ItemMenu as={Link} to="/metro" estado={estado}>FESTIVAL METRÔ </ItemMenu>
      
      {estado !== 0 ? (<ItemMenu as={Link} to="/" className="logo">
      <Logo src={`/imagens/${estado === 1 ? `oquadro_verde_vertical1` : `aquadro_vermelho`}.svg`} estado={estado} >
      </Logo>
      </ItemMenu>
      ):""}
      
      <ItemMenu as={Link} to="/publicacoes" estado={estado}>PUBLICAÇÕES </ItemMenu>
      <ItemMenu as={Link} to="/quem-somos" estado={estado}>QUEM SOMOS </ItemMenu>
    </ConteinerItensMenu>
    <ConteinerLinguagem estado={estado}>
      <ItemLang estado={estado}>PT </ItemLang>/
      <ItemLang estado={estado}>EN</ItemLang>
    </ConteinerLinguagem>
  </ConteinerMenu>
  )
}

export default Menu;
