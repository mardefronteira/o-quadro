import styled from 'styled-components';

export const Pagina = styled.main`
    width: 70vw;
    color: #000000;
    flex: 1;
    margin:20vh 15vw;
    position: absolute;
    @media (max-width: 800px) {
        margin: 0;
        width: 100%;
    }
`;

export const ConteinerBase = styled.div`
    width: 100vw;
    height: auto;
`;
