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

      encontrarPersona(index:number){
        let persona : Persona = this.personas[index];
        return persona;
      }

      modificarPersona(index:number, persona:Persona){
        let persona1 = this.personas[index];
        persona1.nombre = persona.nombre;
        persona1.apellido = persona.apellido;
      }

}