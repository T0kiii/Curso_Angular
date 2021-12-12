import { Component } from "@angular/core";

@Component({
  selector: 'app-heroe',
  templateUrl: 'heroe.component.html'
})
export class HeroeComponent {

  nombre: string = 'Iron Man';
  edad: number = 45

  get nombreMayus(): string{
    return this.nombre.toUpperCase();
  }

  obtenerNombre(): string {
    return `${this.nombre} - ${this.edad}`;
  }

  cambiarNombre(nuevoNombre: string): void{
    this.nombre = nuevoNombre;
  }

  cambiarEdad(nuevaEdad: number): void{
    this.edad = nuevaEdad;
  }

}
