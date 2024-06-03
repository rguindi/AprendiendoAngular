import { Egreso } from "./egreso.model";

export class EgresoServicio{

    egreso:Egreso[]=[
        new Egreso("Resnta departamento", 900),
        new Egreso("Ropa", 200),

    ];

    eliminar(egreso:Egreso){
        const indice: number = this.egreso.indexOf(egreso);
        this.egreso.splice(indice, 1);  //el 1 indica borrar solo 1 elemento
    }
}