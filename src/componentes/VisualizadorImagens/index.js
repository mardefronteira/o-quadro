import React, { useState, useCallback } from 'react';
import ImageViewer from 'react-simple-image-viewer';
import { ContainerBackGround, Download, ImagemCard } from './estilo';

function VisualizadorImagens({ galeria, galeriaAlta }) {
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

  const imagens = galeria.map((imagem) => imagem.src);// flat map
  const imagensAlta = galeriaAlta.map((imagem) => imagem.src);

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
          {console.log(imagensAlta[imagemAtual])}
          <Download href={imagensAlta[imagemAtual]} download />
        </>
      )}

    </ContainerBackGround>

  );
}
export default VisualizadorImagens;
