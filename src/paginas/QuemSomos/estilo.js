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
display: grid;
width: 100%;
justify-content: space-between;
grid-template-columns: auto auto auto auto;
margin-bottom: 10vh;
@media (max-width: 800px) {
    grid-template-columns: auto auto;
    justify-content: space-around;
}
`;

export const Card = styled.section`
display: flex;
flex-direction: column;
align-items: center;
width: 80%;
img{
    width: 100%;
    height:70%;
}
@media (max-width: 800px) {
    padding: 0vh 5vw 5vh 5vw;
}
`;

export const Nome = styled.h3`
text-align: center;
color: #009F66;
`;

export const FotoPerfil = styled.img`
padding: 1vh;

`;

export const Info = styled.article`
text-align: left;
line-height: 1.15em;

`;
