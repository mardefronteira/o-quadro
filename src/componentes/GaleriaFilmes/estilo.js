import styled from 'styled-components';

const Galeria = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 350px));
    justify-items: space-around;
    align-items: center;
    grid-gap: 5% 5%;
    padding-bottom: 10vh;
`;

export default Galeria;
