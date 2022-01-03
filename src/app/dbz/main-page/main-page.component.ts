import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';
import { DbzService } from '../services/dbz.service';


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

  agregarNuevoPersonaje ( argumento: Personaje) {
    this.personajes.push(argumento);
  }

  /* Inyección de dependencias. Estamos inyectando el servicio en el componente. Si se declara el servicio duplicado entre componentes,
     solo se instacia una vez, porque Angular es muy listo*/
  constructor(private dbzService: DbzService){}

}
