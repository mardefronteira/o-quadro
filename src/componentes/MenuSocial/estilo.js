import styled from 'styled-components';

export const ConteinerMenuSocial = styled.nav`
    background-color: ${(props) => (props.taVermelho ? '#DD4D5E' : '#4DA685')};
    display: flex;
    flex-direction: column;
    position: fixed;
    width: 2vw;
    min-width: 30px;
    height: ${(props) => (props.taVermelho ? '30vh' : '50vh')};
    border: 1px solid transparent;
    border-radius: 0 0.938em 0.938em 0;
    padding: 5vh 0;
    align-items: center;
    align-self:center;
    justify-content: space-around;
    top: 30vh;
    box-shadow: 1px 1px 1px #000000;
    z-index: 55;
    @media (max-width: 800px) {  
    height: 5vh;
    min-height: 30px;
    width: 100vw;
    padding:0;
    top: auto;
    bottom: 0;
    border-radius: 0;
    flex-direction: row;
    }
    z-index:120;
    `;

export const ItemMenuSocial = styled.a`
display: ${(props) => (props.taVermelho ? 'none' : 'flex')};
img{
    width: 1.7rem;

}
img:hover{
    opacity: 0.7;
}
@media (max-width: 800px) { 
    height:65%;
    width:5vw;

    }
`;

export const TextoEmail = styled.div`
position: absolute;
left: 110%;
top: 70%;

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
padding: 0 1px;
border: none;
img{
    width: 80%;
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
