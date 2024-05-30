import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Calculadora de Raúl';
  resultadoPadre: number = 0;

procesarResultado(resultado:number){
  this.resultadoPadre = resultado;
}

}
