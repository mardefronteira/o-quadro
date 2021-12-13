import styled from 'styled-components';

const Galeria = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, auto));
    -webkit-grid-columns: repeat(auto-fill, minmax(250px,auto));
    justify-items: space-around;
    align-items: center;
    grid-gap: 3vh;
    padding-bottom: 10vh;

    @media (max-width: 800px) {
        justify-items: center;
        grid-gap: 10vh;
        padding: 3vh 5vw 3vh 5vw;
    }
`;

export default Galeria;
