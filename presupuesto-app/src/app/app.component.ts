import { Component } from '@angular/core';
import { Ingreso } from './ingreso/ingreso.model';
import { Egreso } from './egreso/egreso.model';
import { IngresoServicio } from './ingreso/ingreso.service';
import { EgresoServicio } from './egreso/egreso.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  ingresos:Ingreso[]=[];
  egresos:Egreso[]=[];

  constructor(ingresoServicio: IngresoServicio,  egresoServicio:EgresoServicio){
    this.ingresos = ingresoServicio.ingreso;
    this.egresos = egresoServicio.egreso;

  }


  getIngresoTotal(){
   let iTotal:number=0;
   this.ingresos.forEach(ingreso=>{
    iTotal += ingreso.valor;
   })
   return iTotal;
  }

  getEgresoTotal(){
   let eTotal:number=0;
   this.egresos.forEach(egreso=>{
    eTotal += egreso.valor;
   })
   return eTotal;
  }

  getPorcentajeTotal(){
    return this.getEgresoTotal()/this.getIngresoTotal();
  }

  getPresupuestoTotal(){
    return this.getIngresoTotal() - this.getEgresoTotal();

  }


}
