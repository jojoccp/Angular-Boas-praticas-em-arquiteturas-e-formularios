import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabecalhoComponent } from './componentes/cabecalho/cabecalho.component';
import { CabecalhoModule } from './componentes/cabecalho/cabecalho.module';
import { RodapeComponent } from './componentes/rodape/rodape.component';
import { RodapeModule } from './componentes/rodape/rodape.module';
import { HomeModule } from './home/home.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    CabecalhoModule,
    RodapeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
