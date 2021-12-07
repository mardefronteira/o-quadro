import React, { useState, useCallback } from 'react';
import ImageViewer from 'react-simple-image-viewer';
import { saveAs } from 'file-saver';
import { ContainerBackGround, Download, ImagemCard } from './estilo';

function VisualizadorImagens({ galeria = [] }) {
  const [imagemAtual, setimagemAtual] = useState(0);

  const [visualizadorAberto, setVisualizadorAberto] = useState(false);
  const abrirVisualizador = useCallback((index) => {
    setimagemAtual(index);
    setVisualizadorAberto(true);
  }, []);
  const fecharVisualizador = () => {
    setimagemAtual(0);
    setVisualizadorAberto(false);
  };
  const imagens = galeria.map((imagem) => imagem.src); // flat map
  const downloadImage = () => {
    saveAs(imagens.src, 'image.jpg'); // Put your image url here.
  };
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
          <Download onClick={downloadImage} />
        </>
      )}

    </ContainerBackGround>

  );
}
export default VisualizadorImagens;
