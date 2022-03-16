import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MediaQuery from 'react-responsive';
import { Link } from 'react-router-dom';
import {
  ConteinerItensMenu,
  ConteinerMenu,
  ConteinerLinguagem,
  ItemMenu,
  ItemLang,
  Logo,
  ConteinerMenuMobile,
  Cabecalho,
  BotaoMenu,
  LogoMobile,
  ConteinerItens,
  ConteinerTaAberto,
  OpcoesMenu,
  ItemMenuMobile,
  ConteinerLinguagemMobile,
  ItemLangMobile,
  SubItemMenuMobile,
} from './estilo';
import { useGlobal } from '../../AcessoGlobal';

function Menu({ estado = 1 }) {
  const [global, mudarGlobal] = useGlobal();
  const [taAberto, setTaAberto] = useState(false);
  const { logos } = global.db;
  return (
    <>
      <MediaQuery maxWidth={799}>
        <ConteinerMenuMobile>
          <Cabecalho>
            <BotaoMenu onClick={() => { setTaAberto(!taAberto); }}>
              <img src="/imagens/menu-mobile.svg" alt="Botão Menu" />
            </BotaoMenu>
            <ItemMenu as={Link} to="/" className="logo">
              <LogoMobile
                src={`${estado === 1 ? logos.oquadro.verdeVertical.src : logos.aquadro.vermelhoVertical.src}`}
                alt={logos.oquadro.verdeVertical.desc}
              />
            </ItemMenu>
            <ConteinerLinguagemMobile>
              <ItemLangMobile
                estado={estado}
                lingua={global.ptBr}
                onClick={() => {
                  mudarGlobal({ ptBr: true });
                }}
              >
                {'PT '}
              </ItemLangMobile>
              /
              <ItemLangMobile
                estado={estado}
                lingua={!global.ptBr}
                onClick={() => {
                  mudarGlobal({ ptBr: false });
                }}
              >
                {' EN'}
              </ItemLangMobile>
            </ConteinerLinguagemMobile>
          </Cabecalho>
          <ConteinerTaAberto onClick={() => { setTaAberto(!taAberto); }}>
            <ConteinerItens taAberto={taAberto}>
              <OpcoesMenu>
                <li>
                  <ItemMenuMobile as={Link} to="/filmes/">
                    {global.ptBr ? 'FILMES ' : 'FILMS '}
                  </ItemMenuMobile>
                </li>
                <li>
                  <SubItemMenuMobile as={Link} to="/filmes/longas">
                    {global.ptBr ? 'LONGA METRAGEM' : 'FEATURE-LENGTH FILMS'}
                  </SubItemMenuMobile>
                </li>
                <li>
                  <SubItemMenuMobile as={Link} to="/filmes/medias">
                    {global.ptBr ? 'MÉDIA METRAGEM' : 'MEDIUM-LENGTH FILMS'}
                  </SubItemMenuMobile>
                </li>
                <li>
                  <SubItemMenuMobile as={Link} to="/filmes/curtas">
                    {global.ptBr ? 'CURTA METRAGEM' : 'SHORT-LENGTH FILMS'}
                  </SubItemMenuMobile>
                </li>
                <li>
                  <ItemMenuMobile as={Link} to="/metro/">
                    {global.ptBr ? 'FESTIVAL METRÔ' : 'METRO FESTIVAL'}
                  </ItemMenuMobile>
                </li>
                <li>
                  <ItemMenuMobile as={Link} to="/publicacoes">
                    {global.ptBr ? 'PUBLICAÇÕES' : 'BOOKS '}
                  </ItemMenuMobile>
                </li>
                <li>
                  <SubItemMenuMobile as={Link} to="/sobre" estado={estado}>
                    {global.ptBr ? 'O QUE É?' : 'ABOUT'}
                  </SubItemMenuMobile>
                </li>
                <li>
                  <SubItemMenuMobile as={Link} to="/colecao" estado={estado}>
                    {global.ptBr ? 'COLEÇÃO ESCREVER O CINEMA' : 'CINEMA IN WRITING COLLECTION'}
                  </SubItemMenuMobile>
                </li>
                <li>
                  <ItemMenuMobile as={Link} to="/quem-somos">
                    {global.ptBr ? 'QUEM SOMOS' : 'ABOUT US'}
                  </ItemMenuMobile>
                </li>
              </OpcoesMenu>
            </ConteinerItens>
          </ConteinerTaAberto>
        </ConteinerMenuMobile>
      </MediaQuery>
      <MediaQuery minWidth={800}>
        <ConteinerMenu estado={estado}>
          {estado === 0 ? (
            <Logo src={logos.oquadro.verdeVertical.src} estado={estado} />
          ) : ''}
          <ConteinerItensMenu estado={estado}>
            <ul className="dropdown">
              <li>
                <ItemMenu as={Link} to="/filmes/" estado={estado}>
                  {global.ptBr ? 'FILMES ' : 'FILMS '}
                </ItemMenu>
              </li>
              <li>
                <ItemMenu as={Link} to="/filmes/longas" estado={estado}>
                  {global.ptBr ? 'LONGA METRAGEM' : 'FEATURE-LENGTH FILMS'}
                </ItemMenu>
              </li>
              <li>
                <ItemMenu as={Link} to="/filmes/medias" estado={estado}>
                  {global.ptBr ? 'MÉDIA METRAGEM' : 'MEDIUM-LENGTH FILMS'}
                </ItemMenu>
              </li>
              <li>
                <ItemMenu as={Link} to="/filmes/curtas" estado={estado}>
                  {global.ptBr ? 'CURTA METRAGEM' : 'SHORT-LENGTH FILMS'}
                </ItemMenu>
              </li>
            </ul>
            <ItemMenu as={Link} to="/metro/" estado={estado}>
              {global.ptBr ? 'FESTIVAL METRÔ' : 'METRO FESTIVAL'}
            </ItemMenu>

            {estado !== 0 ? (
              <ItemMenu as={Link} to="/" className="logo">
                <Logo
                  src={`${estado === 1 ? logos.oquadro.verdeVertical.src : logos.aquadro.vermelhoVertical.src}`}
                  estado={estado}
                />
              </ItemMenu>
            ) : ''}
            <ul className="dropdown">
              <li>
                <ItemMenu as={Link} to="/publicacoes" estado={estado}>
                  {global.ptBr ? 'PUBLICAÇÕES' : 'BOOKS '}
                </ItemMenu>
              </li>
              <li>
                <ItemMenu as={Link} to="/publicacoes" estado={estado}>
                  {global.ptBr ? 'O QUE É?' : 'ABOUT'}
                </ItemMenu>
              </li>
              <li>
                <ItemMenu as={Link} to="/colecao" estado={estado}>
                  {global.ptBr ? 'COLEÇÃO ESCREVER O CINEMA' : 'CINEMA IN WRITING COLLECTION'}
                </ItemMenu>
              </li>
            </ul>
            <ItemMenu as={Link} to="/quem-somos" estado={estado}>
              {global.ptBr ? 'QUEM SOMOS' : 'ABOUT US'}
            </ItemMenu>
          </ConteinerItensMenu>
          <ConteinerLinguagem estado={estado}>
            <ItemLang
              estado={estado}
              lingua={global.ptBr}
              onClick={() => {
                mudarGlobal({ ptBr: true });
              }}
            >
              {'PT '}
            </ItemLang>
            /
            <ItemLang
              estado={estado}
              lingua={!global.ptBr}
              onClick={() => {
                mudarGlobal({ ptBr: false });
              }}
            >
              {' EN'}
            </ItemLang>
          </ConteinerLinguagem>
        </ConteinerMenu>
      </MediaQuery>
    </>
  );
}

Menu.propTypes = {
  estado: PropTypes.number.isRequired,
};

export default Menu;
