import { Component } from '@angular/core';
import { Persona } from './persona.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  titulo = 'Listado de personas';
  personas: Persona[] = [
    new Persona('Raul', 'Ferrero'),
    new Persona('Laura', 'Juarez'),
  ];
personaAgregada(persona: Persona){
  this.personas.push(persona);
}
}
