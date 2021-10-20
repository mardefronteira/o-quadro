import styled from 'styled-components';

export const ConteinerPrincipal = styled.section`
display: flex;
flex-direction: row;
position: fixed;
`;

export const Poster = styled.img`
width: 30%;
height: auto;
`;

export const Conteiner = styled.section`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 50%;
`;

export const Logo = styled.h2`
`;

export const Artigo = styled.article`
width: 55%;
text-align: justify;
margin: 4vh 0;
`;

export const Embarque = styled.button`
background-color: #007F50;
opacity:0.7;
color: #ffffff;
padding: 1vh 1vw;
font-size: 1.15em;
border: 1px solid transparent;
border-radius: 0.2em;
box-shadow: 0px 2px 4px 0px #00000080;
&:hover, &focus{
    opacity: 0.9;
}
`;
