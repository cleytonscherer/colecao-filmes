import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadFilmeComponent } from './cad-filme/cad-filme.component';
import { CadGeneroComponent } from './cad-genero/cad-genero.component';
/* import { DetalheFilmeComponent } from './detalhe-filme/detalhe-filme.component'; */
import { ListaFilmesComponent } from './lista-filmes/lista-filmes.component';
import { ListaGenerosComponent } from './lista-generos/lista-generos.component';
import { SobreComponent } from './sobre/sobre.component';

const routes: Routes = [
  /* { path: '', redirectTo: 'lista-filmes', pathMatch: 'full' }, */
  { path: 'cad-filme', component: CadFilmeComponent },
  { path: 'lista-filmes', component: ListaFilmesComponent },
  { path: 'cad-genero', component: CadGeneroComponent },
  { path: 'lista-generos', component: ListaGenerosComponent },
  { path: 'sobre', component: SobreComponent },
  /* { path: 'filme/:filmeId', component: DetalheFilmeComponent }, */
  { path: 'filme/:filmeId',   component: CadFilmeComponent },
  { path: 'genero/:generoId', component: CadGeneroComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
