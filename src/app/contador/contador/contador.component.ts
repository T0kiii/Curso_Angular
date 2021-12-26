import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  template: `
    <h1>{{desc}}</h1>
    <h2>La base es: {{base}}</h2>

    <button (click)= 'acumular(base)'> +{{base}} </button>

    <span>{{numero}}</span>

    <button (click)= 'acumular(-base)'> -{{base}} </button>
  `
})
export class ContadorComponent{
  title: string = 'Curso Angular';
  desc: string = 'Contador App';

  numero: number = 10;
  base: number = 5;

  acumular(valor: number) { return this.numero += valor;}
}
