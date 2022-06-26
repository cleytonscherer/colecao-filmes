import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Filme } from '../models/filme.model';

@Injectable({
  providedIn: 'root'
})
export class FilmeService {

  private URL = 'http://localhost:3000/movies';

  private filmes: Filme[];
  /*
  httpOptions = {
    Headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };
  */

  constructor(private httpClient: HttpClient) {
    this.filmes = [];
  }

  /*
  getFilme(id: number): Promise<Filme[]> {
    return this.httpClient.get<Filme[]>(`${this.URL}/${id}`).toPromise();
  }
  */

  /*
  get listaFilmes() {
    return this.filmes;
  }
  */

  fullList(): Observable<Filme[]> {
    return this.httpClient.get<Filme[]>(this.URL);
  }

  getFilmeById(id: number): Observable<Filme> {
    return this.httpClient.get<Filme>(`${this.URL}/${id}`);
  }

  /*
  save(filme: Filme): Promise<Filme> {
    return this.httpClient.post<Filme>(this.URL, JSON.stringify(filme), this.httpOptions).toPromise();
  }
  */
  save2(filme: Filme) {
    return this.httpClient.post<Filme>(this.URL, JSON.stringify(filme));
  }

  save(filme: Filme): Observable<Filme> {
    //this.filmes.push(filme);
    return this.httpClient.post<Filme>(this.URL, filme);
  }

  /*
  update(filme: Filme): Promise<Filme> {
    return this.httpClient.put<Filme>(`${this.URL}/${filme.id}`, JSON.stringify(filme), this.httpOptions).toPromise()
  }
  */
  update(filme: Filme) {
    return this.httpClient.put<Filme>(`${this.URL}/${filme.id}`, JSON.stringify(filme));
  }


  /*
  save(filme: Filme): Promise<Filme> {
    const p = new Promise<Filme>((resolve,reject) => {
      setTimeout(() => {
        const filmes = WebStorageUtil.get('filmes');
        filmes.push(filme);
        WebStorageUtil.set('filmes',filmes);
        resolve(filme);
      }, 5000);
    });
    return p;
  }
  */



}
