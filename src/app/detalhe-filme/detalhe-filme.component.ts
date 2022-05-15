import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import WebStorageUtils from 'webstorage-utils';
import { Filme } from '../models/filme.model';
//import { Constants } from 'src/app/util/constants';

@Component({
  selector: 'app-detalhe-filme',
  templateUrl: './detalhe-filme.component.html',
  styleUrls: ['./detalhe-filme.component.css']
})
export class DetalheFilmeComponent implements OnInit {

  filme!: Filme;

  id:  string = '';
  codebar: number = 0;
  title: string = '';
  duration: number = 0;
  rating: number = 0;
  gender: string = '';

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    /*
    let idParam = this.route.snapshot.params['id'];
    let user = WebStorageUtils.get(Constants.USERNAME_KEY) as User;
    let filmes = user.filmes;

    filmes = filmes.filter((f) => {
      return f.id == idParam;
    });

    if (filmes.length == 0) {
      alert('Filme não foi encontrado!');
    }

    this.filme = filmes[0];
    */

  }


}
