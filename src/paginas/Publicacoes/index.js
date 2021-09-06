// importar estilos

// importar componentes
import Base from "../../componentes/Base";
import {
  Titulo, Conteiner, ArtigoPrincipal, 
  ConteinerLinha, ImagemLateral, ArtigoLateral, 
  ListaLivro, Livro, CapaLivro, 
  InfoLivro, TituloLivro, AutorLivro
} from "./estilo"

function Publicacoes() {
   return (
  <Base 
  menuSocialVermelho = {true}
  estadoMenu = {2}>
    <Titulo>A QUADRO</Titulo>
      <Conteiner>
        <ArtigoPrincipal>
          <p>

            A Edições A Quadro, selo para publicações da produtora audiovisual O Quadro, embora criada recentemente, era um
            desejo antigo da empresa, quando na criação do seu CNPJ,
            há 10 anos, estabeleceu entre as atividades econômicas a
            possibilidade de edição e publicação de textos.
            
          </p>
          <p>
            Ela surge após um período de experiências diversas dos seus
            idealizadores que, concomitante à produção de flmes,
            exercitaram a escrita crítica sobre cinema, em revistas
            eletrônicas, blogs e os mais diversos catálogos e publicações
            afins, exerceram e exercem atividades de ensino do
            audiovisual, a partir de oficinas, cineclubes, cursos livres,
            palestras e debates sobre a sétima arte, e realizam pesquisas
            acadêmicas, na conclusão de graduações e mestrados.
          </p>
          
        </ArtigoPrincipal>
        <ConteinerLinha>
          <ImagemLateral src="http://placekitten.com/400/250"/>
          <ArtigoLateral>
            <p>
              Para Coleção Escrever o Cinema, a
              editora recém criada, Edições A Quadro, alia-se à
              profissionais, autores e pesquisadores, com
              experiências acadêmicas bastante consistentes, tanto
              na escrita, como na revisão e na organização de
              publicações diversas, é o caso do professor e cineasta
              Doutor Eduardo Túlio Baggio, organizador de diversas
              publicações, do professor Doutor Pedro de Andrade
              Lima Faissol, do cineasta e doutorando Alexandre
              Rafael Garcia, e da Mestre Juliana Rodrigues Pereira.
            </p>
            
            <p>
              Atualmente, enquanto produz os 4 primeiros volumes
              da Coleção Escrever o Cinema, paralelamente busca a
              viabilização de mais 4 volumes determinados para nova
              fase da coleção, enquanto matura e idealiza demais
              projetos de escrita e publicação.
            </p>
          </ArtigoLateral>
        </ConteinerLinha>
      
        <ListaLivro>
          <Livro>
            <CapaLivro src="http://placekitten.com/150/200"/>
            <InfoLivro>
              <TituloLivro>CONTOS MORAIS E O CINEMA DE ÉRIC ROHMER</TituloLivro>
              <AutorLivro>DE ALEXANDRE RAFAEL GARCIA</AutorLivro>
            </InfoLivro>
          </Livro>
          <Livro>
            <CapaLivro src="http://placekitten.com/150/200"/>
            <InfoLivro>
              <TituloLivro>CONTOS MORAIS E O CINEMA DE ÉRIC ROHMER</TituloLivro>
              <AutorLivro>DE ALEXANDRE RAFAEL GARCIA</AutorLivro>
            </InfoLivro>
          </Livro>
          <Livro>
            <CapaLivro src="http://placekitten.com/150/200"/>
            <InfoLivro>
              <TituloLivro>CONTOS MORAIS E O CINEMA DE ÉRIC ROHMER</TituloLivro>
              <AutorLivro>DE ALEXANDRE RAFAEL GARCIA</AutorLivro>
            </InfoLivro>
          </Livro>
        </ListaLivro>
      </Conteiner>
  </Base>
  );
}

export default Publicacoes;