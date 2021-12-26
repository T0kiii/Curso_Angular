import { Component } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {

  agregar(){
    //event.preventDefault(); // prevee el comportamiento por defecto del formulario. Esto no hace falta en Angular (?)
    //console.log(event);
    console.log('no sales weee');

  }
}
