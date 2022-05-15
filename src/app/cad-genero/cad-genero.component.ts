import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
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

  generoForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.generoForm = this.formBuilder.group({
      gender:   ['',[Validators.required]]
    });
  }

  cadastrarGenero() {
    console.log('cadastrarGenero();')

    this.genero = {gender: this.gender};
    console.table(this.genero);
    this.aoCadastrarGenero.emit(this.genero);

    localStorage.setItem('genero', JSON.stringify(this.genero));
    localStorage.setItem('gender', this.genero.gender);

    //const mensagem = `Filme ${this.filme.title} cadastrado com sucesso!`;
    window.alert(`Gênero ${this.genero.gender} cadastrado com sucesso!`);
  }

}
