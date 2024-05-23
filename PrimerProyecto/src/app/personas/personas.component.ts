import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PersonaComponent } from '../persona/persona.component';

@Component({
  selector: 'app-personas',
  standalone: true,
  imports: [PersonaComponent, FormsModule, CommonModule],
  templateUrl: './personas.component.html',
  styleUrl: './personas.component.css',
})
export class PersonasComponent {
  deshabilitar = false;
  mensaje = '';
  titulo = '';
  mostrar = false;
  agregarPersona() {
    this.mostrar = true;
    this.mensaje = 'Persona agregada';
  }

  modificarTitulo(event: Event) {
    this.titulo = (<HTMLInputElement>event.target).value;
  }
}
