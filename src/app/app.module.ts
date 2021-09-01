import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './page/home/home.component';
import { ListaDelDiaComponent } from './page/lista-del-dia/lista-del-dia.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';




@NgModule({
  declarations: [
    AppComponent,       
    HomeComponent, 
    ListaDelDiaComponent, 
    NavbarComponent, FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
