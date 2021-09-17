import styled from 'styled-components';

export const ContainerBackGround = styled.div`
width: 100vw;
height: 100vh;
background-color:#222222;
display:flex;
justify-content: center;
`;
export const ContainerImagemAmpliada = styled.div`
display: flex;
justify-content: flex-end;
width: 80%;
height: 80%;
background-image:url("https://placekitten.com//900/500");
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
