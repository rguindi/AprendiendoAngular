import { Ingreso } from "./ingreso.model";

export class IngresoServicio{

    ingreso:Ingreso[]=[
        new Ingreso("Salario", 4000),
        new Ingreso("Venta Coche", 300),

    ];

    eliminar(ingreso:Ingreso){
        const indice: number = this.ingreso.indexOf(ingreso);
        this.ingreso.splice(indice, 1);  //el 1 indica borrar solo 1 elemento
    }
}