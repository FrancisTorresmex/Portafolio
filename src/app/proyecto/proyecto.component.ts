import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceProyecto } from '../services/proyectos.services';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css']
})
export class ProyectoComponent implements OnInit {

  proyecto: any = {};
  masDatosProyecto: any = {};

  constructor(private _ServicioProyecto: ServiceProyecto, private _activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this._activeRoute.params.subscribe(params => //datos normales de un proyecto
      this.proyecto = this._ServicioProyecto.obtenerProyecto(params['id']));      

    this._activeRoute.params.subscribe(params => //mas información detallada del proyecto
      this.masDatosProyecto = this._ServicioProyecto.verMasDatos(params['id']));
      console.log('pryoectos mas info', this.masDatosProyecto);      
  }

  //para ir a un id de la misma pagina
  irSeccion(el:HTMLElement) {
      el.scrollIntoView();
  }

}
