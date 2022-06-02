import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  imagem_logo = './assets/resources/images/logo.png';

  cadFilmeDesc = 'Cadastrar Filme';
  cadFilmeUrl  = 'cad-filme.html';

  listarFilmesDesc = 'Listar Filmes';
  listarFilmesUrl = 'list-filmes.html';

  cadGeneroDesc = 'Cadastrar Gênero';
  cadGeneroUrl = 'cad-genero.html';

  listarGenerosDesc = 'Listar Gêneros';
  listarGenerosUrl = 'list-generos.html';

  sobreDesc = 'Sobre';
  sobreUrl = 'sobre.html';
  
  constructor() { }

  ngOnInit(): void {
  }

}
