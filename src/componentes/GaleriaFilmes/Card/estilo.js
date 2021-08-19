import styled from "styled-components";
import {Link} from "react-router-dom"

export const FundoCard = styled(Link)`
  width: 100%
  height: auto;
  position:relative;
`;

export const Legenda = styled.div`
  width: 100%;
  color: red;
  position:absolute;
  &:hover,&:focus {
    background-color: #000000;
}
`;

