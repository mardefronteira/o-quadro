const database = {
  filmes: [{
    id: '1',
    url: 'amador',
    titulo: 'AMADOR',
    ano: 2011,
    autor: 'WELLINGTON SARI',
    imgIcone: { src: '/imagens/filmes/amador/amador_still1.jpg', desc: '', titulo: 'Titulo da Imagem' },
    imgDestaque: { src: '/imagens/filmes/amador/amador_banner.png', desc: '', titulo: 'Titulo da Imagem' },
    imgPoster: { src: '/imagens/filmes/amador/', desc: '', titulo: 'Titulo da Imagem' },
    galeria: [
      { src: '/imagens/filmes/amador/amador_still1.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/amador/amador_still2.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/amador/amador_still3.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/amador/amador_still4.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/amador/amador_still5.jpg', desc: '', titulo: 'Titulo da Imagem' },
    ],
    imgGaleriaAlta: [
      { src: '/imagens/filmes/amador/amador_still1_alta.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/amador/amador_still2_alta.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/amador/amador_still3_alta.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/amador/amador_still4_alta.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/amador/amador_still5_alta.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/amador/amador_still6_alta.jpg', desc: '', titulo: 'Titulo da Imagem' },
    ],
    patrocinadores: { src: '/imagens/filmes/amador/matizar_pagea_banner.png', desc: '', titulo: 'titulo da imagem' },
    sinopse: 'Em setembro de 2009, três alunos da 7º série de uma escola estadual de Curitiba gravaram os mesmos pratando sexo no banheiro. Dois deles divulgaram o vídeo na internet. "Amador" trata das implicações que a facilidade em captar imagens traz ao mundo dos jovens, no ambiente escolar.',
    participacao: 'elenco.',
    categoria: 'Curta Metragem',
    tags: ['Comédia', 'Adolescente', 'Terror'],
    linkVideo: 'https://vimeo.com/26117500',
    equipe: {
      principal: {
        // eslint-disable-next-line quotes
        __html: `<p><span class="texto-verde">Direção e roteiro:</span> Wellington Sari </p> 
        <p><span class="texto-verde">Produção Executiva:</span>  Alexandre Rafael Garcia </p> 
        <p><span class="texto-verde">Direção De Produção:</span> Anderson Simão, Evandro Scorsin </p> 
        <p><span class="texto-verde">Direção De Fotografia:</span> Renata Corrêa </p> 
        <p><span class="texto-verde">Montagem:</span> Christopher Faust </p> 
        <p><span class="texto-verde">Som Direto:</span> Nikola Matevski <p>
        <p>Projeto realizado como parte de uma série documental criada pela Matizar Filmes, 
        intitulado “Por que a gente é assim?”,
        série composta por seis episódios, 
        cujas exibições foram feitas pelo Canal Futura em 2011 e pelo Canal Brasil em 2012.<p>
        `,
      },
      adicional: {
        __html: `<p><span class="texto-verde">Assistente De Direção:</span> Evandro Scorsin
                  <p>`,
      },
    },
  },
  {
    id: '2',
    url: 'bia-mais-um',
    titulo: 'BIA MAIS UM',
    ano: 2021,
    autor: 'WELLINGTON SARI',
    imgIcone: { src: '/imagens/filmes/bia-mais-um/biamaisum_still1.jpg', desc: '', titulo: 'Titulo da Imagem' },
    imgDestaque: { src: '/imagens/filmes/bia-mais-um/biamaisum_banner.png', desc: '', titulo: 'Titulo da Imagem' },
    imgPoster: { src: '/imagens/filmes/bia-mais-um/biamaisum_cartaz_web_01.jpeg', desc: '', titulo: 'Titulo da Imagem' },
    galeria: [
      { src: '/imagens/filmes/bia-mais-um/biamaisum_still1.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/bia-mais-um/biamaisum_still2.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/bia-mais-um/biamaisum_still3.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/bia-mais-um/biamaisum_still4.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/bia-mais-um/biamaisum_still5.jpg', desc: '', titulo: 'Titulo da Imagem' },
    ],
    imgGaleriaAlta: [
      { src: '../imagens/filmes/bia-mais-um/biamaisum_cartaz_alta_01.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '../imagens/filmes/bia-mais-um/biamaisum_cartaz_alta_02.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '../imagens/filmes/bia-mais-um/biamaisum_still1_alta.png', desc: '', titulo: 'Titulo da Imagem' },
      { src: '../imagens/filmes/bia-mais-um/biamaisum_still2_alta.png', desc: '', titulo: 'Titulo da Imagem' },
      { src: '../imagens/filmes/bia-mais-um/biamaisum_still3_alta.png', desc: '', titulo: 'Titulo da Imagem' },
      { src: '../imagens/filmes/bia-mais-um/biamaisum_still4_alta.png', desc: '', titulo: 'Titulo da Imagem' },
      { src: '../imagens/filmes/bia-mais-um/biamaisum_still5_alta.png', desc: '', titulo: 'Titulo da Imagem' },
    ],
    patrocinadores: { src: '/imagens/filmes/bia-mais-um/ebanx-mecenato_banner.png', desc: '', titulo: 'titulo da imagem' },
    participacao: 'Gabrielle Pizzato, Gustavo Piaskoski, Ivo Müller, Dafne Viola.',
    sinopse: 'Bia tenta lidar com várias mudanças. Quando conhece Jean, tenta dormir um pouco mais antes de acordar para a realidade.',
    categoria: 'Longa Metragem',
    linkVideo: 'https://vimeo.com/611281456',
    equipe: {
      principal: {
        // eslint-disable-next-line quotes
        __html: `<p><span class="texto-verde">Direção e roteiro:</span> Wellington Sari </p> 
        <p><span class="texto-verde">Produção Executiva:</span> Anderson Simão, Christopher Faust </p> 
        <p><span class="texto-verde">Direção De Produção:</span> Leonardo Otto, Evandro Scorsin </p> 
        <p><span class="texto-verde">Direção De Fotografia:</span> André Senna </p> 
        <p><span class="texto-verde">Direção De Arte:</span> Aricia Machado </p> 
        <p><span class="texto-verde">Montagem:</span> Tomás Von Der Osten </p> 
        <p><span class="texto-verde">Som Direto:</span> Bruno Ito </p>
        <p><span class="texto-verde">Colorista:</span> Lucas Kosinski </p>
        <p><span class="texto-verde">Edição De Som E Mixagem:</span> Leandro Cordeiro <p>
        <p>Projeto realizado com o apoio do Programa de Apoio e Incentivo à Cultura - Fundação Cultural de Curitiba e da Prefeitura Municipal de Curitiba, com incentivo da empresa Ebanx.
        <p>
        `,
      },
      adicional: {
        __html: `<p><span class="texto-verde">Elenco Secundário:</span> Juliana Spricigo, 
        Alex Barbosa, 
        Lorena Lima, 
        Beatriz Rodrigues, 
        Jean Guilherme Filho, 
        Laura Gomes Tizzoni Lunas, 
        Caterina Malucelli Neves <p>
        <p><span class="texto-verde">Produtor Executivo Associado:</span> Lucas Kosinski |
        <span class="texto-verde">Assistente De Direção:</span> Stefano Lopes |
        <span class="texto-verde">Assistente De Produção:</span> Vanessa Leal |
        <span class="texto-verde">Operador De Câmera:</span> Rosano Mauro Jr. |
        <span class="texto-verde">1º Assistente De Câmera:</span> Murillo Marchesi |
        <span class="texto-verde">Assistentes De Fotografia:</span> Bianca Ono, Gabriel Mont'Serrat |
        <span class="texto-verde">Elétrica / Maquinária:</span> Danilo Custódio, Murilo Lazarin |
        <span class="texto-verde">Assistentes De Arte:</span> Lara Maria, José Lucas Alves | 
        <span class="texto-verde">Assistente De Figurino:</span> Larissa Monteiro | 
        <span class="texto-verde">Assistente De Som Direto:</span> Yasmin Sier | 
        <span class="texto-verde">Assistente De Produção (O Quadro):</span> Anna Clara Oliveira | 
        <span class="texto-verde">Assistente De Produção (Transporte):</span> Fernanda Stancik | 
        <span class="texto-verde">Assistente De Produção (Platô):</span> Lucas Ajuz | 
        <span class="texto-verde">Logger:</span> Matheus Kerniski | 
        <span class="texto-verde">Finalização:</span> Onda Finalização | 
        <span class="texto-verde">Estúdio De Som:</span> Ambiente Audio | 
        <span class="texto-verde">Consultoria De Roteiro:</span> Ana Johann | 
        <span class="texto-verde">Designer:</span> Pedro Giongo | 
        <span class="texto-verde">Legendagem:</span> Paulo Scarpa - Ó Editorial | 
        <p>
        <p>
        <span class="texto-verde">Apoio:</span> GP7 Cinema, Movimento, Onda Finalização, Ambiente Audio
        <p>`,
      },
    },
  },
  {
    id: '3',
    url: 'bye-bye-jaqueline',
    titulo: 'BYE BYE JAQUELINE',
    ano: 2017,
    autor: 'ANDERSON SIMÃO',
    imgIcone: { src: '/imagens/filmes/bye-bye-jaqueline/byebyejaqueline_still1.jpg', desc: '', titulo: 'Titulo da Imagem' },
    imgDestaque: { src: '/imagens/filmes/bye-bye-jaqueline/byebyejaqueline_banner.jpg', desc: '', titulo: 'Titulo da Imagem' },
    imgPoster: { src: '/imagens/filmes/bye-bye-jaqueline/byebyejaqueline_cartaz_web.jpg', desc: '', titulo: 'Titulo da Imagem' },
    galeria: [
      { src: '/imagens/filmes/bye-bye-jaqueline/byebyejaqueline_still1.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/bye-bye-jaqueline/byebyejaqueline_still2.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/bye-bye-jaqueline/byebyejaqueline_still3.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/bye-bye-jaqueline/byebyejaqueline_still4.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/bye-bye-jaqueline/byebyejaqueline_still5.jpg', desc: '', titulo: 'Titulo da Imagem' },
    ],
    imgGaleriaAlta: [
      { src: '/imagens/filmes/bia-mais-um/biamaisum_cartaz_alta_01.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/bia-mais-um/biamaisum_cartaz_alta_02.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/bia-mais-um/biamaisum_still1_alta.png', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/bia-mais-um/biamaisum_still2_alta.png', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/bia-mais-um/biamaisum_still3_alta.png', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/bia-mais-um/biamaisum_still4_alta.png', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/bia-mais-um/biamaisum_still5_alta.png', desc: '', titulo: 'Titulo da Imagem' },
    ],
    patrocinadores: { src: '/imagens/filmes/bia-mais-um/ebanx-mecenato_banner.png', desc: '', titulo: 'titulo da imagem' },
    participacao: 'Poliana Oliveira, Gabrielle Pizzato Santana, Victor Carlim, Leonardo Oliveira, Wellington Sari, Evandro Scorsin, Flávia Cassias e Iza Kürten.',
    sinopse: 'Ter 16 anos é fácil. O difícil é ter 16 anos e ser obrigada a ir à escola todo dia. Mais difícil ainda é ter 16, ser obrigada a frequentar a escola e acabar se apaixonando por Fernando, o menino da sala ao lado. Ser a Jaqueline é fácil. O difícil é ser Jaqueline e saber que Fernando não está nem aí.',
    categoria: 'Longa Metragem',
    tags: ['Comédia', 'Adolescente', 'Terror'],
    linkVideo: 'https://vimeo.com/244453031',
    equipe: {
      principal: {
        // eslint-disable-next-line quotes
        __html: `<p>
        <p><span class="texto-verde">Direção:</span> Anderson Simão </p>
        <p><span class="texto-verde">Roteiro:</span> Wellington Sari </p> 
        <p><span class="texto-verde">Produção Executiva:</span> Christopher Faust e Anderson Simão </p> 
        <p><span class="texto-verde">Direção De Produção:</span> Evandro Scorsin e Wellington Sari </p> 
        <p><span class="texto-verde">Direção De Fotografia:</span> Daniel Florencio </p> 
        <p><span class="texto-verde">Figurino:</span> Isbella Fonseca </p> 
        <p><span class="texto-verde">Montagem:</span> Christopher Faust </p> 
        <p><span class="texto-verde">Som Direto:</span> Bruno Ito </p>
        <p><span class="texto-verde">Colorista:</span> Marcelo Tanaka </p>
        <p><span class="texto-verde">Finalização De Som:</span> Alexandre Rogoski<p>
        <p>Projeto realizado com o apoio do Programa de Apoio e Incentivo à Cultura - Fundação Cultural de Curitiba e da Prefeitura Municipal de Curitiba, com incentivo da Robert Bosch e do Pátio Batel. Distribuição da Lança Filmes.</p>
        </p>  
        `,
      },
      adicional: {
        __html: `<p><span class="texto-verde">Assistente De Direção:</span> Evandro Scorsin <p>
        <p><span class="texto-verde">Direção de Arte:</span> G. Sari |
        <span class="texto-verde">Assistente De Produção: </span> Alexandre Rafael Garcia |
        <span class="texto-verde">Assistente de Fotografia/Operador De Câmera:</span> Marcelo Tanaka |
        <span class="texto-verde">Assistente De Som Direto:</span> Alexandre Magno | 
        <span class="texto-verde">Assistente De Figurino:</span> Laís Lubel | 
        <span class="texto-verde">Claquete:</span> Annabel Poly e Paulo Vitor M. Costa |
        <span class="texto-verde">Still:</span> Paula Negri |
        <span class="texto-verde">Produção de Objetos:</span> Cassiana Maranha |
        <span class="texto-verde">Design Gráfico:</span> Melina Correia | 
        <span class="texto-verde">Edição de Diálogo e ADR:</span> Samuel Jacintho | 
        <span class="texto-verde">Edição de Foley e Efeitos Sonoros:</span> Adriano Elias | 
        <span class="texto-verde">Edição de Efeitos Sonoros:</span> Felipe Ayres, Bruno Ito | 
        <span class="texto-verde">Estúdio de Som:</span> Off-Beat Audio | 
        <span class="texto-verde">Legendas Espanhol:</span> Larissa Mehl  | 
        <span class="texto-verde">Legendas Inglês:</span> Raquel Ribeiro |
        <p>
        <p>
        <span class="texto-verde">Figurantes / Extras:</span> Andreia A. A. Porto | Andressa F. Souza | Caroline Altvater | Douglas Bayer Monteiro | Eduarda Borges | Fabio Padilha | Gabrielle Gutierrez Aragão | Giulia Giovanella | Isabella Boddy da Silva | João Guilherme Pellanda | Kesley Ladaninski Garriga | Larissa Antonio | Larissa Tatiana Duarte | Luiza Mayer Seixas Narciso | Valentina V. C. Nogaroto | Vitor Trelinski de Carvalho | Willian Gabriel Molari | Yan Cabral Ramos
        <p>`,
      },
    },
  },
  {
    id: '4',
    url: 'coloridos',
    titulo: 'COLORIDOS',
    ano: 2011,
    autor: 'CHRISTOPHER FAUST, EVANDRO SCORSIN',
    imgIcone: { src: '/imagens/filmes/coloridos/coloridos_still1.jpg', desc: '', titulo: 'Titulo da Imagem' },
    imgDestaque: { src: '/imagens/filmes/coloridos/coloridos_banner.jpg', desc: '', titulo: 'Titulo da Imagem' },
    imgPoster: { src: '/imagens/filmes/coloridos/coloridos_cartaz_web.jpg', desc: '', titulo: 'Titulo da Imagem' },
    galeria: [
      { src: '/imagens/filmes/coloridos/coloridos_still1.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/coloridos/coloridos_still2.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/coloridos/coloridos_still3.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/coloridos/coloridos_still4.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/coloridos/coloridos_still5.jpg', desc: '', titulo: 'Titulo da Imagem' },
    ],
    imgGaleriaAlta: [
      { src: '/imagens/filmes/coloridos/coloridos_cartaz_alta.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/coloridos/coloridos_still1_alta.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/coloridos/coloridos_still2_alta.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/coloridos/coloridos_still3_alta.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/coloridos/coloridos_still4_alta.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/coloridos/coloridos_still5_alta.jpg', desc: '', titulo: 'Titulo da Imagem' },
    ],
    patrocinadores: { src: '/imagens/filmes/coloridos/matizar_pagea_banner.png', desc: '', titulo: 'titulo da imagem' },
    participacao: 'Carol Louise, Felipe Schindler, Jenifer Kamila, Jéssica Tamaro Beckhauser, Lilan Camile Schelbauer Panek, Roberta A. P. Guimarães, Thamirys Ramos, Vaniele Cristina, Lucas Telles e Nadiele Ferreira Leal',
    sinopse: 'É domingo. Sol, roupas brilhantes, cabelos esquisitos, óculos coloridos. Um grupo de jovens se reúne para debater o lugar que ocupam na sociedade.',
    categoria: 'Curta Metragem',
    tags: ['Comédia', 'Adolescente', 'Terror'],
    linkVideo: 'https://youtu.be/qd6OBAcnN74',
    equipe: {
      principal: {
        // eslint-disable-next-line quotes
        __html: `<p>
        <p><span class="texto-verde">Direção e roteiro:</span> Christopher Faust, Evandro Scorsin </p>
        <p><span class="texto-verde">Produção Executiva:</span> Alexandre Rafael Garcia </p> 
        <p><span class="texto-verde">Direção De Produção:</span> Anderson Simao, Juliana Rodrigues </p> 
        <p><span class="texto-verde">Direção De Fotografia:</span> Renata Corrêa </p> 
        <p><span class="texto-verde">Montagem:</span> Tomás von der Osten </p> 
        <p><span class="texto-verde">Som Direto:</span> Nikola Matevski </p>
        <p>Projeto realizado como parte de uma série documental criada pela Matizar Filmes, intitulado “Por que a gente é assim?”, série composta por seis episódios, cujas exibições foram feitas pelo Canal Futura em 2011 e pelo Canal Brasil em 2012.
        <p>
        `,
      },
      adicional: {
        __html: '',

      },
    },
  },
  {
    id: '5',
    url: 'coracao-azul',
    titulo: 'CORAÇÃO AZUL',
    ano: 2014,
    autor: 'WELLINGTON SARI',
    imgIcone: { src: '/imagens/filmes/coracao-azul/coracaoazul_still1.png', desc: '', titulo: 'Titulo da Imagem' },
    imgDestaque: { src: '/imagens/filmes/coracao-azul/coracaoazul_banner.png', desc: '', titulo: 'Titulo da Imagem' },
    imgPoster: { src: '/imagens/filmes/coracao-azul/coracaoazul_cartaz_web.jpg', desc: '', titulo: 'Titulo da Imagem' },
    galeria: [
      { src: '/imagens/filmes/coracao-azul/coracaoazul_still1.png', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/coracao-azul/coracaoazul_still2.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/coracao-azul/coracaoazul_still3.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/coracao-azul/coracaoazul_still4.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/coracao-azul/coracaoazul_still5.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/coracao-azul/coracaoazul_still6.png', desc: '', titulo: 'Titulo da Imagem' },
    ],
    imgGaleriaAlta: [
      { src: '/imagens/filmes/coracao-azul/coracaoazul_cartaz_alta.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/coracao-azul/coracaoazul_still1_alta.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/coracao-azul/coracaoazul_still2_alta.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/coracao-azul/coracaoazul_still3_alta.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/coracao-azul/coracaoazul_still4_alta.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/coracao-azul/coracaoazul_still5_alta.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/coracao-azul/coracaoazul_still6_alta.png', desc: '', titulo: 'Titulo da Imagem' },

    ],
    patrocinadores: { src: '/imagens/filmes/coracao-azul/condor-mecenato_banner.png', desc: '', titulo: 'titulo da imagem' },
    participacao: 'Jean Guilherme Filho, Guilherme Penna Moro, Eduarda Scheffer, Augusto Cerqueira, Larissa Freitas.',
    sinopse: 'Janco e Samuel são donos de uma agência de detetives, na escola. Enquanto investigam o desaparecimento de uma bola de vôlei, Janco tenta se aproximar de Dariana, menina por quem é apaixonado.',
    categoria: 'Curta Metragem',
    tags: ['Comédia', 'Adolescente', 'Terror'],
    linkVideo: 'https://youtu.be/HMkA8M9cSj4',
    equipe: {
      principal: {
        // eslint-disable-next-line quotes
        __html: `<p>
        <p><span class="texto-verde">Direção e roteiro:</span> Wellington Sari </p>
        <p><span class="texto-verde">Produção Executiva:</span> Anderson Simão </p> 
        <p><span class="texto-verde">Direção De Produção:</span> Alexandre Rafael Garcia e Evandro Scorsin </p> 
        <p><span class="texto-verde">Direção De Fotografia:</span> Daniel Florencio </p> 
        <p><span class="texto-verde">Direção De Arte:</span> Alex Rocca </p> 
        <p><span class="texto-verde">Montagem:</span> Christopher Faust </p> 
        <p><span class="texto-verde">Som Direto:</span> Guilherme Cordova </p>
        <p><span class="texto-verde">Edição De Som E Mixagem:</span> Alexandre Rogoski </p>
        <p>
        Projeto realizado com o apoio do Programa de Apoio e Incentivo à Cultura - Fundação Cultural de Curitiba e da Prefeitura Municipal de Curitiba, com incentivo do Condor.
        <p>
        `,
      },
      adicional: {
        __html: `<p>
        <span class="texto-verde">Elenco Secundário:</span> Nicolas Hübler Mosko, Wellington Sari, Julio Cesar Heupa e Evandro Scorsin.</p>
        <span class="texto-verde">Assistente De Direção:</span> Christopher Faust |
        <span class="texto-verde">Assistente de Fotografia e Finalização de Imagem:</span> Marcelo Tanaka |
        <span class="texto-verde">Elétrica:</span> Leandro Telles |
        <span class="texto-verde">Assistente De Som Direto:</span> Felipe Ribeiro | 
        <span class="texto-verde">Designer:</span> Melina Correia |
        <span class="texto-verde">Edição de som:</span> Henrique Bertol | 
        <span class="texto-verde">Assistência de Edição de Som: </span> Samuel Jacintho |
        <span class="texto-verde">Estúdio de Som:</span> Off-Beat Audio |
        <span class="texto-verde">Still:</span> Tomás Von Der Osten |
        <span class="texto-verde"> Claquete e Logagem:</span> Paula Negri | 
        <span class="texto-verde">Assistente de Produção e Assistente de Figurinista:</span> Caroline Biagi | 
        <span class="texto-verde">Assistente de Arte e Produtora de Objetos:</span> Carolina Angelo | 
        <span class="texto-verde">Assistente de Arte:</span> Fernando Moreira | 
        <span class="texto-verde">Legendas Inglês:</span> Raquel Ribeiro |
        <span class="texto-verde">Legendas Espanhol:</span> Larissa Mehl  | 
        <span class="texto-verde">Autoração do Dvd:</span> Guilherme Delamuta |
        <span class="texto-verde">Captadores:</span> Adenilson Sutil de Oliveira, Angela Maria Cordeiro de Oliveira e Jonatan Kovalski |
        </p>
        <p>
        <span class="texto-verde">Apoio:</span> Colégio Medianeira, Prefeitura de Curitiba, Sanepar, Topt Bonecos
        </p>`,
      },
    },
  },
  {
    id: '6',
    url: 'dias-de-trovao',
    titulo: 'DIAS DE TROVÃO',
    ano: 2015,
    autor: 'ALEXANDRE RAFAEL GARCIA',
    imgIcone: { src: '/imagens/filmes/dias-de-trovao/diasdetrovao_still1.jpg', desc: '', titulo: 'Titulo da Imagem' },
    imgDestaque: { src: '/imagens/filmes/dias-de-trovao/diasdetrovao_banner1.jpg', desc: '', titulo: 'Titulo da Imagem' },
    imgPoster: { src: '/imagens/filmes/dias-de-trovao/diasdetrovao_cartaz_web.jpg', desc: '', titulo: 'Titulo da Imagem' },
    galeria: [
      { src: '/imagens/filmes/dias-de-trovao/diasdetrovao_still1.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/dias-de-trovao/diasdetrovao_still2.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/dias-de-trovao/diasdetrovao_still3.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/dias-de-trovao/diasdetrovao_still4.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/dias-de-trovao/diasdetrovao_still5.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/dias-de-trovao/diasdetrovao_still6.jpg', desc: '', titulo: 'Titulo da Imagem' },
    ],
    imgGaleriaAlta: [
      { src: '/imagens/filmes/dias-de-trovao/diasdetrovao_cartaz_alta.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/dias-de-trovao/diasdetrovao_still1_alta.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/dias-de-trovao/diasdetrovao_still2_alta.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/dias-de-trovao/diasdetrovao_still3_alta.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/dias-de-trovao/diasdetrovao_still4_alta.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/dias-de-trovao/diasdetrovao_still5_alta.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/dias-de-trovao/diasdetrovao_still6_alta.png', desc: '', titulo: 'Titulo da Imagem' },

    ],
    patrocinadores: { src: '/imagens/filmes/dias-de-trovao/condor-mecenato_banner.png', desc: '', titulo: 'titulo da imagem' },

    participacao: 'Gustavo Piaskoski, Bruna Roveda, João Maurílio, Wellington Sari, Jean Guilherme Filho, Pedro Gaeta, Izabela Cruz e Pâmela Branchi.',
    sinopse: 'Eric é apaixonado por sua melhor amiga, Eduarda. Mas, Michel é mais rápido e conquista primeiro a menina. Na pista de kart, Eric tem uma chance de superar o adversário em uma competição feroz. Amor e velocidade, amor pela velocidade. Aqueles eram os Dias de Trovão',
    categoria: 'Média Metragem',
    tags: ['Comédia', 'Adolescente', 'Terror'],
    linkVideo: 'https://youtu.be/HMkA8M9cSj4',
    equipe: {
      principal: {
        // eslint-disable-next-line quotes
        __html: `<p>
        <p><span class="texto-verde">Direção:</span> Alexandre Rafael Garcia </p>
        <p><span class="texto-verde">Roteiro:</span> Wellington Sari </p> 
        <p><span class="texto-verde">Produção Executiva:</span>  Anderson Simão </p> 
        <p><span class="texto-verde">Direção De Produção:</span> Evandro Scorsin e Wellington Sari </p> 
        <p><span class="texto-verde">Direção De Fotografia:</span> Daniel Florencio </p> 
        <p><span class="texto-verde">Montagem:</span> Christopher Faust </p> 
        <p><span class="texto-verde">Som Direto:</span> Bruno Ito </p>
        <p><span class="texto-verde">Finalização De Som:</span> Alexandre Rogoski<p>
        <p>
        Projeto realizado com o apoio do Programa de Apoio e Incentivo à Cultura - Fundação Cultural de Curitiba e da Prefeitura Municipal de Curitiba, via Lei do Mecenato Subsidiado, com incentivo do Condor.
        <p>
        `,
      },
      adicional: {
        __html: `<p>
        <span class="texto-verde">Assistente De Direção:</span> Christopher Faust |
        <span class="texto-verde">Direção de Arte:</span> Wildebrand S. Loyola |
        <span class="texto-verde">Assistente de Fotografia/Operador De Câmera:</span> Marcelo Tanaka |
        <span class="texto-verde">Direção Musical:</span> Wellington Sari |
        <span class="texto-verde">Produção Musical:</span> Anderson Simão |
        <span class="texto-verde">Figurino:</span> Ana Deliberador |
        <span class="texto-verde">Assistente de Arte:</span> Cinthia Manochio |
        <span class="texto-verde">Assistente De Som Direto:</span> Felipe Ribeiro | 
        <span class="texto-verde">Diretores de segunda unidade:</span> Christopher Faust, Evandro Scorsin e Wellington Sari | 
        <span class="texto-verde">Elétrica:</span> Leandro Telles |
        <span class="texto-verde">Assistente de Elétrica:</span> Edson Mazuco |
        <span class="texto-verde">Designer de Arte:</span> Bruna Michelin |
        <span class="texto-verde">Still:</span> Ana Paula Málaga | 
        <span class="texto-verde">Claquete:</span> Dewi Jost | 
        <span class="texto-verde">Edição de Som:</span> Adriano Elias e Bruno Ito | 
        <span class="texto-verde">Estúdio de Som:</span> Off-Beat Audio | 
        <span class="texto-verde">Finalização de imagem:</span> Marcelo Tanaka | 
        <span class="texto-verde">Storyboard:</span> Maurício Ramos Marques | 
        <span class="texto-verde">Making of:</span> Patrícia Evans | 
        <span class="texto-verde">Designer Gráfico:</span> Melina Correia |
        <span class="texto-verde">Legendas Inglês:</span> Raquel Ribeiro |
        <span class="texto-verde">Legendas Espanhol:</span> Larissa Mehl | 
        <span class="texto-verde">Autoração de Dvd e Blu-ray:</span> Guilherme Delamuta | 
        <span class="texto-verde">Captadores:</span>  Adenilson Sutil de Oliveira, Angela Maria Cordeiro de Oliveira, Itamar Paciornkik e Jonatan Kovalski 
        </p>
        <p>
        <span class="texto-verde">Elenco de apoio:</span> Monique Rau (voz) | Wellington Sari (voz) | Evandro Scorsin (voz) | Christopher Faust | Wevertton Marques (piloto dublê de Michel) | Ivo Neto, Anderson Simão, Daniel Florencio, Wellington Sari (pilotos dublês de Eric)
        </p>
        <p>
        <span class="texto-verde">Pilotos:</span> 
        Agnã Zago | Dayana Ketlyn Alves | Diego Dias Said | Elias Faria da Silva | Jamil Merlin Said | João Luiz Alves | José Lucas Galvão Matos | Josias | Ivo Neto | Samuel Lauro Marques | Wevertton Marques
        </p>
        <p>
        <span class="texto-verde">Apoio:</span>
        Kartódromo de São José dos Pinhais | Heaven Advertising | MKI - Marumby Kart Indoor | Off-Beat Audio | Prefeitura Municipal de Curitiba
        </p>
        `,
      },
    },
  },
  {
    id: '7',
    url: 'dois-amores',
    titulo: 'DOIS AMORES',
    ano: 2013,
    autor: 'ALEXANDRE RAFAEL GARCIA',
    imgIcone: { src: '/imagens/filmes/dois-amores/doisamores_still1.jpg', desc: '', titulo: 'Titulo da Imagem' },
    imgDestaque: { src: '/imagens/filmes/dois-amores/doisamores_banner1.jpg', desc: '', titulo: 'Titulo da Imagem' },
    imgPoster: { src: '/imagens/filmes/dois-amores/doisamores_cartaz_web.jpg', desc: '', titulo: 'Titulo da Imagem' },
    galeria: [
      { src: '/imagens/filmes/dois-amores/doisamores_still1.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/dois-amores/doisamores_still2.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/dois-amores/doisamores_still3.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/dois-amores/doisamores_still4.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/dois-amores/doisamores_still5.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/dois-amores/doisamores_still6.jpg', desc: '', titulo: 'Titulo da Imagem' },
    ],
    imgGaleriaAlta: [
      { src: '/imagens/filmes/dois-amores/doisamores_cartaz_alta.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/dois-amores/doisamores_still1_alta.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/dois-amores/doisamores_still2_alta.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/dois-amores/doisamores_still3_alta.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/dois-amores/doisamores_still4_alta.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/dois-amores/doisamores_still5_alta.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/dois-amores/doisamores_still6_alta.png', desc: '', titulo: 'Titulo da Imagem' },

    ],
    patrocinadores: { src: '', desc: '', titulo: 'titulo da imagem' },

    participacao: 'Natalie Lira, Wellington Sari, Flávia Scholz.',
    sinopse: 'Michel que era um jovem amargo, conhece Marcela, uma menina doce.',
    categoria: 'Curta Metragem',
    tags: ['Comédia', 'Adolescente', 'Terror'],
    linkVideo: 'https://youtu.be/1lDB0Zn5Zek',
    equipe: {
      principal: {
        // eslint-disable-next-line quotes
        __html: `<p>
        <p><span class="texto-verde">Direção e roteiro:</span> Anderson Simão </p>
        <p><span class="texto-verde">Produção:</span> Alexandre Rafael Garcia, Anderson Simão, Christopher Faust, Evandro Scorsin </p> 
        <p><span class="texto-verde">Direção De Fotografia:</span> Guilherme Delamuta</p> 
        <p><span class="texto-verde">Som Direto:</span> Lucas Maffini</p>
        <p><span class="texto-verde">Montagem e Finalização de Imagem:</span> Guilherme Delamuta</p> 
        <p><span class="texto-verde">Finalização De Som:</span> Bruno Ito</p>
        </p>
        <p>
        Este filme faz parte do projeto "Filmes de Verão" 2013
        </p>
        `,
      },
      adicional: {
        __html: `<p>
        <span class="texto-verde">Designer Gráfico:</span> Melina Correia |
        <span class="texto-verde">Assistente de Montagem:</span> Paula Negri |
        <span class="texto-verde">Legendas Espanhol:</span> Graziela Braz | 
        <span class="texto-verde">Legendas Inglês:</span> Raquel Ribeiro |
        </p>
        <p>
        <span class="texto-verde">Apoio:</span>
        Confeitaria Bomfati, Marcolini Alimentari, Bebidas Tissot, Sanepar
        </p>
        `,
      },
    },
  },
  {
    id: '8',
    url: 'eu-te-amo-bressan',
    titulo: 'EU TE AMO, BRESSAN',
    ano: 2020,
    autor: 'GABRIEL BORGES',
    imgIcone: { src: '/imagens/filmes/eu-te-amo-bressan/euteamobressan_still1.jpeg', desc: '', titulo: 'Titulo da Imagem' },
    imgDestaque: { src: '/imagens/filmes/eu-te-amo-bressan/coco-quadro-mecenato_banner.png', desc: '', titulo: 'Titulo da Imagem' },
    imgPoster: { src: '/imagens/filmes/eu-te-amo-bressan/euteamobressan_cartaz_web.jpg', desc: '', titulo: 'Titulo da Imagem' },
    galeria: [
      { src: '/imagens/filmes/eu-te-amo-bressan/euteamobressan_still1.jpeg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/eu-te-amo-bressan/euteamobressan_still2.jpeg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/eu-te-amo-bressan/euteamobressan_still3.jpeg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/eu-te-amo-bressan/euteamobressan_still4.jpeg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/eu-te-amo-bressan/euteamobressan_still5.jpeg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/eu-te-amo-bressan/euteamobressan_still6.jpeg', desc: '', titulo: 'Titulo da Imagem' },
    ],
    imgGaleriaAlta: [
      { src: '/imagens/filmes/eu-te-amo-bressan/euteamobressan_cartaz_alta.png', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/eu-te-amo-bressan/euteamobressan_still1_alta.png', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/eu-te-amo-bressan/euteamobressan_still2_alta.png', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/eu-te-amo-bressan/euteamobressan_still3_alta.png', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/eu-te-amo-bressan/euteamobressan_still4_alta.png', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/eu-te-amo-bressan/euteamobressan_still5_alta.png', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/eu-te-amo-bressan/euteamobressan_still6_alta.png', desc: '', titulo: 'Titulo da Imagem' },

    ],
    patrocinadores: { src: '/imagens/filmes/eu-te-amo-bressan/coco-quadro-mecenato_banner.png', desc: '', titulo: 'titulo da imagem' },

    participacao: 'Pedro Ramires; Pedro Garcia; Letícia Decker; Victor Curuca e Maicon Douglas.',
    sinopse: 'Depois do fim de seu namoro, Bressan remonta episódios de seu relacionamento em uma inusitada história de amor.',
    categoria: 'Curta Metragem',
    tags: ['Comédia', 'Adolescente', 'Terror'],
    linkVideo: 'https://youtu.be/ca9pDxzPDfE',
    equipe: {
      principal: {
        // eslint-disable-next-line quotes
        __html: `<p>
        <p><span class="texto-verde">Direção e roteiro:</span> Gabriel Borges </p>
        <p><span class="texto-verde">Produção Executiva:</span> Sabrina Trentim e Gabriel Borges</p>
        <p><span class="texto-verde">Direção De Produção:</span> Sabrina Trentim</p>  
        <p><span class="texto-verde">Direção De Fotografia:</span> Nani Colomé</p> 
        <p><span class="texto-verde">Direção De Arte:</span> Pedro Vilo</p> 
        <p><span class="texto-verde">Montagem:</span> Rodrigo Tomita</p> 
        <p><span class="texto-verde">Colorização e Finalização:</span> André F. Diniz</p>
        <p><span class="texto-verde">Desenho de Som:</span> Vinicius André Maciel</p>
        <p><span class="texto-verde">Produção:</span> Coco Filmes</p>
        <p><span class="texto-verde">Co-Produção:</span> O Quadro</p>
        </p>
        <p>
        Projeto realizado com o apoio do Programa de Apoio e Incentivo à Cultura - Fundação Cultural de Curitiba e da Prefeitura Municipal de Curitiba.
        </p>
        `,
      },
      adicional: {
        __html: `<p>
        <span class="texto-verde">Assistente De Direção:</span> Gabriela Ferreira |
        <span class="texto-verde">Assistente De Câmera:</span> Bianca Ono |
        <span class="texto-verde">Maquiagem, cabelo e assistência de arte:</span> Maria Gabriela Goulart | 
        <span class="texto-verde">Assistência de Maquiagem:</span> Pâmela Kath |
        <span class="texto-verde">Logger:</span> André F. Diniz |
        <span class="texto-verde">Assistente De Produção e Design Gráfico:</span> Tiago Felipe |
        <span class="texto-verde">Making Of:</span> Iury Peres Malucelli e Alanis Machado |
        </p>
        <p>
        <span class="texto-verde">Apoio:</span>
        Unespar
        </p>
        `,
      },
    },
  },
  {
    id: '9',
    url: 'euller-miller',
    titulo: 'EULLER MILLER ENTRE DOIS MUNDOS',
    ano: 2018,
    autor: 'FERNANDO SEVERO',
    imgIcone: { src: '/imagens/filmes/euller-miller/eullermiller_still1.jpg', desc: '', titulo: 'Titulo da Imagem' },
    imgDestaque: { src: '/imagens/filmes/euller-miller/eullermiller_banner.jpg', desc: '', titulo: 'Titulo da Imagem' },
    imgPoster: { src: '/imagens/filmes/euller-miller/eullermiller_cartaz1.jpg', desc: '', titulo: 'Titulo da Imagem' },
    galeria: [
      { src: '/imagens/filmes/euller-miller/eullermiller_still1.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/euller-miller/eullermiller_still2.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/euller-miller/eullermiller_still3.png', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/euller-miller/eullermiller_still4.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/euller-miller/eullermiller_still5.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/euller-miller/eullermiller_still6.jpg', desc: '', titulo: 'Titulo da Imagem' },
    ],
    imgGaleriaAlta: [
      { src: '/imagens/filmes/euller-miller/eullermiller_cartaz1_alta.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/euller-miller/eullermiller_cartaz2_alta.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/euller-miller/eullermiller_still1_alta.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/euller-miller/eullermiller_still2_alta.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/euller-miller/eullermiller_still3_alta.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/euller-miller/eullermiller_still4_alta.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/euller-miller/eullermiller_still5_alta.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/euller-miller/eullermiller_still6_alta.jpg', desc: '', titulo: 'Titulo da Imagem' },

    ],
    patrocinadores: { src: '/imagens/filmes/euller-miller/eullermiller_creditos_banner.png', desc: '', titulo: 'titulo da imagem' },

    participacao: 'Euller Miller Martins Almeida.',
    sinopse: 'Euller Miller é um jovem indígena brasileiro da etnia kaiwá que sai de sua pequena aldeia nos arredores de Dourados (MS) para cursar odontologia em uma universidade pública na capital populosa do estado do Paraná. O filme acompanha sua complexa transição entre dois mundos contrastantes e uma busca de novos horizontes que não impliquem na perda de suas raízes indígenas.',
    categoria: 'Longa Metragem',
    tags: ['Comédia', 'Adolescente', 'Terror'],
    linkVideo: 'https://vimeo.com/228310631',
    equipe: {
      principal: {
        // eslint-disable-next-line quotes
        __html: `<p>
        <p><span class="texto-verde">Direção, roteiro e montagem:</span> Fernando Severo </p>
        <p><span class="texto-verde">Produção Executiva:</span> Anderson Simão e Christopher Faust </p> 
        <p><span class="texto-verde">Direção De Produção:</span> Evandro Scorsin e Wellington Sari </p> 
        <p><span class="texto-verde">Direção De Fotografia:</span> Jonathan van Thomaz </p> 
        <p><span class="texto-verde">Montagem:</span> Tomás von der Osten </p> 
        <p><span class="texto-verde">Som Direto e Trilha Sonora:</span> Felipe Ayres </p>
        <p><span class="texto-verde">Edição De Som E Mixagem:</span> Alexandre Rogoski<p>
        <p>
        Projeto realizado via edital Prodav 12 (TVs Públicas) do Fundo Setorial do Audiovisual.
        <p>
        `,
      },
      adicional: {
        __html: `<p>
          <p>
            <span class="texto-verde">Entrevistados:</span> Adalton Barbosa de Almeida | 
            Adélia de Lima Martins | Alda Mariano de Lima | Álex de Carvalho Passos | 
            Alipio de Almeida | Ana Elisa de Castro Freitas | Ana Itália Paraná Mariano | 
            Beijamim Benedito Bernardes | Brô MC's | Bruno Veron | Celia Maria Foster Silvestre | 
            Clemerson Batista Veron | Eder Borges | Cristiane dos Santos de Cristo | 
            Edivio Battistelli | Elizaveni Barbosa Almeida Pedro | Ellen Cristina de Almeida | 
            Emilio Ramires Martins | Ermelina Almeida | Gabrieli Rodrigues de Almeida Abreu | 
            Geniniana Barbosa Almeida Pedro | Ivana Froede Neiva | Jayme Bordini Júnior |
            João Luiz Serpa Silverio | Julianna Rocha Podolan Martins | Kellen Natalice Vilharva | 
            Lays Gonçalves | Luciana Beatriz de A. Colombo | Luiz Carlos Rãkag Dias | Luiz Omar Corrêa | 
            Marcos Homero Ferreira Lima | Maria Helena de Amorim Pinheiro | Miguel Barbosa de Almeida | 
            Natacha Martins Almeida | Nivaldo Pereira da Silva | Nirda Almeida | Odione Brasão Penha | 
            Pedro Henrique Ribeiro da Mota | Tainara Ganin De Oliveira | Vanderson Jorge Almeida | 
            Veronina Duarte Cavalheiro
          </p>
          <p>
            <span class="texto-verde">Assistente de fotografia e operação de câmera:</span> Carlos Lenine |
            <span class="texto-verde">2º Assistente de fotografia:</span> Lucas Kosinski |
            <span class="texto-verde">Edição de diálogos:</span> Samuel Jacintho |
            <span class="texto-verde">Assistência de edição de som:</span> Yuri Grigoletti |
            <span class="texto-verde">Estúdio de pós de som:</span> Off-Beat Audio |
            <span class="texto-verde">Coordenador de pós-produção:</span> Guilherme Delamuta |
            <span class="texto-verde">Correção de cor:</span> Rafael Werner |
            <span class="texto-verde">Arte gráfica e cartelas:</span> Pedro Giongo | 
            <span class="texto-verde">Fotógrafo Still:</span> Henrique Thoms | 
            <span class="texto-verde">Transcrição de entrevistas:</span> Leonardo Otto |
            <span class="texto-verde">Conteúdo de acessibilidade:</span> ETC filmes |
            <span class="texto-verde">Roteiro de audiodescrição:</span> Joana Oliveira |
            <span class="texto-verde">Consultoria cognitiva de audiodescrição:</span> Edgar Jacques | 
            <span class="texto-verde">Locução de audiodescrição:</span> Thonny Cavaglieri | 
            <span class="texto-verde">Legenda descritiva:</span> Claudia Pinheiro | 
            <span class="texto-verde">Intérprete de LIBRAS:</span> Regiane Pereira | 
            <span class="texto-verde">Consultoria Especializada de LIBRAS:</span> Diogo Petarnella | 
            <span class="texto-verde">Coordenação de acessibilidade:</span> Thais Ortega e Natália Blandy | 
            <span class="texto-verde">Tradução e legendas:</span> ETC filmes e Cinthia Alencar 
          </p>
          <p>
          <span class="texto-verde">Apoio:</span>
          MANC - Câmeras e Acessórios, MAI - Museu de Arte Indígena        
          </p>
        </p>
        `,
      },
    },
  },
  {
    id: '10',
    url: 'festa-no-apartamento-da-suzana',
    titulo: 'FESTA NO APARTAMENTO DA SUZANA',
    ano: 2012,
    autor: 'CHRISTOPHER FAUST',
    imgIcone: { src: '/imagens/filmes/festa-no-apartamento-da-suzana/festanoap_still1.jpg', desc: '', titulo: 'Titulo da Imagem' },
    imgDestaque: { src: '/imagens/filmes/festa-no-apartamento-da-suzana/festanoap_banner.jpg', desc: '', titulo: 'Titulo da Imagem' },
    imgPoster: { src: '/imagens/filmes/festa-no-apartamento-da-suzana/festanoap_cartaz_web.jpg', desc: '', titulo: 'Titulo da Imagem' },
    galeria: [
      { src: '/imagens/filmes/festa-no-apartamento-da-suzana/festanoap_still1.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/festa-no-apartamento-da-suzana/festanoap_still2.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/festa-no-apartamento-da-suzana/festanoap_still3.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/festa-no-apartamento-da-suzana/festanoap_still4.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/festa-no-apartamento-da-suzana/festanoap_still5.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/festa-no-apartamento-da-suzana/festanoap_still6.jpg', desc: '', titulo: 'Titulo da Imagem' },
    ],
    imgGaleriaAlta: [
      { src: '/imagens/filmes/festa-no-apartamento-da-suzana/festanoap_cartaz_alta.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/festa-no-apartamento-da-suzana/festanoap_still5_alta.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/festa-no-apartamento-da-suzana/festanoap_still6_alta.jpg', desc: '', titulo: 'Titulo da Imagem' },

    ],
    patrocinadores: { src: '', desc: '', titulo: 'titulo da imagem' },

    participacao: 'Evandro Scorsin, Ana Paula Málaga, Morgana Horst, Alexandre Canetta, Eduardo Colgan, Tomás Von Der Osten, Caroline Biagi, Marisa Merlo.',
    sinopse: 'Augusto é convidado para uma festa no apartamento de uma colega de faculdade.',
    categoria: 'Curta Metragem',
    tags: ['Comédia', 'Adolescente', 'Terror'],
    linkVideo: 'https://youtu.be/ca9pDxzPDfE',
    equipe: {
      principal: {
        // eslint-disable-next-line quotes
        __html: `<p>
        <p><span class="texto-verde">Direção, Roteiro, Produção e Edição de Som:</span> Christopher Faust </p>
        <p><span class="texto-verde">Direção De Fotografia:</span> Renata Corrêa</p>
        <p><span class="texto-verde">Direção De Arte:</span> Caroline Biagi</p>  
        <p><span class="texto-verde">Captação de Áudio:</span> Tomás von der Osten</p> 
        <p><span class="texto-verde">Narração:</span> Diego Florentino</p> 
        <p><span class="texto-verde">Montagem:</span> Rodrigo Tomita</p> 
        <p><span class="texto-verde">Colorização e Finalização:</span> André F. Diniz</p>
        <p><span class="texto-verde">Desenho de Som:</span> Vinicius André Maciel</p>
        <p><span class="texto-verde">Produção:</span> Coco Filmes</p>
        <p><span class="texto-verde">Co-Produção:</span> O Quadro</p>
        </p>
        <p>
        Projeto realizado para a Oficina Tomada Única, ofertada pelo 7º Curta Oito - Festival Internacional de Cinema Super8 de Curitiba.
        </p>
        `,
      },
      adicional: {
        __html: `
        `,
      },
    },
  },
  {
    id: '11',
    url: 'garota-explosiva',
    titulo: 'GAROTA EXPLOSIVA',
    ano: 2012,
    autor: 'EVANDRO SCORSIN',
    imgIcone: { src: '/imagens/filmes/garota-explosiva/garotaexplosiva_still1.jpg', desc: '', titulo: 'Titulo da Imagem' },
    imgDestaque: { src: '/imagens/filmes/garota-explosiva/garotaexplosiva_banner.jpg', desc: '', titulo: 'Titulo da Imagem' },
    imgPoster: { src: '/imagens/filmes/garota-explosiva/garotaexplosiva_cartaz_web.jpg', desc: '', titulo: 'Titulo da Imagem' },
    galeria: [
      { src: '/imagens/filmes/garota-explosiva/garotaexplosiva_still1.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/garota-explosiva/garotaexplosiva_still2.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/garota-explosiva/garotaexplosiva_still3.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/garota-explosiva/garotaexplosiva_still4.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/garota-explosiva/garotaexplosiva_still5.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/garota-explosiva/garotaexplosiva_still6.jpg', desc: '', titulo: 'Titulo da Imagem' },
    ],
    imgGaleriaAlta: [
      { src: '/imagens/filmes/garota-explosiva/garotaexplosiva_cartaz_alta.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/garota-explosiva/garotaexplosiva_still1_alta.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/garota-explosiva/garotaexplosiva_still2_alta.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/garota-explosiva/garotaexplosiva_still3_alta.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/garota-explosiva/garotaexplosiva_still4_alta.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/garota-explosiva/garotaexplosiva_still5_alta.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/garota-explosiva/garotaexplosiva_still6_alta.jpg', desc: '', titulo: 'Titulo da Imagem' },

    ],
    patrocinadores: { src: '', desc: '', titulo: 'titulo da imagem' },

    participacao: 'John Godoy, Gabriela Dinnies e Marcela Mancino.',
    sinopse: 'Thiago está apaixonado pela menina que todas as noites aparece em seus sonhos. Obcecado pelo desejo de encontrá-la, o garoto não consegue mais dormir.',
    categoria: 'Curta Metragem',
    tags: ['Comédia', 'Adolescente', 'Terror'],
    linkVideo: 'https://youtu.be/IWO3lAiQM3I',
    equipe: {
      principal: {
        // eslint-disable-next-line quotes
        __html: `<p>
        <p><span class="texto-verde">Direção e roteiro:</span> Evandro Scorsin </p>
        <p><span class="texto-verde">Produção:</span> Alexandre Rafael Garcia, Anderson Simão, Christopher Faust, Evandro Scorsin, Wellington Sari </p> 
        <p><span class="texto-verde">Direção De Fotografia:</span> Daniel Florencio </p> 
        <p><span class="texto-verde">Direção De Arte:</span> Alex Rocca</p> 
        <p><span class="texto-verde">Montagem:</span> Christopher Faust </p> 
        <p><span class="texto-verde">Som Direto:</span> João Menna Barreto </p>
        <p><span class="texto-verde">Finalização de Som:</span> Alexandre Rogoski<p>
        <p>
        Este filme faz parte do projeto "Filmes de Verão" 2012.
        <p>
        `,
      },
      adicional: {
        __html: `<p>
          <p>
            <span class="texto-verde">Design gráfico:</span> Melina Correia |
            <span class="texto-verde">Assistente De Som Direto:</span> Anderson Simão |
            <span class="texto-verde">Assistente De Direção:</span> Christopher Faust |
            <span class="texto-verde">Assistência de edição de som:</span> Samuel Jacintho |
            <span class="texto-verde">Finalização de Imagem e assistente de montagem:</span> Guilherme Delamuta |
            <span class="texto-verde">Tradução de Legendas:</span> Clariana Borzone 
          </p>
          <p>
          <span class="texto-verde">Apoio:</span>
          Off-Beat Audio, Padaria América, Sanepar e Videolocadora Nicarágua
          </p>
        </p>
        `,
      },
    },
  },
  {
    id: '12',
    url: 'garoto-barba',
    titulo: 'GAROTO BARBA',
    ano: 2010,
    autor: 'CHRISTOPHER FAUST',
    imgIcone: { src: '/imagens/filmes/garoto-barba/garotobarba_still1.jpg', desc: '', titulo: 'Titulo da Imagem' },
    imgDestaque: { src: '/imagens/filmes/garoto-barba/garotobarba_banner.jpg', desc: '', titulo: 'Titulo da Imagem' },
    imgPoster: { src: '/imagens/filmes/garoto-barba/garotobarba_cartaz_web.jpg', desc: '', titulo: 'Titulo da Imagem' },
    galeria: [
      { src: '/imagens/filmes/garoto-barba/garotobarba_still1.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/garoto-barba/garotobarba_still2.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/garoto-barba/garotobarba_still3.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/garoto-barba/garotobarba_still4.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/garoto-barba/garotobarba_still5.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/garoto-barba/garotobarba_still6.jpg', desc: '', titulo: 'Titulo da Imagem' },
    ],
    imgGaleriaAlta: [
      { src: '/imagens/filmes/garoto-barba/garotobarba_cartaz_alta.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/garoto-barba/garotobarba_still1_alta.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/garoto-barba/garotobarba_still2_alta.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/garoto-barba/garotobarba_still3_alta.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/garoto-barba/garotobarba_still4_alta.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/garoto-barba/garotobarba_still5_alta.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/garoto-barba/garotobarba_still6_alta.jpg', desc: '', titulo: 'Titulo da Imagem' },

    ],
    patrocinadores: { src: '/imagens/filmes/garoto-barba/garotobarba_creditos_banner.png', desc: '', titulo: 'titulo da imagem' },
    participacao: 'Vitor Steinhaus, Maureen Miranda, Ricardo Alberti.',
    sinopse: 'Fábula sobre uma criança que, devido a uma rara doença, tem barba. Felipe gosta de ser como é, mas se sente deslocado porque as outras pessoas costumam olhar para ele de forma diferente.',
    categoria: 'Curta Metragem',
    tags: ['Comédia', 'Adolescente', 'Terror'],
    linkVideo: 'https://youtu.be/1We3NLPocHY',
    equipe: {
      principal: {
        // eslint-disable-next-line quotes
        __html: `<p>
        <p><span class="texto-verde">Direção e roteiro:</span> Christopher Faust </p>
        <p><span class="texto-verde">Produção Executiva:</span> Antonio Junior </p> 
        <p><span class="texto-verde">Direção De Produção:</span> Wellington Sari, Marisa Merlo e Aly Muritiba </p> 
        <p><span class="texto-verde">Direção De Fotografia:</span> Maurício Baggio </p> 
        <p><span class="texto-verde">Direção De Arte:</span> Alex Rocca e Ana Paula Málaga</p>
        <p><span class="texto-verde">Maquiagem:</span> Marcelino de Miranda </p>  
        <p><span class="texto-verde">Montagem:</span> Diego Florentino </p> 
        <p><span class="texto-verde">Finalização de Som:</span> Nathália Okimoto<p>
        <p><span class="texto-verde">Som Direto:</span> João Marcelo Gomes </p>
        <p><span class="texto-verde">Desenho de Som:</span> Alexandre Rogoski </p>
        </p>
        <p>
        Projeto realizado através do Edital Curta Criança 2009, promovido pelo Ministério da Cultura (MinC).
        </p>
        `,
      },
      adicional: {
        __html: `<p>
          <p>
            <span class="texto-verde">Elenco Secundário: </span> Joel José da Silva Junior, Pedro Albigo, Ricardo da Rocha, Robert Tomal, Sandro B. Strapasson, Débora Vecchi, Sabine Villatore, Marcel Szymanski, Everaldo Sant 'Anna, Bruno de Oliveira, João Pedro Rocha, Wagner Jovanaci, Camila Jorge, There Postui, Celso Moreira, Matheus Correia Mancini, Handerson Banks.
            <span class="texto-verde">Narração:</span> Bruno de Oliveira e Evandro Scorsin |
            <span class="texto-verde">Assistente de Fotografia:</span> André Chesini |
            <span class="texto-verde">Assistente de Arte:</span> Caroline Biagi e Leandro Telles |
            <span class="texto-verde">Figurino:</span> Karina de Souza |
            <span class="texto-verde">Claquete:</span> Ana Paula Cardoso |
            <span class="texto-verde">Design Gráfico:</span> Melina Correia |
            <span class="texto-verde">Assistente de Montagem:</span> Stephanie Thomas |
            <span class="texto-verde">Assistente de Edição de Som:</span> Renan Deodato e Vitor Moraes |
            <span class="texto-verde">Trilha Sonora:</span> Rodrigo Lemos |
            <span class="texto-verde">Still:</span> Rosano Mauro Jr. |
            <span class="texto-verde">Making Of:</span> Maria Fernanda Penha |
            <span class="texto-verde">Eletricista Chefe:</span> Sagui |
            <span class="texto-verde">Assistente de Elétrica:</span> Maikon Batista |
            <span class="texto-verde">Maquinista Chefe:</span> Coqueiro |
            <span class="texto-verde">Motorista:</span> Mano e Leandro Telles 
          </p>

          <p>
          <span class="texto-verde">Apoio:</span>
          Grafo Audiovisual, Off-Beat Audio, Ministério da Defesa - Comando da Aeronáutica, DECEA-CINDACTA2, Prefeitura de Aeronáutica de Curitiba.
          </p>
        </p>
        `,
      },
    },
  },
  {
    id: '13',
    url: 'garoto-propaganda',
    titulo: 'GAROTO PROPAGANDA',
    ano: 2015,
    autor: 'CHRISTOPHER FAUST',
    imgIcone: { src: '/imagens/filmes/garoto-propaganda/garotopropaganda_still1.jpg', desc: '', titulo: 'Titulo da Imagem' },
    imgDestaque: { src: '/imagens/filmes/garoto-propaganda/garotopropaganda_banner.jpg', desc: '', titulo: 'Titulo da Imagem' },
    imgPoster: { src: '/imagens/filmes/garoto-propaganda/garotopropaganda_cartaz_web.jpg', desc: '', titulo: 'Titulo da Imagem' },
    galeria: [
      { src: '/imagens/filmes/garoto-propaganda/garotopropaganda_still1.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/garoto-propaganda/garotopropaganda_still2.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/garoto-propaganda/garotopropaganda_still3.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/garoto-propaganda/garotopropaganda_still4.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/garoto-propaganda/garotopropaganda_still5.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/garoto-propaganda/garotopropaganda_still6.jpg', desc: '', titulo: 'Titulo da Imagem' },
    ],
    imgGaleriaAlta: [
      { src: '/imagens/filmes/garoto-propaganda/garotopropaganda_cartaz_alta.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/garoto-propaganda/garotopropaganda_still1_alta.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/garoto-propaganda/garotopropaganda_still2_alta.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/garoto-propaganda/garotopropaganda_still3_alta.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/garoto-propaganda/garotopropaganda_still4_alta.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/garoto-propaganda/garotopropaganda_still5_alta.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/garoto-propaganda/garotopropaganda_still6_alta.jpg', desc: '', titulo: 'Titulo da Imagem' },

    ],
    patrocinadores: { src: '/imagens/filmes/garoto-propaganda/garotopropaganda_creditos_banner.png', desc: '', titulo: 'titulo da imagem' },

    participacao: 'Alexandre Zampier, Talita Assis, Kendrik Bittencourt, Vitor Steinhaus, Rafael Magaldi, Olívia Krüger, Gisele Koligowski.',
    sinopse: 'Vitor, famoso quando criança por ser garoto-propaganda de uma marca de creme dental, tem um reencontro com uma garota do seu passado.',
    categoria: 'Curta Metragem',
    tags: ['Comédia', 'Adolescente', 'Terror'],
    linkVideo: 'https://youtu.be/OsSUb6Pt4no',
    equipe: {
      principal: {
        // eslint-disable-next-line quotes
        __html: `<p>
        <p><span class="texto-verde">Direção:</span> Christopher Faust </p>
        <p><span class="texto-verde">Roteiro:</span> Christopher Faust e Diego Florentino </p>
        <p><span class="texto-verde">Produção Executiva:</span> Anderson Simão </p> 
        <p><span class="texto-verde">Direção De Produção:</span> Alexandre Rafael Garcia, Evandro Scorsin e Wellington Sari </p> 
        <p><span class="texto-verde">Direção De Fotografia:</span> Daniel Florencio </p> 
        <p><span class="texto-verde">Direção De Arte:</span> Alex Rocca </p>
        <p><span class="texto-verde">Montagem e Finalização:</span> Diego Florentino </p> 
        <p><span class="texto-verde">Som Direto:</span> Guilherme Cordova </p>
        <p><span class="texto-verde">Edição De Som E Mixagem:</span> Alexandre Rogoski </p>
        </p>
        <p>
        Projeto realizado com o apoio do Programa de Apoio e Incentivo à Cultura - Fundação Cultural de Curitiba e da Prefeitura Municipal de Curitiba, com incentivo da Bwt Operadora de Turismo, Celepar, HigiServ e Serra Verde Express
        </p>
        `,
      },
      adicional: {
        __html: `<p>
            <span class="texto-verde">Elenco Secundário: </span> Daniel Keller (voz) | Thami A. | Rodrigo Nossaki | Guilherme Ribas | Ana Paula Málaga | Caroline Biagi | Muhammad El Chab | Bruce Cantarim | Júnior Ventura | Rafael Basso | Morgana Horst | Bruno Abil Russ | Milena Bastos | Gaby Rivoly | Maria Eduarda Machado | Vicenzo Viesser | Emanuel Pilati | Kayo Francisco | Maria Eduarda Rangel | Louise Forgueri | Larissa Freitas
          </p>
          <p>
          <span class="texto-verde">Assistente de Direção:</span> Evandro Scorsin |
          <span class="texto-verde">Assistente de Fotografia:</span> Marcelo Tanaka |
          <span class="texto-verde">Assistente de Arte e Figurino:</span> Annie Cantarini |
          <span class="texto-verde">Assistente de Arte e Produção de Objetos:</span> Susana Pedrozenco |
          <span class="texto-verde">Finalização de Imagem:</span> Diego Florentino |
          <span class="texto-verde">Logagem e Syncagem:</span> Eduardo Neves Camargo |
          <span class="texto-verde">Design Gráfico:</span> Bruna Michelin |
          <span class="texto-verde">Assistente de Som Direto:</span> Guilherme Ferreira | 
          <span class="texto-verde">Elétrica:</span> Pablo Treis | 
          <span class="texto-verde">Assistente de elétrica:</span> Sergio Singer |
          <span class="texto-verde">Edição de som:</span> Bruno Ito |
          <span class="texto-verde">Assistência de Edição de Som:</span> Rodrigo Grigoletti |
          <span class="texto-verde">Estúdio de Som:</span> Off-Beat Audio | 
          <span class="texto-verde">Trilha Sonora - Jingle:</span> Maurício Ramos Marques | 
          <span class="texto-verde">Still:</span> Ana Paula Málaga e Nathália Tereza | 
          <span class="texto-verde">Making of:</span> Patrícia Evans | 
          <span class="texto-verde">Claquete:</span> Dewi Jost | 
          <span class="texto-verde">Designer pré-produção:</span> Melina Correia | 
          <span class="texto-verde">Legendagem Inglês:</span> Raquel Ribeiro |
          <span class="texto-verde">Legendagem Espanhol:</span>  Larissa Mehl | 
          <span class="texto-verde">Captação:</span> Anderson Simão, Stely Brodowski Andrade e Itamar Paciornik 
          <p>
          <span class="texto-verde">Apoio:</span>
          Casa da Coxinha | Áudio Off-Beat | Papel Caneta e Cia | Prefeitura de Curitiba | Sanepar | Sociedade Morgenau </p>
        </p>
        `,
      },
    },
  },
  {
    id: '14',
    url: 'intervalo',
    titulo: 'INTERVALO',
    ano: 2010,
    autor: ' ALEXANDRE RAFAEL GARCIA',
    imgIcone: { src: '/imagens/filmes/intervalo/intervalo_still1.jpg', desc: '', titulo: 'Titulo da Imagem' },
    imgDestaque: { src: '/imagens/filmes/intervalo/intervalo_banner.png', desc: '', titulo: 'Titulo da Imagem' },
    imgPoster: { src: '/imagens/filmes/intervalo/intervalo_cartaz_web.jpg', desc: '', titulo: 'Titulo da Imagem' },
    galeria: [
      { src: '/imagens/filmes/intervalo/intervalo_still1.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/intervalo/intervalo_still2.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/intervalo/intervalo_still3.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/intervalo/intervalo_still4.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/intervalo/intervalo_still5.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/intervalo/intervalo_still6.jpg', desc: '', titulo: 'Titulo da Imagem' },
    ],
    imgGaleriaAlta: [
      { src: '/imagens/filmes/intervalo/intervalo_cartaz_alta.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/intervalo/intervalo_still1_alta.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/intervalo/intervalo_still2_alta.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/intervalo/intervalo_still3_alta.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/intervalo/intervalo_still4_alta.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/intervalo/intervalo_still5_alta.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/intervalo/intervalo_still6_alta.jpg', desc: '', titulo: 'Titulo da Imagem' },

    ],
    patrocinadores: { src: '', desc: '', titulo: 'titulo da imagem' },

    sinopse: 'Pedro tem 16 anos, namora Ana e cursa o ensino médio. Em uma tarde qualquer: o colégio, olhares, a piscina. O azul.',
    categoria: 'Curta Metragem',
    tags: ['Comédia', 'Adolescente', 'Terror'],
    linkVideo: 'https://youtu.be/mrO3pA6YFjs',
    equipe: {
      principal: {
        // eslint-disable-next-line quotes
        __html: `<p>
        <p><span class="texto-verde">Direção e roteiro:</span> Alexandre Rafael Garcia </p>
        <p><span class="texto-verde">Produção Executiva:</span> Alexandre Rafael Garcia, Sandra Zawadzki </p> 
        <p><span class="texto-verde">Direção De Produção:</span> Sandra Zawadzki</p> 
        <p><span class="texto-verde">Direção De Fotografia:</span> Renata Corrêa </p> 
        <p><span class="texto-verde">Direção De Arte:</span> Alex Rocca, Ana Deliberador </p>
        <p><span class="texto-verde">Montagem:</span> Christopher Faust, Tomás von der Osten </p> 
        <p><span class="texto-verde">Som Direto:</span> Eugênio Hoch Jr., Samuel Jacintho </p>
        <p><span class="texto-verde">Edição De Som E Mixagem:</span> Samuel Jacintho </p>
        </p>
        <p>
        Projeto realizado como TCC do curso de Cinema e Vídeo da Faculdade de Artes do Paraná.
        </p>
        `,
      },
      adicional: {
        __html: `
          <p>
          <span class="texto-verde">Assistente de Direção:</span> Evandro Scorsin |
          <span class="texto-verde">Assistente De Produção/Direção:</span> Álvaro Zeini Cruz |
          <span class="texto-verde">Assistente de Produção/Direção de Arte:</span> Rubiana Perucci |
          <span class="texto-verde">Assistente de Produção:</span> Brisa Verena, Juliana Rodrigues |
          <span class="texto-verde">Material Gráfico:</span> Fábio Rocha
          </p>
          <p>
          <span class="texto-verde">Co-Produção:</span>
          SIMULACRUM
          </p>
          <p>
          <span class="texto-verde">Apoio:</span>
          Colégio Estadual do Paraná        
          </p>
        `,
      },
    },
  },
  {
    id: '15',
    url: 'lavanderia-shermer',
    titulo: 'LAVANDERIA SHERMER',
    ano: 2008,
    autor: 'WELLINGTON SARI',
    imgIcone: { src: '/imagens/filmes/lavanderia-shermer/lavanderiashermer_still1.jpg', desc: '', titulo: 'Titulo da Imagem' },
    imgDestaque: { src: '/imagens/filmes/lavanderia-shermer/lavanderiashermer_banner.jpg', desc: '', titulo: 'Titulo da Imagem' },
    imgPoster: { src: '/imagens/filmes/lavanderia-shermer/lavanderiashermer_cartaz_web.jpg', desc: '', titulo: 'Titulo da Imagem' },
    galeria: [
      { src: '/imagens/filmes/lavanderia-shermer/lavanderiashermer_still1.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/lavanderia-shermer/lavanderiashermer_still2.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/lavanderia-shermer/lavanderiashermer_still3.jpg', desc: '', titulo: 'Titulo da Imagem' },
    ],
    imgGaleriaAlta: [
      { src: '/imagens/filmes/lavanderia-shermer/lavanderiashermer_still1.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/lavanderia-shermer/lavanderiashermer_still2.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/lavanderia-shermer/lavanderiashermer_still3.jpg', desc: '', titulo: 'Titulo da Imagem' },
    ],
    patrocinadores: { src: '', desc: '', titulo: 'titulo da imagem' },

    participacao: 'Arno Pruner, Juliana Biancato, Leandro Daniel Colombo, Rafael Magaldi.',
    sinopse: 'Quatro jovens ficam presos dentro da Lavanderia Shermer. Enquanto isso o problema é resolvido, Wilson Borges, Norberto, Jo e o funcionário Waldo começam a interagir e descobrem que tem muito mais coisas em comum do que apenas roupas sujas.',
    categoria: 'Curta Metragem',
    tags: ['Comédia', 'Adolescente', 'Terror'],
    linkVideo: 'https://youtu.be/j96oOOQ4vXI',
    equipe: {
      principal: {
        // eslint-disable-next-line quotes
        __html: `<p>
        <p><span class="texto-verde">Direção e roteiro:</span> Wellington Sari </p>
        <p><span class="texto-verde">Produção Executiva:</span> Diego Florentino e Wellington Sari </p> 
        <p><span class="texto-verde">Direção De Produção:</span> Diego Florentino</p> 
        <p><span class="texto-verde">Direção De Fotografia:</span> Antonio Junior </p> 
        <p><span class="texto-verde">Direção De Arte:</span> Ana Paula Málaga </p>
        <p><span class="texto-verde">Montagem:</span> Christopher Faust </p> 
        <p><span class="texto-verde">Som Direto:</span> João Marcelo Gomes e Guilherme Cordova </p>
        <p><span class="texto-verde">Desenho de Som:</span> Alexandre Rogoski e Vinícius Nisi </p>
        <p><span class="texto-verde">Música:</span> Mordida </p>
        </p>
        `,
      },
      adicional: {
        __html: `
          <p>
          <span class="texto-verde">Assistente de Direção:</span> Christopher Faust |
          <span class="texto-verde">Assistente de Produção:</span> Maria Fernanda Penha e Kahito Jucoski |
          <span class="texto-verde">Produção de Elenco:</span> Arno Pruner |
          <span class="texto-verde">Assistente de Câmera:</span> Marisa Merlo |
          <span class="texto-verde">Assistente de Arte:</span> Maria Fernanda Penha |
          <span class="texto-verde">Pós-Produção:</span> Nathália Okimoto |
          <span class="texto-verde">Continuísta:</span> Karina de Souza |
          <span class="texto-verde">Still:</span> Talitha Bodnar |
          </p>
          <p>
          <span class="texto-verde">Apoio:</span>
          Off-Beat Audio, Art Banner, Casa do Zé, Lav e Lev - Cristo Rei, Pizza Clock
          </p>
        `,
      },
    },
  },
  {
    id: '16',
    url: 'mal-me-quer',
    titulo: 'MAL ME QUER, MAL ME QUER',
    ano: 2010,
    autor: 'WELLINGTON SARI',
    imgIcone: { src: '/imagens/filmes/mal-me-quer/malmequer_still1.jpg', desc: '', titulo: 'Titulo da Imagem' },
    imgDestaque: { src: '/imagens/filmes/mal-me-quer/malmequer_banner.jpg', desc: '', titulo: 'Titulo da Imagem' },
    imgPoster: { src: '/imagens/filmes/mal-me-quer/malmequer_cartaz_web.jpg', desc: '', titulo: 'Titulo da Imagem' },
    galeria: [
      { src: '/imagens/filmes/mal-me-quer/malmequer_still1.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/mal-me-quer/malmequer_still2.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/mal-me-quer/malmequer_still3.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/mal-me-quer/malmequer_still4.jpeg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/mal-me-quer/malmequer_still5.jpeg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/mal-me-quer/malmequer_still6.jpeg', desc: '', titulo: 'Titulo da Imagem' },
    ],
    imgGaleriaAlta: [
      { src: '/imagens/filmes/mal-me-quer/malmequer_cartaz.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/mal-me-quer/malmequer_still1.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/mal-me-quer/malmequer_still2.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/mal-me-quer/malmequer_still3.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/mal-me-quer/malmequer_still4.jpeg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/mal-me-quer/malmequer_still5.jpeg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/mal-me-quer/malmequer_still6.jpeg', desc: '', titulo: 'Titulo da Imagem' },

    ],
    patrocinadores: { src: '', desc: '', titulo: 'titulo da imagem' },

    participacao: 'Monique Rau, Evandro Scorsin e Karina de Souza.',
    sinopse: 'Depois de levar o fora do namorado, Pri encontra um obstáculo no caminho.',
    categoria: 'Curta Metragem',
    tags: ['Comédia', 'Adolescente', 'Terror'],
    linkVideo: 'https://youtu.be/ctGG9OL5nrQ',
    equipe: {
      principal: {
        // eslint-disable-next-line quotes
        __html: `<p>
        <p><span class="texto-verde">Direção e roteiro:</span> Wellington Sari </p>
        <p><span class="texto-verde">Produção:</span> Wellington Sari e Christopher Faust </p> 
        <p><span class="texto-verde">Direção De Fotografia:</span> Renata Corrêa </p> 
        <p><span class="texto-verde">Assistência de Fotografia:</span> João Marcelo Gomes</p> 
        <p><span class="texto-verde">Assistência de Direção:</span> Karina de Souza</p>
        <p>Projeto realizado para a Oficina Tomada Única, ofertada pelo 7º Curta Oito - Festival Internacional de Cinema Super8 de Curitiba.</p>
        </p>
        `,
      },
      adicional: {
        __html: `
        `,
      },
    },
  },
  {
    id: '17',
    url: 'manu-baunilha-bia-chocolate',
    titulo: 'MANU BAUNILHA, BIA CHOCOLATE',
    ano: 2014,
    autor: ' EVANDRO SCORSIN',
    imgIcone: { src: '/imagens/filmes/manu-baunilha-bia-chocolate/manubaunilha_still1.jpg', desc: '', titulo: 'Titulo da Imagem' },
    imgDestaque: { src: '/imagens/filmes/manu-baunilha-bia-chocolate/manubaunilha_banner2.jpg', desc: '', titulo: 'Titulo da Imagem' },
    imgPoster: { src: '/imagens/filmes/manu-baunilha-bia-chocolate/manubaunilha_cartaz_web.jpg', desc: '', titulo: 'Titulo da Imagem' },
    galeria: [
      { src: '/imagens/filmes/manu-baunilha-bia-chocolate/manubaunilha_still1.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/manu-baunilha-bia-chocolate/manubaunilha_still2.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/manu-baunilha-bia-chocolate/manubaunilha_still3.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/manu-baunilha-bia-chocolate/manubaunilha_still4.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/manu-baunilha-bia-chocolate/manubaunilha_still5.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/manu-baunilha-bia-chocolate/manubaunilha_still6.jpg', desc: '', titulo: 'Titulo da Imagem' },
    ],
    imgGaleriaAlta: [
      { src: '/imagens/filmes/manu-baunilha-bia-chocolate/manubaunilha_cartaz_alta.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/manu-baunilha-bia-chocolate/manubaunilha_still1_alta.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/manu-baunilha-bia-chocolate/manubaunilha_still2_alta.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/manu-baunilha-bia-chocolate/manubaunilha_still3_alta.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/manu-baunilha-bia-chocolate/manubaunilha_still4_alta.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/manu-baunilha-bia-chocolate/manubaunilha_still5_alta.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/manu-baunilha-bia-chocolate/manubaunilha_still6_alta.jpg', desc: '', titulo: 'Titulo da Imagem' },

    ],
    patrocinadores: { src: '/imagens/filmes/manu-baunilha-bia-chocolate/estacao-mecenato_banner.png', desc: '', titulo: 'titulo da imagem' },

    participacao: 'Wellington Sari, Eloisa Ferrarini, Roberta Wilke, Rafael Breternitz, Evandro Scorsin, Victor Nascimento, Guilherme Cordova.',
    sinopse: 'Deco marca acidentalmente um encontro com duas amigas. De dia se encontra com Manu, de noite com Bia.',
    categoria: 'Curta Metragem',
    tags: ['Comédia', 'Adolescente', 'Terror'],
    linkVideo: 'https://youtu.be/GX42VnFXjm8',
    equipe: {
      principal: {
        // eslint-disable-next-line quotes
        __html: `<p>
        <p><span class="texto-verde">Direção:</span> Evandro Scorsin </p>
        <p><span class="texto-verde">Roteiro:</span> Wellington Sari </p>
        <p><span class="texto-verde">Produção Executiva:</span> Anderson Simão </p> 
        <p><span class="texto-verde">Direção De Produção:</span> Alexandre Rafael Garcia</p> 
        <p><span class="texto-verde">Direção De Fotografia:</span> Daniel Florencio </p> 
        <p><span class="texto-verde">Direção De Arte:</span> Alex Rocca </p>
        <p><span class="texto-verde">Montagem:</span> Christopher Faust </p> 
        <p><span class="texto-verde">Som Direto:</span> Lucas Maffini </p>
        <p><span class="texto-verde">Finalização de Som:</span> Alexandre Rogoski </p>
        <p><span class="texto-verde">Trilha Sonora:</span> Paulo de Nadal </p>
        </p>
        <p>
        Projeto realizado com o apoio do Programa de Apoio e Incentivo à Cultura - Fundação Cultural de Curitiba e da Prefeitura Municipal de Curitiba, com incentivo do Shopping Estação.
        </p>
        `,
      },
      adicional: {
        __html: `
          <p><span class="texto-verde">Jujubas:</span>
          Jujuba Faust | Jujuba Garcia | Jujuba Sari | Jujuba Scorsin | Jujuba Simão
          </p>
          <p>
          <span class="texto-verde">Assistência de arte:</span> André Luiz Pinto |
          <span class="texto-verde">Assistência de produção:</span> Caroline Biagi |
          <span class="texto-verde">Assistência de som direto:</span> Bruno Ito |
          <span class="texto-verde">Assistência de fotografia:</span> Marcelo Tanaka |
          <span class="texto-verde">Claquete e assistência de montagem:</span> Paula Negri |
          <span class="texto-verde">Designer:</span> Melina Correia |
          <span class="texto-verde">Designer pré-produção:</span> Fábio R. Rocha |
          <span class="texto-verde">Elétrica:</span> Leandro Telles |
          <span class="texto-verde">Gravação e mixagem da trilha sonora:</span> Rogerio Sabatella |
          <span class="texto-verde">Músicos de estúdio:</span> Paulo de Nadal, Raphael Vinotti, Fernando de Nadal e Ivan Rodrigues |
          <span class="texto-verde">Legendas espanhol:</span> Graziela Braz |
          <span class="texto-verde">Legendas inglês:</span> Raquel Ribeiro |
          <span class="texto-verde">Still e finalização de imagem:</span> Guilherme Delamuta
          </p>
          <p>
          <span class="texto-verde">Apoio:</span>
          Confeitaria Bomfati | Prefeitura de Curitiba | Sanepar | Teatro Regina Vogue
          </p>
        `,
      },
    },
  },
  {
    id: '18',
    url: 'maquina-de-sorvetes',
    titulo: 'MÁQUINA DE SORVETES',
    ano: 2011,
    autor: 'CHRISTOPHER FAUST',
    imgIcone: { src: '/imagens/filmes/maquina-de-sorvetes/maquinadesorvetes_still1.jpg', desc: '', titulo: 'Titulo da Imagem' },
    imgDestaque: { src: '/imagens/filmes/maquina-de-sorvetes/maquinadesorvetes_banner.jpg', desc: '', titulo: 'Titulo da Imagem' },
    imgPoster: { src: '/imagens/filmes/maquina-de-sorvetes/maquinadesorvetes_cartaz_web.jpg', desc: '', titulo: 'Titulo da Imagem' },
    galeria: [
      { src: '/imagens/filmes/maquina-de-sorvetes/maquinadesorvetes_still1.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/maquina-de-sorvetes/maquinadesorvetes_still2.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/maquina-de-sorvetes/maquinadesorvetes_still3.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/maquina-de-sorvetes/maquinadesorvetes_still4.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/maquina-de-sorvetes/maquinadesorvetes_still5.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/maquina-de-sorvetes/maquinadesorvetes_still6.jpg', desc: '', titulo: 'Titulo da Imagem' },
    ],
    imgGaleriaAlta: [
      { src: '/imagens/filmes/maquina-de-sorvetes/maquinadesorvetes_cartaz_alta.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/maquina-de-sorvetes/maquinadesorvetes_still1_alta.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/maquina-de-sorvetes/maquinadesorvetes_still2_alta.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/maquina-de-sorvetes/maquinadesorvetes_still3_alta.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/maquina-de-sorvetes/maquinadesorvetes_still4_alta.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/maquina-de-sorvetes/maquinadesorvetes_still5_alta.jpg', desc: '', titulo: 'Titulo da Imagem' },

    ],
    patrocinadores: { src: '/imagens/filmes/maquina-de-sorvetes/cultura-inglesa_banner.png', desc: '', titulo: 'titulo da imagem' },

    participacao: 'Rafael Andrés Pittaluga, Manoela Militão, Karen Shimabukuro,.',
    sinopse: 'Martin há um ano trabalha com uma máquina expressa de sorvetes em frente a um mercadinho. Martin há um ano está apaixonado pela garçonete que trabalha na lanchonete do outro lado da rua, com quem nunca trocou uma palavra.',
    categoria: 'Curta Metragem',
    tags: ['Comédia', 'Adolescente', 'Terror'],
    linkVideo: 'https://youtu.be/CV7xsEZlZPM',
    equipe: {
      principal: {
        // eslint-disable-next-line quotes
        __html: `<p>
        <p><span class="texto-verde">Direção:</span> Christopher Faust </p>
        <p><span class="texto-verde">Roteiro:</span> Christopher Faust e Wellington Sari </p>
        <p><span class="texto-verde">Produção Executiva:</span> Alexandre Rafael Garcia </p> 
        <p><span class="texto-verde">Direção De Produção:</span> Evandro Scorsin, Wellington Sari</p> 
        <p><span class="texto-verde">Direção De Fotografia:</span> Renata Corrêa</p> 
        <p><span class="texto-verde">Direção De Arte:</span> Alex Rocca e Ana Paula Málaga </p>
        <p><span class="texto-verde">Montagem:</span> Alexandre Rafael Garcia </p> 
        <p><span class="texto-verde">Som Direto:</span> Samuel Jacintho </p>
        <p><span class="texto-verde">Edição De Som E Mixagem:</span> Alexandre Rogoski </p>
        </p>
        <p>
        Projeto realizado através do edital 15º Cultura Inglesa Festival na categoria “Cinema”.
        </p>
        `,
      },
      adicional: {
        __html: `
          <p><span class="texto-verde">Elenco:</span>
          Marcel Szymanski, Fábio Silvestre, Alexandre Canetta, Tomás von der Osten, Paulo Hey, Gustavo Pinheiro, Camila Jorge, Sophia Butture, Marcos Neguers, Sandro Strapasson, Juliana Kametani, Juliana da Rocha, Leco Wzorek, Bruno de Oliveira, Amanda Tortato, Vitor Steinhaus
          </p>
          <p>
          <span class="texto-verde">Assistência de direção:</span> Anderson Simão |
          <span class="texto-verde">Assistência de produção:</span> Camilla Mageski |
          <span class="texto-verde">Operação de câmera:</span> Hellen Braga |
          <span class="texto-verde">Assistência de fotografia:</span> Eduardo Azevedo |
          <span class="texto-verde">Figurino e maquiagem:</span> Ana Deliberador |
          <span class="texto-verde">Assistência de arte:</span> Caroline Biagi |
          <span class="texto-verde">Elétrica:</span> Odair da Silva (Salim) |
          <span class="texto-verde">Asistência de elétrica:</span> Luciano de Almeida (Soda) |
          <span class="texto-verde">Assistência de edição de som:</span> Samuel Jacintho |
          <span class="texto-verde">Efeitos visuais:</span> Diego Florentino |
          <span class="texto-verde">Trilha sonora:</span> Rodrigo Lemos |
          <span class="texto-verde">Still:</span> Daniel Florencio
          </p>
          <p>
          <span class="texto-verde">Apoio:</span>
          Italianinha Máquina de Sorvetes Expresso          
          </p>
        `,
      },
    },
  },
  {
    id: '19',
    url: 'meio-dia-isabela',
    titulo: 'MEIO-DIA, ISABELA',
    ano: 2011,
    autor: 'EVANDRO SCORSIN',
    imgIcone: { src: '/imagens/filmes/meio-dia-isabela/meiodiaisabela_still01.jpg', desc: '', titulo: 'Titulo da Imagem' },
    imgDestaque: { src: '/imagens/filmes/meio-dia-isabela/meiodiaisabela_banner.png', desc: '', titulo: 'Titulo da Imagem' },
    imgPoster: { src: '/imagens/filmes/meio-dia-isabela/meiodiaisabela_cartaz_web.jpg', desc: '', titulo: 'Titulo da Imagem' },
    galeria: [
      { src: '/imagens/filmes/meio-dia-isabela/meiodiaisabela_still01.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/meio-dia-isabela/meiodiaisabela_still02.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/meio-dia-isabela/meiodiaisabela_still03.jpg', desc: '', titulo: 'Titulo da Imagem' },
    ],
    imgGaleriaAlta: [
      { src: '/imagens/filmes/meio-dia-isabela/meiodiaisabela_still01_alta.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/meio-dia-isabela/meiodiaisabela_still02_alta.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/meio-dia-isabela/meiodiaisabela_still03_alta.jpg', desc: '', titulo: 'Titulo da Imagem' },
    ],
    patrocinadores: { src: '', desc: '', titulo: 'titulo da imagem' },

    participacao: 'Isabela Zanotim Da Silva, Amanda Saskoski Leal, Caroline Kerniske e Wellington Sari.',
    sinopse: 'E se esses forem os melhores dias de nossas vidas?',
    categoria: 'Curta Metragem',
    tags: ['Comédia', 'Adolescente', 'Terror'],
    linkVideo: 'https://youtu.be/6Q2KpChnIzs',
    equipe: {
      principal: {
        // eslint-disable-next-line quotes
        __html: `
        <p><span class="texto-verde">Direção e roteiro:</span> Evandro Scorsin </p>
        <p><span class="texto-verde">Produção:</span> Anderson Simão, Evandro Scorsin, Juliana Rodrigues, Nuno Chinaglia Poli </p>
        <p><span class="texto-verde">Direção De Fotografia:</span> Juliana Rodrigues</p> 
        <p><span class="texto-verde">Direção De Arte:</span> Juliana Rodrigues </p>
        <p><span class="texto-verde">Montagem:</span> Tomás von der Osten </p> 
        <p><span class="texto-verde">Som Direto:</span> Anderson Simão e Nuno Chinaglia Poli </p>
        <p><span class="texto-verde">Edição De Som:</span> Evandro Scorsin </p>
        <p>
        Projeto realizado como TCC do curso de Cinema e Vídeo da Faculdade de Artes do Paraná.       
        </p>
        `,
      },
      adicional: {
        __html: `
        `,
      },
    },
  },
  {
    id: '20',
    url: 'memoria-a-dois',
    titulo: 'MEMÓRIA A DOIS',
    ano: 2009,
    autor: 'ANDERSON SIMÃO, EVANDRO SCORSIN, NUNO CHINAGLIA POLI',
    imgIcone: { src: '/imagens/filmes/memoria-a-dois/memoriaadois_still1.jpg', desc: '', titulo: 'Titulo da Imagem' },
    imgDestaque: { src: '/imagens/filmes/memoria-a-dois/memoriaadois_banner.jpg', desc: '', titulo: 'Titulo da Imagem' },
    imgPoster: { src: '/imagens/filmes/memoria-a-dois/memoriaadois_cartaz_web.jpg', desc: '', titulo: 'Titulo da Imagem' },
    galeria: [
      { src: '/imagens/filmes/memoria-a-dois/memoriaadois_still1.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/memoria-a-dois/memoriaadois_still2.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/memoria-a-dois/memoriaadois_still3.jpg', desc: '', titulo: 'Titulo da Imagem' },
    ],
    imgGaleriaAlta: [
      { src: '/imagens/filmes/memoria-a-dois/memoriaadois_still1_alta.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/memoria-a-dois/memoriaadois_still2_alta.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/memoria-a-dois/memoriaadois_still3_alta.jpg', desc: '', titulo: 'Titulo da Imagem' },
    ],
    patrocinadores: { src: '', desc: '', titulo: 'titulo da imagem' },

    participacao: 'Sarah Scorsin, José Zaleski, Ailen Scandurra e Pedro Henrique Mello.',
    sinopse: 'Diante de uma fotografia antiga, deve pensar que são possíveis a resgatar lembranças que instiguem as memórias da fotografia em questão.',
    categoria: 'Curta Metragem',
    tags: ['Comédia', 'Adolescente', 'Terror'],
    linkVideo: 'https://youtu.be/CV7xsEZlZPM',
    equipe: {
      principal: {
        // eslint-disable-next-line quotes
        __html: `
        <span class="texto-verde">Realizado por:</span> Anderson Simão, Evandro Scorsin e Nuno Chinaglia Poli
        `,
      },
      adicional: {
        __html: `
        `,
      },
    },
  },
  {
    id: '21',
    url: 'memorias-do-meu-tio',
    titulo: 'MEMÓRIAS DO MEU TIO',
    ano: 2011,
    autor: 'ALEXANDRE RAFAEL GARCIA E ALVARO ZEINI CRUZ',
    imgIcone: { src: '/imagens/filmes/memorias-do-meu-tio/memoriasdomeutio_still1.jpg', desc: '', titulo: 'Titulo da Imagem' },
    imgDestaque: { src: '/imagens/filmes/memorias-do-meu-tio/memoriasdomeutio_banner2.png', desc: '', titulo: 'Titulo da Imagem' },
    imgPoster: { src: '/imagens/filmes/memorias-do-meu-tio/memoriasdomeutio_cartaz_web.jpg', desc: '', titulo: 'Titulo da Imagem' },
    galeria: [
      { src: '/imagens/filmes/memorias-do-meu-tio/memoriasdomeutio_still1.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/memorias-do-meu-tio/memoriasdomeutio_still2.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/memorias-do-meu-tio/memoriasdomeutio_still3.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/memorias-do-meu-tio/memoriasdomeutio_still4.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/memorias-do-meu-tio/memoriasdomeutio_still5.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/memorias-do-meu-tio/memoriasdomeutio_still6.png', desc: '', titulo: 'Titulo da Imagem' },
    ],
    imgGaleriaAlta: [
      { src: '/imagens/filmes/memorias-do-meu-tio/memoriasdomeutio_cartaz_alta.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/memorias-do-meu-tio/memoriasdomeutio_still1_alta.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/memorias-do-meu-tio/memoriasdomeutio_still2_alta.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/memorias-do-meu-tio/memoriasdomeutio_still3_alta.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/memorias-do-meu-tio/memoriasdomeutio_still4_alta.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/memorias-do-meu-tio/memoriasdomeutio_still5_alta.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/memorias-do-meu-tio/memoriasdomeutio_still6_alta.jpg', desc: '', titulo: 'Titulo da Imagem' },

    ],
    patrocinadores: { src: '/imagens/filmes/memorias-do-meu-tio/celepar-mecenato_banner.png', desc: '', titulo: 'titulo da imagem' },

    participacao: 'Daniel Jorge, Roberto Innocente, Dulce Tramujas, Maureen Miranda, Luiz Godói, Rayane Lopes, Rossana Ceres, Blaise Musepere, Klaus Faryj.',
    sinopse: 'As aventuras de Ariel, um garoto de 10 anos que encontra seu falecido tio-avô e ao lado dele parte em busca de um tesouro inimaginável.',
    categoria: 'Curta Metragem',
    tags: ['Comédia', 'Adolescente', 'Terror'],
    linkVideo: 'https://youtu.be/nw_c-gyAq98',
    equipe: {
      principal: {
        // eslint-disable-next-line quotes
        __html: `<p>
        <p><span class="texto-verde">Direção:</span> Alexandre Rafael Garcia, Alvaro Zeini Cruz </p>
        <p><span class="texto-verde">Roteiro:</span> Alexandre Rafael Garcia, Alvaro Zeini Cruz, Carlos Debiasi </p>
        <p><span class="texto-verde">Produção Executiva:</span> Sandra Zawadzki </p> 
        <p><span class="texto-verde">Direção De Produção:</span> Christopher Faust, Natu Marques, Wellington Sari</p> 
        <p><span class="texto-verde">Direção De Fotografia:</span> Renata Corrêa</p> 
        <p><span class="texto-verde">Direção De Arte:</span> Alex Rocca, Ana Paula Málaga </p>
        <p><span class="texto-verde">Montagem:</span> Alexandre Rafael Garcia, Alvaro Zeini Cruz, Marcos Sabóia </p> 
        <p><span class="texto-verde">Som Direto e Finalização de Som:</span> Alexandre Rogoski </p>
        <p><span class="texto-verde">Trilha Sonora:</span> Maurício Ramos Marques </p>
        <p><span class="texto-verde">Pós-Produção e Efeitos Visuais:</span> Everton Sebben </p>
        </p>
        <p>
        Projeto realizado com o apoio do Programa de Apoio e Incentivo à Cultura - Fundação Cultural de Curitiba e da Prefeitura Municipal de Curitiba, com incentivo da CELEPAR - Companhia de Informática do Paraná
        </p>
        `,
      },
      adicional: {
        __html: `
          <p><span class="texto-verde">Assistente De Direção:</span>Evandro Scorsin |         
          <span class="texto-verde">Assistente De Produção:</span> Camilla Mageski |
          <span class="texto-verde">Operação de câmera:</span> Hellen Braga |
          <span class="texto-verde">Figurino:</span> Ana Deliberador |
          <span class="texto-verde">Maquiagem:</span> Andrea Tristão |
          <span class="texto-verde">Assistente de Arte:</span> Guilherme Málaga Carreiro |
          <span class="texto-verde">Claquete e Continuidade:</span> Anderson Simão |
          <span class="texto-verde">Elétrica:</span> Edi, Loro |
          <span class="texto-verde">Material Gráfico:</span> Mariana Alub |
          <span class="texto-verde">Still:</span> Juliana Rodrigues |
          <span class="texto-verde">Assistente De Som Direto e Finalização de Som:</span> Samuel Jacintho |
          <span class="texto-verde">Tradução e Legendas:</span> Gustavo Pinheiro, Massimo Stulfa 

          </p>
          <p>
          <span class="texto-verde">Apoio:</span>
          Lokal Grill, Movimento Cine Digital, Padaria América, Sanepar
          </p>
        `,
      },
    },
  },
  {
    id: '22',
    url: 'meu-amigo-virtual',
    titulo: 'MEU AMIGO VIRTUAL',
    ano: 2013,
    autor: 'CHRISTOPHER FAUST',
    imgIcone: { src: '/imagens/filmes/meu-amigo-virtual/meuamigovirtual_still1.jpg', desc: '', titulo: 'Titulo da Imagem' },
    imgDestaque: { src: '/imagens/filmes/meu-amigo-virtual/meuamigovirtual_banner1.png', desc: '', titulo: 'Titulo da Imagem' },
    imgPoster: { src: '/imagens/filmes/meu-amigo-virtual/meuamigovirtual_cartaz_web.jpg', desc: '', titulo: 'Titulo da Imagem' },
    galeria: [
      { src: '/imagens/filmes/meu-amigo-virtual/meuamigovirtual_still1.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/meu-amigo-virtual/meuamigovirtual_still2.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/meu-amigo-virtual/meuamigovirtual_still3.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/meu-amigo-virtual/meuamigovirtual_still4.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/meu-amigo-virtual/meuamigovirtual_still5.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/meu-amigo-virtual/meuamigovirtual_still6.jpg', desc: '', titulo: 'Titulo da Imagem' },
    ],
    imgGaleriaAlta: [
      { src: '/imagens/filmes/meu-amigo-virtual/meuamigovirtual_cartaz_alta.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/meu-amigo-virtual/meuamigovirtual_still1_alta.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/meu-amigo-virtual/meuamigovirtual_still2_alta.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/meu-amigo-virtual/meuamigovirtual_still3_alta.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/meu-amigo-virtual/meuamigovirtual_still4_alta.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/meu-amigo-virtual/meuamigovirtual_still5_alta.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/meu-amigo-virtual/meuamigovirtual_still6_alta.jpg', desc: '', titulo: 'Titulo da Imagem' },

    ],
    patrocinadores: { src: '/imagens/filmes/meu-amigo-virtual/quadro-rpc_mecenato_banner.png', desc: '', titulo: 'titulo da imagem' },

    participacao: 'Vitor Steinhaus, Luly Strapasson, Fernando Turri, Gabriel Merling, Edy Gahr, Kainã Jaquetti, Chiara Vedova, Lucas Vicenzo, Leonara Mariel, Aline Angela e Izabela Milita.',
    sinopse: 'André é um menino de 14 anos solitário e viciado em jogos de computador. Em um dia conturbado, um personagem criado em seu jogo de computador favorito se materializa em seu quarto. É a chance de André ter um amigo e se tornar popular em seu colégio.',
    categoria: 'Curta Metragem',
    tags: ['Comédia', 'Adolescente', 'Terror'],
    linkVideo: 'https://youtu.be/ABKJMIFTUts',
    equipe: {
      principal: {
        // eslint-disable-next-line quotes
        __html: `<p>
        <p><span class="texto-verde">Direção, roteiro e montagem:</span> Christopher Faust </p>
        <p><span class="texto-verde">Produção Executiva:</span> Alexandre Rafael Garcia, Anderson Simão </p> 
        <p><span class="texto-verde">Direção De Produção:</span> Evandro Scorsin </p> 
        <p><span class="texto-verde">Direção De Fotografia:</span> Renata Corrêa</p> 
        <p><span class="texto-verde">Direção De Arte:</span> Alex Rocca </p>
        <p><span class="texto-verde">Som Direto:</span> João Menna Barreto </p>
        <p><span class="texto-verde">Finalização de Imagem e efeitos:</span> Everton Sebben </p> 
        <p><span class="texto-verde">Edição De Som E Mixagem:</span> Alexandre Rogoski </p>
        <p><span class="texto-verde">Trilha Sonora:</span> Maurício Ramos Marques </p>
        </p>
        <p>
        Projeto realizado com incentivo da Fundação Cultural de Curitiba e da Prefeitura Municipal de Curitiba.        
        </p>
        `,
      },
      adicional: {
        __html: `
          <p><span class="texto-verde">Produtora de Animação:</span> SPIRIT Animation Studios </p>
          <p><span class="texto-verde">Co-Produção:</span> RPC TV </p>
          <p><span class="texto-verde">Figuração:</span> Gabriela Dinnies, Carolina Alves </p>

          <p><span class="texto-verde">Assistente De Direção:</span>Evandro Scorsin |         
          <span class="texto-verde">Figurino:</span> Ana Cardoso |
          <span class="texto-verde">Design Gráfico:</span> Melina Correia |
          <span class="texto-verde">Câmera:</span> Hellen Braga |
          <span class="texto-verde">Assistente de fotografia:</span> cc |
          <span class="texto-verde">Chefe de eletricidade:</span> Salim |
          <span class="texto-verde">Assistente elétrico:</span> Soda |
          <span class="texto-verde">Assistente de arte:</span> Felipe Potenza |
          <span class="texto-verde">Still e making of:</span> Daniel Florencio |
          <span class="texto-verde">Assistente de som direto:</span> Lucas Maffini |
          <span class="texto-verde">Assistente de montagem:</span> Guilherme Delamuta |
          <span class="texto-verde">Supervisor de produto 3D:</span> Fernando Macedo (Digital Spirit) |
          <span class="texto-verde">Modelagens 3D:</span> Cleber Coutinho (Digital Spirit) |
          <span class="texto-verde">Rigging:</span> Fernando Macedo (Digital Spirit) |
          <span class="texto-verde">Texturização 3D:</span> Cleber Coutinho (Digital Spirit) |
          <span class="texto-verde">Animação 3D:</span> Rene Singer e Jonathan Edward (Digital Spirit) |
          <span class="texto-verde">Iluminação e Composição 3D:</span> Cleber Coutinho (Digital Spirit) |
          <span class="texto-verde">Assistentes de produção:</span> Bruno Mendes e Ricardo Lima (Digital Spirit) |
          <span class="texto-verde">Legendas:</span> Karina Buzzi |
          <span class="texto-verde">Motorista:</span> Luis 
          </p>
          <p>
          <span class="texto-verde">Apoio:</span>
          Tissot, Sanepar          
          </p>
        `,
      },
    },
  },
  {
    id: '23',
    url: 'monique-ao-sol',
    titulo: 'MONIQUE AO SOL',
    ano: 2011,
    autor: 'WELLINGTON SARI',
    imgIcone: { src: '/imagens/filmes/monique-ao-sol/moniqueaosol_still1.jpg', desc: '', titulo: 'Titulo da Imagem' },
    imgDestaque: { src: '/imagens/filmes/monique-ao-sol/moniqueaosol_banner1.jpg', desc: '', titulo: 'Titulo da Imagem' },
    imgPoster: { src: '/imagens/filmes/monique-ao-sol/moniqueaosol_cartaz_web.jpg', desc: '', titulo: 'Titulo da Imagem' },
    galeria: [
      { src: '/imagens/filmes/monique-ao-sol/moniqueaosol_still1.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/monique-ao-sol/moniqueaosol_still2.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/monique-ao-sol/moniqueaosol_still3.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/monique-ao-sol/moniqueaosol_still4.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/monique-ao-sol/moniqueaosol_still5.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/monique-ao-sol/moniqueaosol_still6.jpg', desc: '', titulo: 'Titulo da Imagem' },
    ],
    imgGaleriaAlta: [
      { src: '/imagens/filmes/monique-ao-sol/moniqueaosol_cartaz_alta.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/monique-ao-sol/moniqueaosol_still1_alta.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/monique-ao-sol/moniqueaosol_still2_alta.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/monique-ao-sol/moniqueaosol_still3_alta.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/monique-ao-sol/moniqueaosol_still4_alta.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/monique-ao-sol/moniqueaosol_still5_alta.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/monique-ao-sol/moniqueaosol_still6_alta.jpg', desc: '', titulo: 'Titulo da Imagem' },

    ],
    patrocinadores: { src: '/imagens/filmes/monique-ao-sol/quadro-rpc_mecenato_banner.png', desc: '', titulo: 'titulo da imagem' },

    participacao: 'Monique Rau e Wellington Sari.',
    sinopse: 'Férias de inverno. Monique vai na praia com os pais. Sem amigos por perto, tenta arranjar algo pra fazer. Até que conhece um jovem na quadra de vôlei.',
    categoria: 'Curta Metragem',
    tags: ['Comédia', 'Adolescente', 'Terror'],
    linkVideo: 'https://youtu.be/oyjnPws1uIA',
    equipe: {
      principal: {
        // eslint-disable-next-line quotes
        __html: `<p>
        <p><span class="texto-verde">Direção e roteiro:</span> Wellington Sari </p>
        <p><span class="texto-verde">Produção Executiva:</span> Alexandre Rafael Garcia </p> 
        <p><span class="texto-verde">Direção De Produção:</span> Alexandre Rafael Garcia e Juliana Rodrigues </p> 
        <p><span class="texto-verde">Direção De Fotografia:</span> Renata Corrêa</p> 
        <p><span class="texto-verde">Montagem:</span> Christopher Faust </p>
        <p><span class="texto-verde">Som Direto:</span> Guilherme Cordova </p>
        </p>
        <p>
        Projeto realizado como TCC do curso de Cinema e Vídeo da Faculdade de Artes do Paraná.
        </p>
        `,
      },
      adicional: {
        __html: `
          <p><span class="texto-verde">Figuração:</span> Aline de Lima </p>

          <p><span class="texto-verde">Assistente De Direção:</span> Christopher Faust |         
          <span class="texto-verde">Figurino:</span> Monique Rau |
          <span class="texto-verde">Edição de Som:</span> Christopher Faust e Wellington Sari |
          <span class="texto-verde">Supervisão ADR:</span> Renan Deodato |
          <span class="texto-verde">Design Gráfico:</span> Melina Correia 
          </p>
          <p>
          <span class="texto-verde">Apoio:</span>
          CINETVPR, WG7          
          </p>
        `,
      },
    },
  },
  {
    id: '24',
    url: 'o-ultimo-dia',
    titulo: 'O ÚLTIMO DIA',
    ano: 2010,
    autor: 'CHRISTOPHER FAUST',
    imgIcone: { src: '/imagens/filmes/o-ultimo-dia/oultimodia_still1.jpg', desc: '', titulo: 'Titulo da Imagem' },
    imgDestaque: { src: '/imagens/filmes/o-ultimo-dia/oultimodia_banner.jpg', desc: '', titulo: 'Titulo da Imagem' },
    imgPoster: { src: '/imagens/filmes/o-ultimo-dia/oultimodia_cartaz_web.jpg', desc: '', titulo: 'Titulo da Imagem' },
    galeria: [
      { src: '/imagens/filmes/o-ultimo-dia/oultimodia_still1.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/o-ultimo-dia/oultimodia_still2.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/o-ultimo-dia/oultimodia_still3.jpg', desc: '', titulo: 'Titulo da Imagem' },
    ],
    imgGaleriaAlta: [
      { src: '/imagens/filmes/o-ultimo-dia/oultimodia_still1.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/o-ultimo-dia/oultimodia_still2.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/o-ultimo-dia/oultimodia_still3.jpg', desc: '', titulo: 'Titulo da Imagem' },
    ],
    patrocinadores: { src: '', desc: '', titulo: 'titulo da imagem' },

    participacao: 'Evandro Scorsin, Alexandre Canetta, Leandro Rocha, Monique Rau.',
    sinopse: 'Toni irá se mudar. Decide passar seu último dia na cidade bebendo com os amigos de infância.',
    categoria: 'Curta Metragem',
    tags: ['Comédia', 'Adolescente', 'Terror'],
    linkVideo: 'https://youtu.be/kPqxwq8xqvM',
    equipe: {
      principal: {
        // eslint-disable-next-line quotes
        __html: `
        <p><span class="texto-verde">Direção e roteiro:</span> Christopher Faust </p>
        <p><span class="texto-verde">Produção Executiva:</span> Christopher Faust e Wellington Sari </p> 
        <p><span class="texto-verde">Direção De Fotografia:</span> Renata Corrêa</p> 
        <p><span class="texto-verde">Direção De Arte:</span> Christopher Faust </p>
        <p><span class="texto-verde">Montagem:</span> Diego Florentino </p> 
        <p><span class="texto-verde">Som Direto:</span> Wellington Sari e Rodrigo Janiszewski </p>
        `,
      },
      adicional: {
        __html: `
          <p><span class="texto-verde">Claquete:</span> Karina de Souza |         
          <span class="texto-verde">Produção:</span> Alexandre Rafael Garcia 
          </p>
        `,
      },
    },
  },
  {
    id: '25',
    url: 'olhares',
    titulo: 'OLHARES',
    ano: 2010,
    autor: 'EVANDRO SCORSIN',
    imgIcone: { src: '/imagens/filmes/olhares/olhares_still1.jpg', desc: '', titulo: 'Titulo da Imagem' },
    imgDestaque: { src: '/imagens/filmes/olhares/olhares_banner1.jpg', desc: '', titulo: 'Titulo da Imagem' },
    imgPoster: { src: '/imagens/filmes/olhares/olhares_cartaz_web.jpg', desc: '', titulo: 'Titulo da Imagem' },
    galeria: [
      { src: '/imagens/filmes/olhares/olhares_still1.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/olhares/olhares_still2.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/olhares/olhares_still3.jpg', desc: '', titulo: 'Titulo da Imagem' },
    ],
    imgGaleriaAlta: [
      { src: '/imagens/filmes/olhares/olhares_still1.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/olhares/olhares_still2.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/olhares/olhares_still3.jpg', desc: '', titulo: 'Titulo da Imagem' },
    ],
    patrocinadores: { src: '', desc: '', titulo: 'titulo da imagem' },

    participacao: 'Gabriel Boso Alves, Anídria Stadler, Eloi Vieira Magalhães, Therezinha Alves Postui.',
    sinopse: 'Junior, um garoto de oito anos, encontra um retrato de uma família feliz no pátio de sua escola. Após isso, passa a buscar sorrisos no seu cotidiano.',
    categoria: 'Curta Metragem',
    tags: ['Comédia', 'Adolescente', 'Terror'],
    linkVideo: 'https://youtu.be/FwqQDucxM3U',
    equipe: {
      principal: {
        // eslint-disable-next-line quotes
        __html: `<p>
        <p><span class="texto-verde">Direção, Roteiro e Produção Executiva:</span> Evandro Scorsin </p>
        <p><span class="texto-verde">Produção Executiva:</span> Pedro Henrique de Mello </p> 
        <p><span class="texto-verde">Direção De Produção e Produção Executiva:</span> Anderson Simão </p> 
        <p><span class="texto-verde">Direção De Fotografia:</span> Daniel Rodriguez </p> 
        <p><span class="texto-verde">Direção De Arte:</span> Alex Rocca </p> 
        <p><span class="texto-verde">Montagem:</span> João Krefer </p>
        <p><span class="texto-verde">Edição De Som E Mixagem:</span> Vinicius Nisi </p>
        </p>
        `,
      },
      adicional: {
        __html: `
          <p><span class="texto-verde">Assistente De Direção:</span> Pedro Henrique Mello |         
          <span class="texto-verde">Assistente De Produção e Arte Gráfica:</span> Rudolfo Auffinger |
          <span class="texto-verde">Assistente de Arte e Still:</span> Ana Paula Málaga |
          <span class="texto-verde">Still:</span> Daniel Florencio |
          <span class="texto-verde">Figurino e Maquiagem:</span> Daiane Scorsin | 
          <span class="texto-verde">Operadora De Câmera:</span> Hellen Braga | 
          <span class="texto-verde">1º Assistente de Fotografia:</span> André Senna | André Senna Eduardo Belik 
          <span class="texto-verde">Elétrica:</span> Max Olsen | 
          <span class="texto-verde">Som Direto:</span> Rodrigo Janiszewski | 
          <span class="texto-verde">Produção de Elenco:</span> Clariana Borzone e Thiago Moreno 
          </p>
        `,
      },
    },
  },
  {
    id: '26',
    url: 'parabens-pra-vc',
    titulo: 'PARABÉNS PRA VC',
    ano: 2011,
    autor: 'ANDERSON SIMÃO',
    imgIcone: { src: '/imagens/filmes/parabens-pra-vc/parabenspravc_still1.jpg', desc: '', titulo: 'Titulo da Imagem' },
    imgDestaque: { src: '/imagens/filmes/parabens-pra-vc/parabenspravc_banner2.png', desc: '', titulo: 'Titulo da Imagem' },
    imgPoster: { src: '/imagens/filmes/parabens-pra-vc/parabenspravc_cartaz_web.jpg', desc: '', titulo: 'Titulo da Imagem' },
    galeria: [
      { src: '/imagens/filmes/parabens-pra-vc/parabenspravc_still1.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/parabens-pra-vc/parabenspravc_still2.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/parabens-pra-vc/parabenspravc_still3.jpg', desc: '', titulo: 'Titulo da Imagem' },
    ],
    imgGaleriaAlta: [
      { src: '/imagens/filmes/parabens-pra-vc/parabenspravc_still1_alta.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/parabens-pra-vc/parabenspravc_still2_alta.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/parabens-pra-vc/parabenspravc_still3_alta.jpg', desc: '', titulo: 'Titulo da Imagem' },
    ],
    patrocinadores: { src: '', desc: '', titulo: 'titulo da imagem' },

    participacao: 'Isabela Zanotim Da Silva, Aline Vanessa Santoro e Daniele Zanotin da Silva.',
    sinopse: 'É o dia do aniversário de Isabela. Ela planeja ter um dia legal com suas amigas e com sua família.',
    categoria: 'Curta Metragem',
    tags: ['Comédia', 'Adolescente', 'Terror'],
    linkVideo: 'https://youtu.be/KENeqiZsics',
    equipe: {
      principal: {
        // eslint-disable-next-line quotes
        __html: `
        <p><span class="texto-verde">Direção e roteiro:</span> Anderson Simão </p>
        <p><span class="texto-verde">Produção:</span> Anderson Simão, Evandro Scorsin, Juliana Rodrigues, Nuno Chinaglia Poli </p> 
        <p><span class="texto-verde">Direção De Fotografia:</span> Juliana Rodrigues </p> 
        <p><span class="texto-verde">Direção De Arte:</span> Juliana Rodrigues </p> 
        <p><span class="texto-verde">Montagem:</span> Tomás von der Osten </p>
        <p><span class="texto-verde">Som Direto:</span> Evandro Scorsin, Nuno Chinaglia Poli </p> 
        <p><span class="texto-verde">Edição De Som:</span> Nuno Chinaglia Poli </p>
        <p>
        Projeto realizado como TCC do curso de Cinema e Vídeo da Faculdade de Artes do Paraná.
        </p>
        `,
      },
      adicional: {
        __html: `
          <p><span class="texto-verde">Apoio:</span> Colégio Estadual Leoncio Correia, Colégio Estadual Prof. Loureiro Fernandes </p>
        `,
      },
    },
  },
  {
    id: '27',
    url: 'paranoia-doce',
    titulo: 'PARANOIA DOCE',
    ano: 2018,
    autor: 'EVANDRO SCORSIN',
    imgIcone: { src: '/imagens/filmes/paranoia-doce/paranoiadoce_still1.jpg', desc: '', titulo: 'Titulo da Imagem' },
    imgDestaque: { src: '/imagens/filmes/paranoia-doce/paranoiadoce_banner.jpg', desc: '', titulo: 'Titulo da Imagem' },
    imgPoster: { src: '/imagens/filmes/paranoia-doce/paranoiadoce_cartaz_web.jpg', desc: '', titulo: 'Titulo da Imagem' },
    galeria: [
      { src: '/imagens/filmes/paranoia-doce/paranoiadoce_still1.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/paranoia-doce/paranoiadoce_still2.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/paranoia-doce/paranoiadoce_still3.jpeg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/paranoia-doce/paranoiadoce_still4.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/paranoia-doce/paranoiadoce_still5.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/paranoia-doce/paranoiadoce_still6.jpg', desc: '', titulo: 'Titulo da Imagem' },
    ],
    imgGaleriaAlta: [
      { src: '/imagens/filmes/paranoia-doce/paranoiadoce_cartaz_alta.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/paranoia-doce/paranoiadoce_still1_alta.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/paranoia-doce/paranoiadoce_still2_alta.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/paranoia-doce/paranoiadoce_still3_alta.jpeg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/paranoia-doce/paranoiadoce_still4_alta.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/paranoia-doce/paranoiadoce_still5_alta.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/paranoia-doce/paranoiadoce_still6_alta.jpg', desc: '', titulo: 'Titulo da Imagem' },

    ],
    patrocinadores: { src: '/imagens/filmes/paranoia-doce/paranoiadoce_creditos_banner.png', desc: '', titulo: 'titulo da imagem' },

    participacao: 'Gustavo Piaskoski, Letícia Roza, Isa Rocco, Daniel Alexs e Daniel Martins.',
    sinopse: 'Quatro jovens viajam para uma cidade litorânea buscando diversão. Após uma noite de bebedeira, jogos e pegação, desejamos uma gosma rosada e viscosa, que inexplicavelmente os seduz. O clima de curtição acaba, e um a um os jovens começar a morrer.',
    categoria: 'Curta Metragem',
    tags: ['Comédia', 'Adolescente', 'Terror'],
    linkVideo: 'https://vimeo.com/356583258',
    equipe: {
      principal: {
        // eslint-disable-next-line quotes
        __html: `<p>
        <p><span class="texto-verde">Direção e roteiro:</span> Evandro Scorsin </p>
        <p><span class="texto-verde">Produção Executiva:</span> Anderson Simão </p> 
        <p><span class="texto-verde">Direção De Produção:</span> Wellington Sari </p>
        <p><span class="texto-verde">Direção De Fotografia:</span> André Senna </p> 
        <p><span class="texto-verde">Direção De Arte:</span> Alex Rocca </p> 
        <p><span class="texto-verde">Montagem:</span> Christopher Faust </p>
        <p><span class="texto-verde">Som Direto:</span> Bruno Ito </p> 
        <p><span class="texto-verde">Trilha Sonora:</span> Felipe Ayres </p>
        <p><span class="texto-verde">Finalização De Som:</span> Alexandre Rogoski </p>
        </p>
        <p>
        Projeto realizado com o apoio do Estado do Paraná, Secretaria de Cultura do Paraná, Profice - Programa Estadual de Fomento e Incentivo à Cultura do Paraná, com incentivo da Copel. Gravado na cidade de Antonina / PR.
        </p>
        `,
      },
      adicional: {
        __html: `
          <p><span class="texto-verde">Figuração:</span> Edison Gonçalves Corrêa Junior, Guilherme Moreira da Silva, Jamile De Fátima Moreira Teixeira, Laila Milcharski Gonçalves </p>
          <p><span class="texto-verde">Operação de Câmera:</span> Rosano Mauro Jr |         
          <span class="texto-verde">Assistente de câmera:</span> André Senna |
          <span class="texto-verde">Elétrica e assistência de fotografia:</span> Murilo Lazarin |
          <span class="texto-verde">Auxiliar Elétrico:</span> Danilo Custódio |
          <span class="texto-verde">Figurino:</span> Morgana Horst | 
          <span class="texto-verde">Produção de objetos e assistência de arte:</span> Debora Padial | 
          <span class="texto-verde">Maquiagem de efeito:</span> Andrea Tristão |
          <span class="texto-verde">Assistente de maquiagem:</span> Alexsandra Steibel | 
          <span class="texto-verde">Still:</span> Wellington Sari | 
          <span class="texto-verde">Design gráfico:</span> Melina Correia |
          <span class="texto-verde">Produtor local:</span> Kahito Borcath Jucoski |
          <span class="texto-verde">Captação de recursos:</span> Carol Roehrig |
          <span class="texto-verde">Estúdio de pós-produção de som:</span> Off-Beat Audio |
          <span class="texto-verde">Edição de diálogo:</span> Samuel Jacintho | 
          <span class="texto-verde">Gravação de ADR:</span> Bruno Ito e Samuel Jacintho | 
          <span class="texto-verde">Artista Foley:</span> Roger “Hands” Castro |
          <span class="texto-verde">Gravação de foley:</span> Yuri Grigoletti | 
          <span class="texto-verde">Edição de foley:</span> Adriano Elias | 
          <span class="texto-verde">Edição de efeitos sonoros:</span> Bruno Ito, Yuri Grigoletti e Alexandre Rogoski |
          <span class="texto-verde">Correção de cor:</span> Guilherme Delamuta |
          <span class="texto-verde">Logger:</span> Hvgo Henrique |
          <span class="texto-verde">Tradução e legendas:</span> ETC Fimes |
          <span class="texto-verde">Versão inglês:</span> Marcelo Gouvêa | 
          <span class="texto-verde">Versão espanhol:</span> Bruno Freitas | 
          <span class="texto-verde">Revisão de legendas:</span> Cinthia Alencar |
          <span class="texto-verde">Conteúdo de acessibilidade:</span> Filmes ETC | 
          <span class="texto-verde">Legenda descritiva:</span> Célia Medeiros | 
          <span class="texto-verde">Roteiro de audiodescrição:</span> Paula Lousada |
          <span class="texto-verde">Locução de audiodescrição:</span> Thonny Cavaglieri |
          <span class="texto-verde">Técnico de audiodescrição:</span> Mariana Sabini |
          <span class="texto-verde">Consultor cego:</span> Edgard Jacques |
          <span class="texto-verde">Revisão de acessibilidade:</span> Gabriela Flores |
          <span class="texto-verde">Direção de acessibilidade:</span> Thais Ortega
          </p>
          <p><span class="texto-verde">Apoio:</span> Camboa Hotéis, Hollywood Film Academy, BackBros, Videoloc </p>

        `,
      },
    },
  },
  {
    id: '28',
    url: 'pequenos',
    titulo: 'PEQUENOS',
    ano: 2012,
    autor: 'ALEXANDRE RAFAEL GARCIA',
    imgIcone: { src: '/imagens/filmes/pequenos/pequenos_still1.jpg', desc: '', titulo: 'Titulo da Imagem' },
    imgDestaque: { src: '/imagens/filmes/pequenos/pequenos_banner.jpg', desc: '', titulo: 'Titulo da Imagem' },
    imgPoster: { src: '/imagens/filmes/pequenos/pequenos_cartaz_web.jpg', desc: '', titulo: 'Titulo da Imagem' },
    galeria: [
      { src: '/imagens/filmes/pequenos/pequenos_still1.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/pequenos/pequenos_still2.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/pequenos/pequenos_still3.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/pequenos/pequenos_still4.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/pequenos/pequenos_still5.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/pequenos/pequenos_still6.jpeg', desc: '', titulo: 'Titulo da Imagem' },
    ],
    imgGaleriaAlta: [
      { src: '/imagens/filmes/pequenos/pequenos_cartaz_alta.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/pequenos/pequenos_still1_alta.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/pequenos/pequenos_still2_alta.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/pequenos/pequenos_still3_alta.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/pequenos/pequenos_still4_alta.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/pequenos/pequenos_still5_alta.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/pequenos/pequenos_still6_alta.jpeg', desc: '', titulo: 'Titulo da Imagem' },

    ],
    patrocinadores: { src: '/imagens/filmes/pequenos/cultura-inglesa_banner.png', desc: '', titulo: 'titulo da imagem' },

    participacao: 'Lucas Gabriel, Julia Yara, Augusto Cerqueira, Ana Henriqueta, Anderson Da Silva, Daniel Miqueias, Lucas Vicenzo e Luiz Godói.',
    sinopse: 'Férias de verão e o menino Lucas se diverte com seus amigos no bairro onde moram. Cada dia que passa, ele se aproxima mais de Ana.',
    categoria: 'Curta Metragem',
    tags: ['Comédia', 'Adolescente', 'Terror'],
    linkVideo: 'https://youtu.be/0P-LSouzEOM',
    equipe: {
      principal: {
        // eslint-disable-next-line quotes
        __html: `<p>
        <p><span class="texto-verde">Direção e roteiro:</span> Alexandre Rafael Garcia </p>
        <p><span class="texto-verde">Produção Executiva:</span> Anderson Simão </p> 
        <p><span class="texto-verde">Direção De Produção:</span> Evandro Scorsin, Wellington Sari </p>
        <p><span class="texto-verde">Direção De Fotografia:</span> Renata Corrêa </p> 
        <p><span class="texto-verde">Direção De Arte:</span> Ana Deliberador </p> 
        <p><span class="texto-verde">Montagem:</span> Christopher Faust </p>
        <p><span class="texto-verde">Som Direto e Desenho de Som:</span>  Alexandre Rogoski </p> 
        </p>
        <p>
        Projeto realizado através do edital 16º Cultura Inglesa Festival na categoria “Cinema”.
        </p>
        `,
      },
      adicional: {
        __html: `
          <p><span class="texto-verde">Colaboração no roteiro:</span> Wellington Sari |         
          <span class="texto-verde">Assistente de direção:</span> Evandro Scorsin |
          <span class="texto-verde">Assistente de produção:</span> Marianna Helena |
          <span class="texto-verde">Assistente de fotografia:</span> Daniel Florêncio |
          <span class="texto-verde">Assistente de arte:</span> Felipe Potenza | 
          <span class="texto-verde">Assistente de montagem:</span> Guilherme Delamuta | 
          <span class="texto-verde">Assistente de som direto e finalização de som:</span> Samuel Jacintho |
          <span class="texto-verde">elétrica:</span> Leandro Telles | 
          <span class="texto-verde">sincronização e legendas inglês e espanhol: </span> Clariana Borzone | 
          <span class="texto-verde">legendas italiano:</span> Massimo Stulfa |
          <span class="texto-verde">Still:</span> Tomás von der Osten |
          <span class="texto-verde">pós-produção de imagem:</span> Everton Sebben |
          <span class="texto-verde">design gráfico:</span>  Fábio Rrocha 
          </p>
          <p><span class="texto-verde">Apoio:</span> 
          Cini, Família Sfiha, Padaria América, Sanepar          
          </p>

        `,
      },
    },
  },
  {
    id: '29',
    url: 'raceland',
    titulo: 'RACELAND',
    ano: 2017,
    autor: 'WELLINGTON SARI',
    imgIcone: { src: '/imagens/filmes/raceland/raceland_still1.png', desc: '', titulo: 'Titulo da Imagem' },
    imgDestaque: { src: '/imagens/filmes/raceland/raceland_banner1.png', desc: '', titulo: 'Titulo da Imagem' },
    imgPoster: { src: '/imagens/filmes/raceland/raceland_cartaz_web.jpg', desc: '', titulo: 'Titulo da Imagem' },
    galeria: [
      { src: '/imagens/filmes/raceland/raceland_still1.png', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/raceland/raceland_still2.png', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/raceland/raceland_still3.png', desc: '', titulo: 'Titulo da Imagem' },
    ],
    imgGaleriaAlta: [
      { src: '/imagens/filmes/raceland/raceland_still1.png', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/raceland/raceland_still2.png', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/raceland/raceland_still3.png', desc: '', titulo: 'Titulo da Imagem' },

    ],
    patrocinadores: { src: '/imagens/filmes/pequenos/cultura-inglesa_banner.png', desc: '', titulo: 'titulo da imagem' },

    participacao: '',
    sinopse: 'O automobilismo como forma de superar a morte, ao vivo no vídeo. As tecnologias antigas desaparecem, mas algo permanece. Dois homens disputam uma corrida. Uma homenagem a Ayrton Senna.',
    categoria: 'Curta Metragem',
    tags: ['Comédia', 'Adolescente', 'Terror'],
    linkVideo: 'https://youtu.be/VX__e7nkIZw',
    equipe: {
      principal: {
        // eslint-disable-next-line quotes
        __html: `<p>
        <p><span class="texto-verde">Direção e roteiro:</span> Wellington Sari </p>
        <p><span class="texto-verde">Produção:</span> Anderson Simão e Christopher Faust </p> 
        <p><span class="texto-verde">Direção De Fotografia:</span> Evandro Scorsin </p> 
        <p><span class="texto-verde">Fotografia Adicional:</span> Wellington Sari </p>
        <p><span class="texto-verde">Assistente de Direção:</span> Bruna Dal Vesco </p>  
        </p>
        <p>
        Projeto realizado para a Oficina Tomada Única, ofertada pelo 12º Curta Oito - Festival Internacional de Cinema Super8 de Curitiba.        
        </p>
        `,
      },
      adicional: {
        __html: `
          <p><span class="texto-verde">Assistente de Direção:</span> Bruna Dal Vesco </p>         
          <p><span class="texto-verde">Agradecimentos:</span> Kartódromo Internacional Raceland, Pedro Merege </p>
        `,
      },
    },
  },
  {
    id: '30',
    url: 'romance-edmottes',
    titulo: 'ROMANCE EDMOTTÊS',
    ano: 2010,
    autor: 'WELLINGTON SARI',
    imgIcone: { src: '/imagens/filmes/romance-edmottes/romanceedmottes_still1.jpg', desc: '', titulo: 'Titulo da Imagem' },
    imgDestaque: { src: '/imagens/filmes/romance-edmottes/romanceedmottes_banner.jpg', desc: '', titulo: 'Titulo da Imagem' },
    imgPoster: { src: '/imagens/filmes/romance-edmottes/romanceedmottes_cartaz_web.jpeg', desc: '', titulo: 'Titulo da Imagem' },
    galeria: [
      { src: '/imagens/filmes/romance-edmottes/romanceedmottes_still1.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/romance-edmottes/romanceedmottes_still2.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/romance-edmottes/romanceedmottes_still3.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/romance-edmottes/romanceedmottes_still4.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/romance-edmottes/romanceedmottes_still5.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/romance-edmottes/romanceedmottes_still6.jpg', desc: '', titulo: 'Titulo da Imagem' },
    ],
    imgGaleriaAlta: [
      { src: '/imagens/filmes/romance-edmottes/romanceedmottes_banner.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/romance-edmottes/romanceedmottes_still1_alta.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/romance-edmottes/romanceedmottes_still2_alta.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/romance-edmottes/romanceedmottes_still3_alta.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/romance-edmottes/romanceedmottes_still4_alta.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/romance-edmottes/romanceedmottes_still5_alta.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/romance-edmottes/romanceedmottes_still6_alta.jpg', desc: '', titulo: 'Titulo da Imagem' },

    ],
    patrocinadores: { src: '', desc: '', titulo: 'titulo da imagem' },

    participacao: 'Arno Pruner, Viviane Oliveira, Sabine Villatore, Márcio Paes, Daniele Dorte, Wellington Sari, Vinícius Yurk.',
    sinopse: 'Tino gosta de duas meninas. Uma delas é sua namorada.',
    categoria: 'Curta Metragem',
    tags: ['Comédia', 'Adolescente', 'Terror'],
    linkVideo: 'https://youtu.be/T-7iLXqCaak',
    equipe: {
      principal: {
        // eslint-disable-next-line quotes
        __html: `<p>
        <p><span class="texto-verde">Direção:</span> Wellington Sari </p> 
        <p><span class="texto-verde">Roteiro:</span> Wellington Sari </p>
        <p><span class="texto-verde">Produção Executiva:</span> Marisa Merlo, Wellington Sari </p> 
        <p><span class="texto-verde">Direção De Produção:</span> Marisa Merlo, Bárbara Felice </p>
        <p><span class="texto-verde">Direção De Fotografia:</span> Antônio Junior </p> 
        <p><span class="texto-verde">Direção De Arte:</span> Ana Paula Málaga </p>
        <p><span class="texto-verde">Montagem:</span> Christopher Faust </p>
        <p><span class="texto-verde">Som Direto:</span> Guilherme Cordova e Nikola Matevski </p>
        <p><span class="texto-verde">Edição De Som:</span> Vinicius Nisi </p> 
        </p>
        `,
      },
      adicional: {
        __html: `
          <p>
          <span class="texto-verde">Produção de elenco:</span> Arno Pruner |         
          <span class="texto-verde">Assistente de produção:</span> Kahito Jucoski |
          <span class="texto-verde">Assistente de direção:</span> Christopher Faust |
          <span class="texto-verde">Assistente de fotografia:</span> Renata Corrêa |
          <span class="texto-verde">Assistente de arte:</span> Alex Rocca |
          <span class="texto-verde">Figurino:</span> Ana Paula Cardoso |
          <span class="texto-verde">Pós-produção:</span> Nathália Okimoto |
          <span class="texto-verde">Claquete e continuidade:</span> Karina de Souza |
          <span class="texto-verde">Eletricista:</span> Max Olsen |
          <span class="texto-verde">Still:</span> Talitha Bodnar |
          <span class="texto-verde">Design Gráfico:</span> Melina Correia
          </p>
          <p><span class="texto-verde">Apoio:</span>  
          CINETVPR, Família Sfiha, Padaria América, Sabor & Sabor
          </p>
          `,
      },
    },
  },
  {
    id: '31',
    url: 'sobrenatural',
    titulo: 'SOBRENATURAL',
    ano: 2012,
    autor: 'ALEXANDRE RAFAEL GARCIA',
    imgIcone: { src: '/imagens/filmes/sobrenatural/sobrenatural_still1.jpg', desc: '', titulo: 'Titulo da Imagem' },
    imgDestaque: { src: '/imagens/filmes/sobrenatural/sobrenatural_banner.png', desc: '', titulo: 'Titulo da Imagem' },
    imgPoster: { src: '/imagens/filmes/sobrenatural/sobrenatural_cartaz_web.jpg', desc: '', titulo: 'Titulo da Imagem' },
    galeria: [
      { src: '/imagens/filmes/sobrenatural/sobrenatural_still1.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/sobrenatural/sobrenatural_still2.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/sobrenatural/sobrenatural_still3.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/sobrenatural/sobrenatural_still4.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/sobrenatural/sobrenatural_still5.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/sobrenatural/sobrenatural_still6.jpeg', desc: '', titulo: 'Titulo da Imagem' },
    ],
    imgGaleriaAlta: [
      { src: '/imagens/filmes/sobrenatural/sobrenatural_still1_alta.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/sobrenatural/sobrenatural_still2_alta.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/sobrenatural/sobrenatural_still3_alta.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/sobrenatural/sobrenatural_still4_alta.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/sobrenatural/sobrenatural_still5_alta.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/sobrenatural/sobrenatural_still6_alta.jpg', desc: '', titulo: 'Titulo da Imagem' },

    ],
    patrocinadores: { src: '', desc: '', titulo: 'titulo da imagem' },

    participacao: 'Evandro Scorsin, Fran Lipinski, Wellington Sari.',
    sinopse: 'Giovanni tem 20 anos, trabalha em uma videolocadora e torce para o Santos. Ele procura uma menina parecida com ele para se apaixonar. Até que conhece Nely.',
    categoria: 'Curta Metragem',
    tags: ['Comédia', 'Adolescente', 'Terror'],
    linkVideo: 'https://youtu.be/MS_fRvOZjMs',
    equipe: {
      principal: {
        // eslint-disable-next-line quotes
        __html: `<p>
        <p><span class="texto-verde">Direção, roteiro e montagem:</span> Alexandre Rafael Garcia </p> 
        <p><span class="texto-verde">Produção:</span> Alexandre Rafael Garcia, Anderson Simão, Christopher Faust, Evandro Scorsin, Wellington Sari </p>
        <p><span class="texto-verde">Direção De Fotografia:</span> Renata Corrêa </p> 
        <p><span class="texto-verde">Direção De Arte:</span> Ana Deliberador </p>
        <p><span class="texto-verde">Som Direto:</span> Nikola Matevski </p>
        <p><span class="texto-verde">Finalização De Som:</span> Alexandre Rogoski </p> 
        </p>
        <p>
        Este filme faz parte do projeto "Filmes de Verão" 2012
        </p>
        `,
      },
      adicional: {
        __html: `
          <p>
          <span class="texto-verde">Design Gráfico:</span> Fábio Rrocha |         
          <span class="texto-verde">Assistente De Som Direto:</span> Anderson Simão |
          <span class="texto-verde">Assistente de Edição de Som:</span> Samuel Jacintho |
          <span class="texto-verde">Finalização de Imagem:</span> Guilherme Delamuta |
          <span class="texto-verde">Tradução e Legendas:</span> Clariana Borzone 
          </p>
          <p><span class="texto-verde">Apoio:</span>  
          Astro Videolocadora | Padaria América | Sanepar          
          </p>
          `,
      },
    },
  },
  {
    id: '32',
    url: 'super-blue',
    titulo: 'SUPER BLUE',
    ano: 2013,
    autor: 'WELLINGTON SARI',
    imgIcone: { src: '/imagens/filmes/super-blue/superblue_still1.jpg', desc: '', titulo: 'Titulo da Imagem' },
    imgDestaque: { src: '/imagens/filmes/super-blue/superblue_banner.jpg', desc: '', titulo: 'Titulo da Imagem' },
    imgPoster: { src: '/imagens/filmes/super-blue/superblue_cartaz_web.jpg', desc: '', titulo: 'Titulo da Imagem' },
    galeria: [
      { src: '/imagens/filmes/super-blue/superblue_still1.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/super-blue/superblue_still2.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/super-blue/superblue_still3.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/super-blue/superblue_still4.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/super-blue/superblue_still5.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/super-blue/superblue_still6.jpg', desc: '', titulo: 'Titulo da Imagem' },
    ],
    imgGaleriaAlta: [
      { src: '/imagens/filmes/super-blue/superblue_cartaz_alta.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/super-blue/superblue_still1_alta.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/super-blue/superblue_still2_alta.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/super-blue/superblue_still3_alta.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/super-blue/superblue_still4_alta.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/super-blue/superblue_still5_alta.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/super-blue/superblue_still6_alta.jpg', desc: '', titulo: 'Titulo da Imagem' },

    ],
    patrocinadores: { src: '', desc: '', titulo: 'titulo da imagem' },

    participacao: 'Wellington Sari, Alana Ferri, Beatriz Oliveira, Evandro Scorsin.',
    sinopse: 'De coração partido graças ao fim de um namoro, Giba caminha sem direção. Ao acaso, encontra seu amigo Conrado, que lhe apresenta Bia.',
    categoria: 'Curta Metragem',
    tags: ['Comédia', 'Adolescente', 'Terror'],
    linkVideo: 'https://youtu.be/QjM-y_J0cFo',
    equipe: {
      principal: {
        // eslint-disable-next-line quotes
        __html: `<p>
        <p><span class="texto-verde">Direção e roteiro:</span> Wellington Sari </p> 
        <p><span class="texto-verde">Produção:</span> Alexandre Rafael Garcia, Anderson Simão, Christopher Faust, Evandro Scorsin e Wellington Sari </p>
        <p><span class="texto-verde">Direção De Fotografia:</span> Guilherme Delamuta </p> 
        <p><span class="texto-verde">Montagem:</span> Christopher Faust </p>
        <p><span class="texto-verde">Som Direto:</span> Tomás von der Osten </p>
        <p><span class="texto-verde">Finalização De Som:</span> Tiago Bello </p> 
        </p>
        <p>
        Este filme faz parte do projeto "Filmes de Verão" 2013 
        </p>
        `,
      },
      adicional: {
        __html: `
          <p><span class="texto-verde">Co-Produção:</span> Gogó Estúdio Sonoro</p>
          <p>
          <span class="texto-verde">Finalização de Imagem:</span> Guilherme Delamuta |         
          <span class="texto-verde">Fotografia Adicional:</span> Renata Corrêa |
          <span class="texto-verde">Som direto adicional:</span> Anderson Simão |
          <span class="texto-verde">Artista de foley:</span> Marcos Lopes |
          <span class="texto-verde">Assistente De Edição de Som:</span> Isabel Cardoso |
          <span class="texto-verde">Estúdio de Mixagem:</span> Gogó Estúdio Sonoro |
          <span class="texto-verde">Design Gráfico:</span> Melina Correia |
          <span class="texto-verde">Assistente De Montagem:</span> Paula Negri |
          <span class="texto-verde">Legendas Espanhol:</span> Graziela Braz |
          <span class="texto-verde">Legendas Inglês:</span> Raquel Ribeiro 
          </p>
          <p><span class="texto-verde">Apoio:</span>  
          Aldeia do Beto, Bebidas Tissot, Família Sfiha, Sanepar          
          </p>
          `,
      },
    },
  },
  {
    id: '33',
    url: 'surf-surf',
    titulo: 'SURF SURF',
    ano: 2012,
    autor: 'WELLINGTON SARI',
    imgIcone: { src: '/imagens/filmes/surf-surf/surfsurf_still1.jpg', desc: '', titulo: 'Titulo da Imagem' },
    imgDestaque: { src: '/imagens/filmes/surf-surf/surfsurf_banner.png', desc: '', titulo: 'Titulo da Imagem' },
    imgPoster: { src: '/imagens/filmes/surf-surf/surfsurf_cartaz_web.jpg', desc: '', titulo: 'Titulo da Imagem' },
    galeria: [
      { src: '/imagens/filmes/surf-surf/surfsurf_still1.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/surf-surf/surfsurf_still2.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/surf-surf/surfsurf_still3.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/surf-surf/surfsurf_still4.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/surf-surf/surfsurf_still5.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/surf-surf/surfsurf_still6.jpeg', desc: '', titulo: 'Titulo da Imagem' },
    ],
    imgGaleriaAlta: [
      { src: '/imagens/filmes/surf-surf/surfsurf_cartaz_alta.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/surf-surf/surfsurf_still1_alta.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/surf-surf/surfsurf_still2_alta.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/surf-surf/surfsurf_still3_alta.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/surf-surf/surfsurf_still4_alta.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/surf-surf/surfsurf_still5_alta.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/surf-surf/surfsurf_still6_alta.jpg', desc: '', titulo: 'Titulo da Imagem' },

    ],
    patrocinadores: { src: '', desc: '', titulo: 'titulo da imagem' },

    participacao: 'Monique Rau, Wellington Sari, Arno Pruner, Evandro Scorsin, Rodolfo Stancki e Paulo De Nadal.',
    sinopse: 'Bruna quer ficar com André, antes que ele viaje para a praia. Depois de encontrá-lo, a jovem passa o resto do dia com o melhor amigo Jota.',
    categoria: 'Curta Metragem',
    tags: ['Comédia', 'Adolescente', 'Terror'],
    linkVideo: 'https://youtu.be/mVCSmkKa0as',
    equipe: {
      principal: {
        // eslint-disable-next-line quotes
        __html: `<p>
        <p><span class="texto-verde">Direção e roteiro:</span> Wellington Sari </p> 
        <p><span class="texto-verde">Produção:</span> Alexandre Rafael Garcia, Anderson Simão, Christopher Faust e Evandro Scorsin </p>
        <p><span class="texto-verde">Direção De Fotografia:</span> Renata Corrêa </p> 
        <p><span class="texto-verde">Montagem:</span> Christopher Faust </p>
        <p><span class="texto-verde">Som Direto:</span> Tomás von der Osten </p>
        <p><span class="texto-verde">Finalização De Imagem:</span> Guilherme Delamuta </p>
        <p><span class="texto-verde">Finalização De Som:</span> Alexandre Rogoski </p> 
        </p>
        <p>
        Este filme faz parte do projeto "Filmes de Verão" 2012
        </p>
        `,
      },
      adicional: {
        __html: `
          <p><span class="texto-verde">Elenco de apoio:</span> Alexandre Rafael Garcia, Aline Angela, Bruna Mazanek, Ge Simões, Isabela Fausto, Izabela Milita, Júlia Simões, Juliana Rodrigues, Marcela Mancino, Sheila Gorski </p>
          <p>
          <span class="texto-verde">Design Gráfico:</span> Melina Correia |         
          <span class="texto-verde">Assistente De Direção:</span> Christopher Faust |
          <span class="texto-verde">Assistente De Som Direto:</span> Anderson Simão |
          <span class="texto-verde">Assistente De Montagem:</span> Guilherme Delamuta |
          <span class="texto-verde">Assistente De Edição de Som:</span> Samuel Jacintho |
          <span class="texto-verde">Tradução e Legendas:</span> Clariana Borzone
          </p>
          <p><span class="texto-verde">Apoio:</span>  
          Off-Beat Audio, Padaria América, Sanepar          
          </p>
          `,
      },
    },
  },
  {
    id: '34',
    url: 'terror-noturno',
    titulo: 'TERROR NOTURNO',
    ano: 2019,
    autor: 'EVANDRO SCORSIN',
    imgIcone: { src: '/imagens/filmes/terror-noturno/terrornoturno_still1.jpg', desc: '', titulo: 'Titulo da Imagem' },
    imgDestaque: { src: '/imagens/filmes/terror-noturno/terrornoturno_banner.png', desc: '', titulo: 'Titulo da Imagem' },
    imgPoster: { src: '/imagens/filmes/terror-noturno/terrornoturno_cartaz_web.jpg', desc: '', titulo: 'Titulo da Imagem' },
    galeria: [
      { src: '/imagens/filmes/terror-noturno/terrornoturno_still1.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/terror-noturno/terrornoturno_still2.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/terror-noturno/terrornoturno_still3.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/terror-noturno/terrornoturno_still4.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/terror-noturno/terrornoturno_still5.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/terror-noturno/terrornoturno_still6.jpg', desc: '', titulo: 'Titulo da Imagem' },
    ],
    imgGaleriaAlta: [
      { src: '/imagens/filmes/terror-noturno/terrornoturno_cartaz_alta.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/terror-noturno/terrornoturno_still1_alta.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/terror-noturno/terrornoturno_still2_alta.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/terror-noturno/terrornoturno_still3_alta.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/terror-noturno/terrornoturno_still4_alta.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/terror-noturno/terrornoturno_still5_alta.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/terror-noturno/terrornoturno_still6_alta.jpg', desc: '', titulo: 'Titulo da Imagem' },

    ],
    patrocinadores: { src: '/imagens/filmes/terror-noturno/terrornoturno_creditos_banner.png', desc: '', titulo: 'titulo da imagem' },

    participacao: 'Gustavo Piaskoski e Marrara Mara.',
    sinopse: 'Após uma festa com muita bebedeira e diversão, um casal desperta no dia seguinte sem qualquer recordação sobre os eventos da noite anterior. Quando encontram vestígios de um provável atropelamento no para-choque do carro, passam a acreditar que podem ter cometido um assassinato.',
    categoria: 'Curta Metragem',
    tags: ['Comédia', 'Adolescente', 'Terror'],
    linkVideo: 'https://vimeo.com/356585839',
    equipe: {
      principal: {
        // eslint-disable-next-line quotes
        __html: `<p>
        <p><span class="texto-verde">Direção e roteiro:</span> Evandro Scorsin </p> 
        <p><span class="texto-verde">Produção Executiva:</span> Anderson Simão </p>
        <p><span class="texto-verde">Direção De Produção:</span> Wellington Sari </p>
        <p><span class="texto-verde">Direção De Fotografia:</span> André Senna </p>
        <p><span class="texto-verde">Arte, Figurino e Maquiagem:</span> Morgana Horst </p>
        <p><span class="texto-verde">Montagem:</span> Christopher Faust </p>
        <p><span class="texto-verde">Finalização de Som:</span> Vitor Coroa e Vitor Moraes </p>
        <p><span class="texto-verde">Trilha Sonora:</span> Felipe Ayres </p>
        <p><span class="texto-verde">Coordenação:</span> Gustavo Duarte </p> 
        <p><span class="texto-verde">Co-Produção:</span> House Films </p>
        </p>
        <p>
        Projeto realizado com o apoio da Fundação Cultural de Curitiba, através de edital do Fundo Municipal da Cultura em parceria com o Fundo Setorial do Audiovisual.
        </p>
        `,
      },
      adicional: {
        __html: `
          <p><span class="texto-verde">Elenco de apoio:</span> Martha Chapieski e Altamar Cezar </p>
          <p>
          <span class="texto-verde">Operador de Câmera:</span> André Senna |         
          <span class="texto-verde">Assistente de câmera:</span> Murillo Marchesi |
          <span class="texto-verde">Assistente de fotografia:</span> Bianca Ono |
          <span class="texto-verde">Elétrica:</span> Murilo Lazarin |
          <span class="texto-verde">Correção de cor:</span> Lucas Machado |
          <span class="texto-verde">Estúdio de correção de cor:</span> House Films |
          <span class="texto-verde">Logger e assistente de direção:</span> Christopher Faust |
          <span class="texto-verde">Som direto:</span> Anderson Simão |
          <span class="texto-verde">Edição de som:</span> Rodrigo Sacic, Vitor Coroa e Vitor Moraes |
          <span class="texto-verde">Foley:</span> Vitor Moraes |
          <span class="texto-verde">Dublagem:</span> Luiz Lepchak |
          <span class="texto-verde">Estúdio de mixagem:</span> Estúdio Desterro |
          <span class="texto-verde">Designer gráfico:</span> Pietro Luigi |
          <span class="texto-verde">Acessibilidade:</span> Etc Filmes |
          <span class="texto-verde">Traduções:</span> Ó Editorial - Traduções e Edições |
          <span class="texto-verde">Sincronização português e tradução inglês:</span> Paulo Scarpa |
          <span class="texto-verde">Tradução espanhol:</span> Niala Pessuto
          </p>
          <p><span class="texto-verde">Apoio:</span>  
          Backbros, Lamenic Cinefotographia          
          </p>
          `,
      },
    },
  },
  {
    id: '35',
    url: 'tudo-bem',
    titulo: 'TUDO BEM',
    ano: 2012,
    autor: 'CHRISTOPHER FAUST',
    imgIcone: { src: '/imagens/filmes/tudo-bem/tudobem_still1.jpg', desc: '', titulo: 'Titulo da Imagem' },
    imgDestaque: { src: '/imagens/filmes/tudo-bem/tudobem_banner.jpg', desc: '', titulo: 'Titulo da Imagem' },
    imgPoster: { src: '/imagens/filmes/tudo-bem/tudobem_cartaz_web.jpg', desc: '', titulo: 'Titulo da Imagem' },
    galeria: [
      { src: '/imagens/filmes/tudo-bem/tudobem_still1.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/tudo-bem/tudobem_still2.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/tudo-bem/tudobem_still3.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/tudo-bem/tudobem_still4.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/tudo-bem/tudobem_still5.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/tudo-bem/tudobem_still6.jpg', desc: '', titulo: 'Titulo da Imagem' },
    ],
    imgGaleriaAlta: [
      { src: '/imagens/filmes/tudo-bem/tudobem_cartaz_alta.jpg', desc: '', titulo: 'Titulo da Imagem' },
    ],
    patrocinadores: { src: '', desc: '', titulo: 'titulo da imagem' },

    participacao: 'Ailen Scandurra, Ana Azevedo, Evandro Scorsin, Ana Paula Málaga, Tomás von der Osten.',
    sinopse: 'Camila terminou seu namoro. Divide agora seu tempo entre baladas, amigas e seu cachorro.',
    categoria: 'Curta Metragem',
    tags: ['Comédia', 'Adolescente', 'Terror'],
    linkVideo: 'https://vimeo.com/356585839',
    equipe: {
      principal: {
        // eslint-disable-next-line quotes
        __html: `
        <p><span class="texto-verde">Direção, roteiro, produção executiva e montagem:</span> Christopher Faust </p> 
        <p><span class="texto-verde">Produção e Direção de Arte:</span> Ana Paula Câmara e Caroline Biagi </p>
        <p><span class="texto-verde">Direção De Fotografia:</span> Daniel Florencio </p>
        <p><span class="texto-verde">Som Direto:</span> João Menna Barreto </p>
        <p><span class="texto-verde">Microfonista:</span> Lucas Maffini </p>
        <p><span class="texto-verde">Desenho de Som:</span> Kleber Gregorio </p>
        <p>
        Projeto realizado como TCC do curso de Cinema e Vídeo da Faculdade de Artes do Paraná.
        </p>
        `,
      },
      adicional: {
        __html: `
          <p><span class="texto-verde">Som Direto Adicional:</span> Tomás von der Osten </p>
          
          `,
      },
    },
  },
  {
    id: '36',
    url: 'um-verao-em-venus',
    titulo: 'UM VERÃO EM VÊNUS',
    ano: 2013,
    autor: 'EVANDRO SCORSIN',
    imgIcone: { src: '/imagens/filmes/um-verao-em-venus/umveraoemvenus_still1.jpg', desc: '', titulo: 'Titulo da Imagem' },
    imgDestaque: { src: '/imagens/filmes/um-verao-em-venus/umveraoemvenus_banner2.jpg', desc: '', titulo: 'Titulo da Imagem' },
    imgPoster: { src: '/imagens/filmes/um-verao-em-venus/umveraoemvenus_cartaz_web.jpg', desc: '', titulo: 'Titulo da Imagem' },
    galeria: [
      { src: '/imagens/filmes/um-verao-em-venus/umveraoemvenus_still1.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/um-verao-em-venus/umveraoemvenus_still2.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/um-verao-em-venus/umveraoemvenus_still3.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/um-verao-em-venus/umveraoemvenus_still4.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/um-verao-em-venus/umveraoemvenus_still5.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/um-verao-em-venus/umveraoemvenus_still6.jpg', desc: '', titulo: 'Titulo da Imagem' },
    ],
    imgGaleriaAlta: [
      { src: '/imagens/filmes/um-verao-em-venus/umveraoemvenus_cartaz_alta.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/um-verao-em-venus/umveraoemvenus_still1_alta.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/um-verao-em-venus/umveraoemvenus_still2_alta.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/um-verao-em-venus/umveraoemvenus_still3_alta.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/um-verao-em-venus/umveraoemvenus_still4_alta.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/um-verao-em-venus/umveraoemvenus_still5_alta.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/um-verao-em-venus/umveraoemvenus_still6_alta.jpg', desc: '', titulo: 'Titulo da Imagem' },

    ],
    patrocinadores: { src: '', desc: '', titulo: 'titulo da imagem' },

    participacao: 'Evandro Scorsin e Morgana Horst.',
    sinopse: 'A passagem de Vênus pelo Sol pode reaproximar um casal com o amor desgastado.',
    categoria: 'Curta Metragem',
    tags: ['Comédia', 'Adolescente', 'Terror'],
    linkVideo: 'https://youtu.be/9otTk9Qm3oE',
    equipe: {
      principal: {
        // eslint-disable-next-line quotes
        __html: `<p>
        <p><span class="texto-verde">Direção e roteiro:</span> Evandro Scorsin </p> 
        <p><span class="texto-verde">Produção:</span> Alexandre Rafael Garcia, Anderson Simão, Christopher Faust, Evandro Scorsin e Wellington Sari </p>
        <p><span class="texto-verde">Direção De Fotografia:</span> Daniel Florencio </p>
        <p><span class="texto-verde">Montagem:</span>  Christopher Faust </p>
        <p><span class="texto-verde">Som Direto:</span> Tomás von der Osten </p>
        <p><span class="texto-verde">Finalização de Imagem:</span> Guilherme Delamuta </p>
        <p><span class="texto-verde">Finalização De Som:</span> Bruno Ito</p>
        </p>
        <p>
        Este filme faz parte do projeto "Filmes de Verão" 2013        
        </p>
        `,
      },
      adicional: {
        __html: `
          <p><span class="texto-verde">Som Direto Adicional:</span> Design Gráfico: Melina Correia | 
          <span class="texto-verde">Assistente De Montagem:</span> Paula Negri |
          <span class="texto-verde">Fotografia Still:</span> Guilherme Delamuta |
          <span class="texto-verde">Legendas Espanhol:</span> Graziela Braz |
          <span class="texto-verde"> Legendas Inglês:</span> Raquel Ribeiro
          </p>
          <p>
          <span class="texto-verde">Apoio:</span>
          Bebidas Tissot, OACEP, Sanepar
          </p>
          
          `,
      },
    },
  },
  ],
  editora: {
    titulo: 'A quadro',
    img: { src: '/imagens/teste/previaCard.png', desc: '', titulo: 'Titulo da Imagem' },
    texto: 'A Quadro é O Quadro, mas um pouco diferente. Sonho antigo da produtora, em 2021 conseguimos viabilizar um selo voltado para o lançamento de publicações sobre cinema. Para separar o joio da joia, demos um nome alternativo para a atividade, com a intenção de marcar a diferença, sem desmontar a unidade: fazemos cinema, seja produzindo filmes, um festival, ou editando e lançando livros.',
  },
  colecoes: {
    logo: {
      titulo: 'Logo da Coleção',
      src: '/imagens/publicacoes/colecaoescreverocinema_logo_alta.jpg',
      desc: '',
    },
    texto: 'A Coleção Escrever o Cinema expande para a página dos livros o ato de se fazer cinema, trocando a lente pela letra, substituindo o roteiro pela reflexão. Nos volumes da coleção, pesquisadoras e pesquisadores ligados à universidade lançam luz sobre aspectos teóricos, históricos e críticos de diferentes obras da cinematografia mundial, em diálogo com outros campos do conhecimento, mas sempre retornando para os filmes em si.',
    patrocinadores: {
      titulo: 'Logo de Patrocinadores',
      src: '/imagens/publicacoes/livro01_ 04_05_creditos_banner.png',
      desc: '',
    },
  },
  patrocinadores: {
    titulo: 'Logo de Patrocinadores',
    src: '/imagens/publicacoes/livro01_ 04_05_creditos_banner.png',
    desc: '',
  },
  publicacoes: [
    {
      imgPoster: { src: '/imagens/publicacoes/livro01antonioni_capa_web.jpg', desc: '', titulo: 'Titulo da Imagem' },
      url: 'a-aventura',
      titulo: 'A AVENTURA: NOTAS SOBRE O ESTILO DE MICHELANGELO ANTONIONI',
      autor: 'DE JULIANA RODRIGUES PEREIRA',
      sobreoAutor: 'Juliana Rodrigues Pereira é assessora de comunicação e pesquisadora. Nasceu no Rio de Janeiro e, depois de morar em três regiões diferentes do País, criou raiz em Curitiba. É mestre em História pela UFPR; e bacharel em Jornalismo pela PUC-PR e em Cinema e Audiovisual pela Faculdade de Artes do Paraná.',
      sinopse: 'A aventura: notas sobre o estilo de Michelangelo Antonioni evidencia os elementos que consolidaram as bases do estilo do cineasta italiano a partir de um filme-chave de sua carreira, A aventura, de 1960. Por meio da análise fílmica minuciosa, a autora explica e desfaz lugares-comuns sobre este artista fundamental para a história do cinema moderno. ',
      patrocinadores: { src: '/imagens/publicacoes/livro01_04_05_banner.png', desc: '', titulo: 'Titulo da Imagem' },
      textoEstatico: [{ sinopse: 'sinopse', sobreAutor: 'sobre o autor', fichaTecnica: 'fica técnica' }],
      tags: [],
      fichaTecnica: {
        isbn: '978-65-996017-0-5',
        paginas: '156',
        idioma: 'Português',
        dimensoes: '21 x 14 cm',
        formato: 'Livro - Brochura',
        edicao: '1ª - 2021',
        editora: 'Edições A Quadro',
        colecao: 'Coleção Escrever o Cinema',
      },
    },
    {
      imgPoster: { src: '/imagens/publicacoes/livro02green_capa_web.jpg', desc: '', titulo: 'Titulo da Imagem' },
      url: 'eugene-green',
      titulo: 'EUGÈNE GREEN E A HIPÓTESE DO CINEMA DESCORTINADO',
      autor: 'DE PEDRO FAISSOL',
      sobreoAutor: 'Pedro Faissol é pesquisador e professor de Cinema. Doutor e Mestre em Meios e Processos Audiovisuais pela Escola de Comunicações e Artes da Universidade de São Paulo (ECA/USP). Bacharel em Comunicação Social (Cinema) pela Universidade Federal Fluminense (UFF). Docente do curso de Bacharelado em Cinema e Audiovisual e do Programa de Pós-Graduação em Cinema e Artes do Vídeo da Universidade Estadual do Paraná (PPG-CINEAV/Unespar). ',
      sinopse: 'Pedro Faissol lança luz sobre um intrigante padrão de encenação no cinema de Eugène Green. Para comprovar a hipótese, examina de perto os seus dois primeiros filmes: Todas as noites (2001) e O mundo vivente (2003). A abordagem proposta desfaz as fronteiras entre análise imanente, cotejo teórico e expressão pessoal, o que confere à escrita um mimetismo tonal capaz de prolongar a experiência singular do cinema de Eugène Green. ',
      textoEstatico: [{ sinopse: 'sinopse', sobreAutor: 'sobre o autor', fichaTecnica: 'fica técnica' }],
      patrocinadores: { src: '/imagens/publicacoes/livro02_03_creditos_banner.png', desc: '', titulo: 'Titulo da Imagem' },
      fichaTecnica: {
        isbn: '978-65-996017-2-9',
        paginas: '184',
        idioma: 'Português',
        dimensoes: '21 x 14 cm',
        formato: 'Livro - Brochura',
        edicao: '1ª - 2021',
        editora: 'Edições A Quadro',
        colecao: 'Coleção Escrever o Cinema',
      },
    }, {
      imgPoster: { src: '/imagens/publicacoes/livro03rohmer_capa_web.jpg', desc: '', titulo: 'Titulo da Imagem' },
      url: 'contos-morais',
      titulo: 'CONTOS MORAIS E O CINEMA DE ÉRIC ROHMER',
      autor: 'DE ALEXANDRE GARCIA',
      sobreoAutor: 'Alexandre Rafael Garcia nasceu em 1985 em Curitiba. É pesquisador, realizador e professor de cinema. Doutorando em História na UFPR, mestre em Multimeios no Instituto de Artes da Unicamp e bacharel em Cinema pela Faculdade de Artes do Paraná. Fundou e foi sócio da produtora O Quadro de 2010 a 2015. Criador da Coleção Escrever o Cinema e da série Dicionário de Cinema. Hoje trabalha na Universidade Estadual do Paraná (Unespar).',
      sinopse: 'A partir da análise dos seis filmes do ciclo dos Contos Morais, realizados entre 1963 e 1972, Alexandre Rafael Garcia apresenta o estilo de Éric Rohmer. O recorte se constitui como importante porta de entrada para a compreensão dos modos de produção, da narrativa e da mise en scène do cineasta francês, singular personagem na história das artes.',
      patrocinadores: { src: '/imagens/publicacoes/livro02_03_creditos_banner.png', desc: '', titulo: 'Titulo da Imagem' },
      fichaTecnica: {
        isbn: '978-65-996017-1-2',
        paginas: '184',
        idioma: 'Português',
        dimensoes: '21 x 14 cm',
        formato: 'Livro - Brochura',
        edicao: '1ª - 2021',
        editora: 'Edições A Quadro',
        colecao: 'Coleção Escrever o Cinema',
      },
    }, {
      imgPoster: { src: '/imagens/publicacoes/livro04milagre_capa_web.jpg', desc: '', titulo: 'Titulo da Imagem' },
      url: 'a-representacao',
      titulo: 'A REPRESENTAÇÃO DO MILAGRE NO CINEMA: ICONOGRAFIA, IDOLATRIA E CRENÇA',
      autor: 'DE PEDRO FAISSOL',
      sobreoAutor: 'Pedro Faissol é pesquisador e professor de Cinema. Doutor e Mestre em Meios e Processos Audiovisuais pela Escola de Comunicações e Artes da Universidade de São Paulo (ECA/USP). Bacharel em Comunicação Social (Cinema) pela Universidade Federal Fluminense (UFF). Docente do curso de Bacharelado em Cinema e Audiovisual e do Programa de Pós-Graduação em Cinema e Artes do Vídeo da Universidade Estadual do Paraná (PPG-CINEAV/Unespar).',
      sinopse: 'O milagre no cinema se apresenta como um problema de representação. Essa premissa ensejou o recorte deste livro. Para cada milagre selecionado (Anunciação, Cura do cego, Ressurreição), foi eleito um dilema correspondente: 1. Como retrabalhar no cinema os motivos plásticos da iconografia cristã? 2. Como figurar o rosto de Cristo, sob o risco de provocar a idolatria? 3. Quais as estratégias adotadas para o problema da descrença na representação? As análises fílmicas mostram um amplo repertório de caminhos para essas perguntas.',
      patrocinadores: { src: '/imagens/publicacoes/livro01_04_05_banner.png', desc: '', titulo: 'Titulo da Imagem' },
      fichaTecnica: {
        isbn: '978-65-996017-3-6',
        paginas: '308',
        idioma: 'Português',
        dimensoes: '21 x 14 cm',
        formato: 'Livro - Brochura',
        edicao: '1ª - 2021',
        editora: 'Edições A Quadro',
        colecao: 'Coleção Escrever o Cinema',
      },
    },
    {
      imgPoster: { src: '/imagens/publicacoes/livro05documentario_capa_web.jpg', desc: '', titulo: 'Titulo da Imagem' },
      url: 'documentario',
      titulo: 'DOCUMENTÁRIO: FILMES PARA SALAS DE CINEMA COM JANELAS',
      autor: 'DE EDUARDO TULIO BAGGIO',
      sobreoAutor: 'Eduardo Tulio Baggio é professor do Bacharelado em Cinema e Audiovisual e do Mestrado em Cinema e Artes do Vídeo, ambos da Unespar. Colíder do grupo de pesquisa Cinecriare (Unespar/CNPq). Membro do ST Teoria de Cineastas da Socine e do GT Teoria dos Cineastas da AIM. Publicou textos em revistas como Cine Documental, Aniki, Doc Online, Galáxia e Cognítio. Um dos organizadores dos livros Teoria dos Cineastas (Vols.1, 2 e 3). Entre seus filmes destacam-se A Alma do Gesto (2020), João & Maria (2016) e Santa Teresa (2014). ',
      sinopse: 'Documentário: Filmes para Salas de Cinema com Janelas traça um percurso histórico-conceitual para debater criticamente definições de documentário. Pela perspectiva realista, o livro discute as relações, próprias desse tipo de filme, entre mundo fático experiencial, os processos de realização, a obra audiovisual em si e a recepção A partir desses quatro polos, o autor propõe a metáfora das salas de cinema com janelas para uma abordagem amplificada e relacional do cinema documentário.',
      patrocinadores: { src: '/imagens/publicacoes/livro01_04_05_banner.png', desc: '', titulo: 'Titulo da Imagem' },
      fichaTecnica: {
        isbn: '978-65-996017-4-3',
        paginas: '140',
        idioma: 'Português',
        dimensoes: '21 x 14 cm',
        formato: 'Livro - Brochura',
        edicao: '1ª - 2021',
        editora: 'Edições A Quadro',
        colecao: 'Coleção Escrever o Cinema',
      },
    },

  ],
  quemSomos: {
    titulo: 'QUEM SOMOS',
    imgDestaque: { src: '/imagens/quemsomos/integrantes_grupo_web.jpg', desc: '', titulo: 'Titulo da Imagem' },
    texto: {
      primeiroParagrafo: 'Formada em 2010, a produtora O Quadro realiza filmes, um festival de cinema, mostras, oficinas e, também, lança livros.',
      segundoParagrafo: 'São dezenas de curtas-metragens, longas, médias exibidos e premiados nos mais diversos festivais de cinema, lançados em circuito comercial, e programados em canais de TV e plataformas VOD.',
      terceiroParagrafo: 'Em 2017, O Quadro criou o Metrô – Festival do Cinema Universitário Brasileiro, evento que vem se destacando no campo dos festivais, com a projeção de obras universitárias das mais diversas, além de numerosas atividades de formação.',
      quartoParagrafo: 'Em 2021, a produtora amplia o campo de ação, a partir do lançamento do selo Edições A Quadro, responsável pelo lançamento de livros sobre cinema.',
    },

    membros: [{
      nome: 'Anderson Simão',
      img:
        { src: '/imagens/quemsomos/integrantes_anderson_web.jpg', desc: '' },
    },
    {
      nome: 'Christopher Faust',
      img:
        { src: '/imagens/teste/posterTerror.png', desc: '' },
    },
    {
      nome: 'Evandro Scorsin',
      img:
        { src: '/imagens/teste/posterTerror.png', desc: '' },
    },
    {
      nome: 'Wellington Sari',
      img:
        { src: '/imagens/teste/posterTerror.png', desc: '' },
    },

    ],

  },

  metro: {
    logo: { src: '/imagens/festivalMetro.svg', desc: 'Logo Festival Metro' },
    titulo: 'FESTIVAL METRÔ',
    button: 'Embarque',
    texto: 'O Metrô – Festival do Cinema Universitário Brasileiro, idealizado e produzido pelo O Quadro, com a ajuda valiosa de diversos parceiros, acontece desde 2017. Espaço para exibição e a reflexão do cinema brasileiro realizado por estudantes, o Metrô é a estação que possibilita a jornada, o encontro, a troca e a invenção.',
    img: { src: '/imagens/4edicao.png', desc: '', titulo: 'Titulo da Imagem' },
    link: 'https://metrouniversitario.com.br',
    slideshow: [
      { src: '/imagens/metro/metro2017_cartaz1_horizontal_web.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/metro/metro2017_cartaz2_horizontal_web.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/metro/metro2018_cartaz_web.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/metro/metro2019_cartaz_web.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/metro/metro2020_cartaz_web.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/metro/metro2021_cartaz1_web.jpg', desc: '', titulo: 'Titulo da Imagem' },
      { src: '/imagens/metro/metro2021_cartaz2_web.jpg', desc: '', titulo: 'Titulo da Imagem' },

    ],
  },
  logos: {
    oquadro: {
      verdeVertical: { src: '/imagens/oquadro_verde_vertical1.svg', desc: 'O quadro produtora' },
      verdeHorizontal: { src: '/imagens/oquadro_verde_horizontal.svg', desc: 'O quadro produtora' },
    },
    aquadro: {
      vermelhoHorizontal: { src: '/imagens/aquadro_vermelho_horizontal.svg', desc: 'A quadro produtora' },
      vermelhoVertical: { src: '/imagens/aquadro_vermelho.svg', desc: 'A quadro produtora' },
    },
    sociais: {
      twitter: { src: '/imagens/icone/twitterIcone.svg', desc: 'Twitter Logo' },
      facebook: { src: '/imagens/icone/facebookIcone.svg', desc: 'Facebook Logo' },
      instagram: { src: '/imagens/icone/instagramIcone.svg', desc: 'Instagram Logo' },
      vimeo: { src: '/imagens/icone/vimeoIcone.svg', desc: 'Vimeo Logo' },
      youtube: { src: '/imagens/icone/youtubeIcone.svg', desc: 'Youtube Logo' },
      email: { src: '/imagens/icone/emailIcone.svg', desc: 'E-mail Logo' },
    },

  },
};
export default database;
