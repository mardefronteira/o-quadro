
import styled from "styled-components";
import { Link } from "react-router-dom";

export const ConteinerItensMenu = styled.div`
display:flex;
justify-content:space-around;
text-align:center;
.dropdown {
  display: flex;
  flex-direction: column;
  justify-self: center;
  gap:5px;
}
 .dropdown:hover,dropdown:focus{
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background:transparent;
  transition: 0.3s;
  li{
    display:flex;
    position:relative;
    }
    .dropdown{
    color:#009F66;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    background:#FFFFFF;
  }  
}
.dropdown li{
  display:none;
  list-style: none;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background:#FFFFFF; 
  
}
.logo:hover,.logo:focus{
  box-shadow: none;
  border:none;
}
.dropdown li:first-child{
  display:flex !important;
  align-self: inherit;
  box-shadow:inherit; 
  
  }
`;

export const ConteinerLinguagem = styled.div`
    position: absolute;
    right: 0%;
    top: 0%;
${(props) => {
    if (props.estado === 0) {
      return (`
      left: 90.31%;
      bottom: 90.11%;`)
    }
    else {
      return (`
    left: 95.31%;
    bottom: 96.11%;
    `)
    }
  }
  }
`;

export const ConteinerMenu = styled.nav`
position: fixed;
padding: 5vh 0;
width: 100vw;
height: 7vh;
display: flex;
flex-direction: column;
gap: 40px;
background-color: #ffffff;
z-index: 50;
top: 0;
left: 0;
${(props) => {
    if (props.estado === 1 || props.estado === 2) {
      return (`
      font-size: 0.85em;
      `)
    }
  }
  }
`;

export const ItemLang = styled.button`
font-weight:400;
background:transparent;
border: none;
&:hover,&:focus{
  color:#009F66;
}
margin-top: 1vh;
font-size:0.85em;
${(props) => {
    if (props.estado === 0) {
      return (`
      margin-top: 5vh;
      font-size: 0.875em;
      `)
    }
    else if (props.estado === 2) {
      return (`
      &:hover,&:focus{
        color:#CF0018;
        }
        `)
    }
  }
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
      &:hover,&:focus, .dropdown:hover, .dropdown:focus, &.logo:not{
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        background:#FFFFFF;
      }
      
${(props) => {
    if (props.estado === 2) {
      return (`
      &:hover,&:focus, .dropdown:hover, .dropdown:focus{
        color:#CF0018;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        background:#FFFFFF;
        transition: 0.3s;
        }
      `)
    }
    else {
      return (`
        &:hover,&:focus, .dropdown:hover, .dropdown:focus{
        color:#009F66;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        background:#FFFFFF;
        transition: 0.3s;
      }`)
    }
  }
  }
`;

export const Text = styled.p`
margin:0
`;

export const Logo = styled.img`
  ${(props) => {
    if (props.estado === 0) {
      return (`
          width:auto;
          height: 55vh;
          align-self: center;
          `)
    }
    else {
      return (`
          display:flex;
          width: 5vw;
          margin: 0;
          `)
    }
  }
  }
`;

