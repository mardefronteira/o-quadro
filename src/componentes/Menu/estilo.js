
import styled from "styled-components";
export const ConteinerItensMenu = styled.div`
display:flex;
justify-content:space-around;
 .filmes:hover,filmes:focus{
  li{
    display:flex}
}
.filmes li{
  display:none;
  list-style: none;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background:#FFFFFF;
  margin-top:5px; 
}`;
export const ConteinerLinguagem = styled.div`
position: absolute;
left: 90.31%;
right: 0%;
top: 0%;
bottom: 90.11%;`;
export const ConteinerMenu = styled.nav`
display: flex;
flex-direction: column;
gap: 40px;
`

export const ItemLang = styled.button`
margin-top: 5vh;
font-size:14px;
font-weight:400;
background:transparent;
border: none;
&:hover,&:focus{
color:#009F66;
}
`;
export const ItemMenu = styled.button`
width:255px;
height: 57px;
font-weight:400;
font-size:1.25em;
border:transparent;
background:#FFFFFF;
&:hover,&:focus, .filmes:hover, .filmes:focus{
color:#009F66;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
background:#FFFFFF;

}
`;
export const Logo = styled.img`
margin-top: 5vh;
width:auto;
height: 500px;
align-self: center;
`;
