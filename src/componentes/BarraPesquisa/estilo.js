import styled from 'styled-components';

export const Barra = styled.section`
display: flex;
flex-direction: row;
margin: 2vh 0;
`;

export const Pesquisa = styled.input`
    height: 5vh;
    width: 20vw;
    text-align: center;
    font-size: 0.85em;
    color: #5B5B5B;
    border: 1px solid transparent;
    background: #FFFFFF;
    box-shadow: inset 0 0 4px 1px rgba(0, 0, 0, 0.25);
    margin-right: 1vw;
    &:hover{
        border: 1px solid #009F66;
        
    }
    &:focus{
        border: 1px solid #009F66;
        outline:none;
    }
    
`;
export const BotaoPesquisa = styled.button`
    height: 4.85vh;
    width: 2.5vw;
    display: flex;
    align-items: center;
    .lupa{
        width: 60%;
        visibility: visible;
        padding: 0 20%;
    }
    .lupaHover{
        width: 60%;
        visibility: hidden;
        margin: 0 auto;
    }
    background-color:#ffffff;
    border: none;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 1px;
    &:hover,&:focus{
        .lupa{
            display: none;
        }
        .lupaHover{
            visibility: visible;
            
        }
    }
`;
