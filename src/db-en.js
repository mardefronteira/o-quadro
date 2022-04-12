const databaseEn = {
  filmes: [{
    id: '1',
    url: 'amador',
    titulo: 'AMADOR',
    ano: 2011,
    autor: ' WELLINGTON SARI',
    imgIcone: { src: '/imagens/filmes/amador/amador_still1.jpg', desc: '', titulo: 'Titulo da Imagem' },
    imgDestaque: { src: '/imagens/filmes/amador/amador_banner.png', desc: 'imagem', titulo: 'Titulo da Imagem' },
    imgPoster: { src: '/imagens/filmes/amador/amador_cartaz_web.jpg', desc: 'imagem', titulo: 'Titulo da Imagem' },
    galeria: [
      { src: '/imagens/filmes/amador/amador_still1.jpg', desc: 'imagem', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/amador/amador_still2.jpg', desc: 'imagem', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/amador/amador_still3.jpg', desc: 'imagem', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/amador/amador_still4.jpg', desc: 'imagem', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/amador/amador_still5.jpg', desc: 'imagem', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/amador/amador_still6.jpg', desc: 'imagem', titulo: 'Titulo da Imagem' },

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
    sinopse: 'In September 2009, three 7th grade students from a state school in Curitiba recorded themselves having sex in a bathroom. Two of them posted the video on the internet. “Amador” explores the consequences of easily captured images in the lives of young people and in the school environment.',
    participacao: 'cast.',
    categoria: 'Curta Metragem',
    tags: ['Comédia', 'Adolescente', 'Terror'],
    linkVideo: 'https://vimeo.com/26117500',
    equipe: {
      principal: {
        // eslint-disable-next-line quotes
        __html: `<p><span class="texto-verde">Direction and Screenplay:</span> Wellington Sari </p> 
        <p><span class="texto-verde">Executive Production:</span>  Alexandre Rafael Garcia </p> 
        <p><span class="texto-verde">Production Manager:</span> Anderson Simão, Evandro Scorsin </p> 
        <p><span class="texto-verde">Cinematography:</span> Renata Corrêa </p> 
        <p><span class="texto-verde">Editing:</span> Christopher Faust </p> 
        <p><span class="texto-verde">Direct Sound:</span> Nikola Matevski </p>
        <p>Project developed as part of a documentary series created by Matizar Filmes, titled “Why are we like this?”, consisting of six episodes screened by Canal Futura in 2011 and by Canal Brasil in 2012.</p>
        `,
      },
      adicional: {
        __html: `<p><span class="texto-verde">Assistant Director:</span> Evandro Scorsin
                  </p>`,
      },
    },
  },
  {
    id: '2',
    url: 'bia-mais-um',
    titulo: 'PLUS ONE',
    ano: 2021,
    autor: ' WELLINGTON SARI',
    imgIcone: { src: '/imagens/filmes/bia-mais-um/biamaisum_still1.jpg', desc: '', titulo: 'Titulo da Imagem' },
    imgDestaque: { src: '/imagens/filmes/bia-mais-um/biamaisum_banner.png', desc: '', titulo: 'Titulo da Imagem' },
    imgPoster: { src: '/imagens/filmes/bia-mais-um/biamaisum_cartaz_web_01.jpeg', desc: '', titulo: 'Titulo da Imagem' },
    galeria: [
      { src: '/imagens/filmes/bia-mais-um/biamaisum_still1.jpg', desc: 'imagem', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/bia-mais-um/biamaisum_still2.jpg', desc: 'imagem', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/bia-mais-um/biamaisum_still3.jpg', desc: 'imagem', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/bia-mais-um/biamaisum_still4.jpg', desc: 'imagem', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/bia-mais-um/biamaisum_still5.jpg', desc: 'imagem', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/bia-mais-um/biamaisum_still6.jpg', desc: 'imagem', titulo: 'Titulo da Imagem' },

    ],
    imgGaleriaAlta: [
      { src: '/imagens/filmes/bia-mais-um/biamaisum_cartaz_alta_01.jpg', desc: 'imagem', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/bia-mais-um/biamaisum_cartaz_alta_02.jpg', desc: 'imagem', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/bia-mais-um/biamaisum_still1_alta.png', desc: 'imagem', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/bia-mais-um/biamaisum_still2_alta.png', desc: 'imagem', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/bia-mais-um/biamaisum_still3_alta.png', desc: 'imagem', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/bia-mais-um/biamaisum_still4_alta.png', desc: 'imagem', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/bia-mais-um/biamaisum_still5_alta.png', desc: 'imagem', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/bia-mais-um/biamaisum_still6_alta.png', desc: 'imagem', titulo: 'Titulo da Imagem' },

    ],
    patrocinadores: { src: '/imagens/filmes/bia-mais-um/biamaisum_creditos_banner.png', desc: 'imagem', titulo: 'titulo da imagem' },
    participacao: 'Gabrielle Pizzato, Gustavo Piaskoski, Ivo Müller, Dafne Viola.',
    sinopse: 'Bia is struggling to deal with numerous changes. When she meets Jean, she tries to get some more sleep before waking up to reality.',
    categoria: 'Longa Metragem',
    linkVideo: 'https://vimeo.com/611281456',
    equipe: {
      principal: {
        // eslint-disable-next-line quotes
        __html: `<p><span class="texto-verde">Written and Directed by: </span> Wellington Sari </p> 
        <p><span class="texto-verde">Executive Production:</span> Anderson Simão, Christopher Faust </p> 
        <p><span class="texto-verde">Production Management:</span> Leonardo Otto, Evandro Scorsin </p> 
        <p><span class="texto-verde">Cinematography:</span> André Senna </p> 
        <p><span class="texto-verde">Art Director:</span> Aricia Machado </p> 
        <p><span class="texto-verde">Editor:</span> Tomás Von Der Osten </p> 
        <p><span class="texto-verde">Sound engineer:</span> Bruno Ito </p>
        <p><span class="texto-verde">Colorist:</span> Lucas Kosinski </p>
        <p><span class="texto-verde">Sound Designer and Mixing:</span> Leandro Cordeiro <p>
        <p>
        Project developed with the support of the Cultural Support and Incentive Program - Cultural Foundation of Curitiba and the City of Curitiba, with incentives from the Ebanx corporation.        </p>
        `,
      },
      adicional: {
        __html: `<p><span class="texto-verde">Suporting Cast:</span> Juliana Spricigo, 
        Alex Barbosa, 
        Lorena Lima, 
        Beatriz Rodrigues, 
        Jean Guilherme Filho, 
        Laura Gomes Tizzoni Lunas, 
        Caterina Malucelli Neves </p>
        <p><span class="texto-verde">Associate Executive Producer:</span> Gustavo Piaskoski |
        <span class="texto-verde">Assistant Director:</span> Stefano Lopes |
        <span class="texto-verde">Production Assistant:</span> Vanessa Leal |
        <span class="texto-verde">Camera Operator:</span> Rosano Mauro Jr. |
        <span class="texto-verde">First Assistant Camera:</span> Murillo Marchesi |
        <span class="texto-verde">Photography Assistants:</span> Bianca Ono, Gabriel Mont'Serrat |
        <span class="texto-verde">Electrician / Machinery:</span> Danilo Custódio, Murilo Lazarin |
        <span class="texto-verde">Assistant Art Directors:</span> Lara Maria, José Lucas Alves | 
        <span class="texto-verde">Costume Assistant:</span> Larissa Monteiro | 
        <span class="texto-verde">Direct Sound Assistant:</span> Yasmin Sier | 
        <span class="texto-verde">Production Assistant (O Quadro):</span> Anna Clara Oliveira | 
        <span class="texto-verde">Production Assistant (Transporte):</span> Fernanda Stancik | 
        <span class="texto-verde">Production Assistant (Platô):</span> Lucas Ajuz | 
        <span class="texto-verde">Logger:</span> Matheus Kerniski | 
        <span class="texto-verde">Post Production:</span> Onda Finalização | 
        <span class="texto-verde">Sound Studio:</span> Ambiente Audio | 
        <span class="texto-verde">Script Supervisor:</span> Ana Johann | 
        <span class="texto-verde">Designer:</span> Pedro Giongo | 
        <span class="texto-verde">Subtitles:</span> Paulo Scarpa - Ó Editorial | 
        <p>
        <p>
        <span class="texto-verde">Support:</span> GP7 Cinema, Movimento, Onda Finalização, Ambiente Audio
        <p>`,
      },
    },
  },
  {
    id: '3',
    url: 'bye-bye-jaqueline',
    titulo: 'BYE BYE JAQUELINE',
    ano: 2017,
    autor: ' ANDERSON SIMÃO',
    imgIcone: { src: '/imagens/filmes/bye-bye-jaqueline/byebyejaqueline_still1.jpg', desc: '', titulo: 'Titulo da Imagem' },
    imgDestaque: { src: '/imagens/filmes/bye-bye-jaqueline/byebyejaqueline_banner.jpg', desc: '', titulo: 'Titulo da Imagem' },
    imgPoster: { src: '/imagens/filmes/bye-bye-jaqueline/byebyejaqueline_cartaz_web.jpg', desc: '', titulo: 'Titulo da Imagem' },
    galeria: [
      { src: '/imagens/filmes/bye-bye-jaqueline/byebyejaqueline_still1.jpg', desc: 'imagem', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/bye-bye-jaqueline/byebyejaqueline_still2.jpg', desc: 'imagem', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/bye-bye-jaqueline/byebyejaqueline_still3.jpg', desc: 'imagem', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/bye-bye-jaqueline/byebyejaqueline_still4.jpg', desc: 'imagem', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/bye-bye-jaqueline/byebyejaqueline_still5.jpg', desc: 'imagem', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/bye-bye-jaqueline/byebyejaqueline_still6.jpg', desc: 'imagem', titulo: 'Titulo da Imagem' },

    ],
    imgGaleriaAlta: [
      { src: '/imagens/filmes/bye-bye-jaqueline/byebyejaqueline_cartaz_alta_01.jpg', desc: 'imagem', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/bye-bye-jaqueline/byebyejaqueline_cartaz_alta_02.jpg', desc: 'imagem', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/bye-bye-jaqueline/byebyejaqueline_still1_alta.png', desc: 'imagem', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/bye-bye-jaqueline/byebyejaqueline_still2_alta.png', desc: 'imagem', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/bye-bye-jaqueline/byebyejaqueline_still3_alta.png', desc: 'imagem', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/bye-bye-jaqueline/byebyejaqueline_still4_alta.png', desc: 'imagem', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/bye-bye-jaqueline/byebyejaqueline_still5_alta.png', desc: 'imagem', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/bye-bye-jaqueline/byebyejaqueline_still6_alta.png', desc: 'imagem', titulo: 'Titulo da Imagem' },

    ],
    patrocinadores: { src: '/imagens/filmes/bye-bye-jaqueline/byebyejaqueline_creditos_banner.png', desc: '', titulo: 'titulo da imagem' },
    participacao: 'Poliana Oliveira, Gabrielle Pizzato Santana, Victor Carlim, Leonardo Oliveira, Wellington Sari, Evandro Scorsin, Flávia Cassias and Iza Kürten.',
    sinopse: `It’s easy being sixteen. The hard part is being sixteen and having to go to school every day. It's even harder being sixteen and having to go to school and falling in love with Fernando, the boy in the next class. It's easy being Jaqueline. The hard part is being Jaqueline and knowing Fernando doesn't care.`,
    categoria: 'Longa Metragem',
    tags: ['Comédia', 'Adolescente', 'Terror'],
    linkVideo: 'https://vimeo.com/244453031',
    equipe: {
      principal: {
        // eslint-disable-next-line quotes
        __html: `<p>
        <p><span class="texto-verde">Direction:</span> Anderson Simão </p>
        <p><span class="texto-verde">Writer:</span> Wellington Sari </p> 
        <p><span class="texto-verde">Executive Production:</span> Christopher Faust and Anderson Simão </p> 
        <p><span class="texto-verde">Production Management:</span> Evandro Scorsin and Wellington Sari </p> 
        <p><span class="texto-verde">Cinematography:</span> Daniel Florencio </p> 
        <p><span class="texto-verde">Costume:</span> Isbella Fonseca </p> 
        <p><span class="texto-verde">Editor:</span> Christopher Faust </p> 
        <p><span class="texto-verde">Sound Engineer:</span> Bruno Ito </p>
        <p><span class="texto-verde">Colorist:</span> Marcelo Tanaka </p>
        <p><span class="texto-verde">Sound Designer and Mixing:</span> Alexandre Rogoski<p>
        <p>
        Project developed with the support of the Cultural Support and Incentive Program - Cultural Foundation of Curitiba and the City of Curitiba, with incentives from Robert Bosch and Pátio Batel. Distribution by Lança Filmes.         </p>  
        `,
      },
      adicional: {
        __html: `
        <p><span class="texto-verde">Supporting cast:</span> Lois Schmidt, Bruno Ito, Christopher Faust</p>
        <p><span class="texto-verde">Assistant Director:</span> Evandro Scorsin |
        <span class="texto-verde">Art Director:</span> G. Sari |
        <span class="texto-verde">Production Assistant: </span> Alexandre Rafael Garcia |
        <span class="texto-verde">Photography Assistant/Camera Operator:</span> Marcelo Tanaka |
        <span class="texto-verde">Direct Sound Assistant:</span> Alexandre Magno | 
        <span class="texto-verde">Costume Assistant:</span> Laís Lubel | 
        <span class="texto-verde">Clapperboard:</span> Annabel Poly and Paulo Vitor M. Costa |
        <span class="texto-verde">Still:</span> Paula Negri |
        <span class="texto-verde">Object Production:</span> Cassiana Maranha |
        <span class="texto-verde">Graphic Design:</span> Melina Correia | 
        <span class="texto-verde">Dialogue Editing and ADR:</span> Samuel Jacintho | 
        <span class="texto-verde">Foley Editing and Sound Effects:</span> Adriano Elias | 
        <span class="texto-verde">Sound Effects Editor:</span> Felipe Ayres, Bruno Ito | 
        <span class="texto-verde">Sound Studio:</span> Off-Beat Audio | 
        <span class="texto-verde">Spanish Subtitles:</span> Larissa Mehl  | 
        <span class="texto-verde">English Subtitles:</span> Raquel Ribeiro |
        </p>
        <p>
        <span class="texto-verde">Extras:</span> Andreia A. A. Porto | Andressa F. Souza | Caroline Altvater | Douglas Bayer Monteiro | Eduarda Borges | Fabio Padilha | Gabrielle Gutierrez Aragão | Giulia Giovanella | Isabella Boddy da Silva | João Guilherme Pellanda | Kesley Ladaninski Garriga | Larissa Antonio | Larissa Tatiana Duarte | Luiza Mayer Seixas Narciso | Valentina V. C. Nogaroto | Vitor Trelinski de Carvalho | Willian Gabriel Molari | Yan Cabral Ramos
        </p>`,
      },
    },
  },
  {
    id: '4',
    url: 'coloridos',
    titulo: 'COLORIDOS',
    ano: 2011,
    autor: ' CHRISTOPHER FAUST, EVANDRO SCORSIN',
    imgIcone: { src: '/imagens/filmes/coloridos/coloridos_still1.jpg', desc: '', titulo: 'Titulo da Imagem' },
    imgDestaque: { src: '/imagens/filmes/coloridos/coloridos_banner.jpg', desc: '', titulo: 'Titulo da Imagem' },
    imgPoster: { src: '/imagens/filmes/coloridos/coloridos_cartaz_web.jpg', desc: '', titulo: 'Titulo da Imagem' },
    galeria: [
      { src: '/imagens/filmes/coloridos/coloridos_still1.jpg', desc: 'imagem', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/coloridos/coloridos_still2.jpg', desc: 'imagem', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/coloridos/coloridos_still3.jpg', desc: 'imagem', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/coloridos/coloridos_still4.jpg', desc: 'imagem', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/coloridos/coloridos_still5.jpg', desc: 'imagem', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/coloridos/coloridos_still6.jpg', desc: 'imagem', titulo: 'Titulo da Imagem' },

    ],
    imgGaleriaAlta: [
      { src: '/imagens/filmes/coloridos/coloridos_cartaz_alta.jpg', desc: 'imagem', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/coloridos/coloridos_still1_alta.jpg', desc: 'imagem', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/coloridos/coloridos_still2_alta.jpg', desc: 'imagem', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/coloridos/coloridos_still3_alta.jpg', desc: 'imagem', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/coloridos/coloridos_still4_alta.jpg', desc: 'imagem', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/coloridos/coloridos_still5_alta.jpg', desc: 'imagem', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/coloridos/coloridos_still6_alta.jpg', desc: 'imagem', titulo: 'Titulo da Imagem' },

    ],
    patrocinadores: { src: '/imagens/filmes/coloridos/matizar_pagea_banner.png', desc: '', titulo: 'titulo da imagem' },
    participacao: 'Carol Louise, Felipe Schindler, Jenifer Kamila, Jéssica Tamaro Beckhauser, Lilan Camile Schelbauer Panek, Roberta A. P. Guimarães, Thamirys Ramos, Vaniele Cristina, Lucas Telles and Nadiele Ferreira Leal',
    sinopse: `It's Sunday. Shining sun, bright clothes, weird hair, colored glasses. A group of young people gather to debate their place in society.`,
    categoria: 'Curta Metragem',
    tags: ['Comédia', 'Adolescente', 'Terror'],
    linkVideo: 'https://youtu.be/qd6OBAcnN74',
    equipe: {
      principal: {
        // eslint-disable-next-line quotes
        __html: `<p>
        <p><span class="texto-verde">Direction and Screenplay:</span> Christopher Faust, Evandro Scorsin </p>
        <p><span class="texto-verde">Executive Production:</span> Alexandre Rafael Garcia </p> 
        <p><span class="texto-verde">Production Management:</span> Anderson Simao, Juliana Rodrigues </p> 
        <p><span class="texto-verde">Cinematography:</span> Renata Corrêa </p> 
        <p><span class="texto-verde">Editing:</span> Tomás von der Osten </p> 
        <p><span class="texto-verde">Direct Sound:</span> Nikola Matevski </p>
        <p>
        Project developed as part of a documentary series created by Matizar Filmes, titled “Why are we like this?”, consisting of six episodes screened by Canal Futura in 2011 and by Canal Brasil in 2012.         </p>
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
    titulo: 'BLUE HEART',
    ano: 2014,
    autor: ' WELLINGTON SARI',
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
    sinopse: 'Janco and Samuel are the owners of a detective agency at school. While they investigate the case of a missing volleyball, Janco tries to get closer to the girl he fell in love with, Dariana.',
    categoria: 'Curta Metragem',
    tags: ['Comédia', 'Adolescente', 'Terror'],
    linkVideo: 'https://youtu.be/HMkA8M9cSj4',
    equipe: {
      principal: {
        // eslint-disable-next-line quotes
        __html: `<p>
        <p><span class="texto-verde">Direction and Screenplay:</span> Wellington Sari </p>
        <p><span class="texto-verde">Executive Production:</span> Anderson Simão </p> 
        <p><span class="texto-verde">Production Management:</span> Alexandre Rafael Garcia and Evandro Scorsin </p> 
        <p><span class="texto-verde">Cinematography:</span> Daniel Florencio </p> 
        <p><span class="texto-verde">Art Direction:</span> Alex Rocca </p> 
        <p><span class="texto-verde">Editing:</span> Christopher Faust </p> 
        <p><span class="texto-verde">Direct Sound:</span> Guilherme Cordova </p>
        <p><span class="texto-verde">Sound Editing and Mixing:</span> Alexandre Rogoski </p>
        <p>
        Project developed with the support of the Cultural Support and Incentive Program - Cultural Foundation of Curitiba and the City of Curitiba, with incentives from Condor.        <p>
        `,
      },
      adicional: {
        __html: `<p>
        <span class="texto-verde">Secondary Cast:</span> Nicolas Hübler Mosko, Wellington Sari, Julio Cesar Heupa and Evandro Scorsin.</p>
        <span class="texto-verde">Assistant Director:Assistant Director:</span> Christopher Faust |
        <span class="texto-verde">Photography Assistant and Image Post-Production:</span> Marcelo Tanaka |
        <span class="texto-verde">Electrician:</span> Leandro Telles |
        <span class="texto-verde">Direct Sound Assistant:</span> Felipe Ribeiro | 
        <span class="texto-verde">Designer:</span> Melina Correia |
        <span class="texto-verde">Sound Editing:</span> Henrique Bertol | 
        <span class="texto-verde">Sound Editing Assistant: </span> Samuel Jacintho |
        <span class="texto-verde">Sound Studio:</span> Off-Beat Audio |
        <span class="texto-verde">Still:</span> Tomás Von Der Osten |
        <span class="texto-verde">Clapperboard and Logging:</span> Paula Negri | 
        <span class="texto-verde">Production Assistant  and Assistant Costume Designer:</span> Caroline Biagi | 
        <span class="texto-verde">Assistant Art Director and Object Producer:</span> Carolina Angelo | 
        <span class="texto-verde">Assistant Art Director:</span> Fernando Moreira | 
        <span class="texto-verde">English Subtitles:</span> Raquel Ribeiro |
        <span class="texto-verde">Spanish Subtitles:</span> Larissa Mehl  | 
        <span class="texto-verde">DVD Authoring:</span> Guilherme Delamuta |
        <span class="texto-verde">Sound Recordists:</span> Adenilson Sutil de Oliveira, Angela Maria Cordeiro de Oliveira and Jonatan Kovalski |
        </p>
        <p>
        <span class="texto-verde">Support:</span> Colégio Medianeira, Prefeitura de Curitiba, Sanepar, Topt Bonecos
        </p>`,
      },
    },
  },
  {
    id: '6',
    url: 'dias-de-trovao',
    titulo: 'DAYS OF THUNDER',
    ano: 2015,
    autor: ' ALEXANDRE RAFAEL GARCIA',
    imgIcone: { src: '/imagens/filmes/dias-de-trovao/diasdetrovao_still1.jpg', desc: '', titulo: 'Titulo da Imagem' },
    imgDestaque: { src: '/imagens/filmes/dias-de-trovao/diasdetrovao_banner.jpg', desc: '', titulo: 'Titulo da Imagem' },
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
    patrocinadores: { src: '/imagens/filmes/dias-de-trovao/diasdetrovao_creditos_banner.png', desc: '', titulo: 'titulo da imagem' },

    participacao: 'Gustavo Piaskoski, Bruna Roveda, João Maurílio, Wellington Sari, Jean Guilherme Filho, Pedro Gaeta, Izabela Cruz and Pâmela Branchi.',
    sinopse: 'Eric is in love with his best friend Eduarda. But Michel is quicker and wins her heart first. At the kart tracks, Eric has a chance to beat his opponent in a wild competition. Love and speed, love for speed. Those were the Days of Thunder.',
    categoria: 'Média Metragem',
    tags: ['Comédia', 'Adolescente', 'Terror'],
    linkVideo: 'https://youtu.be/8LUHCTKb2Bs',
    equipe: {
      principal: {
        // eslint-disable-next-line quotes
        __html: `<p>
        <p><span class="texto-verde">Direction:</span> Alexandre Rafael Garcia </p>
        <p><span class="texto-verde">Screenplay:</span> Wellington Sari </p> 
        <p><span class="texto-verde">Executive Production:</span>  Anderson Simão </p> 
        <p><span class="texto-verde">Production Management:</span> Evandro Scorsin and Wellington Sari </p> 
        <p><span class="texto-verde">Cinematography:</span> Daniel Florencio </p> 
        <p><span class="texto-verde">Editing:</span> Christopher Faust </p> 
        <p><span class="texto-verde">Direct Sound:</span> Bruno Ito </p>
        <p><span class="texto-verde">Sound Post-Production:</span> Alexandre Rogoski<p>
        <p>
        Project developed with the support of the Cultural Support and Incentive Program - Cultural Foundation of Curitiba and the City of Curitiba, via the Subsidized Patronage Law, with incentives from Condor        <p>
        `,
      },
      adicional: {
        __html: `<p>
        <span class="texto-verde">Assistant Director:</span> Christopher Faust |
        <span class="texto-verde">Art Direction:</span> Wildebrand S. Loyola |
        <span class="texto-verde">Camera Operator/Photography Assistant:</span> Marcelo Tanaka |
        <span class="texto-verde">Musical Direction:</span> Wellington Sari |
        <span class="texto-verde">Music Production:</span> Anderson Simão |
        <span class="texto-verde">Costume Designer:</span> Ana Deliberador |
        <span class="texto-verde">Assistant Art Director:</span> Cinthia Manochio |
        <span class="texto-verde">Direct Sound Assistant:</span> Felipe Ribeiro | 
        <span class="texto-verde">Second Unit Directors:</span> Christopher Faust, Evandro Scorsin and Wellington Sari | 
        <span class="texto-verde">Electrician:</span> Leandro Telles |
        <span class="texto-verde"> Assistant Electrician:</span> Edson Mazuco |
        <span class="texto-verde">Art Designer:</span> Bruna Michelin |
        <span class="texto-verde">Still:</span> Ana Paula Málaga | 
        <span class="texto-verde">Clapperboard:</span> Dewi Jost | 
        <span class="texto-verde">Sound Editing:</span> Adriano Elias and Bruno Ito | 
        <span class="texto-verde">Sound Studio:</span> Off-Beat Audio | 
        <span class="texto-verde">Image Post-Production:</span> Marcelo Tanaka | 
        <span class="texto-verde">Storyboard:</span> Maurício Ramos Marques | 
        <span class="texto-verde">Making of:</span> Patrícia Evans | 
        <span class="texto-verde">Graphic Designer:</span> Melina Correia |
        <span class="texto-verde">English Subtitles:</span> Raquel Ribeiro |
        <span class="texto-verde">Spanish Subtitles:</span> Larissa Mehl | 
        <span class="texto-verde">DVD and Blu-ray Authoring:</span> Guilherme Delamuta | 
        <span class="texto-verde">Sound Recordists:</span>  Adenilson Sutil de Oliveira, Angela Maria Cordeiro de Oliveira, Itamar Paciornkik and Jonatan Kovalski 
        </p>
        <p>
        <span class="texto-verde">Supporting Cast:</span> Monique Rau (voz) | Wellington Sari (voz) | Evandro Scorsin (voz) | Christopher Faust | Wevertton Marques (piloto dublê de Michel) | Ivo Neto, Anderson Simão, Daniel Florencio, Wellington Sari (pilotos dublês de Eric)
        </p>
        <p>
        <span class="texto-verde">Pilots:</span> 
        Agnã Zago | Dayana Ketlyn Alves | Diego Dias Said | Elias Faria da Silva | Jamil Merlin Said | João Luiz Alves | José Lucas Galvão Matos | Josias | Ivo Neto | Samuel Lauro Marques | Wevertton Marques
        </p>
        <p>
        <span class="texto-verde">Support:</span>
        Kartódromo de São José dos Pinhais | Heaven Advertising | MKI - Marumby Kart Indoor | Off-Beat Audio | Prefeitura Municipal de Curitiba
        </p>
        `,
      },
    },
  },
  {
    id: '7',
    url: 'dois-amores',
    titulo: 'TWO LOVES',
    ano: 2013,
    autor: ' ANDERSON SIMÃO',
    imgIcone: { src: '/imagens/filmes/dois-amores/doisamores_still1.jpg', desc: '', titulo: 'Titulo da Imagem' },
    imgDestaque: { src: '/imagens/filmes/dois-amores/doisamores_banner.jpg', desc: '', titulo: 'Titulo da Imagem' },
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
    sinopse: 'Michel, a bitter young man meets Marcela, a sweet girl.',
    categoria: 'Curta Metragem',
    tags: ['Comédia', 'Adolescente', 'Terror'],
    linkVideo: 'https://youtu.be/1lDB0Zn5Zek',
    equipe: {
      principal: {
        // eslint-disable-next-line quotes
        __html: `<p>
        <p><span class="texto-verde">Direction and Screenplay:</span> Anderson Simão </p>
        <p><span class="texto-verde">Production:</span> Alexandre Rafael Garcia, Anderson Simão, Christopher Faust, Evandro Scorsin </p> 
        <p><span class="texto-verde">Cinematography:</span> Guilherme Delamuta</p> 
        <p><span class="texto-verde">Direct Sound:</span> Lucas Maffini</p>
        <p><span class="texto-verde">Editing and Image Post-Production:</span> Guilherme Delamuta</p> 
        <p><span class="texto-verde">Sound Post-Production:</span> Bruno Ito</p>
        </p>
        <p>
        This film is part of the project “Summer Films” 2013
        </p>
        `,
      },
      adicional: {
        __html: `<p>
        <span class="texto-verde">Graphic Designer:</span> Melina Correia |
        <span class="texto-verde">Editing Assistant:</span> Paula Negri |
        <span class="texto-verde">Spanish Subtitles:</span> Graziela Braz | 
        <span class="texto-verde">English Subtitles:</span> Raquel Ribeiro |
        </p>
        <p>
        <span class="texto-verde">Support:</span>
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
    autor: ' GABRIEL BORGES',
    imgIcone: { src: '/imagens/filmes/eu-te-amo-bressan/euteamobressan_still1.jpeg', desc: '', titulo: 'Titulo da Imagem' },
    imgDestaque: { src: '/imagens/filmes/eu-te-amo-bressan/euteamobressan_banner.jpg', desc: 'descrição da imagem', titulo: 'Titulo da Imagem' },
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

    participacao: 'Pedro Ramires; Pedro Garcia; Letícia Decker; Victor Curuca and Maicon Douglas.',
    sinopse: 'After a romantic breakup, Bressan narrates episodes of his relationship in an unusual love story.',
    categoria: 'Curta Metragem',
    tags: ['Comédia', 'Adolescente', 'Terror'],
    linkVideo: 'https://youtu.be/ca9pDxzPDfE',
    equipe: {
      principal: {
        // eslint-disable-next-line quotes
        __html: `<p>
        <p><span class="texto-verde">Direction and Screenplay:</span> Gabriel Borges </p>
        <p><span class="texto-verde">Executive Production:</span> Sabrina Trentim and Gabriel Borges</p>
        <p><span class="texto-verde">Production Management:</span> Sabrina Trentim</p>  
        <p><span class="texto-verde">Cinematography:</span> Nani Colomé</p> 
        <p><span class="texto-verde">Art Direction:</span> Pedro Vilo</p> 
        <p><span class="texto-verde">Editing:</span> Rodrigo Tomita</p> 
        <p><span class="texto-verde">Direct Sound:</span> Vinicius André Maciel and Bruno Araújo</p> 
        <p><span class="texto-verde">Coloring and Post-Production:</span> André F. Diniz</p>
        <p><span class="texto-verde">Sound Design:</span> Vinicius André Maciel</p>
        <p><span class="texto-verde">Sound Design and Soundtrack: </span>Gustavo Mazuroski</p>
        <p><span class="texto-verde">Production Company:</span> Coco Filmes</p>
        <p><span class="texto-verde">Co-Production Company:</span> O Quadro</p>
        </p>
        <p>
        Project developed with the support of the Cultural Support and Incentive Program - Cultural Foundation of Curitiba and the City of Curitiba.        </p>
        `,
      },
      adicional: {
        __html: `<p>
        <span class="texto-verde">Assistant Director:</span> Gabriela Ferreira |
        <span class="texto-verde">Assistant Camera:</span> Bianca Ono |
        <span class="texto-verde">Makeup, Hair, and Art Assistant:</span> Maria Gabriela Goulart | 
        <span class="texto-verde">Makeup Assistant:</span> Pâmela Kath |
        <span class="texto-verde">Logger:</span> André F. Diniz |
        <span class="texto-verde">Production Assistant and Graphic Design:</span> Tiago Felipe |
        <span class="texto-verde">Making Of:</span> Iury Peres Malucelli and Alanis Machado |
        </p>
        <p>
        <span class="texto-verde">Support:</span>
        Unespar
        </p>
        `,
      },
    },
  },
  {
    id: '9',
    url: 'euller-miller',
    titulo: 'EULLER MILLER BETWEEN TWO WORLDS',
    ano: 2018,
    autor: ' FERNANDO SEVERO',
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
    sinopse: 'Euller Miller, a young native Brazilian of Kaiwá ethnicity, leaves his small village just outside Dourados (MS) to study dentistry at a public university in the crowded capital city of the state of Paraná. The film follows the complex transition between two very different worlds and the search for new horizons without abandoning his indigenous roots.',
    categoria: 'Longa Metragem',
    tags: ['Comédia', 'Adolescente', 'Terror'],
    linkVideo: 'https://vimeo.com/228310631',
    equipe: {
      principal: {
        // eslint-disable-next-line quotes
        __html: `<p>
        <p><span class="texto-verde">Direction, Screenplay, and Editing:</span> Fernando Severo </p>
        <p><span class="texto-verde">Executive Production:</span> Anderson Simão and Christopher Faust </p> 
        <p><span class="texto-verde">Production Management:</span> Evandro Scorsin and Wellington Sari </p> 
        <p><span class="texto-verde">Cinematography:</span> Jonathan van Thomaz </p> 
        <p><span class="texto-verde">Editor:</span> Tomás von der Osten </p> 
        <p><span class="texto-verde">Sound Enginnering and Soundtrack: </span> Felipe Ayres </p>
        <p><span class="texto-verde">Sound Design and Mixing: </span> Alexandre Rogoski<p>
        <p>
        Project developed via Prodav 12 public notice (Public TVs) of the Audiovisual Sector Fund. 
        </p>
        `,
      },
      adicional: {
        __html: `
          <p>
            <span class="texto-verde">Interviewees:</span> Adalton Barbosa de Almeida | 
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
            <span class="texto-verde">Photography Assistant and Camera Operator:</span> Carlos Lenine |
            <span class="texto-verde">Second Photography Assistant:</span> Lucas Kosinski |
            <span class="texto-verde">Dialogue Editor:</span> Samuel Jacintho |
            <span class="texto-verde">Sound Editing Assistant:</span> Yuri Grigoletti |
            <span class="texto-verde">Post Sound Production Studio:</span> Off-Beat Audio |
            <span class="texto-verde">Post-production Coordinator:</span> Guilherme Delamuta |
            <span class="texto-verde">Color Correction: </span> Rafael Werner |
            <span class="texto-verde">Graphic Art and Cards:</span> Pedro Giongo | 
            <span class="texto-verde">Still Photographer:</span> Henrique Thoms | 
            <span class="texto-verde">Transcript of interviews:</span> Leonardo Otto |
            <span class="texto-verde">Accessibility Content:</span> ETC filmes |
            <span class="texto-verde">Audio Description Screenplay:</span> Joana Oliveira |
            <span class="texto-verde">Cognitive Audio Description Consulting:</span> Edgar Jacques | 
            <span class="texto-verde">Audio Description Narrator:</span> Thonny Cavaglieri | 
            <span class="texto-verde">Descriptive Subtitles:</span> Claudia Pinheiro | 
            <span class="texto-verde">LIBRAS Translator:</span> Regiane Pereira | 
            <span class="texto-verde">Specialized LIBRAS Consulting:</span> Diogo Petarnella | 
            <span class="texto-verde">Accessibility Coordination:</span> Thais Ortega and Natália Blandy | 
            <span class="texto-verde">Translation and Subtitles:</span> ETC filmes and Cinthia Alencar 
          </p>
          <p>
          <span class="texto-verde">Support:</span>
          MANC - Câmeras and Acessórios, MAI - Museu de Arte Indígena        
          </p>

        `,
      },
    },
  },
  {
    id: '10',
    url: 'festa-no-apartamento-da-suzana',
    titulo: 'PARTY AT THE APT',
    ano: 2012,
    autor: ' CHRISTOPHER FAUST',
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
      { src: '/imagens/filmes/festa-no-apartamento-da-suzana/festanoap_cartaz_alta.jpg', desc: 'imagem', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/festa-no-apartamento-da-suzana/festanoap_still1.jpg', desc: 'imagem', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/festa-no-apartamento-da-suzana/festanoap_still2.jpg', desc: 'imagem', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/festa-no-apartamento-da-suzana/festanoap_still3.jpg', desc: 'imagem', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/festa-no-apartamento-da-suzana/festanoap_still4.jpg', desc: 'imagem', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/festa-no-apartamento-da-suzana/festanoap_still5_alta.jpg', desc: 'imagem', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/festa-no-apartamento-da-suzana/festanoap_still6_alta.jpg', desc: 'imagem', titulo: 'Titulo da Imagem' },

    ],
    patrocinadores: { src: '', desc: '', titulo: 'titulo da imagem' },

    participacao: 'Evandro Scorsin, Ana Paula Málaga, Morgana Horst, Alexandre Canetta, Eduardo Colgan, Tomás Von Der Osten, Caroline Biagi, Marisa Merlo.',
    sinopse: `Augusto is invited to a party at a college friend's apartment.`,
    categoria: 'Curta Metragem',
    tags: ['Comédia', 'Adolescente', 'Terror'],
    linkVideo: 'https://youtu.be/5IdN79q8rWQ',
    equipe: {
      principal: {
        // eslint-disable-next-line quotes
        __html: `<p>
        <p><span class="texto-verde">Direction, Screenplay, Production, and Sound Editing:</span> Christopher Faust </p>
        <p><span class="texto-verde">Cinematography:</span> Renata Corrêa</p>
        <p><span class="texto-verde">Art Direction:</span> Caroline Biagi</p>  
        <p><span class="texto-verde">Audio Recording:</span> Tomás von der Osten</p> 
        <p><span class="texto-verde">Narration:</span> Diego Florentino</p> 
        </p>
        <p>
        Project developed for the Single Take Workshop, offered by the 7th Curta Oito - International Super8 Film Festival of Curitiba.        </p>
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
    titulo: 'EXPLOSIVE GIRL',
    ano: 2012,
    autor: ' EVANDRO SCORSIN',
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

    participacao: 'John Godoy, Gabriela Dinnies and Marcela Mancino.',
    sinopse: 'Thiago is in love with the girl that appears every day in his dreams. Obsessed by the desire to find her, the boy can’t sleep anymore.',
    categoria: 'Curta Metragem',
    tags: ['Comédia', 'Adolescente', 'Terror'],
    linkVideo: 'https://youtu.be/IWO3lAiQM3I',
    equipe: {
      principal: {
        // eslint-disable-next-line quotes
        __html: `<p>
        <p><span class="texto-verde">Direction and Screenplay:</span> Evandro Scorsin </p>
        <p><span class="texto-verde">Production:</span> Alexandre Rafael Garcia, Anderson Simão, Christopher Faust, Evandro Scorsin, Wellington Sari </p> 
        <p><span class="texto-verde">Cinematography:</span> Daniel Florencio </p> 
        <p><span class="texto-verde">Art Direction:</span> Alex Rocca</p> 
        <p><span class="texto-verde">Editing:</span> Christopher Faust </p> 
        <p><span class="texto-verde">Direct Sound:</span> João Menna Barreto </p>
        <p><span class="texto-verde">Sound Post-Production:</span> Alexandre Rogoski<p>
        <p>
        This film is part of the project "Summer Films" 2012
        <p>
        `,
      },
      adicional: {
        __html: `<p>
          <p>
            <span class="texto-verde">Graphic Design:</span> Melina Correia |
            <span class="texto-verde">Graphic Design:</span> Anderson Simão |
            <span class="texto-verde">Assistant Director:</span> Christopher Faust |
            <span class="texto-verde">Sound Editing Assistant:</span> Samuel Jacintho |
            <span class="texto-verde">Image Post Production and Editing Assistant:</span> Guilherme Delamuta |
            <span class="texto-verde"> Subtitle Translation:</span> Clariana Borzone 
          </p>
          <p>
          <span class="texto-verde">Support:</span>
          Off-Beat Audio, Padaria América, Sanepar and Videolocadora Nicarágua
          </p>
        </p>
        `,
      },
    },
  },
  {
    id: '12',
    url: 'garoto-barba',
    titulo: 'BEARD BOY',
    ano: 2010,
    autor: ' CHRISTOPHER FAUST',
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
    sinopse: 'A fable about a child who, due to a rare disease, has a beard. Felipe likes to be what he is, but feels displaced because other people usually look at him differently.',
    categoria: 'Curta Metragem',
    tags: ['Comédia', 'Adolescente', 'Terror'],
    linkVideo: 'https://youtu.be/1We3NLPocHY',
    equipe: {
      principal: {
        // eslint-disable-next-line quotes
        __html: `<p>
        <p><span class="texto-verde">Direction and Screenplay:</span> Christopher Faust </p>
        <p><span class="texto-verde">Executive Production:</span> Antonio Junior </p> 
        <p><span class="texto-verde">Production Management:</span> Wellington Sari, Marisa Merlo and Aly Muritiba </p> 
        <p><span class="texto-verde">Cinematography:</span> Maurício Baggio </p> 
        <p><span class="texto-verde">Art Direction:</span> Alex Rocca and Ana Paula Málaga</p>
        <p><span class="texto-verde">Makeup:</span> Marcelino de Miranda </p>  
        <p><span class="texto-verde">Editing:</span> Diego Florentino </p> 
        <p><span class="texto-verde">Image Post-Production:</span> Nathália Okimoto<p>
        <p><span class="texto-verde">Direct Sound:</span> João Marcelo Gomes </p>
        <p><span class="texto-verde">Sound Design:</span> Alexandre Rogoski </p>
        </p>
        <p>
        Project developed through the Curta Criança Public Notice 2009, promoted by the Ministry of Culture (MinC).        
        </p>
        `,
      },
      adicional: {
        __html: `
          <p>
            <span class="texto-verde">Secondary Cast:</span> Joel José da Silva Junior, Pedro Albigo, Ricardo da Rocha, Robert Tomal, Sandro B. Strapasson, Débora Vecchi, Sabine Villatore, Marcel Szymanski, Everaldo Sant 'Anna, Bruno de Oliveira, João Pedro Rocha, Wagner Jovanaci, Camila Jorge, There Postui, Celso Moreira, Matheus Correia Mancini, Handerson Banks. |
            <span class="texto-verde">Narration:</span> Narration: Luciano Lacerda |
            <span class="texto-verde">Assistant Director:</span> Bruno de Oliveira and Evandro Scorsin |
            <span class="texto-verde">Assistant Photographer:</span> André Chesini |
            <span class="texto-verde">Assistant Art Director:</span> Caroline Biagi and Leandro Telles |
            <span class="texto-verde">Costume Design:</span> Karina de Souza |
            <span class="texto-verde">Clapperboard:</span> Ana Paula Cardoso |
            <span class="texto-verde">Graphic Design:</span> Melina Correia |
            <span class="texto-verde">Editing Assistant:</span> Stephanie Thomas |
            <span class="texto-verde">Sound Editing Assistant:</span> Renan Deodato and Vitor Moraes |
            <span class="texto-verde">Soundtrack:</span> Rodrigo Lemos |
            <span class="texto-verde">Still:</span> Rosano Mauro Jr. |
            <span class="texto-verde">Making Of:</span> Maria Fernanda Penha |
            <span class="texto-verde">Chief Electrician:</span> Sagui |
            <span class="texto-verde">Assistant Electrician:</span> Maikon Batista |
            <span class="texto-verde">Chief Machinist:</span> Coqueiro |
            <span class="texto-verde">Driver:</span> Mano and Leandro Telles 
          </p>

          <p>
          <span class="texto-verde">Support:</span>
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
    titulo: 'POSTER BOY',
    ano: 2015,
    autor: ' CHRISTOPHER FAUST',
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
    sinopse: 'Vitor, famous as a kid for starring in a toothpaste commercial, has a date with a girl from his past.',
    categoria: 'Curta Metragem',
    tags: ['Comédia', 'Adolescente', 'Terror'],
    linkVideo: 'https://youtu.be/OsSUb6Pt4no',
    equipe: {
      principal: {
        // eslint-disable-next-line quotes
        __html: `<p>
        <p><span class="texto-verde">Direction:</span> Christopher Faust </p>
        <p><span class="texto-verde">Screenplay:</span> Christopher Faust and Diego Florentino </p>
        <p><span class="texto-verde">Executive Production:</span> Anderson Simão </p> 
        <p><span class="texto-verde">Production Management:</span> Alexandre Rafael Garcia, Evandro Scorsin and Wellington Sari </p> 
        <p><span class="texto-verde">Cinematography:</span> Daniel Florencio </p> 
        <p><span class="texto-verde">Art Direction:</span> Alex Rocca </p>
        <p><span class="texto-verde">Editing and Post Production:</span> Diego Florentino </p> 
        <p><span class="texto-verde">Direct Sound:</span> Guilherme Cordova </p>
        <p><span class="texto-verde">Sound Editing and Mixing:</span> Alexandre Rogoski </p>
        </p>
        <p>
        Project developed with the support of the Cultural Support and Incentive Program - Cultural Foundation of Curitiba and City of Curitiba, with incentives from Bwt Tour Operator, Celepar, HigiServ, and Serra Verde Express.        </p>
        `,
      },
      adicional: {
        __html: `<p>
            <span class="texto-verde">Secondary Cast: </span> Daniel Keller (voz) | Thami A. | Rodrigo Nossaki | Guilherme Ribas | Ana Paula Málaga | Caroline Biagi | Muhammad El Chab | Bruce Cantarim | Júnior Ventura | Rafael Basso | Morgana Horst | Bruno Abil Russ | Milena Bastos | Gaby Rivoly | Maria Eduarda Machado | Vicenzo Viesser | Emanuel Pilati | Kayo Francisco | Maria Eduarda Rangel | Louise Forgueri | Larissa Freitas
          </p>
          <p>
          <span class="texto-verde">Assistant Director:</span> Evandro Scorsin |
          <span class="texto-verde">Photography Assistant:</span> Marcelo Tanaka |
          <span class="texto-verde">Art Assistant and Costume Design:</span> Annie Cantarini |
          <span class="texto-verde">Art Assistant and Object Production:</span> Susana Pedrozenco |
          <span class="texto-verde">Image Post-Production:</span> Diego Florentino |
          <span class="texto-verde">Logging and Syncing:</span> Eduardo Neves Camargo |
          <span class="texto-verde">Graphic Design:</span> Bruna Michelin |
          <span class="texto-verde">Direct Sound Assistant:</span> Guilherme Ferreira | 
          <span class="texto-verde">Electrician:</span> Pablo Treis | 
          <span class="texto-verde"> Assistant Electrician:</span> Sergio Singer |
          <span class="texto-verde">Sound Editing:</span> Bruno Ito |
          <span class="texto-verde">Sound Editing Assistant:</span> Rodrigo Grigoletti |
          <span class="texto-verde">Sound Studio:</span> Off-Beat Audio | 
          <span class="texto-verde">Soundtrack - Jingle:</span> Maurício Ramos Marques | 
          <span class="texto-verde">Still:</span> Ana Paula Málaga and Nathália Tereza | 
          <span class="texto-verde">Making of:</span> Patrícia Evans | 
          <span class="texto-verde">Clapperboard:</span> Dewi Jost | 
          <span class="texto-verde">Pre-production Designer:</span> Melina Correia | 
          <span class="texto-verde">English Subtitles:</span> Raquel Ribeiro |
          <span class="texto-verde">Spanish Subtitles:</span>  Larissa Mehl | 
          <span class="texto-verde">Sound Recording:</span> Anderson Simão, Stely Brodowski Andrade and Itamar Paciornik 
          <p>
          <span class="texto-verde">Support:</span>
          Casa da Coxinha | Áudio Off-Beat | Papel Caneta and Cia | Prefeitura de Curitiba | Sanepar | Sociedade Morgenau </p>
        </p>
        `,
      },
    },
  },
  {
    id: '14',
    url: 'intervalo',
    titulo: 'BREAK',
    ano: 2010,
    autor: '  ALEXANDRE RAFAEL GARCIA',
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

    sinopse: 'Pedro is 16 years old, dates Ana and attends high school. In any given afternoon: the school, gazes, the pool. Blue color.',
    categoria: 'Curta Metragem',
    tags: ['Comédia', 'Adolescente', 'Terror'],
    linkVideo: 'https://youtu.be/mrO3pA6YFjs',
    equipe: {
      principal: {
        // eslint-disable-next-line quotes
        __html: `<p>
        <p><span class="texto-verde">Direction and Screenplay:</span> Alexandre Rafael Garcia </p>
        <p><span class="texto-verde">Executive Production:</span> Alexandre Rafael Garcia, Sandra Zawadzki </p> 
        <p><span class="texto-verde">Production Management:</span> Sandra Zawadzki</p> 
        <p><span class="texto-verde">Cinematography:</span> Renata Corrêa </p> 
        <p><span class="texto-verde">Art Direction:</span> Alex Rocca, Ana Deliberador </p>
        <p><span class="texto-verde">Editing:</span> Christopher Faust, Tomás von der Osten </p> 
        <p><span class="texto-verde">Direct Sound:</span> Eugênio Hoch Jr., Samuel Jacintho </p>
        <p><span class="texto-verde">Sound Editing and Mixing:</span> Samuel Jacintho </p>
        </p>
        <p>
        Project developed as the Final Graduation Project of the Film and Video course at the Parana Arts College. 
        </p>
        `,
      },
      adicional: {
        __html: `
          <p>
          <span class="texto-verde">Assistant Director:</span> Evandro Scorsin |
          <span class="texto-verde">Production Assistant/Direction:</span> Álvaro Zeini Cruz |
          <span class="texto-verde">Production Assistant/Art Direction:</span> Rubiana Perucci |
          <span class="texto-verde">Production Assistant:</span> Brisa Verena, Juliana Rodrigues |
          <span class="texto-verde">Graphic material:</span> Fábio Rocha
          </p>
          <p>
          <span class="texto-verde">Co-Production:</span>
          SIMULACRUM
          </p>
          <p>
          <span class="texto-verde">Support:</span>
          Paraná State School          
          </p>
        `,
      },
    },
  },
  {
    id: '15',
    url: 'lavanderia-shermer',
    titulo: 'SHERMER LAUNDRY',
    ano: 2008,
    autor: ' WELLINGTON SARI',
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
    sinopse: 'Four young people become trapped inside the Shermer Laundry Shop. While the problem is resolved, Wilson Borges, Norberto, Jo, and the employee Waldo begin to interact and discover they have much more in common than just dirty clothes.',
    categoria: 'Curta Metragem',
    tags: ['Comédia', 'Adolescente', 'Terror'],
    linkVideo: 'https://youtu.be/j96oOOQ4vXI',
    equipe: {
      principal: {
        // eslint-disable-next-line quotes
        __html: `<p>
        <p><span class="texto-verde">Direction and Screenplay:</span> Wellington Sari </p>
        <p><span class="texto-verde">Executive Production:</span> Diego Florentino and Wellington Sari </p> 
        <p><span class="texto-verde">Production Management:</span> Diego Florentino</p> 
        <p><span class="texto-verde">Cinematography:</span> Antonio Junior </p> 
        <p><span class="texto-verde">Art Direction:</span> Ana Paula Málaga </p>
        <p><span class="texto-verde">Editing:</span> Christopher Faust </p> 
        <p><span class="texto-verde">Direct Sound:</span> João Marcelo Gomes and Guilherme Cordova </p>
        <p><span class="texto-verde">Sound Design:</span> Alexandre Rogoski and Vinícius Nisi </p>
        <p><span class="texto-verde">Music:</span> Mordida </p>
        </p>
        `,
      },
      adicional: {
        __html: `
          <p>
          <span class="texto-verde">Assistant Director:</span> Christopher Faust |
          <span class="texto-verde">Production Assistant:</span> Maria Fernanda Penha and Kahito Jucoski |
          <span class="texto-verde">Cast Production:</span> Arno Pruner |
          <span class="texto-verde">Assistant Camera:</span> Marisa Merlo |
          <span class="texto-verde">Assistant Art Director:</span> Maria Fernanda Penha |
          <span class="texto-verde">Post Production:</span> Nathália Okimoto |
          <span class="texto-verde">Continuity supervisor:</span> Karina de Souza |
          <span class="texto-verde">Still:</span> Talitha Bodnar |
          </p>
          <p>
          <span class="texto-verde">Support:</span>
          Off-Beat Audio, Art Banner, Casa do Zé, Lav and Lev - Cristo Rei, Pizza Clock
          </p>
        `,
      },
    },
  },
  {
    id: '16',
    url: 'mal-me-quer',
    titulo: 'LOVE ME NOT, LOVE ME NOT',
    ano: 2010,
    autor: ' WELLINGTON SARI',
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

    participacao: 'Monique Rau, Evandro Scorsin and Karina de Souza.',
    sinopse: 'After breaking up with her boyfriend, Pri finds an obstacle in the way.',
    categoria: 'Curta Metragem',
    tags: ['Comédia', 'Adolescente', 'Terror'],
    linkVideo: 'https://youtu.be/ctGG9OL5nrQ',
    equipe: {
      principal: {
        // eslint-disable-next-line quotes
        __html: `<p>
        <p><span class="texto-verde">Direction and Screenplay:</span> Wellington Sari </p>
        <p><span class="texto-verde">Production:</span> Wellington Sari and Christopher Faust </p> 
        <p><span class="texto-verde">Cinematography:</span> Renata Corrêa </p> 
        <p><span class="texto-verde">Photography Assistant:</span> João Marcelo Gomes</p> 
        <p><span class="texto-verde">Direction Assistant:</span> Karina de Souza</p>
        <p>
        Project developed for the Single Take Workshop, offered by the 7th Curta Oito - International Super8 Film Festival of Curitiba.         </p>
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
    titulo: 'VANILLA MANU, CHOCOLATE BIA',
    ano: 2014,
    autor: '  EVANDRO SCORSIN',
    imgIcone: { src: '/imagens/filmes/manu-baunilha-bia-chocolate/manubaunilha_still1.jpg', desc: '', titulo: 'Titulo da Imagem' },
    imgDestaque: { src: '/imagens/filmes/manu-baunilha-bia-chocolate/manubaunilha_banner.jpg', desc: '', titulo: 'Titulo da Imagem' },
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
    sinopse: 'Deco accidentally makes a date with two friends. He is going to meet Manu during the day and Bia at night.',
    categoria: 'Curta Metragem',
    tags: ['Comédia', 'Adolescente', 'Terror'],
    linkVideo: 'https://youtu.be/GX42VnFXjm8',
    equipe: {
      principal: {
        // eslint-disable-next-line quotes
        __html: `<p>
        <p><span class="texto-verde">Direction:</span> Evandro Scorsin </p>
        <p><span class="texto-verde">Screenplay:</span> Wellington Sari </p>
        <p><span class="texto-verde">Executive Production:</span> Anderson Simão </p> 
        <p><span class="texto-verde">Production Management:</span> Alexandre Rafael Garcia</p> 
        <p><span class="texto-verde">Cinematography:</span> Daniel Florencio </p> 
        <p><span class="texto-verde">Art Direction:</span> Alex Rocca </p>
        <p><span class="texto-verde">Editing:</span> Christopher Faust </p> 
        <p><span class="texto-verde">Direct Sound:</span> Lucas Maffini </p>
        <p><span class="texto-verde">Sound Post-Production:</span> Alexandre Rogoski </p>
        <p><span class="texto-verde">Soundtrack:</span> Paulo de Nadal </p>
        </p>
        <p>
        Project developed with the support of the Cultural Support and Incentive Program - Cultural Foundation of Curitiba and City of Curitiba, with incentives from Shopping Estação.        
        </p>
        `,
      },
      adicional: {
        __html: `
          <p><span class="texto-verde">Jujubas:</span>
          Jujuba Faust | Jujuba Garcia | Jujuba Sari | Jujuba Scorsin | Jujuba Simão
          </p>
          <p>
          <span class="texto-verde">Art Assistant:</span> André Luiz Pinto |
          <span class="texto-verde">Production Assistant:</span> Caroline Biagi |
          <span class="texto-verde">Direct Sound Assistant:</span> Bruno Ito |
          <span class="texto-verde">Photography Assistant:</span> Marcelo Tanaka |
          <span class="texto-verde">Clapperboard and Editing Assistant:</span> Paula Negri |
          <span class="texto-verde">Designer:</span> Melina Correia |
          <span class="texto-verde">Pre-production Designer:</span> Fábio R. Rocha |
          <span class="texto-verde">Electrician:</span> Leandro Telles |
          <span class="texto-verde">Soundtrack Recording and Mixing:</span> Rogerio Sabatella |
          <span class="texto-verde">Studio Musicians:</span> Paulo de Nadal, Raphael Vinotti, Fernando de Nadal and Ivan Rodrigues |
          <span class="texto-verde">Spanish Subtitles:</span> Graziela Braz |
          <span class="texto-verde">English Subtitles:</span> Raquel Ribeiro |
          <span class="texto-verde">Stills and Image Post-Production:</span> Guilherme Delamuta
          </p>
          <p>
          <span class="texto-verde">Support:</span>
          Confeitaria Bomfati | City of Curitiba | Sanepar | Teatro Regina Vogue
          </p>
        `,
      },
    },
  },
  {
    id: '18',
    url: 'maquina-de-sorvetes',
    titulo: 'ICE CREAM MACHINE',
    ano: 2011,
    autor: ' CHRISTOPHER FAUST',
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
      { src: '/imagens/filmes/maquina-de-sorvetes/maquinadesorvetes_cartaz_alta.jpg', desc: 'imagem', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/maquina-de-sorvetes/maquinadesorvetes_still1_alta.jpg', desc: 'imagem', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/maquina-de-sorvetes/maquinadesorvetes_still2_alta.jpg', desc: 'imagem', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/maquina-de-sorvetes/maquinadesorvetes_still3_alta.jpg', desc: 'imagem', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/maquina-de-sorvetes/maquinadesorvetes_still4_alta.jpg', desc: 'imagem', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/maquina-de-sorvetes/maquinadesorvetes_still5_alta.jpg', desc: 'imagem', titulo: 'Titulo da Imagem' },
      { src: '/imagens/filmes/maquina-de-sorvetes/maquinadesorvetes_still6_alta.jpg', desc: 'imagem', titulo: 'Titulo da Imagem' },

    ],
    patrocinadores: { src: '/imagens/filmes/maquina-de-sorvetes/cultura-inglesa_banner.png', desc: '', titulo: 'titulo da imagem' },

    participacao: 'Rafael Andrés Pittaluga, Manoela Militão, Karen Shimabukuro,.',
    sinopse: 'Martin, an ice cream machine operator, falls in love with a waitress who works at a coffee shop across the street, with whom he had never exchanged a word.',
    categoria: 'Curta Metragem',
    tags: ['Comédia', 'Adolescente', 'Terror'],
    linkVideo: 'https://youtu.be/CV7xsEZlZPM',
    equipe: {
      principal: {
        // eslint-disable-next-line quotes
        __html: `<p>
        <p><span class="texto-verde">Direction:</span> Christopher Faust </p>
        <p><span class="texto-verde">Screenplay:</span> Christopher Faust and Wellington Sari </p>
        <p><span class="texto-verde">Executive Production:</span> Alexandre Rafael Garcia </p> 
        <p><span class="texto-verde">Production Management:</span> Evandro Scorsin, Wellington Sari</p> 
        <p><span class="texto-verde">Cinematography:</span> Renata Corrêa</p> 
        <p><span class="texto-verde">Art Direction:</span> Alex Rocca and Ana Paula Málaga </p>
        <p><span class="texto-verde">Editing:</span> Alexandre Rafael Garcia </p> 
        <p><span class="texto-verde">Direct Sound:</span> Samuel Jacintho </p>
        <p><span class="texto-verde">Sound Editing and Mixing:</span> Alexandre Rogoski </p>
        </p>
        <p>
        Project developed through the public notice of the 15th Cultura Inglesa Festival in the “Cinema” category.         </p>
        `,
      },
      adicional: {
        __html: `
          <p><span class="texto-verde">Cast:</span>
          Marcel Szymanski, Fábio Silvestre, Alexandre Canetta, Tomás von der Osten, Paulo Hey, Gustavo Pinheiro, Camila Jorge, Sophia Butture, Marcos Neguers, Sandro Strapasson, Juliana Kametani, Juliana da Rocha, Leco Wzorek, Bruno de Oliveira, Amanda Tortato, Vitor Steinhaus
          </p>
          <p>
          <span class="texto-verde">Direction Assistant:</span> Anderson Simão |
          <span class="texto-verde">Production Assistant:</span> Camilla Mageski |
          <span class="texto-verde">Camera operator:</span> Hellen Braga |
          <span class="texto-verde">Photography Assistant:</span> Eduardo Azevedo |
          <span class="texto-verde">Costume and Makeup:</span> Ana Deliberador |
          <span class="texto-verde">Art Assistant:</span> Caroline Biagi |
          <span class="texto-verde">Electrician:</span> Odair da Silva (Salim) |
          <span class="texto-verde">Assistant Electrician:</span> Luciano de Almeida (Soda) |
          <span class="texto-verde">Sound Editing Assistant:</span> Samuel Jacintho |
          <span class="texto-verde">Visual Effects:</span> Diego Florentino |
          <span class="texto-verde">Soundtrack:</span> Rodrigo Lemos |
          <span class="texto-verde">Still:</span> Daniel Florencio
          </p>
          <p>
          <span class="texto-verde">Support:</span>
          Italianinha Máquina de Sorvetes Expresso          
          </p>
        `,
      },
    },
  },
  {
    id: '19',
    url: 'meio-dia-isabela',
    titulo: 'NOON, ISABELA',
    ano: 2011,
    autor: ' EVANDRO SCORSIN',
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

    participacao: 'Isabela Zanotim Da Silva, Amanda Saskoski Leal, Caroline Kerniske and Wellington Sari.',
    sinopse: 'What if these are the best days of our lives?',
    categoria: 'Curta Metragem',
    tags: ['Comédia', 'Adolescente', 'Terror'],
    linkVideo: 'https://youtu.be/6Q2KpChnIzs',
    equipe: {
      principal: {
        // eslint-disable-next-line quotes
        __html: `
        <p><span class="texto-verde">Direction and Screenplay:</span> Evandro Scorsin </p>
        <p><span class="texto-verde">Production:</span> Anderson Simão, Evandro Scorsin, Juliana Rodrigues, Nuno Chinaglia Poli </p>
        <p><span class="texto-verde">Cinematography:</span> Juliana Rodrigues</p> 
        <p><span class="texto-verde">Art Direction:</span> Juliana Rodrigues </p>
        <p><span class="texto-verde">Editing:</span> Tomás von der Osten </p> 
        <p><span class="texto-verde">Direct Sound:</span> Anderson Simão and Nuno Chinaglia Poli </p>
        <p><span class="texto-verde">Sound Editing:</span> Evandro Scorsin </p>
        <p>
        Project developed as the Final Graduation Project of the Film and Video course at the Paraná Arts College.        </p>
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
    titulo: 'TWO MEMORIES',
    ano: 2009,
    autor: ' ANDERSON SIMÃO, EVANDRO SCORSIN, NUNO CHINAGLIA POLI',
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

    participacao: 'Sarah Scorsin, José Zaleski, Ailen Scandurra and Pedro Henrique Mello.',
    sinopse: 'In front of an old family picture, two couples are invited to bring memories that kindle the memories of the picture itself.',
    categoria: 'Curta Metragem',
    tags: ['Comédia', 'Adolescente', 'Terror'],
    linkVideo: 'https://youtu.be/jx__v2Dku18',
    equipe: {
      principal: {
        // eslint-disable-next-line quotes
        __html: `
        <span class="texto-verde">Direction: </span> Anderson Simão, Evandro Scorsin and Nuno Chinaglia Poli
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
    titulo: 'MEMORIES OF MY UNCLE',
    ano: 2011,
    autor: ' ALEXANDRE RAFAEL GARCIA and ALVARO ZEINI CRUZ',
    imgIcone: { src: '/imagens/filmes/memorias-do-meu-tio/memoriasdomeutio_still1.jpg', desc: '', titulo: 'Titulo da Imagem' },
    imgDestaque: { src: '/imagens/filmes/memorias-do-meu-tio/memoriasdomeutio_banner.png', desc: '', titulo: 'Titulo da Imagem' },
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
    sinopse: 'The adventures of Ariel, a 10-year-old-boy who finds his dead granduncle and follows him in search of an unimaginable treasure.',
    categoria: 'Curta Metragem',
    tags: ['Comédia', 'Adolescente', 'Terror'],
    linkVideo: 'https://youtu.be/nw_c-gyAq98',
    equipe: {
      principal: {
        // eslint-disable-next-line quotes
        __html: `<p>
        <p><span class="texto-verde">Direction:</span> Alexandre Rafael Garcia, Alvaro Zeini Cruz </p>
        <p><span class="texto-verde">Screenplay:</span> Alexandre Rafael Garcia, Alvaro Zeini Cruz, Carlos Debiasi </p>
        <p><span class="texto-verde">Executive Production:</span> Sandra Zawadzki </p> 
        <p><span class="texto-verde">Production Management:</span> Christopher Faust, Natu Marques, Wellington Sari</p> 
        <p><span class="texto-verde">Cinematography:</span> Renata Corrêa</p> 
        <p><span class="texto-verde">Art Direction:</span> Alex Rocca, Ana Paula Málaga </p>
        <p><span class="texto-verde">Editing:</span> Alexandre Rafael Garcia, Alvaro Zeini Cruz, Marcos Sabóia </p> 
        <p><span class="texto-verde">Direct Sound and Sound Post Production:</span> Alexandre Rogoski </p>
        <p><span class="texto-verde">Soundtrack:</span> Maurício Ramos Marques </p>
        <p><span class="texto-verde">Post-Production and Visual Effects:</span> Everton Sebben </p>
        </p>
        <p>
        Project developed with the support of the Cultural Support and Incentive Program - Cultural Foundation of Curitiba and City of Curitiba, with incentive from CELEPAR - Companhia de Informática do Paraná        </p>
        `,
      },
      adicional: {
        __html: `
          <p><span class="texto-verde">Assistant Director:</span>Evandro Scorsin |         
          <span class="texto-verde">Production Assistant:</span> Camilla Mageski |
          <span class="texto-verde">Camera operator:</span> Hellen Braga |
          <span class="texto-verde">Costume Design:</span> Ana Deliberador |
          <span class="texto-verde">Makeup:</span> Andrea Tristão |
          <span class="texto-verde">Assistant Art Director:</span> Guilherme Málaga Carreiro |
          <span class="texto-verde">Clapperboard and Continuity:</span> Anderson Simão |
          <span class="texto-verde">Electrician:</span> Edi, Loro |
          <span class="texto-verde">Graphic material:</span> Mariana Alub |
          <span class="texto-verde">Still:</span> Juliana Rodrigues |
          <span class="texto-verde">Direct Sound Assistant and Sound Post Production:</span> Samuel Jacintho |
          <span class="texto-verde">Translation and Subtitles:</span> Gustavo Pinheiro, Massimo Stulfa 

          </p>
          <p>
          <span class="texto-verde">Support:</span>
          Lokal Grill, Movimento Cine Digital, Padaria América, Sanepar
          </p>
        `,
      },
    },
  },
  {
    id: '22',
    url: 'meu-amigo-virtual',
    titulo: 'MY VIRTUAL FRIEND',
    ano: 2013,
    autor: ' CHRISTOPHER FAUST',
    imgIcone: { src: '/imagens/filmes/meu-amigo-virtual/meuamigovirtual_still1.jpg', desc: '', titulo: 'Titulo da Imagem' },
    imgDestaque: { src: '/imagens/filmes/meu-amigo-virtual/meuamigovirtual_banner.png', desc: '', titulo: 'Titulo da Imagem' },
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

    participacao: 'Vitor Steinhaus, Luly Strapasson, Fernando Turri, Gabriel Merling, Edy Gahr, Kainã Jaquetti, Chiara Vedova, Lucas Vicenzo, Leonara Mariel, Aline Angela and Izabela Milita.',
    sinopse: 'Andre is a 14-year-old boy, odd-looking, lonely, and addicted to computer games. During a thunderstorm, a character created in his favorite computer game materializes in his room. Andre sees an opportunity to have a friend and become popular in his high school.',
    categoria: 'Curta Metragem',
    tags: ['Comédia', 'Adolescente', 'Terror'],
    linkVideo: 'https://www.youtube.com/watch?v=w8a9MWHJdHw',
    equipe: {
      principal: {
        // eslint-disable-next-line quotes
        __html: `<p>
        <p><span class="texto-verde">Direction, Screenplay, and Editing:</span> Christopher Faust </p>
        <p><span class="texto-verde">Executive Production:</span> Alexandre Rafael Garcia, Anderson Simão </p> 
        <p><span class="texto-verde">Production Management:</span> Evandro Scorsin </p> 
        <p><span class="texto-verde">Cinematography:</span> Renata Corrêa</p> 
        <p><span class="texto-verde">Art Direction:</span> Alex Rocca </p>
        <p><span class="texto-verde">Direct Sound:</span> João Menna Barreto </p>
        <p><span class="texto-verde">Image and effects Post Production:</span> Everton Sebben </p> 
        <p><span class="texto-verde">Sound Editing and Mixing:</span> Alexandre Rogoski </p>
        <p><span class="texto-verde">Soundtrack:</span> Maurício Ramos Marques </p>
        </p>
        <p>
        Project developed with the support of the Cultural Foundation of Curitiba and the City of Curitiba. 
        </p>
        `,
      },
      adicional: {
        __html: `
          <p><span class="texto-verde">Animation Production Company:</span> SPIRIT Animation Studios </p>
          <p><span class="texto-verde">Co-Production:</span> RPC TV </p>
          <p><span class="texto-verde">Extras:</span> Gabriela Dinnies, Carolina Alves </p>

          <p><span class="texto-verde">Assistant Director:</span>Evandro Scorsin |         
          <span class="texto-verde">Costume Design:</span> Ana Cardoso |
          <span class="texto-verde">Graphic Design:</span> Melina Correia |
          <span class="texto-verde">Camera:</span> Hellen Braga |
          <span class="texto-verde">Photography Assistant:</span> cc |
          <span class="texto-verde">Chief Electrician:</span> Salim |
          <span class="texto-verde">Assistant Electrician:</span> Soda |
          <span class="texto-verde">Assistant Art Director:</span> Felipe Potenza |
          <span class="texto-verde">Still and making of:</span> Daniel Florencio |
          <span class="texto-verde">Direct Sound Assistant:</span> Lucas Maffini |
          <span class="texto-verde">Editing Assistant:</span> Guilherme Delamuta |
          <span class="texto-verde">3D Product Supervisor:</span> Fernando Macedo (Digital Spirit) |
          <span class="texto-verde">3D Modelling:</span> Cleber Coutinho (Digital Spirit) |
          <span class="texto-verde">Rigging:</span> Fernando Macedo (Digital Spirit) |
          <span class="texto-verde">3D Texturing:</span> Cleber Coutinho (Digital Spirit) |
          <span class="texto-verde">3D Animation:</span> Rene Singer and Jonathan Edward (Digital Spirit) |
          <span class="texto-verde">3D Lighting and Composition:</span> Cleber Coutinho (Digital Spirit) |
          <span class="texto-verde">Production Assistants:</span> Bruno Mendes and Ricardo Lima (Digital Spirit) |
          <span class="texto-verde">Subtitles:</span> Karina Buzzi |
          <span class="texto-verde">Driver:</span> Luis 
          </p>
          <p>
          <span class="texto-verde">Support:</span>
          Tissot, Sanepar          
          </p>
        `,
      },
    },
  },
  {
    id: '23',
    url: 'monique-ao-sol',
    titulo: 'MONIQUE IN THE SUN',
    ano: 2011,
    autor: ' WELLINGTON SARI',
    imgIcone: { src: '/imagens/filmes/monique-ao-sol/moniqueaosol_still1.jpg', desc: '', titulo: 'Titulo da Imagem' },
    imgDestaque: { src: '/imagens/filmes/monique-ao-sol/moniqueaosol_banner.jpg', desc: '', titulo: 'Titulo da Imagem' },
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

    participacao: 'Monique Rau and Wellington Sari.',
    sinopse: 'Winter holidays. Monique goes to the beach with her parents. With no friends around, she tries to find something to do. Until she meets a young man at the volleyball court.',
    categoria: 'Curta Metragem',
    tags: ['Comédia', 'Adolescente', 'Terror'],
    linkVideo: 'https://youtu.be/oyjnPws1uIA',
    equipe: {
      principal: {
        // eslint-disable-next-line quotes
        __html: `<p>
        <p><span class="texto-verde">Direction and Screenplay:</span> Wellington Sari </p>
        <p><span class="texto-verde">Executive Production:</span> Alexandre Rafael Garcia </p> 
        <p><span class="texto-verde">Production Management:</span> Alexandre Rafael Garcia and Juliana Rodrigues </p> 
        <p><span class="texto-verde">Cinematography:</span> Renata Corrêa</p> 
        <p><span class="texto-verde">Editing:</span> Christopher Faust </p>
        <p><span class="texto-verde">Direct Sound:</span> Guilherme Cordova </p>
        </p>
        <p>
        Project developed as the Final Graduation Project of the Film and Video course at the Paraná Arts College.        </p>
        `,
      },
      adicional: {
        __html: `
          <p><span class="texto-verde">Extras:</span> Aline de Lima </p>

          <p><span class="texto-verde">Assistant Director:</span> Christopher Faust |         
          <span class="texto-verde">Costume Design:</span> Monique Rau |
          <span class="texto-verde">Sound Editing:</span> Christopher Faust and Wellington Sari |
          <span class="texto-verde">ADR Supervisor:</span> Renan Deodato |
          <span class="texto-verde">Graphic Design:</span> Melina Correia 
          </p>
          <p>
          <span class="texto-verde">Support:</span>
          CINETVPR, WG7          
          </p>
        `,
      },
    },
  },
  {
    id: '24',
    url: 'o-ultimo-dia',
    titulo: 'THE LAST DAY',
    ano: 2010,
    autor: ' CHRISTOPHER FAUST',
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
    sinopse: 'Toni will soon move to another city. He decides to spend his last day in town drinking with his childhood friends.',
    categoria: 'Curta Metragem',
    tags: ['Comédia', 'Adolescente', 'Terror'],
    linkVideo: 'https://youtu.be/kPqxwq8xqvM',
    equipe: {
      principal: {
        // eslint-disable-next-line quotes
        __html: `
        <p><span class="texto-verde">Direction and Screenplay:</span> Christopher Faust </p>
        <p><span class="texto-verde">Executive Production:</span> Christopher Faust and Wellington Sari </p> 
        <p><span class="texto-verde">Cinematography:</span> Renata Corrêa</p> 
        <p><span class="texto-verde">Art Direction:</span> Christopher Faust </p>
        <p><span class="texto-verde">Editing:</span> Diego Florentino </p> 
        <p><span class="texto-verde">Direct Sound:</span> Wellington Sari and Rodrigo Janiszewski </p>
        `,
      },
      adicional: {
        __html: `
          <p><span class="texto-verde">Clapperboard:</span> Karina de Souza |         
          <span class="texto-verde">Production:</span> Alexandre Rafael Garcia 
          </p>
        `,
      },
    },
  },
  {
    id: '25',
    url: 'olhares',
    titulo: 'LOOKS',
    ano: 2010,
    autor: ' EVANDRO SCORSIN',
    imgIcone: { src: '/imagens/filmes/olhares/olhares_still1.jpg', desc: '', titulo: 'Titulo da Imagem' },
    imgDestaque: { src: '/imagens/filmes/olhares/olhares_banner.jpg', desc: '', titulo: 'Titulo da Imagem' },
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
    sinopse: 'Junior, an eight-year-old boy, finds a portrait of a happy family in his schoolyard and starts to look for smiles in his daily life.',
    categoria: 'Curta Metragem',
    tags: ['Comédia', 'Adolescente', 'Terror'],
    linkVideo: 'https://youtu.be/FwqQDucxM3U',
    equipe: {
      principal: {
        // eslint-disable-next-line quotes
        __html: `<p>
        <p><span class="texto-verde">Direction, Screenplay, and Executive Production:</span> Evandro Scorsin </p>
        <p><span class="texto-verde">Executive Production:</span> Pedro Henrique de Mello </p> 
        <p><span class="texto-verde">Production Management and Executive Production:</span> Anderson Simão </p> 
        <p><span class="texto-verde">Cinematography:</span> Daniel Rodriguez </p> 
        <p><span class="texto-verde">Art Direction:</span> Alex Rocca </p> 
        <p><span class="texto-verde">Editing:</span> João Krefer </p>
        <p><span class="texto-verde">Sound Editing and Mixing:</span> Vinicius Nisi </p>
        </p>
        `,
      },
      adicional: {
        __html: `
          <p><span class="texto-verde">Assistant Director:</span> Pedro Henrique Mello |         
          <span class="texto-verde">Production Assistant and Graphic Art:</span> Rudolfo Auffinger |
          <span class="texto-verde">Art Assistant and Still:</span> Ana Paula Málaga |
          <span class="texto-verde">Still:</span> Daniel Florencio |
          <span class="texto-verde">Costume and Makeup:</span> Daiane Scorsin | 
          <span class="texto-verde">Camera Operator:</span> Hellen Braga | 
          <span class="texto-verde">First Photography Assistant:</span> André Senna |
          <span class="texto-verde">First and Second Photography Assistant:</span> Eduardo Belik | 
          <span class="texto-verde">Electrician:</span> Max Olsen | 
          <span class="texto-verde">Direct Sound:</span> Rodrigo Janiszewski | 
          <span class="texto-verde">Cast Production:</span> Clariana Borzone and Thiago Moreno 
          </p>
        `,
      },
    },
  },
  {
    id: '26',
    url: 'parabens-pra-vc',
    titulo: 'HAPPY BIRTHDAY TO U',
    ano: 2011,
    autor: ' ANDERSON SIMÃO',
    imgIcone: { src: '/imagens/filmes/parabens-pra-vc/parabenspravc_still1.jpg', desc: '', titulo: 'Titulo da Imagem' },
    imgDestaque: { src: '/imagens/filmes/parabens-pra-vc/parabenspravc_banner.png', desc: '', titulo: 'Titulo da Imagem' },
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

    participacao: 'Isabela Zanotim Da Silva, Aline Vanessa Santoro and Daniele Zanotin da Silva.',
    sinopse: `It's Isabela's birthday. She plans on having a good day with her friends and her family.`,
    categoria: 'Curta Metragem',
    tags: ['Comédia', 'Adolescente', 'Terror'],
    linkVideo: 'https://youtu.be/KENeqiZsics',
    equipe: {
      principal: {
        // eslint-disable-next-line quotes
        __html: `
        <p><span class="texto-verde">Direction and Screenplay:</span> Anderson Simão </p>
        <p><span class="texto-verde">Production:</span> Anderson Simão, Evandro Scorsin, Juliana Rodrigues, Nuno Chinaglia Poli </p> 
        <p><span class="texto-verde">Cinematography:</span> Juliana Rodrigues </p> 
        <p><span class="texto-verde">Art Direction:</span> Juliana Rodrigues </p> 
        <p><span class="texto-verde">Editing:</span> Tomás von der Osten </p>
        <p><span class="texto-verde">Direct Sound:</span> Evandro Scorsin, Nuno Chinaglia Poli </p> 
        <p><span class="texto-verde">Sound Editing:</span> Nuno Chinaglia Poli </p>
        <p>
        Project developed as the Final Graduation Project of the Cinema and Video course at the Paraná Arts College.        </p>
        `,
      },
      adicional: {
        __html: `
          <p><span class="texto-verde">Support:</span> State School Leoncio Correia, State School Prof. Loureiro Fernandes </p>
        `,
      },
    },
  },
  {
    id: '27',
    url: 'paranoia-doce',
    titulo: 'SWEET PARANOIA',
    ano: 2018,
    autor: ' EVANDRO SCORSIN',
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

    participacao: 'Gustavo Piaskoski, Letícia Roza, Isa Rocco, Daniel Alexs and Daniel Martins.',
    sinopse: 'Four young people travel to a seaside town looking for fun. After a night of drunkenness, funny games, and fooling around, they discover a pink and viscous goo that inexplicably seduces them. The fun mood is over, and one by one they begin to die.',
    categoria: 'Curta Metragem',
    tags: ['Comédia', 'Adolescente', 'Terror'],
    linkVideo: 'https://vimeo.com/356583258',
    equipe: {
      principal: {
        // eslint-disable-next-line quotes
        __html: `<p>
        <p><span class="texto-verde">Direction and Screenplay:</span> Evandro Scorsin </p>
        <p><span class="texto-verde">Executive Production:</span> Anderson Simão </p> 
        <p><span class="texto-verde">Production Management:</span> Wellington Sari </p>
        <p><span class="texto-verde">Cinematography:</span> André Senna </p> 
        <p><span class="texto-verde">Art Direction:</span> Alex Rocca </p> 
        <p><span class="texto-verde">Editing:</span> Christopher Faust </p>
        <p><span class="texto-verde">Direct Sound:</span> Bruno Ito </p> 
        <p><span class="texto-verde">Soundtrack:</span> Felipe Ayres </p>
        <p><span class="texto-verde">Sound Post-Production:</span> Alexandre Rogoski </p>
        </p>
        <p>
        Project developed with the support of the State of Paraná, Secretariat of Culture of Paraná, Profice - Paraná State Program for the Promotion and Incentive of Culture of Paraná, with support from Copel. Recorded in the city of Antonina / PR.        </p>
        `,
      },
      adicional: {
        __html: `
          <p><span class="texto-verde">Extras:</span> Edison Gonçalves Corrêa Junior, Guilherme Moreira da Silva, Jamile De Fátima Moreira Teixeira, Laila Milcharski Gonçalves </p>
          <p><span class="texto-verde">Camera operator:</span> Rosano Mauro Jr |         
          <span class="texto-verde">Assistant Camera:</span> André Senna |
          <span class="texto-verde">Electrician and photography Assistant:</span> Murilo Lazarin |
          <span class="texto-verde">Assistant Electrician:</span> Danilo Custódio |
          <span class="texto-verde">Costume Design:</span> Morgana Horst | 
          <span class="texto-verde">Object Production and Art Assistance:</span> Debora Padial | 
          <span class="texto-verde">Effects Makeup:</span> Andrea Tristão |
          <span class="texto-verde">Makeup Assistant:</span> Alexsandra Steibel | 
          <span class="texto-verde">Still:</span> Wellington Sari | 
          <span class="texto-verde">Graphic Design:</span> Melina Correia |
          <span class="texto-verde">Local Producer:</span> Kahito Borcath Jucoski |
          <span class="texto-verde">Fundraising:</span> Carol Roehrig |
          <span class="texto-verde">Post Production Sound Studio:</span> Off-Beat Audio |
          <span class="texto-verde">Dialogue Editing:</span> Samuel Jacintho | 
          <span class="texto-verde">ADR Recording:</span> Bruno Ito and Samuel Jacintho | 
          <span class="texto-verde">Foley Artist:</span> Roger “Hands” Castro |
          <span class="texto-verde">Foley Recording:</span> Yuri Grigoletti | 
          <span class="texto-verde">Foley Editing:</span> Adriano Elias | 
          <span class="texto-verde">Sound Effects Editing:</span> Bruno Ito, Yuri Grigoletti and Alexandre Rogoski |
          <span class="texto-verde">Color Correction:</span> Guilherme Delamuta |
          <span class="texto-verde">Logger:</span> Hvgo Henrique |
          <span class="texto-verde">Translation and Subtitles:</span> ETC Fimes |
          <span class="texto-verde">English Version:</span> Marcelo Gouvêa | 
          <span class="texto-verde">Spanish Version:</span> Bruno Freitas | 
          <span class="texto-verde">Subtitle Proofreading:</span> Cinthia Alencar |
          <span class="texto-verde">Accessibility Content:</span> Filmes ETC | 
          <span class="texto-verde">Descriptive Subtitles:</span> Célia Medeiros | 
          <span class="texto-verde">Audio Description Script:</span> Paula Lousada |
          <span class="texto-verde">Audio Description Narration:</span> Thonny Cavaglieri |
          <span class="texto-verde">Audio Description Technician:</span> Mariana Sabini |
          <span class="texto-verde">Blind Consultant:</span> Edgard Jacques |
          <span class="texto-verde">Accessibility Review:</span> Gabriela Flores |
          <span class="texto-verde">Accessibility Direction: </span> Thais Ortega
          </p>
          <p><span class="texto-verde">Support:</span> Camboa Hotéis, Hollywood Film Academy, BackBros, Videoloc </p>

        `,
      },
    },
  },
  {
    id: '28',
    url: 'pequenos',
    titulo: 'LITTLE ONES',
    ano: 2012,
    autor: ' ALEXANDRE RAFAEL GARCIA',
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

    participacao: 'Lucas Gabriel, Julia Yara, Augusto Cerqueira, Ana Henriqueta, Anderson Da Silva, Daniel Miqueias, Lucas Vicenzo and Luiz Godói.',
    sinopse: `It's summer vacation and Lucas has fun with his friends in the neighborhood where they live. Every day he gets closer to Ana.`,
    categoria: 'Curta Metragem',
    tags: ['Comédia', 'Adolescente', 'Terror'],
    linkVideo: 'https://youtu.be/0P-LSouzEOM',
    equipe: {
      principal: {
        // eslint-disable-next-line quotes
        __html: `<p>
        <p><span class="texto-verde">Direction and Screenplay:</span> Alexandre Rafael Garcia </p>
        <p><span class="texto-verde">Executive Production:</span> Anderson Simão </p> 
        <p><span class="texto-verde">Production Management:</span> Evandro Scorsin, Wellington Sari </p>
        <p><span class="texto-verde">Cinematography:</span> Renata Corrêa </p> 
        <p><span class="texto-verde">Art Direction:</span> Ana Deliberador </p> 
        <p><span class="texto-verde">Editing:</span> Christopher Faust </p>
        <p><span class="texto-verde">Som Direto and Sound Design:</span>  Alexandre Rogoski </p> 
        </p>
        <p>
        Project developed through the public notice of the 16th Cultura Inglesa Festival in the “Cinema” category. 
        </p>
        `,
      },
      adicional: {
        __html: `
          <p><span class="texto-verde">Screenplay Collaboration:</span> Wellington Sari |         
          <span class="texto-verde">Assistant Director:</span> Evandro Scorsin |
          <span class="texto-verde">Production Assistant:</span> Marianna Helena |
          <span class="texto-verde">Photography Assistant:</span> Daniel Florêncio |
          <span class="texto-verde">Assistant Art Director:</span> Felipe Potenza | 
          <span class="texto-verde">Editing Assistant:</span> Guilherme Delamuta | 
          <span class="texto-verde">Direct Sound Assistant and Sound Post Production:</span> Samuel Jacintho |
          <span class="texto-verde">Electrician:</span> Leandro Telles | 
          <span class="texto-verde"> English and Spanish Subtitles and Sync: </span> Clariana Borzone | 
          <span class="texto-verde">Italian Subtitles:</span> Massimo Stulfa |
          <span class="texto-verde">Still:</span> Tomás von der Osten |
          <span class="texto-verde">Image Post Production:</span> Everton Sebben |
          <span class="texto-verde">Graphic Design:</span>  Fábio Rrocha 
          </p>
          <p><span class="texto-verde">Support:</span> 
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
    autor: ' WELLINGTON SARI',
    imgIcone: { src: '/imagens/filmes/raceland/raceland_still1.png', desc: '', titulo: 'Titulo da Imagem' },
    imgDestaque: { src: '/imagens/filmes/raceland/raceland_banner.png', desc: '', titulo: 'Titulo da Imagem' },
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
    sinopse: 'Motorsports as a way to overcome death, live on video. Old technologies fade away, but something remains. Two men compete in a race. A tribute to Ayrton Senna.',
    categoria: 'Curta Metragem',
    tags: ['Comédia', 'Adolescente', 'Terror'],
    linkVideo: 'https://youtu.be/VX__e7nkIZw',
    equipe: {
      principal: {
        // eslint-disable-next-line quotes
        __html: `<p>
        <p><span class="texto-verde">Direction and Screenplay:</span> Wellington Sari </p>
        <p><span class="texto-verde">Production:</span> Anderson Simão and Christopher Faust </p> 
        <p><span class="texto-verde">Cinematography:</span> Evandro Scorsin </p> 
        <p><span class="texto-verde">Additional Photography:</span> Wellington Sari </p>
        <p><span class="texto-verde">Assistant Director:</span> Bruna Dal Vesco </p>  
        </p>
        <p>
        Project developed for the Single Take Workshop, offered by the 12th Curta Oito - International Super8 Film Festival of Curitiba.        </p>
        `,
      },
      adicional: {
        __html: `
          <p><span class="texto-verde">Assistant Director:</span> Bruna Dal Vesco </p>         
          <p><span class="texto-verde">Acknowledgements:</span> Kartódromo Internacional Raceland, Pedro Merege </p>
        `,
      },
    },
  },
  {
    id: '30',
    url: 'romance-edmottes',
    titulo: 'EDMOTTÊS ROMANCE',
    ano: 2010,
    autor: ' WELLINGTON SARI',
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
    sinopse: 'Tino likes two girls. One of them is his girlfriend.',
    categoria: 'Curta Metragem',
    tags: ['Comédia', 'Adolescente', 'Terror'],
    linkVideo: 'https://youtu.be/T-7iLXqCaak',
    equipe: {
      principal: {
        // eslint-disable-next-line quotes
        __html: `<p>
        <p><span class="texto-verde">Direction:</span> Wellington Sari </p> 
        <p><span class="texto-verde">Screenplay:</span> Wellington Sari </p>
        <p><span class="texto-verde">Executive Production:</span> Marisa Merlo, Wellington Sari </p> 
        <p><span class="texto-verde">Production Management:</span> Marisa Merlo, Bárbara Felice </p>
        <p><span class="texto-verde">Cinematography:</span> Antônio Junior </p> 
        <p><span class="texto-verde">Art Direction:</span> Ana Paula Málaga </p>
        <p><span class="texto-verde">Editing:</span> Christopher Faust </p>
        <p><span class="texto-verde">Direct Sound:</span> Guilherme Cordova and Nikola Matevski </p>
        <p><span class="texto-verde">Sound Editing:</span> Vinicius Nisi </p> 
        </p>
        `,
      },
      adicional: {
        __html: `
          <p>
          <span class="texto-verde">Cast Production:</span> Arno Pruner |         
          <span class="texto-verde">Production Assistant:</span> Kahito Jucoski |
          <span class="texto-verde">Assistant Director:</span> Christopher Faust |
          <span class="texto-verde">Photography Assistant:</span> Renata Corrêa |
          <span class="texto-verde">Assistant Art Director:</span> Alex Rocca |
          <span class="texto-verde">Costume Design:</span> Ana Paula Cardoso |
          <span class="texto-verde">Post Production:</span> Nathália Okimoto |
          <span class="texto-verde">Clapperboard and Continuity:</span> Karina de Souza |
          <span class="texto-verde">Electrician:</span> Max Olsen |
          <span class="texto-verde">Still:</span> Talitha Bodnar |
          <span class="texto-verde">Graphic Design:</span> Melina Correia
          </p>
          <p><span class="texto-verde">Support:</span>  
          CINETVPR, Família Sfiha, Padaria América, Sabor & Sabor
          </p>
          `,
      },
    },
  },
  {
    id: '31',
    url: 'sobrenatural',
    titulo: 'SUPERNATURAL',
    ano: 2012,
    autor: ' ALEXANDRE RAFAEL GARCIA',
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
    sinopse: 'Giovanni is 20 years old, works in a video store and roots for Santos FC. He’s searching for a girl that looks like him to fall in love with. Until he meets Nely.',
    categoria: 'Curta Metragem',
    tags: ['Comédia', 'Adolescente', 'Terror'],
    linkVideo: 'https://youtu.be/MS_fRvOZjMs',
    equipe: {
      principal: {
        // eslint-disable-next-line quotes
        __html: `<p>
        <p><span class="texto-verde">Direction, Screenplay, and Editing:</span> Alexandre Rafael Garcia </p> 
        <p><span class="texto-verde">Production:</span> Alexandre Rafael Garcia, Anderson Simão, Christopher Faust, Evandro Scorsin, Wellington Sari </p>
        <p><span class="texto-verde">Cinematography:</span> Renata Corrêa </p> 
        <p><span class="texto-verde">Art Direction:</span> Ana Deliberador </p>
        <p><span class="texto-verde">Direct Sound:</span> Nikola Matevski </p>
        <p><span class="texto-verde">Sound Post-Production:</span> Alexandre Rogoski </p> 
        </p>
        <p>
        This film is part of the project "Summer Films" 2012
        </p>
        `,
      },
      adicional: {
        __html: `
          <p>
          <span class="texto-verde">Graphic Design:</span> Fábio Rrocha |         
          <span class="texto-verde">Direct Sound Assistant:</span> Anderson Simão |
          <span class="texto-verde">Sound Editing Assistant:</span> Samuel Jacintho |
          <span class="texto-verde">Image Post-Production:</span> Guilherme Delamuta |
          <span class="texto-verde">Translation and Subtitles:</span> Clariana Borzone 
          </p>
          <p><span class="texto-verde">Support:</span>  
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
    autor: ' WELLINGTON SARI',
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
    sinopse: 'With a broken heart due to the end of a relationship, Giba wanders around. All of a sudden he meets his friend Conrado, who introduces him to Bia.',
    categoria: 'Curta Metragem',
    tags: ['Comédia', 'Adolescente', 'Terror'],
    linkVideo: 'https://youtu.be/QjM-y_J0cFo',
    equipe: {
      principal: {
        // eslint-disable-next-line quotes
        __html: `<p>
        <p><span class="texto-verde">Direction and Screenplay:</span> Wellington Sari </p> 
        <p><span class="texto-verde">Production:</span> Alexandre Rafael Garcia, Anderson Simão, Christopher Faust, Evandro Scorsin and Wellington Sari </p>
        <p><span class="texto-verde">Cinematography:</span> Guilherme Delamuta </p> 
        <p><span class="texto-verde">Editing:</span> Christopher Faust </p>
        <p><span class="texto-verde">Direct Sound:</span> Tomás von der Osten </p>
        <p><span class="texto-verde">Sound Post-Production:</span> Tiago Bello </p> 
        </p>
        <p>
        This film is part of the project "Summer Films" 2013 
        </p>
        `,
      },
      adicional: {
        __html: `
          <p><span class="texto-verde">Coproduction: </span> Gogó Estúdio Sonoro</p>
          <p>
          <span class="texto-verde">Image Post-Production:</span> Guilherme Delamuta |         
          <span class="texto-verde">Additional Photography:</span> Renata Corrêa |
          <span class="texto-verde">Additional Direct Sound:</span> Anderson Simão |
          <span class="texto-verde">Foley Artist:</span> Marcos Lopes |
          <span class="texto-verde">Sound Editing Assistant:</span> Isabel Cardoso |
          <span class="texto-verde">Mixing Studio:</span> Gogó Estúdio Sonoro |
          <span class="texto-verde">Graphic Design:</span> Melina Correia |
          <span class="texto-verde">Editing Assistant:</span> Paula Negri |
          <span class="texto-verde">Spanish Subtitles:</span> Graziela Braz |
          <span class="texto-verde">English Subtitles:</span> Raquel Ribeiro 
          </p>
          <p><span class="texto-verde">Support:</span>  
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
    autor: ' WELLINGTON SARI',
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

    participacao: 'Monique Rau, Wellington Sari, Arno Pruner, Evandro Scorsin, Rodolfo Stancki and Paulo De Nadal.',
    sinopse: 'Bruna wants to be with André before he travels to the beach. After finding him, the young woman spends the rest of the day with her best friend Jota.',
    categoria: 'Curta Metragem',
    tags: ['Comédia', 'Adolescente', 'Terror'],
    linkVideo: 'https://youtu.be/mVCSmkKa0as',
    equipe: {
      principal: {
        // eslint-disable-next-line quotes
        __html: `<p>
        <p><span class="texto-verde">Direction and Screenplay:</span> Wellington Sari </p> 
        <p><span class="texto-verde">Production:</span> Alexandre Rafael Garcia, Anderson Simão, Christopher Faust and Evandro Scorsin </p>
        <p><span class="texto-verde">Cinematography:</span> Renata Corrêa </p> 
        <p><span class="texto-verde">Editing:</span> Christopher Faust </p>
        <p><span class="texto-verde">Direct Sound:</span> Tomás von der Osten </p>
        <p><span class="texto-verde">Image Post-Production:</span> Guilherme Delamuta </p>
        <p><span class="texto-verde">Sound Post-Production:</span> Alexandre Rogoski </p> 
        </p>
        <p>
        This film is part of the project "Summer Films" 2012
        </p>
        `,
      },
      adicional: {
        __html: `
          <p><span class="texto-verde">Supporting Cast:</span> Alexandre Rafael Garcia, Aline Angela, Bruna Mazanek, Ge Simões, Isabela Fausto, Izabela Milita, Júlia Simões, Juliana Rodrigues, Marcela Mancino, Sheila Gorski </p>
          <p>
          <span class="texto-verde">Graphic Design:</span> Melina Correia |         
          <span class="texto-verde">Assistant Director:</span> Christopher Faust |
          <span class="texto-verde">Direct Sound Assistant:</span> Anderson Simão |
          <span class="texto-verde">Editing Assistant:</span> Guilherme Delamuta |
          <span class="texto-verde">Sound Editing Assistant:</span> Samuel Jacintho |
          <span class="texto-verde">Translation and Subtitles:</span> Clariana Borzone
          </p>
          <p><span class="texto-verde">Support:</span>  
          Off-Beat Audio, Padaria América, Sanepar          
          </p>
          `,
      },
    },
  },
  {
    id: '34',
    url: 'terror-noturno',
    titulo: 'NIGHT TERROR',
    ano: 2019,
    autor: ' EVANDRO SCORSIN',
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

    participacao: 'Gustavo Piaskoski and Marrara Mara.',
    sinopse: `After an ecstatic drunken party, a couple wakes up without any recollection of the events of the previous night. When they find traces of a possible hit and run on the car's bumper, they come to believe they may have committed murder.`,
    categoria: 'Curta Metragem',
    tags: ['Comédia', 'Adolescente', 'Terror'],
    linkVideo: 'https://vimeo.com/356585839',
    equipe: {
      principal: {
        // eslint-disable-next-line quotes
        __html: `<p>
        <p><span class="texto-verde">Direction and Screenplay:</span> Evandro Scorsin </p> 
        <p><span class="texto-verde">Executive Production:</span> Anderson Simão </p>
        <p><span class="texto-verde">Production Management:</span> Wellington Sari </p>
        <p><span class="texto-verde">Cinematography:</span> André Senna </p>
        <p><span class="texto-verde">Art, Costume, and Makeup:</span> Morgana Horst </p>
        <p><span class="texto-verde">Editing:</span> Christopher Faust </p>
        <p><span class="texto-verde">Sound Post-Production:</span> Vitor Coroa and Vitor Moraes </p>
        <p><span class="texto-verde">Soundtrack:</span> Felipe Ayres </p>
        <p><span class="texto-verde">Coordinator:</span> Gustavo Duarte </p> 
        <p><span class="texto-verde">Co-Production Company:</span> House Films </p>
        </p>
        <p>
        Project developed with the support of the Cultural Foundation of Curitiba, through a public notice of the Municipal Culture Fund in partnership with the Audiovisual Sector Fund.        </p>
        `,
      },
      adicional: {
        __html: `
          <p><span class="texto-verde">Supporting Cast:</span> Martha Chapieski and Altamar Cezar </p>
          <p>
          <span class="texto-verde">Camera Operator:</span> André Senna |         
          <span class="texto-verde">Assistant Camera:</span> Murillo Marchesi |
          <span class="texto-verde">Photography Assistant:</span> Bianca Ono |
          <span class="texto-verde">Electrician:</span> Murilo Lazarin |
          <span class="texto-verde">Color Correction: </span> Lucas Machado |
          <span class="texto-verde">Color Correction Studio: </span> House Films |
          <span class="texto-verde">Logger and Assistant Director:</span> Christopher Faust |
          <span class="texto-verde">Direct Sound:</span> Anderson Simão |
          <span class="texto-verde">Sound Editing:</span> Rodrigo Sacic, Vitor Coroa and Vitor Moraes |
          <span class="texto-verde">Foley:</span> Vitor Moraes |
          <span class="texto-verde">Dubbing:</span> Luiz Lepchak |
          <span class="texto-verde">Mixing Studio:</span> Estúdio Desterro |
          <span class="texto-verde">Graphic Designer:</span> Pietro Luigi |
          <span class="texto-verde">Accessibility:</span> Etc Filmes |
          <span class="texto-verde">Translations:</span> Ó Editorial - Traduções and Edições |
          <span class="texto-verde">Portuguese Sync and English Translation:</span> Paulo Scarpa |
          <span class="texto-verde">Spanish Translation:</span> Niala Pessuto
          </p>
          <p><span class="texto-verde">Support:</span>  
          Backbros, Lamenic Cinefotographia          
          </p>
          `,
      },
    },
  },
  {
    id: '35',
    url: 'tudo-bem',
    titulo: 'IT’S ALRIGHT',
    ano: 2012,
    autor: ' CHRISTOPHER FAUST',
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
    sinopse: 'Camila broke up recently. Now she splits her time between going out, girlfriends, and her dog.',
    categoria: 'Curta Metragem',
    tags: ['Comédia', 'Adolescente', 'Terror'],
    linkVideo: 'https://youtu.be/C6KddDq6G10',
    equipe: {
      principal: {
        // eslint-disable-next-line quotes
        __html: `
        <p><span class="texto-verde">Direction, Screenplay, Executive Production, and Editing:</span> Christopher Faust </p> 
        <p><span class="texto-verde">Production and Art Direction:</span> Ana Paula Câmara and Caroline Biagi </p>
        <p><span class="texto-verde">Cinematography:</span> Daniel Florencio </p>
        <p><span class="texto-verde">Direct Sound:</span> João Menna Barreto </p>
        <p><span class="texto-verde">Microphone Operator:</span> Lucas Maffini </p>
        <p><span class="texto-verde">Sound Design:</span> Kleber Gregorio </p>
        <p>
        Project developed as the Final Graduation Project of the Film and Video course at the Paraná Arts College.        </p>
        `,
      },
      adicional: {
        __html: `
          <p><span class="texto-verde">Additional Direct Sound:</span> Tomás von der Osten </p>
          
          `,
      },
    },
  },
  {
    id: '36',
    url: 'um-verao-em-venus',
    titulo: 'SUMMER IN VENUS',
    ano: 2013,
    autor: ' EVANDRO SCORSIN',
    imgIcone: { src: '/imagens/filmes/um-verao-em-venus/umveraoemvenus_still1.jpg', desc: '', titulo: 'Titulo da Imagem' },
    imgDestaque: { src: '/imagens/filmes/um-verao-em-venus/umveraoemvenus_banner.jpg', desc: '', titulo: 'Titulo da Imagem' },
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

    participacao: 'Evandro Scorsin and Morgana Horst.',
    sinopse: 'The transit of Venus by the Sun can reconnect a frayed relationship.',
    categoria: 'Curta Metragem',
    tags: ['Comédia', 'Adolescente', 'Terror'],
    linkVideo: 'https://youtu.be/9otTk9Qm3oE',
    equipe: {
      principal: {
        // eslint-disable-next-line quotes
        __html: `<p>
        <p><span class="texto-verde">Direction and Screenplay:</span> Evandro Scorsin </p> 
        <p><span class="texto-verde">Production:</span> Alexandre Rafael Garcia, Anderson Simão, Christopher Faust, Evandro Scorsin and Wellington Sari </p>
        <p><span class="texto-verde">Cinematography:</span> Daniel Florencio </p>
        <p><span class="texto-verde">Editing:</span>  Christopher Faust </p>
        <p><span class="texto-verde">Direct Sound:</span> Tomás von der Osten </p>
        <p><span class="texto-verde">Image Post-Production:</span> Guilherme Delamuta </p>
        <p><span class="texto-verde">Sound Post-Production:</span> Bruno Ito</p>
        </p>
        <p>
        This film is part of the project "Summer Films" 2013        
        </p>
        `,
      },
      adicional: {
        __html: `
          <p><span class="texto-verde">Graphic Design:</span> Melina Correia | 
          <span class="texto-verde">Editing Assistant:</span> Paula Negri |
          <span class="texto-verde">Still Photography:</span> Guilherme Delamuta |
          <span class="texto-verde">Spanish Subtitles:</span> Graziela Braz |
          <span class="texto-verde"> English Subtitles:</span> Raquel Ribeiro
          </p>
          <p>
          <span class="texto-verde">Support:</span>
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
    texto: 'A Quadro is O Quadro, but slightly different. A longtime dream of the production company, in 2021 we created publishing label devoted to cinema. To separate one from another, we baptized the activity under an alternative name, marking the difference without dismantling the whole: we make cinema, whether producing films, a festival, or editing and publishing books.',
  },
  colecoes: {
    logo: {
      titulo: 'Logo da Coleção',
      src: '/imagens/publicacoes/colecaoescreverocinema_logo_alta.jpg',
      desc: '',
    },
    texto: 'Cinema in writing collection expands the act of making cinema to the pages of books, changing the lens for the letter, replacing the script with reflection. In the volumes comprising the collection, academic researchers shed light on theoretical, historical, and critical dimensions of different works of world cinema, in dialogue with other fields of knowledge, yet always returning to the films themselves.',
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
      titulo: 'THE ADVENTURE: NOTES ON THE STYLE OF MICHELANGELO ANTONIONI',
      autor: ' Author: JULIANA RODRIGUES PEREIRA',
      sobreoAutor: 'Juliana Rodrigues Pereira is a communication advisor and researcher. She was born in Rio de Janeiro and, after living in three different regions of the country, took root in Curitiba. She holds an MA in History from UFPR; a BA in Journalism from PUC-PR, and a BA in Cinema and Audiovisual from the Parana Arts College.',
      sinopse: 'The adventure: notes on the style of Michelangelo Antonioni explores the elements that underpinned the foundations of the Italian filmmaker’s style from a key film of his career, The adventure, from 1960. In a thoroughly detailed film analysis, the author elucidates and unfastens commonplace notions about this fundamental artist in the history of modern cinema ',
      patrocinadores: { src: '/imagens/publicacoes/livro01_04_05_banner.png', desc: '', titulo: 'Titulo da Imagem' },
      textoEstatico: [{ sinopse: 'sinopse', sobreAutor: 'sobre o autor', fichaTecnica: 'ficha técnica' }],
      tags: [],
      fichaTecnica: {
        isbn: '978-65-996017-0-5',
        paginas: '156',
        idioma: 'Portuguese',
        dimensoes: '21 x 14 cm',
        formato: 'Book - Paperback',
        edicao: '1st - 2021',
        editora: 'A Quadro',
        colecao: 'Cinema in Writing Collection',
      },
    },
    {
      imgPoster: { src: '/imagens/publicacoes/livro02green_capa_web.jpg', desc: '', titulo: 'Titulo da Imagem' },
      url: 'eugene-green',
      titulo: 'EUGÈNE GREEN AND THE UNVEILED CINEMA HYPOTHESIS',
      autor: ' Author: PEDRO FAISSOL',
      sobreoAutor: 'Pedro Faissol is a film researcher and professor. He holds a PhD and an MA in Audiovisual Media and Processes from the School of Communications and Arts of the University of São Paulo (ECA/USP). He also holds a Bachelor’s Degree in Social Communication (Cinema) from the Fluminense Federal University (UFF). He is a professor at the BA course in Cinema and Audiovisual and the Graduate Program in Cinema and Video Arts at the State University of Paraná (PPG-CINEAV/Unespar).',
      sinopse: `Pedro Faissol sheds light on Eugène Green’s cinema and its intriguing mise-en-scène. To test his hypothesis, the author closely examines Green’s first two films: Toutes les nuits (2001) and Le Monde vivant (2003). The author’s approach dissolves the boundaries between immanent analysis, theoretical comparison, and personal expression, infusing the text with a tonal mimicry which expands the unique experience of Eugène Green's cinema.`,
      textoEstatico: [{ sinopse: 'sinopse', sobreAutor: 'sobre o autor', fichaTecnica: 'ficha técnica' }],
      patrocinadores: { src: '/imagens/publicacoes/livro02_03_creditos_banner.png', desc: '', titulo: 'Titulo da Imagem' },
      fichaTecnica: {
        isbn: '978-65-996017-2-9',
        paginas: '184',
        idioma: 'Portuguese',
        dimensoes: '21 x 14 cm',
        formato: 'Book - Paperback',
        edicao: '1st - 2021',
        editora: 'A Quadro',
        colecao: 'Cinema in Writing Collection',
      },
    }, {
      imgPoster: { src: '/imagens/publicacoes/livro03rohmer_capa_web.jpg', desc: '', titulo: 'Titulo da Imagem' },
      url: 'contos-morais',
      titulo: 'MORAL TALES AND THE CINEMA OF ÉRIC ROHMER ',
      autor: ' Author: ALEXANDRE GARCIA',
      sobreoAutor: 'Alexandre Rafael Garcia was born in 1985 in Curitiba. He is a researcher, director, and film professor. He is a doctoral candidate in History at UFPR, and holds an MA in Multimedia at the Unicamp Institute of Arts and a BA in Film from the Parana Arts College. He founded and was a partner in the production company O Quadro from 2010 to 2015. He created the Writing Cinema Collection and the Dictionary of Cinema series. He currently works at the State University of Paraná (Unespar).',
      sinopse: 'Based on the analysis of the six films from Moral Tales series, made between 1963 and 1972, Alexandre Rafael Garcia delves into the style of Éric Rohmer. The analytical selection establishes an important gateway for understanding the modes of production, narrative, and mise-en-scène of the French filmmaker, a unique character in the history of the arts.',
      patrocinadores: { src: '/imagens/publicacoes/livro02_03_creditos_banner.png', desc: '', titulo: 'Titulo da Imagem' },
      fichaTecnica: {
        isbn: '978-65-996017-1-2',
        paginas: '256',
        idioma: 'Portuguese',
        dimensoes: '21 x 14 cm',
        formato: 'Book - Paperback',
        edicao: '2nd - 2021',
        editora: 'A Quadro',
        colecao: 'Cinema in Writing Collection',
      },
    }, {
      imgPoster: { src: '/imagens/publicacoes/livro04milagre_capa_web.jpg', desc: '', titulo: 'Titulo da Imagem' },
      url: 'a-representacao',
      titulo: 'THE REPRESENTATION OF MIRACLE IN CINEMA: ICONOGRAPHY, IDOLATRY, AND BELIEF',
      autor: ' Author: PEDRO FAISSOL',
      sobreoAutor: 'Pedro Faissol is a film researcher and professor. He holds a PhD and an MA in Audiovisual Media and Processes from the School of Communications and Arts of the University of São Paulo (ECA/USP). He also holds a Bachelor’s Degree in Social Communication (Cinema) from the Fluminense Federal University (UFF). He is a professor at the BA course in Cinema and Audiovisual and the Graduate Program in Cinema and Video Arts at the State University of Paraná (PPG-CINEAV/Unespar).',
      sinopse: 'Miracle in cinema presents itself as a representational dilemma. This premise led to the analytical selection in this book. For each miracle (Annunciation, Healing the Blind, Resurrection), a corresponding dilemma was chosen: 1. How to rework the plastic motifs of Christian iconography in cinema? 2. How to portray the face of Christ, at the risk of inducing idolatry? 3. What are the adopted strategies for the problem of disbelief in representation? The film analyses in this book detail a wide repertoire of pathways to these questions.',
      patrocinadores: { src: '/imagens/publicacoes/livro01_04_05_banner.png', desc: '', titulo: 'Titulo da Imagem' },
      fichaTecnica: {
        isbn: '978-65-996017-3-6',
        paginas: '308',
        idioma: 'Portuguese',
        dimensoes: '21 x 14 cm',
        formato: 'Book - Paperback',
        edicao: '1st - 2021',
        editora: 'A Quadro',
        colecao: 'Cinema in Writing Collection',
      },
    },
    {
      imgPoster: { src: '/imagens/publicacoes/livro05documentario_capa_web.jpg', desc: '', titulo: 'Titulo da Imagem' },
      url: 'documentario',
      titulo: 'DOCUMENTARY: FILMS FOR WINDOWED MOVIE THEATERS',
      autor: ' Author: EDUARDO TULIO BAGGIO',
      sobreoAutor: 'Eduardo Tulio Baggio is a professor in the BA course in Cinema and Audiovisual and the Masters course in Cinema and Video Arts, both at Unespar. Co-leader of the Cinecriare research group (Unespar/CNPq). Member of ST Theory of Filmmakers at Socine and the Workgroup Theory of Filmmakers at AIM. He has published in magazines such as Cine Documental, Aniki, Doc Online, Galáxia, and Cognitio. He was one editors of the books Theory of Filmmakers (Vols.1, 2, and 3). His filmography includes A Alma do Gesto (2020), João & Maria (2016), and Santa Teresa (2014).',
      sinopse: 'Documentary: Films for Windowed Movie Theaters traces a historical-conceptual path towards a critical debate on the definitions of documentary. From a realist perspective, the book discusses the typical relationships of this film category between the factual and experiential world, the production processes, the audiovisual work itself, and reception. From these four poles, the author proposes the metaphor of windowed movie theaters to formulate an augmented and relational approach to documentary cinema.',
      patrocinadores: { src: '/imagens/publicacoes/livro01_04_05_banner.png', desc: '', titulo: 'Titulo da Imagem' },
      fichaTecnica: {
        isbn: '978-65-996017-4-3',
        paginas: '140',
        idioma: 'Portuguese',
        dimensoes: '21 x 14 cm',
        formato: 'Book - Paperback',
        edicao: '1st - 2021',
        editora: 'A Quadro',
        colecao: 'Cinema in Writing Collection',
      },
    },

  ],
  quemSomos: {
    titulo: 'QUEM SOMOS',
    imgDestaque: { src: '/imagens/quemsomos/integrantes_grupo_web.jpg', desc: '', titulo: 'Titulo da Imagem' },
    texto: {
      primeiroParagrafo: 'Created in 2010, the production company O Quadro makes films, organizes a film festival, and publishes books.',
      segundoParagrafo: 'The catalogue includes dozens of short, feature, and medium-length films screened and awarded in the most diverse film festivals, released on the commercial circuit as well as programmed on TV channels and VOD platforms.',
      terceiroParagrafo: 'In 2017, O Quadro created Metro – Brazilian University Film Festival, an event that has distinguished itself among film festivals, with the screening of the most varied university works, in addition to several educational activities.',
      quartoParagrafo: 'In 2021, the production company has expanded its activities, with the launch of the Publishing Company A Quadro, responsible for launching books about cinema.',
    },

    membros: [{
      nome: 'Anderson Simão',
      img:
        { src: '/imagens/quemsomos/integrantes_anderson.jpg', desc: '' },
    },
    {
      nome: 'Christopher Faust',
      img:
        { src: '/imagens/quemsomos/integrantes_christopher.jpg', desc: '' },
    },
    {
      nome: 'Evandro Scorsin',
      img:
        { src: '/imagens/quemsomos/integrantes_evandro.jpg', desc: '' },
    },
    {
      nome: 'Wellington Sari',
      img:
        { src: '/imagens/quemsomos/integrantes_wellington.jpg', desc: '' },
    },
    ],

  },

  metro: {
    logo: { src: '/imagens/festivalMetro.svg', desc: 'Logo Festival Metro' },
    titulo: 'FESTIVAL METRÔ',
    button: 'step in',
    texto: 'Metro – Brazilian University Film Festival, conceived and produced by O Quadro, with the valuable help of several partners, has been an ongoing event since 2017. A space for screening and reflecting about film made by filmmaking students, Metro is the station that enables journeys, encounters, exchanges, and inventions.',
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
      email: { src: '/imagens/icone/emailIcone.svg', desc: 'and-mail Logo' },
    },

  },
};
export default databaseEn;
