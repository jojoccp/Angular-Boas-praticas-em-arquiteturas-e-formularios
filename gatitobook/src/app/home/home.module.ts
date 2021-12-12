import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { LoginComponent } from './login/login.component';
import { MensagemModule } from '../componentes/mensagem/mensagem.module';
import { NovoUsuarioComponent } from './novo-usuario/novo-usuario.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    NovoUsuarioComponent
  ],
  exports: [ HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MensagemModule,
    BrowserModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class HomeModule { }
