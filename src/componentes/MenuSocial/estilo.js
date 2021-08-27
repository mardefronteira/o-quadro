import styled from "styled-components";
export const ConteinerMenuSocial = styled.nav`
    background-color: ${(props)=> props.taVermelho ? `#CF0018` : `#007F50`};
    display: flex;
    flex-direction: column;
    position: fixed;
    width: 2vw;
    min-width: 30px;
    height: 50vh;
    //blend: PassThrough;
    opacity: 0.7;
    border: 1px solid transparent;
    border-radius: 0 0.938em 0.938em 0;
    padding: 5vh 0;
    justify-content: space-around;
    top: 20vh;
    box-shadow: 1px 1px 1px #000000;
    z-index: 55;
    `
export const ItemMenuSocial = styled.a`
    width: 70%;
    align-self: center;
    img{
        width: 100%;
        
    }
    img:hover{
        opacity: 0.7;
        
    }
    `;
