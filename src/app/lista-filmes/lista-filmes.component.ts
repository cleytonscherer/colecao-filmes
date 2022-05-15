import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Filme } from '../models/filme.model';

@Component({
  selector: 'app-lista-filmes',
  templateUrl: './lista-filmes.component.html',
  styleUrls: ['./lista-filmes.component.css']
})
export class ListaFilmesComponent implements OnInit {

  //filme!: Filme;
  @Input() filmes: Filme[] = [];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  /*
  cadastrarFilme($event) {
    this.filmes.push($event.filme);
  }
  */

  onClickItem(filme: Filme) {
    this.router.navigate(['/detalhe-filme', filme?.id]);
  }
}
