//import * as $ from 'jquery';
import { Component } from '@angular/core';
import { Filme } from './models/filme.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  /*
  codebar!: number;
  title!: string;
  duration!: number;
  rating!: number;
  gender!: string;
  */

  filme!: Filme;
  filmes: Filme[] = [];

  cadastrarFilme($event: any) {

    /*
    console.log($event);
    this.codebar = $event.codebar;
    this.title = $event.title;
    this.duration = $event.duration;
    this.rating = $event.rating;
    this.gender = $event.gender;
    */

    this.filme = $event;
    this.filmes.push(this.filme);
  }

}
