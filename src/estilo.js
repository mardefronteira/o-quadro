import { createGlobalStyle } from 'styled-components';

const EstiloGlobal = createGlobalStyle`
@import url('http://fonts.cdnfonts.com/css/louis-george-cafe');

*{
  font-family: 'Louis George Café', sans-serif;
  margin: 0;
  padding: 0;
  
}

body {
  margin: 0;
  font-family: 'Louis George Café', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow-x: hidden;
}

h1,h2,h3,h4,h5,h6{
line-height:2em;
font-weight: 400;
}

p {
  line-height: 1.5;
  padding-bottom: 2px;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
.invisivel{
 display:none;
}
.transparente{
  visibility:hidden;
}
/* .alturaZero{
  height:0;
  overflow:hidden;

} */

.fadeIn{
  opacity:1;
}
.fadeOut{
 opacity:0;
}
.alturaZero{
  height: 0;
  transition-delay: 0.5s;
  overflow: hidden;
}

.rotate{
  transform: rotate(180deg);
  transition:0.5s;
}

.texto-verde{
  color:#009F66;
}
`;

export default EstiloGlobal;
