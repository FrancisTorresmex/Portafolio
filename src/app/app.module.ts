import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './page/home/home.component';
import { ListaDelDiaComponent } from './page/lista-del-dia/lista-del-dia.component';

@NgModule({
  declarations: [
    AppComponent,   
    HomeComponent, 
    ListaDelDiaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
