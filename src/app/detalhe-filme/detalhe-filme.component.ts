import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Filme } from '../models/filme.model';
import { FilmeService } from '../servicos/filme.service';
//import { Constants } from 'src/app/util/constants';

@Component({
  selector: 'app-detalhe-filme',
  templateUrl: './detalhe-filme.component.html',
  styleUrls: ['./detalhe-filme.component.css']
})
export class DetalheFilmeComponent implements OnInit {

  filme!: Filme;

  constructor(
    private route: ActivatedRoute,
    private filmeService: FilmeService
  ) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const filmeIdFromRoute = Number(routeParams.get('filmeId'));

    console.log('Filme ID: ' + filmeIdFromRoute);

    this.filmeService.getFilmeById(filmeIdFromRoute).subscribe(filme => {
      console.log(filme);
      this.filme = filme;
    });

  }


}
