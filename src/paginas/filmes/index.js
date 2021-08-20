// importar estilos
import {} from "./estilo.js";
// importar componentes
import Base from "../../componentes/Base";
import GaleriaFilmes from "../../componentes/GaleriaFilmes";
function Filmes() {
   return (
  <Base 
  menuSocialVermelho = {false}
  estadoMenu = {1}>
    <GaleriaFilmes/>
  </Base>
  );
}

export default Filmes;