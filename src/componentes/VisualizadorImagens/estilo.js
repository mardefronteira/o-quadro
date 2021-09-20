import styled from 'styled-components';

export const ContainerBackGround = styled.div`
width: 100%;
height: auto;
display:flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: space-around;
align-items: center;

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
width: 20%;
padding-bottom: 5vh;
`;
