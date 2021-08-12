import styled from "styled-components";
export const ConteinerItensMenu= styled.div`
display:flex;
justify-content:space-around;`;
export const ConteinerLinguagem = styled.div`
position: absolute;
left: 90.31%;
right: 0%;
top: 0%;
bottom: 90.11%;`;
export const ConteinerMenu = styled.nav`
`

export const ItemLang = styled.button`
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
font-size:20px;
border:transparent;
background:#FFFFFF;
&:hover,&:focus{
color:#009F66;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
background:#FFFFFF;

}
`;
