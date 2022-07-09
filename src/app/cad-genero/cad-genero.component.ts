import { Router } from '@angular/router';
import { GeneroService } from './../servicos/genero.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Genero } from '../models/genero.model';

@Component({
  selector: 'app-cad-genero',
  templateUrl: './cad-genero.component.html',
  styleUrls: ['./cad-genero.component.css']
})
export class CadGeneroComponent implements OnInit {

  //@Output() aoCadastrarGenero = new EventEmitter<Genero>();

  gender: string = '';

  //genero: Genero = new Genero(this.gender);
  genero!: Genero;

  generoForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private generoService: GeneroService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.generoForm = this.formBuilder.group({
      gender:   ['',[Validators.required]]
    });
  }

  cadastrarGenero() {
    console.log('cadastrarGenero();')

    this.genero = {gender: this.gender};
    console.table(this.genero);
    //this.aoCadastrarGenero.emit(this.genero);

    /* com observable
    this.generoService.save(this.genero).subscribe(resultado => {
      console.log(resultado);
      window.alert(`Gênero ${this.genero.gender} cadastrado com sucesso!`);
      this.router.navigateByUrl('lista-generos');
    }, error => {
      console.error(error)
    });
    */

    /* com promises */
    let promise = new Promise((resolve, reject) => {
      this.generoService.save(this.genero)
      .toPromise()
      .then(() => {
        window.alert(`Genero: ${this.genero.gender} cadastrado com sucesso!`);
      })
      .then(() => {
        this.router.navigateByUrl('lista-generos');
      })
      .catch((reject) => {
        console.error(reject)
        window.alert(reject);
      })
    });

    

    /* com localStorage
    localStorage.setItem('genero', JSON.stringify(this.genero));
    localStorage.setItem('gender', this.genero.gender);
    */

    //const mensagem = `Filme ${this.filme.title} cadastrado com sucesso!`;
    //window.alert(`Gênero ${this.genero.gender} cadastrado com sucesso!`);
  }

  limparCampos() {
    this.gender = '';
  }

}
