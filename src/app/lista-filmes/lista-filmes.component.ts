import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Filme } from '../models/filme.model';
import { FilmeService } from '../servicos/filme.service';
import { GeneroService } from '../servicos/genero.service';

@Component({
  selector: 'app-lista-filmes',
  templateUrl: './lista-filmes.component.html',
  styleUrls: ['./lista-filmes.component.css']
})
export class ListaFilmesComponent implements OnInit {

  filmes: Filme[];

  constructor(
    private router: Router,
    private filmeService: FilmeService,
    private generoService: GeneroService
    ) {
      this.filmes = [];
    }

  ngOnInit(): void {
    this.filmeService.fullList().subscribe((filmes : Filme[]) =>  {
      //console.table(filmes);
      this.filmes = filmes;
      this.filmes.sort((a, b) => (a.title < b.title) ? -1 : 1);
    });
  }

  onClickItem(filme: Filme) {
    //this.router.navigate(['/detalhe-filme', filme?.id]);
    this.router.navigate(['/cad-filme', filme?.id]);
  }

  generoDosFilmes() {
    this.filmes.forEach(filme => {
      this.generoService.getGeneroById(filme.genderId).subscribe(genero => {
        console.log('generoId: ' + filme.genderId);
        filme.gender = genero.gender;
      });
    })

  }

}
