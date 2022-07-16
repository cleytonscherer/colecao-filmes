import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Genero } from '../models/genero.model';
import { GeneroService } from '../servicos/genero.service';

@Component({
  selector: 'app-lista-generos',
  templateUrl: './lista-generos.component.html',
  styleUrls: ['./lista-generos.component.css']
})
export class ListaGenerosComponent implements OnInit {

  generos: Genero[];

  constructor(
    private router: Router,
    private generoService: GeneroService) {
    this.generos = [];
  }

  ngOnInit(): void {
    this.generoService.fullList().subscribe((generos: Genero[]) => {
      //console.table(generos);
      this.generos = generos;
      this.generos?.sort((a, b) => (a.gender < b.gender) ? -1 : 1);
    });
  }

  onClickItem(genero: Genero) {
    this.router.navigate(['/cad-genero', genero?.id]);
  }
}
