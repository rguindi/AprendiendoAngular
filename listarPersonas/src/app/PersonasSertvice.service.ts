import { EventEmitter, Injectable } from "@angular/core";
import { LogginService } from "./LogginSertvice.service";
import { Persona } from "./persona.model";

@Injectable()
export class PersonasService{

        personas: Persona[] = [
            new Persona('Raul', 'Ferrero'),
            new Persona('Laura', 'Juarez'),
          ];
        saludar = new EventEmitter <number>();

    constructor(private logginService:LogginService){}

    agregarPersona(persona: Persona){
        this.logginService.enviarMensajeAConsola("Persona agreada" + persona.nombre)
        this.personas.push(persona);
      }

}