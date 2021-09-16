import styled from 'styled-components';

export const ContainerFilmes = styled.div`
display: flex;
flex-direction:column;
align-items:center;
gap:4em;
.caixa-texto{
  width: 50%;
  height:21.77vh;
  text-align: justify;
}
.titulo-secao{
  align-items:center;
}
.galeria-fotos{
  flex-wrap:wrap;
  gap:30px;
  align-items:center;
  justify-content:center;
  padding-top: 5vh;
  width:100%;
  img{
    width:30%;
    height: auto;
  }
}
.equipe{
  align-self:flex-start;
  gap:10px;
  width:100%;
}
#mais-equipe{
  gap:1.5%;
  flex-wrap: wrap;
}
.secaoPrincipal{
  justify-content: space-around;
  width: 100%;
}
#sinopse{
  width:80%;
}
`;
export const DivFlex = styled.div`
display: flex;
flex-direction:${(props) => (props.eColuna ? 'column' : 'row')};
`;
export const InfoFilme = styled.div`
width:55%;
display: flex;
flex-direction:column;
`;

export const ContainerImgDestaqueDireita = styled.div`

`;

export const TituloDestaque = styled.h1`
color:${(props) => (props.eVermelho ? '#CF0018' : 'inherit')};
font-size: 3em;
font-weight:bold;
line-height: 1.5em;
`;
export const SubTituloDestaque = styled.h2`
font-size:2em;
`;
export const TextoVerde = styled.span`
font-size:1.125em;
color:#009F66;
`;

export const H3Destaque = styled.h3`
color:${(props) => (props.eVermelho ? '#CF0018' : 'inherit')};
display: flex;
font-size: 1em;
font-weight:bold;
`;

export const ImgDestaque = styled.img`
height:38vh;
width: 100%;
object-fit: cover;
`;
export const ImgDestaqueDireita = styled.img`
width: auto;
max-height: 70vh;
`;

export const MaisInfo = styled.button`
transform:${(props) => (props.girou ? 'rotate(180dg)' : 'rotate(0dg)')};
border: none;
background:none;
align-self:center;
`;
