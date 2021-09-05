import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser'; //para el titulo y meta para el SEO de google


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'FrancistorresMx';

  constructor(private titleService: Title, private metaService: Meta) {}

  ngOnInit(): void {
    this.titleService.setTitle(this.title); //el titulo
    this.metaService.addTags([ // tarjetas del meta para SEO
      {name: 'description', content: 'Hola, mi nombre es Francisco, actualmente soy estudiante de ingenieria en gestión y desarrollo de software. En esta página podras ver los proyectos en los que he trabajado.'},
      {name: 'Author', content: 'FrancisTorresMex'},
      {name: 'Title', content: 'FrancistorresMx'},
      {name: 'keywords', content: 'Angular, Desarrollo, Portafolio, Programador, Codigo'},
    ]);    
  }
}
