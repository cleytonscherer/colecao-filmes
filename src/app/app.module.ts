import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { CadFilmeComponent } from './cad-filme/cad-filme.component';
import { CadGeneroComponent } from './cad-genero/cad-genero.component';
import { ListaFilmesComponent } from './lista-filmes/lista-filmes.component';
import { ListaGenerosComponent } from './lista-generos/lista-generos.component';
import { SobreComponent } from './sobre/sobre.component';
import { FormsModule } from '@angular/forms';
import { DetalheFilmeComponent } from './detalhe-filme/detalhe-filme.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    CadFilmeComponent,
    CadGeneroComponent,
    ListaFilmesComponent,
    ListaGenerosComponent,
    SobreComponent,
    DetalheFilmeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
