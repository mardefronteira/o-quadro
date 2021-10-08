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
}
h1,h2,h3,h4,h5,h6{
line-height:2em;
font-weight: 400;
}
code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
.invisivel{
 display:none;
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
`;

export default EstiloGlobal;
