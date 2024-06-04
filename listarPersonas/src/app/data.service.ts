import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Persona } from './persona.model';

@Injectable()
export class DataService{

    constructor (private httpClient: HttpClient){
    }

guardarPersonas(personas: Persona[]){
    this.httpClient.put('urlBasedeDatos/datos.json', personas)
    .subscribe(
        response =>  console.log("Resultado de guardar las personas " + response),
        error => console.log("Error al guardar personas  " + error)
        
    );
}

cargarPersonas(){
    return this.httpClient.get('urlBasedeDatos/datos.json');
}


}