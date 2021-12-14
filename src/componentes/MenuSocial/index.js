import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  ItemMenuSocial, ConteinerMenuSocial, ItemBotao, TextoEmail,
} from './estilo';
import dataBase from '../../db';

function MenuSocial({ vermelho = false, taVermelho = true }) {
  const { logos } = dataBase;
  const [email, setEmail] = useState({
    __html: ` ${taVermelho ? '<p class="email">aquadro@oquadro.net</p>' : '<p class="email">oquadro@oquadro.net</p>'} 
            <p class="info">(Clique para copiar)</p>`,
  });
  const clipboard = () => {
    if (taVermelho) {
      navigator.clipboard.writeText('aquadro@oquadro.net');
    } else {
      navigator.clipboard.writeText('oquadro@oquadro.net');
    }

    setEmail({ __html: '<p class="email">copiado!</p>' });
    setTimeout(() => {
      setEmail({
        __html: `${taVermelho ? `<p class="email">aquadro@oquadro.net` : `<p class="email">oquadro@oquadro.net</p>`}
      <p class="info">(Clique para copiar)</p>`,
      });
    }, 1000);
  };
  return (
    <ConteinerMenuSocial
      taVermelho={vermelho}
    >
      <ItemMenuSocial taVermelho={vermelho} href="https://vimeo.com/oquadro" target="_blank">
        <img src={logos.sociais.vimeo.src} alt={logos.sociais.vimeo.desc} />
      </ItemMenuSocial>
      <ItemMenuSocial taVermelho={vermelho} href="https://twitter.com/oquadrofilmes" target="_blank">
        <img src={logos.sociais.twitter.src} alt={logos.sociais.twitter.desc} />
      </ItemMenuSocial>
      <ItemMenuSocial taVermelho={vermelho} href="https://www.youtube.com/user/OQuadroFilmes" target="_blank">
        <img src={logos.sociais.youtube.src} alt={logos.sociais.youtube.desc} />
      </ItemMenuSocial>
      <ItemMenuSocial href={taVermelho ? 'https://instagram.com/aquadroedicoes' : 'https://www.instagram.com/oquadrofilmes/'} target="_blank">
        <img src={logos.sociais.instagram.src} alt={logos.sociais.instagram.desc} />
      </ItemMenuSocial>
      <ItemMenuSocial href={taVermelho ? 'https://facebook.com/aquadroedicoes' : 'https://www.facebook.com/OQuadro'} target="_blank">
        <img src={logos.sociais.facebook.src} alt={logos.sociais.facebook.desc} />
      </ItemMenuSocial>
      <ItemBotao
        type="button"
        onClick={() => { clipboard(); }}
      >
        <img src={logos.sociais.email.src} alt={logos.sociais.email.desc} />
        <TextoEmail dangerouslySetInnerHTML={email} />
      </ItemBotao>
    </ConteinerMenuSocial>

  );
}

MenuSocial.propTypes = {
  vermelho: PropTypes.bool.isRequired,
};

export default MenuSocial;
