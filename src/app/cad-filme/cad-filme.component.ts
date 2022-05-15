import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Filme } from '../models/filme.model';
//import { Filme } from '../models/filme.model';

@Component({
  selector: 'app-cad-filme',
  templateUrl: './cad-filme.component.html',
  styleUrls: ['./cad-filme.component.css']
})
export class CadFilmeComponent implements OnInit {

  @Output() aoCadastrarFilme = new EventEmitter<any>();

  codebar = 0;
  title: string = '';
  duration: number = 0;
  rating: number = 0;
  gender: string = '';


  filme!: Filme;

  constructor() { }

  cadastrarFilme() {
    //console.log('CadastrarFilme();');
    this.filme = {codebar: this.codebar, title: this.title, duration: this.duration, rating: this.rating, gender: this.gender};
    console.table(this.filme);
    this.aoCadastrarFilme.emit(this.filme);

    /*
    const valorEmitir = { codebar: this.codebar, title: this.title, duration: this.duration, rating: this.rating, gender: this.gender };
    console.table(valorEmitir);
    this.aoCadastrarFilme.emit(valorEmitir);
    */
    this.limparCampos();
  }

  ngOnInit(): void {
  }

  limparCampos() {
    this.codebar = 0;
    this.title = '';
    this.duration = 0;
    this.rating = 0;
    this.gender = '';
  };


}
