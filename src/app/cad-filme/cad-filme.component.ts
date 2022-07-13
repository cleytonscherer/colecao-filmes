import { Router } from '@angular/router';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Filme } from '../models/filme.model';
import { FilmeService } from '../servicos/filme.service';

@Component({
  selector: 'app-cad-filme',
  templateUrl: './cad-filme.component.html',
  styleUrls: ['./cad-filme.component.css']
})
export class CadFilmeComponent implements OnInit {

  //@Output() aoCadastrarFilme = new EventEmitter<any>();

  codebar: number = 0;
  title: string = '';
  duration: number = 0;
  rating: number = 0;
  gender: string = '';

  filme!: Filme;

  filmeForm!: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private filmeService: FilmeService,
    private router: Router
  ) { }

  cadastrarFilme() {
    if (this.codebar > 0) {
      console.log('CadastrarFilme();');
      this.filme = {codebar: this.codebar, title: this.title, duration: this.duration, rating: this.rating, gender: this.gender};
      console.table(this.filme);
      //this.aoCadastrarFilme.emit(this.filme);

      /* com observable */
      this.filmeService.save(this.filme).subscribe(resultado => {
        console.log(resultado);
        window.alert(`Filme: ${this.filme.title} cadastrado com sucesso!`);
        this.router.navigateByUrl('lista-filmes');
        this.filmeForm.reset();
      }, error => {
        console.error(error)
        window.alert(error);
      });


      /* com promises
      let promise = new Promise((resolve, reject) => {
        this.filmeService.save(this.filme)
        .toPromise()
        .then(() => {
          window.alert(`Filme: ${this.filme.title} cadastrado com sucesso!`);
        })
        .then(() => {
          this.router.navigateByUrl('lista-filmes');
        })
        .catch((reject) => {
          console.error(reject)
          window.alert(reject);
        })
      });
      */


      /* com localStorage
      localStorage.setItem('filme', JSON.stringify(this.filme));
      localStorage.setItem('codebar',  this.filme.codebar.toString());
      localStorage.setItem('title',    this.filme.title);
      localStorage.setItem('duration', this.filme.duration.toString());
      localStorage.setItem('rating',   this.filme.rating.toString());
      localStorage.setItem('gender',   this.filme.gender);
      */

      //const mensagem = `Filme ${this.filme.title} cadastrado com sucesso!`;
      //window.alert(`Filme: ${this.filme.title} cadastrado com sucesso!`);
      //this.limparCampos();
    }
  }

  ngOnInit(): void {
    this.filmeForm = this.formBuilder.group({
      codebar:  ['',[Validators.required]],
      title:    ['',[Validators.required]],
      duration: ['',[Validators.required]],
      rating:   ['',[Validators.required]],
      gender:   ['',[Validators.required]]
    });

    /*
    var filme = localStorage.getItem('filme');
    console.log(JSON.parse(filme || '{}' ));
    window.alert(JSON.parse(filme || '{}' ));
    */

    /*
    var codebar  = localStorage.getItem('codebar');
    var title    = localStorage.getItem('title');
    var duration = localStorage.getItem('duration');
    var rating   = localStorage.getItem('rating');
    var gender   = localStorage.getItem('gender');
    */
  }

  /*
  cadastrar() {
    console.log("cadastrar();");
    const filme = this.filmeForm.getRawValue() as Filme;
    console.log(filme);
    this.filme = filme;
    localStorage.setItem('filme', JSON.stringify(filme));
    window.alert(`Filme {filme.title} cadastrado com sucesso!`);
  }
  */

  /*
  limparCampos() {
    this.codebar = 0;
    this.title = '';
    this.duration = 0;
    this.rating = 0;
    this.gender = '';
  };
  */

}
