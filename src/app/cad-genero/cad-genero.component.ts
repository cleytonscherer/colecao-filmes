import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Genero } from '../models/genero.model';
import { GeneroService } from './../servicos/genero.service';

@Component({
  selector: 'app-cad-genero',
  templateUrl: './cad-genero.component.html',
  styleUrls: ['./cad-genero.component.css']
})
export class CadGeneroComponent implements OnInit {

  //@Output() aoCadastrarGenero = new EventEmitter<Genero>();

  //gender: string = '';

  //genero: Genero = new Genero(this.gender);
  genero!: Genero;

  generoForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private generoService: GeneroService,
    private router: Router,
    private route: ActivatedRoute,
  ) {
    this.genero = new Genero('');
    this.genero.id= 0;
  }

  ngOnInit(): void {
    console.log('ngOnInit();')

    this.generoForm = this.formBuilder.group({
      gender:   ['',[Validators.required]]
    });

    this.genero.id     = 0;
    this.genero.gender = '';

    const routeParams = this.route.snapshot.paramMap;
    const generoIdFromRoute = Number(routeParams.get('generoId'));

    console.log('Genero ID: ' + generoIdFromRoute);

    if (generoIdFromRoute > 0) {
      this.generoService.getGeneroById(generoIdFromRoute).subscribe(genero => {
        console.log(genero);
        this.genero = genero;
      });
    };
  }

  cadastrarGenero() {
    console.log('cadastrarGenero();')

    if (this.genero.id === 0) {
      console.log('cadastrarGenero();')

      if (this.genero.gender.length > 0) {
        console.log(this.genero);

        // com observable
        this.generoService.save(this.genero).subscribe(genero => {
          console.log(genero);
          window.alert(`Gênero ${this.genero.gender} cadastrado com sucesso!`);

          this.router.navigateByUrl('lista-generos');
          this.generoForm.reset();
        });

        /*
        // com promises
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
        */

        //this.genero = {gender: this.gender};
        //console.table(this.genero);
        //this.aoCadastrarGenero.emit(this.genero);

        /* com localStorage
        localStorage.setItem('genero', JSON.stringify(this.genero));
        localStorage.setItem('gender', this.genero.gender);
        */
      } else {
        window.alert("Formulário Inválido!");
      }
    } else {
      this.atualizarGenero();
    }
  }

  atualizarGenero() {
    console.log('atualizarGenero();');

    console.log(this.genero);

    this.generoService.update(this.genero).subscribe((genero) => {
      console.log(genero);
      window.alert(`Genero: ${genero.gender} atualizado com sucesso!`);
      this.router.navigateByUrl('lista-generos');
      this.generoForm.reset();
    });
  }
}
