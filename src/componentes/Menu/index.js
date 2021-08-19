import {ConteinerItensMenu, ConteinerMenu, ConteinerLinguagem, ItemMenu , ItemLang, Logo} from "./estilo.js";



function Menu({estado = 1}) {
  return (
  <ConteinerMenu>
    <Logo src="/imagens/oquadro_verde_vertical1.svg" ></Logo>
    <ConteinerItensMenu>
      <ul className="filmes">
        <ItemMenu to="/filmes">FILMES </ItemMenu>
        <li><ItemMenu to="/filmes">LONGAS METRAGEM </ItemMenu></li>
        <li><ItemMenu to="/filmes">CURTAS METRAGENS </ItemMenu></li>
        <li><ItemMenu to="/filmes">MÉDIAS METRAGENS </ItemMenu></li>
      </ul>
      <ItemMenu to="/metro">FESTIVAL METRÔ </ItemMenu>
      <ItemMenu to="/publicacoes">PUBLICAÇÕES </ItemMenu>
      <ItemMenu to="/quem-somos">QUEM SOMOS </ItemMenu>
    </ConteinerItensMenu>
    <ConteinerLinguagem>
      <ItemLang>PT </ItemLang>/
      <ItemLang>EN</ItemLang>
    </ConteinerLinguagem>
  </ConteinerMenu>
  )
}

export default Menu;
