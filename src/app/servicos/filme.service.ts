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

  constructor(private httpClient: HttpClient) {
    this.filmes = [];
  }

  fullList(): Observable<Filme[]> {
    return this.httpClient.get<Filme[]>(this.URL);
  }

  getFilmeById(id: number): Observable<Filme> {
    return this.httpClient.get<Filme>(`${this.URL}/${id}`);
  }

  save(filme: Filme): Observable<Filme> {
    return this.httpClient.post<Filme>(this.URL, filme);
  }

  update(filme: Filme): Observable<Filme> {
    return this.httpClient.put<Filme>(`${this.URL}/${filme.id}`, filme);
  }


}
