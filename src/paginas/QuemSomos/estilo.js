import styled from 'styled-components';

export const Titulo = styled.h2`
text-align: center;
`;

export const Conteiner = styled.section`
display:flex;
margin: 3vh 0;
padding-bottom: 5vh;
`;

export const FotoPrincipal = styled.div`
img{
    width: 30vw;
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
margin: 0 0 5% 0;
`;

export const Card = styled.section`
display: flex;
flex-direction: column;
align-items: center;
width: 13vw;
img{
    width: 100%;
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
