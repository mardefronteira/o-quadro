/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  ItemMenuSocial,
  ConteinerMenuSocial,
  ItemBotao,
  TextoEmail,
} from './estilo';
import { useGlobal } from '../../AcessoGlobal';

function MenuSocial({ vermelho = false }) {
  const [global, mudarGlobal] = useGlobal();

  const { logos } = global.db;
  const [email, setEmail] = useState({
    __html: ` ${vermelho
      ? '<p class="email">aquadro@oquadro.net</p>'
      : '<p class="email">oquadro@oquadro.net</p>'
    } 
            <p class="info">(Clique para copiar)</p>`,
  });
  const clipboard = () => {
    if (vermelho) {
      navigator.clipboard.writeText('aquadro@oquadro.net');
    } else {
      navigator.clipboard.writeText('oquadro@oquadro.net');
    }

    setEmail({ __html: '<p class="email">copiado!</p>' });
    setTimeout(() => {
      setEmail({
        __html: `${vermelho
          ? `<p class='email'>aquadro@oquadro.net`
          : `<p class='email'>oquadro@oquadro.net</p>`
        }
      <p class="info">(Clique para copiar)</p>`,
      });
    }, 1000);
  };
  return (
    <ConteinerMenuSocial taVermelho={vermelho}>
      <ItemMenuSocial
        taVermelho={vermelho}
        href="https://vimeo.com/oquadro"
        target="_blank"
      >
        <img src={logos.sociais.vimeo.src} alt={logos.sociais.vimeo.desc} />
      </ItemMenuSocial>
      <ItemMenuSocial
        taVermelho={vermelho}
        href="https://twitter.com/oquadrofilmes"
        target="_blank"
      >
        <img src={logos.sociais.twitter.src} alt={logos.sociais.twitter.desc} />
      </ItemMenuSocial>
      <ItemMenuSocial
        taVermelho={vermelho}
        href="https://www.youtube.com/user/OQuadroFilmes"
        target="_blank"
      >
        <img src={logos.sociais.youtube.src} alt={logos.sociais.youtube.desc} />
      </ItemMenuSocial>

      <ItemMenuSocial
        href={
          vermelho
            ? 'https://instagram.com/aquadroedicoes'
            : 'https://www.instagram.com/oquadrofilmes/'
        }
        target="_blank"
      >
        <img
          src={logos.sociais.instagram.src}
          alt={logos.sociais.instagram.desc}
        />
      </ItemMenuSocial>

      <ItemMenuSocial
        href={
          vermelho
            ? 'https://facebook.com/aquadroedicoes' : 'https://facebook.com/OQuadro'
        }
        target="_blank"
      >
        <img
          src={logos.sociais.facebook.src}
          alt={logos.sociais.facebook.desc}
        />
      </ItemMenuSocial>
      <ItemBotao
        type="button"
        onClick={() => {
          clipboard();
        }}
      >
        <img src={logos.sociais.email.src} alt={logos.sociais.email.desc} />
        <TextoEmail taVermelho={vermelho} dangerouslySetInnerHTML={email} />
      </ItemBotao>
    </ConteinerMenuSocial>
  );
}

MenuSocial.propTypes = {
  vermelho: PropTypes.bool.isRequired,
};

export default MenuSocial;
