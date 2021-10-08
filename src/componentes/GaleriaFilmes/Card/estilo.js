import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FundoCard = styled(Link)`
  position:relative;
  display: flex;
  img {
    width: 100%;
    height:auto;
  }
`;

export const Legenda = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  color: #ffffff;
  position:absolute;
  z-index: 40;
  background-color: rgba( 0, 0, 0, 0.5);
  opacity: 0;
  transition-delay: 0.5s;
  transition: 0.5s;
  &:hover,&:focus {
    opacity: 1;
  }
`;

export const Info = styled.p`
  display: flex;
  padding: 5% 5%;
  font-weight: bold;
  font-size: 1em;
  line-height: 1.5em;
  text-align: left;
  align-items: flex-end;
`;
