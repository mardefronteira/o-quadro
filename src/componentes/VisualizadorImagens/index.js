import React, { useState, useCallback } from 'react';
import ImageViewer from 'react-simple-image-viewer';
import { ContainerBackGround, Download } from './estilo';

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
  return (
    <ContainerBackGround>

      {galeria.map(({ src, alt, key }, index) => (
        <img
          src={src}
          alt={alt}
          key={key}
          width="200"
          height="200"
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
          <Download />
        </>
      )}

    </ContainerBackGround>

  );
}
export default VisualizadorImagens;
