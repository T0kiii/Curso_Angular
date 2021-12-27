import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {

  personajes: Personaje[] = [
    {
      nombre: 'Goku',
      poder: 14000
    },
    {
      nombre: 'Vegeta',
      poder: 8500
    }
  ];

  nuevo: Personaje = {
    nombre: '',
    poder: 0
  }

}
