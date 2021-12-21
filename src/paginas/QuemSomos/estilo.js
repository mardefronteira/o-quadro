import styled from 'styled-components';

export const Titulo = styled.h2`
text-align: center;
`;

export const Conteiner = styled.section`
display:flex;
margin: 3vh 0;
padding-bottom: 5vh;
@media(max-width: 800px){
    flex-direction: column;
}
`;

export const FotoPrincipal = styled.div`
img{
    width: 30vw;
}
@media (max-width: 800px) {
    img{
        width: 80%;
        padding:5vh 10vw;
    }
}
`;

export const Artigo = styled.article`
text-align: justify;
padding: 0 5%;
p{
    margin-bottom: 1.5vh;
}
`;

export const GridIntegrantes = styled.section`
display: flex;
flex-wrap:wrap;
width: 100%;
justify-content: space-between;
margin-bottom: 10vh;
@media (max-width: 800px) {
    justify-content: space-around;
}
`;

export const Card = styled.section`
display: flex;
flex-direction: column;
align-items: center;
width: 25%;
img{
    width: 80%;
    height:auto;
    object-fit:contain;
}
@media (max-width: 800px) {
    width: 40%;
    padding: 0vh 5vw 5vh 5vw;
    img{
        width: 100%;
        height:auto;
        object-fit:contain;
    }
}
`;

export const Nome = styled.h3`
text-align: center;
color: #009F66;
font-size:1.2em;
@media (max-width: 800px) {
    font-size: .8em;
}
`;

export const FotoPerfil = styled.img`
padding: 1vh;

`;
