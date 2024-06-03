import { Component, OnInit } from '@angular/core';
import { IngresoServicio } from '../ingreso/ingreso.service';
import { EgresoServicio } from '../egreso/egreso.service';
import { Ingreso } from '../ingreso/ingreso.model';
import { Egreso } from '../egreso/egreso.model';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  tipo: string = "ingreso";
  descripcionInput:string;
  valorInput: number;
  constructor(private ingresoServicio:IngresoServicio, private egresoServicio: EgresoServicio) { }

  ngOnInit(): void {
  }

  tipoOperacion(evento){
    this.tipo = evento.target.value;

  }

  agregarValor(){
    console.log(this.tipo);
    
    if(this.tipo ==="ingreso") this.ingresoServicio.ingreso.push(new Ingreso(this.descripcionInput, this.valorInput))
    if(this.tipo ==="egreso") this.egresoServicio.egreso.push(new Egreso(this.descripcionInput, this.valorInput))
  }

}
