import styled from "styled-components";
export const ContainerFilmes = styled.div`
display: flex;
flex-direction:column;
align-items:center;
gap:4em;
.text-box{
  width: 15.41vw;
  height:21.77vh;
}
.section-title{
  align-items:center;
}
.movies{
  flex-wrap:wrap;
  gap:30px;
  align-items:center;
  justify-content:center;
}
`
export const DivFlex = styled.div`
display: flex;
flex-direction:${(props)=> props.eColuna ? `column` : `row`};
`
export const InfoFilme = styled.div`
display: flex;
flex-direction:column;
`
export const ContainerImgDestaqueDireita= styled.div`
`

export const TituloDestaque = styled.h1`
font-size: 3em;
font-weight:bold;
line-height: 1.5em;
`
export const SubTituloDestaque = styled.h2`
font-size:2em;
`
export const TextoVerde = styled.span`
font-size:1.125em;
color:#009F66;
`

export const H3Destaque = styled.h3`
font-size: 1em;
font-weight:bold;

`
export const ImgDestaque = styled.img`
height:37vh;
width:67.40vw;
`
export const ImgDestaqueDireita = styled.img`
height:77.7vh;
width:28.8vw;
`
export const CardFilmeSelecionado = styled.img`
height:24.3vh;
width:19.5vw;
`