import { Component, OnInit, ViewChild } from '@angular/core';
import { NavbarComponent } from '../../shared/navbar/navbar.component';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {  

  elemento: any;

  linkCV = 'https://drive.google.com/file/d/1-7EWXsCkeoALhLYvos2OCHidu5XiRVoa/view?usp=sharing'; //para el link de mi curriculum almacenado en drive
   
  constructor() { }

  // @ViewChild(NavbarComponent) nav: NavbarComponent = new NavbarComponent;     //esto sirve para usar metodos de los hijos en los padres, es como usar una funcion de otra clase en otra clase  
  
  ngOnInit(): void {}
  

  scroll(el:HTMLElement) {            
    el.scrollIntoView();
  }

}


