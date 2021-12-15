import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ConteinerItensMenu = styled.div`
  display: flex;
  justify-content: space-around;
  text-align: center;
  .dropdown {
    display: flex;
    flex-direction: column;
    justify-self: center;
    gap: 5px;
  }
  .dropdown:hover,
  dropdown:focus {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    background: transparent;

    li {
      display: flex;
      position: relative;
    }
    .dropdown {
      color: #009f66;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      background: #ffffff;
      transition: 0.3s;
      
    }
  }
  .dropdown li {
    display: none;
    list-style: none;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    background: #ffffff;
  }
  .logo:hover,
  .logo:focus {
    box-shadow: none;
    border: none;
  }
  .dropdown li:first-child {
    display: flex !important;
    align-self: inherit;
    box-shadow: inherit;
  }
`;

export const ConteinerLinguagem = styled.div`
  position: absolute;
  right: 0%;
  top: 0%;
  ${(props) => {
    if (props.estado === 0) {
      return `
      left: 90.31%;
      bottom: 90.11%;`;
    }

    return `
    left: 95.31%;
    bottom: 96.11%;
    `;
  }}
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
  font-size: 0.8em;
  ${(props) => {
    if (props.estado === 1 || props.estado === 2) {
      return `
      font-size: 0.85em;
      `;
    }
    return true;
  }}
`;

export const ItemLang = styled.button`
  font-weight: 400;
  background: transparent;
  border: none;
  &:hover,
  &:focus {
    color: #009f66;
  }
  margin-top: 1vh;
  font-size: 0.85em;
  ${(props) => {
    if (props.estado === 0) {
      return `
      margin-top: 5vh;
      font-size: 0.875em;
      `;
    }
    if (props.estado === 2) {
      return `
      &:hover,&:focus{
        color:#CF0018;
        }
        `;
    }
    return true;
  }}
`;

export const ItemMenu = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 15vw;
  height: 7vh;
  font-weight: 400;
  font-size: 1.1em;
  border: transparent;
  background: #ffffff;
  text-decoration: none;
  color: inherit;
  &:hover,
  &:focus,
  .dropdown:hover,
  .dropdown:focus,
  &.logo:not {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    background: #ffffff;
  }

  ${(props) => {
    if (props.estado === 2) {
      return `
      &:hover,&:focus, .dropdown:hover, .dropdown:focus{
        color:#CF0018;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        background:#FFFFFF;
        transition: 0.3s;
        }
      `;
    }

    return `
        &:hover,&:focus, .dropdown:hover, .dropdown:focus{
        color:#009F66;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        background:#FFFFFF;
        transition: 0.3s;
      }`;
  }}
`;

export const Text = styled.p`
  margin: 0;
`;

export const Logo = styled.img`
  ${(props) => {
    if (props.estado === 0) {
      return `
          width:auto;
          height: 50vh;
          align-self: center;
          padding-top: 7vh;
          `;
    }

    return `
          display:flex;
          width: 5vw;
          margin: 0;
          `;
  }}
`;

export const ConteinerMenuMobile = styled.section`
  background-color: transparent;
  height: auto;
  width: 100vw;
  position: fixed;
  z-index: 100;
`;

export const Cabecalho = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 12vh;
  position: fixed;
  width: 100%;
  padding: 0 2vw;
  background-color: #ffffff;
`;

export const BotaoMenu = styled.button`
  background-color: #ffffff;
  border: none;
`;

export const LogoMobile = styled.img`
  height: 10vh;
  width: 10vh;
`;

export const ConteinerLinguagemMobile = styled.section`
  padding: 0 3vw;
`;

export const ItemLangMobile = styled.button`
  background-color: #ffffff;
  border: none;
`;

export const ConteinerTaAberto = styled.div`
  background-color: transparent;
  ${(props) => props.taAberto && 'display: none'}
`;

export const ConteinerItens = styled.section`
  padding: 3vh 0;
  height: 95vh;
  width: 70vw;
  background-color: #ffffff;
  ${(props) => !props.taAberto && 'display: none'}
`;

export const OpcoesMenu = styled.ul`
  padding-left: 8vw;
  list-style: none;
  li {
    width: 100%;
    height:1.5vh;
    border-bottom: 1px solid rgba(222, 222, 222, 0.7);
    padding: 3.9vh 0;
  }
  li:first-child{
    padding-top:10vh;
  }
`;

export const ItemMenuMobile = styled.a`
  text-decoration: none;
  color: #000;
  @media (max-width: 800px){
    width:5vw;
    height:3vh;
  }
`;

export const SubItemMenuMobile = styled.a`
  text-decoration: none;
  color: #000;
  padding-left: 8.15vw;
`;
