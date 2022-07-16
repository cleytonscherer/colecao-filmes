import { ActivatedRoute, Router } from '@angular/router';
import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Filme } from '../models/filme.model';
import { FilmeService } from '../servicos/filme.service';
import { GeneroService } from './../servicos/genero.service';
import { Genero } from '../models/genero.model';

@Component({
  selector: 'app-cad-filme',
  templateUrl: './cad-filme.component.html',
  styleUrls: ['./cad-filme.component.css']
})
export class CadFilmeComponent implements OnInit {

  /*
  codebar: number = 0;
  title: string = '';
  duration: number = 0;
  rating: number = 0;
  gender: string = '';
  genderId: number = 0;
  */

  filme!: Filme;

  filmeForm!: FormGroup

  generos!: Genero[];

  constructor(
    private formBuilder: FormBuilder,
    private filmeService: FilmeService,
    private generoService: GeneroService,
    private router: Router,
    private route: ActivatedRoute,
  ) {
    console.log('construtor();')

    this.filme = new Filme(0, '', 0, 0, '', 0);
    this.filme.id = 0;
  }

  ngOnInit(): void {
    console.log('ngOnInit();')

    this.filmeForm = this.formBuilder.group({
      codebar:  ['',[]],
      title:    ['',[]],
      duration: ['',[]],
      rating:   ['',[]],
      gender:   ['',[]],
      genderId: ['',[]]
    });

    /*
    this.filmeForm = this.formBuilder.group({
      codebar:  ['',[Validators.required]],
      title:    ['',[Validators.required]],
      duration: ['',[Validators.required]],
      rating:   ['',[Validators.required]],
      gender:   ['',[Validators.required]],
      genderId: ['',[Validators.required]]
    });
    */

    this.generoService.fullList().subscribe(generos => {
        this.generos = generos;
        this.generos?.sort((a,b) => (a.gender < b.gender) ? -1 : 1)
    });

    this.filme.id       = 0;
    this.filme.codebar  = 0;
    this.filme.title    = '';
    this.filme.duration = 0;
    this.filme.rating   = 0;
    this.filme.gender   = '';
    this.filme.genderId = 0;

    const routeParams = this.route.snapshot.paramMap;
    const filmeIdFromRoute = Number(routeParams.get('filmeId'));

    console.log('Filme ID: ' + filmeIdFromRoute);

    if (filmeIdFromRoute > 0) {
      this.filmeService.getFilmeById(filmeIdFromRoute).subscribe(filme => {
        console.log(filme);
        this.filme = filme;
      });
    };
  }

  cadastrarFilme() {

    this.generoDoFilme();

    if (this.filme.id === 0) {
      console.log('CadastrarFilme();');

      if (this.filme.codebar > 0 &&
          this.filme.title.length > 0 &&
          this.filme.duration > 0 &&
          this.filme.rating >= 0 &&
          this.filme.genderId > 0
        ) {

        //this.filme = { codebar: this.codebar, title: this.title, duration: this.duration, rating: this.rating, gender: this.gender, genderId: this.genderId };
        //console.table(this.filme);

        this.generoDoFilme();
        console.log(this.filme);

        /* com observable */
        this.filmeService.save(this.filme).subscribe((filme) => {
          console.log(filme);
          window.alert(`Filme: ${filme.title} cadastrado com sucesso!`);
          this.router.navigateByUrl('lista-filmes');
          this.filmeForm.reset();
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
      }
    } else {
      this.atualizarFilme();
    }
  }

  atualizarFilme() {
    console.log('atualizarFilme();');

    this.generoDoFilme();
    console.log(this.filme);

    this.filmeService.update(this.filme).subscribe((filme) => {
      console.log(filme);
      window.alert(`Filme: ${filme.title} atualizado com sucesso!`);
      this.router.navigateByUrl('lista-filmes');
      this.filmeForm.reset();
    });
  }

  generoDoFilme() {
    this.generoService.getGeneroById(this.filme.genderId).subscribe(genero => {
      console.log('generoId: ' + this.filme.genderId);

      this.filme.gender = genero.gender;

      console.log('gênero: ' + this.filme.gender);
      console.log('gênero do filme: ' + this.filme.gender);
    });
  }

}
