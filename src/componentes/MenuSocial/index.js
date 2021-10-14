import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  ItemMenuSocial, ConteinerMenuSocial, ItemBotao, TextoEmail, ConteinerIcones,
} from './estilo';

function MenuSocial({ vermelho = false }) {
  const [email, setEmail] = useState({
    __html: `<p class="email">oquadro@oquadro.net</p>
            <p class="info">(Clique para copiar)</p>`,
  });

  return (
    <ConteinerMenuSocial
      taVermelho={vermelho}
    >
      <ConteinerIcones>
        <ItemMenuSocial href="https://vimeo.com/oquadro" target="_blank">
          <img src="../imagens/icone/vimeoIcone.svg" alt="Vimeo Logo" />
        </ItemMenuSocial>
        <ItemMenuSocial href="https://twitter.com/oquadrofilmes" target="_blank">
          <img src="../imagens/icone/twitterIcone.svg" alt="Twitter Logo" />
        </ItemMenuSocial>
        <ItemMenuSocial href="https://www.youtube.com/user/OQuadroFilmes" target="_blank">
          <img src="../imagens/icone/youtubeIcone.svg" alt="Youtube Logo" />
        </ItemMenuSocial>
        <ItemMenuSocial href="https://www.instagram.com/oquadrofilmes/" target="_blank">
          <img src="../imagens/icone/instagramIcone.svg" alt="Instagram Logo" />
        </ItemMenuSocial>
        <ItemMenuSocial href="https://www.facebook.com/OQuadro" target="_blank">
          <img src="../imagens/icone/facebookIcone.svg" alt="Facebook Logo" />
        </ItemMenuSocial>
        <ItemBotao
          type="button"
          onClick={() => {
            navigator.clipboard.writeText('oquadro@oquadro.net');
            setEmail({ __html: '<p class="email">copiado!</p>' });
            setTimeout(() => {
              setEmail({
                __html: `<p class="email">oquadro@oquadro.net</p>
            <p class="info">(Clique para copiar)</p>`,
              });
            }, 1000);
          }}
        >
          <img src="../imagens/icone/emailIcone.svg" alt="E-mail Logo" />
          <TextoEmail dangerouslySetInnerHTML={email} />
        </ItemBotao>
      </ConteinerIcones>
    </ConteinerMenuSocial>

  );
}

MenuSocial.propTypes = {
  vermelho: PropTypes.bool.isRequired,
};

export default MenuSocial;
