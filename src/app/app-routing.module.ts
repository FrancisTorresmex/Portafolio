import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { ListaDelDiaComponent } from './page/lista-del-dia/lista-del-dia.component';

//rutas de la pagina
const ROUTES: Routes = [
  {path: 'home', component:HomeComponent},
  {path: 'proyecto', component:ListaDelDiaComponent}
];

const routerOptions: ExtraOptions = {
  anchorScrolling: "enabled",
  scrollPositionRestoration: 'enabled'
}


@NgModule({
  imports: [RouterModule.forRoot(ROUTES, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
