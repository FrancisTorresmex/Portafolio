import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { ListaDelDiaComponent } from './page/lista-del-dia/lista-del-dia.component';
import { ProyectoComponent } from './proyecto/proyecto.component';

//rutas de la pagina
const ROUTES: Routes = [
  {path: '', component:HomeComponent},
  {path: 'home', component:HomeComponent},
  // {path: 'proyecto', component:ListaDelDiaComponent},
  {path: 'proyecto/:id', component: ProyectoComponent},
  {path: '**', redirectTo:''} //si escriben algo que no existe luego del /, los redirige a la de '', que viene siendo mi home
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
