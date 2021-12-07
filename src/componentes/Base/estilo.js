import styled from 'styled-components';

export const Pagina = styled.main`
    width: 70vw;
    color: #000000;
    flex: 1;
    margin:25vh 15vw;
    @media (max-width: 800px) {
        margin: 0;
        width: 100%;
        padding:15vh 0;
    }
`;

export const ConteinerBase = styled.div`
    width: 100vw;
    height: auto;
`;
