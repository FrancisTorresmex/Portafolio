import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  //se usan en el html para mi contacto
  linkCorreo = 'mailto:francistorresmx@gmail.com?Subject=Contacto%20mediante%20el%20portafolio';  //el mailito y el subject son para el destinatario y el asunto del correo  
  linkTel = 'tel:8112256396'; //lleva tel: porque asi es el formato en html
  linkGitHub = 'https://github.com/FrancisTorresmex';

  constructor() { }

  ngOnInit(): void {
  }

}
