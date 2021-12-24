import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman', 'Jaime', 'Manolo', 'Hulk'];
  heroesBorrados: string[] = [];
  /* ALTERNATIVA fea:
  heroesBorrados: string | undefined = ''; */


  borrarHeroe(){
    this.heroesBorrados.push(this.heroes.pop() || '')
  }

}
