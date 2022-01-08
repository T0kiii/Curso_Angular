/**
 * Los servicios se encargan de distribuir los datos entre servicios.
 * Son como clases estáticas con las que interactuan los componentes.
 *
 * Toda la lógica para trabajar con estos datos se encuentra en el servicio.
 */

import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interfaces";


@Injectable() // decorador para servicios
export class DbzService {

  private _personajes: Personaje[] = [
    {
      nombre: 'Goku',
      poder: 14000
    },
    {
      nombre: 'Vegeta',
      poder: 8500
    }
  ];

  get personajes(): Personaje[]{ // el get cuando se realizan cambios, manda la info actualizada automáticamente
    return [...this._personajes]; // Los '...' son para decirle que separe los elementos del array y que cree uno nuevo (?)
  }

  agregarPersonaje(personaje: Personaje){
    this._personajes.push(personaje);
  }
}
