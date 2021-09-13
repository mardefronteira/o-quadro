import styled from 'styled-components';

const Galeria = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, auto));
    justify-items: space-around;
    align-items: center;
    grid-gap: 10% 5%;
`;

export default Galeria;
