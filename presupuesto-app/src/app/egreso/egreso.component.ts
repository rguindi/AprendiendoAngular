import { Component, Input, OnInit } from '@angular/core';
import { Egreso } from './egreso.model';
import { EgresoServicio } from './egreso.service';

@Component({
  selector: 'app-egreso',
  templateUrl: './egreso.component.html',
  styleUrls: ['./egreso.component.css']
})
export class EgresoComponent implements OnInit {

  egresos:Egreso[]=[];
  @Input() ingresoTotal:number;

  constructor( private egresoService:EgresoServicio) { }

  ngOnInit(): void {
    this.egresos = this.egresoService.egreso;
  }
  eliminarEgreso(egreso:Egreso){
    this.egresoService.eliminar(egreso);
  }

  clacularPorcentaje(egreso:Egreso){
    return egreso.valor/this.ingresoTotal;
  }
}
