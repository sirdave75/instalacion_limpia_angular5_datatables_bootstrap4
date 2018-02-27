import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { DataTablesModule } from 'angular-datatables';


import { AppComponent } from './app.component';
import { VideojuegosComponent } from './videojuegos/videojuegos.component';


@NgModule({
  declarations: [
    AppComponent,
    VideojuegosComponent
  ],
  imports: [
    BrowserModule,
    DataTablesModule
  ],
  providers: [],
  bootstrap: [AppComponent] //componente principal que se va a cargar
})
export class AppModule { }
