import { Component, OnInit } from '@angular/core';
import { Genero } from '../models/genero.model';

@Component({
  selector: 'app-lista-generos',
  templateUrl: './lista-generos.component.html',
  styleUrls: ['./lista-generos.component.css']
})
export class ListaGenerosComponent implements OnInit {

  generos: Genero[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
