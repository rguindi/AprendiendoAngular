import { Component, OnInit } from '@angular/core';
import { Persona } from './persona.model';
import { PersonasService } from './PersonasSertvice.service';
import { LogginService } from './LogginSertvice.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent  {

  
  titulo = 'Listado de personas';
 


}
