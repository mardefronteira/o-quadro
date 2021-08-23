import {Pagina} from "./estilo.js";
// importar componentes
import MenuSocial from "../MenuSocial";
import Menu from "../Menu";

function Base({estadoMenu = 1, menuSocialVermelho = false, children}) {
  return (
    <>
    <MenuSocial vermelho ={menuSocialVermelho}/>
    <Menu estado={estadoMenu}/>
    <Pagina>
    {children}
    </Pagina>
  </>
  )
}

export default Base;
