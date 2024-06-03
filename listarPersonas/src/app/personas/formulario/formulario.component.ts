import { Component, OnInit} from '@angular/core';
import { Persona } from '../../persona.model';
import { LogginService } from '../../LogginSertvice.service';
import { PersonasService } from '../../PersonasSertvice.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
  providers:[LogginService]
})
export class FormularioComponent implements OnInit {
  //@Output() personaCreada = new EventEmitter<Persona>();
  nombreInput: string = '';
  apellidoInput: string = '';
  index?: number;

  constructor(private logginService: LogginService, 
    private personaService: PersonasService,
    private router: Router,
    private route: ActivatedRoute
    
    ){
   this.personaService.saludar.subscribe((indice:number)=> alert ("El indice es " + indice));
  }
ngOnInit() {
    this.index = this. route.snapshot.params['id'];
    if(this.index){
      console.log("parametro recibido " + this.index);
      
     let persona : Persona =  this.personaService.encontrarPersona(this.index);
     this.nombreInput = persona.nombre;
     this.apellidoInput = persona.apellido;
    }
}
  onGuardarPersona() {
    let persona1 = new Persona(this.nombreInput, this.apellidoInput);
    if (this.index){
      this.personaService.modificarPersona(this.index, persona1);
    }else{

      this.personaService.agregarPersona(persona1);
    }
   this.router.navigate(["personas"]);
  }




}
