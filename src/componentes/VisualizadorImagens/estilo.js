import styled from 'styled-components';

export const ContainerBackGround = styled.div`
  width: 100%;
  height: auto;
  overflow:hidden;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  #ReactSimpleImageViewer {
    div {
      img{
        width:80%;
        height:80%;
        object-fit:contain;
      }
    }
    span {
      padding: 0 6.5%;
      font-size:3.5rem;
    }
    #ReactSimpleImageViewer:first-child{
      top:10%;
    }
  @media (max-width: 800px) {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    width: 100%;
    span {
      padding: 0 1%;
    }
    #ReactSimpleImageViewer {
      div {
        img{
          width:70%;
          height:70%;
          object-fit:contain;
        }
      }
    }
    
  }
`;

export const Download = styled.a`
  background-image: url("../imagens/download.svg");
  width: 2rem;
  height: 2rem;
  background-repeat: no-repeat;
  z-index: 2000;
  border: none;
  position: fixed;
  background-color: transparent;
  top:5%;
  right:9.5%;
  img{
    width:100%;
    height:100%;
  }
  @media (max-width: 800px) {
    top:5.5%;
  right:17%;
  }
`;

export const ImagemCard = styled.img`
  width: 40%;
  height: 40%;
  padding-bottom: 5vh;
  &:hover, &:focus{
    cursor: pointer;
  }
  @media (max-width: 800px) {
    padding-bottom: 2vh;
  }
`;
