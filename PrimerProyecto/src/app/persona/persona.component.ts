import { Component } from '@angular/core';

@Component({
  selector: 'app-persona',
  standalone: true,
  imports: [],
  templateUrl: './persona.component.html',
  styleUrl: './persona.component.css'
})
export class PersonaComponent {

  nombre: String = 'Raul';
  apellido: String = 'Ferrero';
  edad: number = 30;


}
