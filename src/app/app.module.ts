import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './page/home/home.component';
import { ListaDelDiaComponent } from './page/lista-del-dia/lista-del-dia.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ProyectoComponent } from './proyecto/proyecto.component';
import { ContactoComponent } from './shared/contacto/contacto.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,       
    HomeComponent, 
    ListaDelDiaComponent, 
    NavbarComponent, FooterComponent, ProyectoComponent, ContactoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),        
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
