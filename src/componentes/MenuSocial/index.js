import React from 'react';
import PropTypes from 'prop-types';
import {
  ItemMenuSocial, ConteinerMenuSocial, ItemBotao, TextoEmail, ConteinerIcones,
} from './estilo';

function MenuSocial({ vermelho = false }) {
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
          onClick={() => navigator.clipboard.writeText('oquadro@oquadro.net')}
        >
          <img src="../imagens/icone/emailIcone.svg" alt="E-mail Logo" />
        </ItemBotao>
      </ConteinerIcones>
      <TextoEmail>
        <p>oquadro@oquadro.net</p>
        <p>(Clique no ícone para copiar o texto)</p>
      </TextoEmail>
    </ConteinerMenuSocial>

  );
}

MenuSocial.propTypes = {
  vermelho: PropTypes.bool.isRequired,
};

export default MenuSocial;
