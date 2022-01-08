import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';
import { DbzService } from '../services/dbz.service';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {

  /* Inyección de dependencias. Estamos inyectando el servicio en el componente. Si se declara el servicio duplicado entre componentes,
     solo se instacia una vez, porque Angular es muy listo*/
  constructor(private dbzService: DbzService){}

  get personajes(): Personaje[]{
    return this.dbzService.personajes;
  }

  nuevo: Personaje = {
    nombre: '',
    poder: 0
  }
}
