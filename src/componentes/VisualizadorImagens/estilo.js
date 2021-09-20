import styled from 'styled-components';

export const ContainerBackGround = styled.div`
width: 100%;
display: grid;
grid-template-columns: repeat(auto-fill, minmax(400px, auto));
justify-items: space-around;
align-items: center;
grid-gap: 5% 5%;

`;

export const Download = styled.button`
background-image: url("../imagens/download.svg");
width: 2rem;
height:2rem;
background-repeat: no-repeat;
z-index:2000;
border:none;
position: fixed;
background-color: transparent;
top:2.8%;
right:3%;
`;

export const ImagemCard = styled.img`
max-width: 25%;
`;
