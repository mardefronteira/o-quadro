import styled from 'styled-components';

const Galeria = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 310px));
    -webkit-grid-columns: repeat(auto-fit, minmax(250px, 310px));
    grid-gap: 3vh;
    justify-items: space-around;
    align-items: center;
    padding-bottom: 10vh;

    @media (max-width: 800px) {
        justify-items: center;
        grid-gap: 10vh;
        padding: 3vh 5vw 3vh 5vw;
    }
`;

export default Galeria;
