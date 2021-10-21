import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useMediaQuery } from 'react-responsive';
import Pagina from './estilo';
// importar componentes
import MenuSocial from '../MenuSocial';
import Menu from '../Menu';

function Base({ estadoMenu = 1, menuSocialVermelho = false, children }) {
  /* função para rolar a pag pra cima */
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const eMovel = useMediaQuery({ query: '(max-width: 1224px)' });

  return (
    <>
      {console.log(eMovel)}
      <MenuSocial vermelho={menuSocialVermelho} eMovel />
      <Menu estado={estadoMenu} eMovel />
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
