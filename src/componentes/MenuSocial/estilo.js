import styled from 'styled-components';

export const ConteinerMenuSocial = styled.nav`
    background-color: ${(props) => (props.taVermelho ? '#CF0018' : '#007F50')};
    display: flex;
    flex-direction: column;
    position: fixed;
    width: 2vw;
    min-width: 30px;
    height: 50vh;
    opacity: 0.7;
    border: 1px solid transparent;
    border-radius: 0 0.938em 0.938em 0;
    padding: 5vh 0;
    align-items: center;
    justify-content: space-around;
    top: 20vh;
    box-shadow: 1px 1px 1px #000000;
    z-index: 55;
    `;

export const ConteinerIcones = styled.div`
display: flex;
flex-direction: column;
width: 70%;
height: 150%;
align-self: left;
justify-content: space-around;

`;

export const ItemMenuSocial = styled.a`
    
    img{
        width: 100%;
    }
    img:hover{
        opacity: 0.7;
    }
    `;

export const ItemBotao = styled.button`
background-color: transparent;
border: none;
img{
    width: 100%;
}
img:hover{
    opacity: 0.7;
}
`;

export const TextoEmail = styled.div`
display: flex;
width:15vw;
flex-direction: column;
margin-right: -18vw;

`;
