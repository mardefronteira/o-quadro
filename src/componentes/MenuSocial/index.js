import React from 'react';
import PropTypes from 'prop-types';
import { ItemMenuSocial, ConteinerMenuSocial } from './estilo';

function MenuSocial({ vermelho = false }) {
  return (
    <ConteinerMenuSocial
      taVermelho={vermelho}
    >
      <ItemMenuSocial href="">
        <img src="../imagens/icone/vimeoIcone.svg" alt="Vimeo Logo" />
      </ItemMenuSocial>
      <ItemMenuSocial href="">
        <img src="../imagens/icone/youtubeIcone.svg" alt="Youtube Logo" />
      </ItemMenuSocial>
      <ItemMenuSocial href="">
        <img src="../imagens/icone/instagramIcone.svg" alt="Instagram Logo" />
      </ItemMenuSocial>
      <ItemMenuSocial href="">
        <img src="../imagens/icone/facebookIcone.svg" alt="Facebook Logo" />
      </ItemMenuSocial>
      <ItemMenuSocial href="">
        <img src="../imagens/icone/emailIcone.svg" alt="E-mail Logo" />
      </ItemMenuSocial>

    </ConteinerMenuSocial>
  );
}

MenuSocial.propTypes = {
  vermelho: PropTypes.bool.isRequired,
};

export default MenuSocial;
