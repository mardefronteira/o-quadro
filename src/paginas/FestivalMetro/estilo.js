import styled from 'styled-components';

export const ConteinerPrincipal = styled.section`
display: flex;
flex-direction: row;
padding: 0;
@media (max-width: 800px) {
    padding-bottom: 15vh;
    flex-direction: column;
    align-items: center;
}
`;

export const Poster = styled.img`
width: 100%;
max-width:40vw;
height: 70vh;
object-fit: contain;
@media (max-width: 800px) {
    width: 100%;
    height: auto;
    justify-content: center;
    align-items: center;
}
`;

export const Conteiner = styled.section`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 50%;
@media (max-width: 800px) {
    width: 100%;
}
`;

export const Logo = styled.img`
width:35%;
`;

export const Artigo = styled.article`
width: 25vw;
text-align: justify;
margin: 0 0 8vh 0;
@media (max-width: 800px) {
    margin: 0 0 0 0;
    width: 80%;
}
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
@media (max-width: 800px) {
    margin: 5vh 0
}
`;
