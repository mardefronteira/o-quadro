
import styled from "styled-components";
import { Link } from "react-router-dom";

export const ConteinerItensMenu = styled.div`
display:flex;
justify-content:space-around;
text-align:center;
.filmes {
  display: flex;
  flex-direction: column;
  justify-self: center;
  
}
 .filmes:hover,filmes:focus{
  li{
    display:flex;
    position:relative;
  }
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
export const ItemMenu = styled(Link)`
display: flex;
justify-content: center;
align-items: center;
width:15vw;
height: 7vh;
font-weight:400;
font-size:1.1em;
border:transparent;
background:#FFFFFF;
text-decoration: none;
color: inherit;
&:hover,&:focus, .filmes:hover, .filmes:focus{
  color:#009F66;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background:#FFFFFF;
}
`;
export const Text = styled.p`
margin:0
`
export const Logo = styled.img`
margin-top: 5vh;
width:auto;
height: 60vh;
align-self: center;
`;
