import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Filme } from '../models/filme.model';
import { FilmeService } from '../servicos/filme.service';

@Component({
  selector: 'app-lista-filmes',
  templateUrl: './lista-filmes.component.html',
  styleUrls: ['./lista-filmes.component.css']
})
export class ListaFilmesComponent implements OnInit {

  //filme!: Filme;
  //@Input() filmes: Filme[] = [];
  filmes: Filme[];

  constructor(
    private router: Router,
    private filmeService: FilmeService
    ) {
      this.filmes = [];
    }


  ngOnInit(): void {
    //this.filmes = this.filmeService.listaFilmes;
    this.filmeService.fullList().subscribe((filmes : Filme[]) =>  {
      console.table(filmes);
      this.filmes = filmes;
    });
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
