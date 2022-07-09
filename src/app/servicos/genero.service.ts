import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Genero } from '../models/genero.model';

@Injectable({
  providedIn: 'root'
})
export class GeneroService {

  private URL = 'http://localhost:3000/genres';

  private generos: Genero[];

  constructor(private httpClient: HttpClient) {
    this.generos = [];
  }

  fullList(): Observable<Genero[]> {
    return this.httpClient.get<Genero[]>(this.URL);
  }

  getGeneroById(id: number): Observable<Genero> {
    return this.httpClient.get<Genero>(`${this.URL}/${id}`);
  }

  save(genero: Genero): Observable<Genero> {
    return this.httpClient.post<Genero>(this.URL, genero);
  }
}
