import styled from 'styled-components';

export const ContainerBackGround = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  @media (max-width: 800px) {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    width: 100%;
    span {
      padding: 0 7%;
    }
    #ReactSimpleImageViewer {
      div {
        img{
          width:50%;
          height:40%;
          object-fit:contain;
        }
      }
    }
  }
`;

export const Download = styled.button`
  background-image: url("../imagens/download.svg");
  width: 2rem;
  height: 2rem;
  background-repeat: no-repeat;
  z-index: 2000;
  border: none;
  position: fixed;
  background-color: transparent;
  top: 2.8%;
  right: 20%;
`;

export const ImagemCard = styled.img`
  width: 40%;
  height: 40%;
  padding-bottom: 5vh;
  @media (max-width: 800px) {
    padding-bottom: 2vh;
  }
`;
