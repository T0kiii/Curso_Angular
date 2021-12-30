import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';

@Component({
  selector: 'app-agregar-heroe',
  templateUrl: './agregar-heroe.component.html'
})
export class AgregarHeroeComponent  {

  @Input('data') nuevo: Personaje = {
    nombre: '',
    poder: 0
  }

  @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();

  agregarHeroe(){
    //event.preventDefault(); // prevee el comportamiento por defecto del formulario. Esto no hace falta en Angular (?)
    //console.log(event);

    console.log(this.nuevo);

    this.onNuevoPersonaje.emit(this.nuevo);

    // setteamos a vacío los campos después de sacar la info
    this.nuevo = {
      nombre: '',
      poder: 0
    }
  }

}
