import React from 'react';
import PropTypes from 'prop-types';
import Pagina from './estilo';
// importar componentes
import MenuSocial from '../MenuSocial';
import Menu from '../Menu';

function Base({ estadoMenu = 1, menuSocialVermelho = false, children }) {
  return (
    <>
      <MenuSocial vermelho={menuSocialVermelho} />
      <Menu estado={estadoMenu} />
      <Pagina>
        {children}
      </Pagina>
    </>
  );
}

Base.propTypes = {
  estadoMenu: PropTypes.number,
  menuSocialVermelho: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

Base.defaultProps = {
  estadoMenu: 1,
  menuSocialVermelho: false,
};

export default Base;
