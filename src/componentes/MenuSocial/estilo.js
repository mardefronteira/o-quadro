import styled from 'styled-components';

export const ConteinerMenuSocial = styled.nav`
    background-color: ${(props) => (props.taVermelho ? '#DD4D5E' : '#4DA685')};
    display: flex;
    flex-direction: column;
    position: fixed;
    width: 2vw;
    min-width: 30px;
    height: 50vh;
    border: 1px solid transparent;
    border-radius: 0 0.938em 0.938em 0;
    padding: 5vh 0;
    align-items: center;
    justify-content: space-around;
    top: 20vh;
    box-shadow: 1px 1px 1px #000000;
    z-index: 55;
    @media (max-width: 800px) {  
    height: 5vh;
    min-height: 30px;
    width: 100vw;
    padding:0;
    justify-content: flex-end; 
    top: auto;
    bottom: 0;
    border-radius: 0;
    }
    `;

export const ConteinerIcones = styled.div`
display: flex;
flex-direction: column;
width: 70%;
height: 150%;
align-self: left;
justify-content: space-around;
@media (max-width: 800px) { 
    flex-direction: row; 
    width: 100%;
    height: 25px;
    }
`;

export const ItemMenuSocial = styled.a`    
img{
    width: 100%;
}
img:hover{
    opacity: 0.7;
}
@media (max-width: 800px) { 
    height:100%;
    width:5vw;
    }
`;

export const TextoEmail = styled.div`
position: absolute;
left: 110%;
top: 80%;

flex-direction: column;

background-color: white;
box-shadow: 2px 2px;

padding: 1vh 1vw;
opacity: 1;

display: none;

.info {
    font-size: .8em;
}

.email {
    font-size: 1em;
}
`;

export const ItemBotao = styled.button`
background-color: transparent;
border: none;
img{
    width: 100%;
}
&:hover{
    img{
        opacity: .7;
    }

    ${TextoEmail}{
        display: flex;
    }
}
@media (max-width: 800px) { 
    height:100%;
    width:5vw;

    }
`;
