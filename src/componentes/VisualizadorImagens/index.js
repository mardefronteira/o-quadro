import React, { useState, useCallback } from 'react';
import ImageViewer from 'react-simple-image-viewer';
import { ContainerBackGround, Download, ImagemCard } from './estilo';

function VisualizadorImagens({ galeria, galeriaAlta }) {
  const [imagemAtual, setimagemAtual] = useState(0);
  console.log(galeria);
  console.log(galeriaAlta);
  const [visualizadorAberto, setVisualizadorAberto] = useState(false);
  const abrirVisualizador = useCallback((index) => {
    setimagemAtual(index);
    setVisualizadorAberto(true);
  }, []);
  const fecharVisualizador = () => {
    setimagemAtual(0);
    setVisualizadorAberto(false);
  };
  const download = (e) => {
    console.log(e.target.href);
    fetch(e.target.href, {
      method: 'GET',
      headers: {},
    })
      .then((response) => {
        response.arrayBuffer().then((buffer) => {
          const url = window.URL.createObjectURL(new Blob([buffer]));
          const link = document.createElement('a');
          link.href = url;
          link.setAttribute('download', 'image.jpg'); // or any other extension
          document.body.appendChild(link);
          link.click();
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const imagens = galeria.map((imagem) => imagem.src);// flat map
  // const imagensAlta = galeriaAlta.map((imagem) => imagem.src);
  return (
    <ContainerBackGround>
      {galeria.map(({ src, alt, key }, index) => (
        <ImagemCard
          src={src}
          alt={alt}
          key={key}
          onClick={() => abrirVisualizador(index)}
          aria-hidden="true"
        />
      ))}
      {visualizadorAberto && (
        <>
          <ImageViewer
            src={imagens}
            currentIndex={imagemAtual}
            onClose={fecharVisualizador}
            className="visualizador"
            disableScroll
            closeOnClickOutside
            backgroundStyle={{
              zIndex: 100, height: '100%', width: '100vw',
            }}
          />
          <Download onClick={(e) => download(e)} />
        </>
      )}

    </ContainerBackGround>

  );
}
export default VisualizadorImagens;
