import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar-heroe',
  templateUrl: './agregar-heroe.component.html'
})
export class AgregarHeroeComponent  {

  constructor(private dbzService: DbzService){}

  @Input('data') nuevoPersonaje: Personaje = {
    nombre: '',
    poder: 0
  }

  // @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();

  /**
   * Emite un héroe en la lista heroes con los datos recibidos
   */
  agregar(){
    //event.preventDefault(); // prevee el comportamiento por defecto del formulario. Esto no hace falta en Angular (?)
    //console.log(event);
    //this.onNuevoPersonaje.emit(this.nuevo);

    console.log(this.nuevoPersonaje);

    this.dbzService.agregarPersonaje(this.nuevoPersonaje)

    // setteamos a vacío los campos después de sacar la info
    this.nuevoPersonaje = {
      nombre: '',
      poder: 0
    }
  }

}
