import { Component } from '@angular/core';


interface Personaje {
  nombre: string;
  poder: number;
}

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
