import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InterfaceProyectos, ServiceProyecto } from '../../services/proyectos.services';

@Component({
  selector: 'app-lista-del-dia',
  templateUrl: './lista-del-dia.component.html',
  styleUrls: ['./lista-del-dia.component.css']
})
export class ListaDelDiaComponent implements OnInit {

  //lista de tipo InterfaceProyectos, en ella se guardaran los proyectos traidos del servicio
  proyectos: InterfaceProyectos[] = []

  constructor(private _servicioProyectos: ServiceProyecto ,private _router: Router) { }

  ngOnInit(): void {
    this.proyectos = this._servicioProyectos.obtenerProyectos();
    // console.log('pryoectos lista del dia', this.proyectos);
  }

  verProyecto(n: number) {
    this._router.navigate(['/proyecto', n]);
  }

}
