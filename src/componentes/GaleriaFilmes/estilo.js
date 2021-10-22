import styled from 'styled-components';

const Galeria = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, auto));
    -webkit-grid-columns: repeat(auto-fill, minmax(200px,auto));
    justify-items: space-around;
    align-items: center;
    grid-gap: 5% 5%;
    padding-bottom: 10vh;
    @media (max-width: 800px) {
        justify-items: center;
        grid-gap: 3% 3%;

    }
`;

export default Galeria;
