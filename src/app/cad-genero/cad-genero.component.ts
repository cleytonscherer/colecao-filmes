import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Genero } from '../models/genero.model';

@Component({
  selector: 'app-cad-genero',
  templateUrl: './cad-genero.component.html',
  styleUrls: ['./cad-genero.component.css']
})
export class CadGeneroComponent implements OnInit {

  @Output() aoCadastrarGenero = new EventEmitter<Genero>();

  gender: string = '';

  genero: Genero = new Genero(this.gender);

  constructor() { }

  ngOnInit(): void {
  }

  cadastrarGenero() {
    console.log('cadastrarGenero();')

    this.genero = {gender: this.gender};
    console.table(this.genero);
    this.aoCadastrarGenero.emit(this.genero);
  }

}
