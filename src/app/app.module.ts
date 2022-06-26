import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { CadFilmeComponent } from './cad-filme/cad-filme.component';
import { CadGeneroComponent } from './cad-genero/cad-genero.component';
import { ListaFilmesComponent } from './lista-filmes/lista-filmes.component';
import { ListaGenerosComponent } from './lista-generos/lista-generos.component';
import { SobreComponent } from './sobre/sobre.component';
import { DetalheFilmeComponent } from './detalhe-filme/detalhe-filme.component';
import { MensagemComponent } from './mensagem/mensagem.component';
import { HttpClientModule } from '@angular/common/http';

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
    DetalheFilmeComponent,
    MensagemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
