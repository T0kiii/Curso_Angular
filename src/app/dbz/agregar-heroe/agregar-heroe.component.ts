import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';

@Component({
  selector: 'app-agregar-heroe',
  templateUrl: './agregar-heroe.component.html'
})
export class AgregarHeroeComponent  {

  @Input() personajes: Personaje[] = [];
  @Input() nuevo: Personaje = {
    nombre: '',
    poder: 0
  }

  agregarHeroe(){
    //event.preventDefault(); // prevee el comportamiento por defecto del formulario. Esto no hace falta en Angular (?)
    //console.log(event);

    console.log(this.nuevo);

    this.personajes.push(this.nuevo)

    this.nuevo = {
      nombre: '',
      poder: 0
    }
  }

}
