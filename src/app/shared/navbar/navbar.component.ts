import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {  
   

   @Output() 
   
   element: EventEmitter<HTMLElement> = new EventEmitter<HTMLElement>();

   scroll(e:any) {
    this.element.emit(e);    
  }

  //  elemento: any = '';   

  constructor() { }

  ngOnInit(): void {
   
  }

   // función para direccionar a una misma parte en la misma página
   // lo que se ponga en la funcion se convierte en un tipo html, y el scroll es para lo de al presionar ir a un elemento de la misma página
   //esta función la exportamos a home, para usarla ahi
  //  scroll(el:HTMLElement){   
  //    document.getElementsByTagName('a'); 
  //   this.elemento = el;     
  //   el.scrollIntoView();    
  //   console.log(this.elemento);
  // }



  
  


}
