import { Component} from '@angular/core';
import { Persona } from '../persona.model';
import { LogginService } from '../LogginSertvice.service';
import { PersonasService } from '../PersonasSertvice.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
  providers:[LogginService]
})
export class FormularioComponent  {
  //@Output() personaCreada = new EventEmitter<Persona>();
  nombreInput: string = '';
  apellidoInput: string = '';

  constructor(private logginService: LogginService, 
    private personaService: PersonasService
    
    ){
   this.personaService.saludar.subscribe((indice:number)=> alert ("El indice es " + indice));
  }

  agregarPersona() {
    let persona1 = new Persona(this.nombreInput, this.apellidoInput);
   this.personaService.agregarPersona(persona1)
  }


}
