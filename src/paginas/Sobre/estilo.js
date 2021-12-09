import styled from 'styled-components';

export const Container = styled.div`
width:100%;
heigth:100vh;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
`;
export const Content = styled.div`
display:flex;
width:90%;
height:auto;
justify-content:center;
align-items:center;
gap:10%;
padding-bottom:5vh;
img{
    width:40%;
    height:45vh;
    object-fit:cover;
}
p{
    width:40%;
    height:auto;
    text-align:justify;
}
`;
