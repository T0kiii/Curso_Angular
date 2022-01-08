# Curso Angular 📐

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.1.1.

- [Curso Angular 📐](#curso-angular-)
  - [Componentes 🎁](#componentes-)
  - [Mover datos entre html y componentes 📻](#mover-datos-entre-html-y-componentes-)
    - [Form realizado con Angular](#form-realizado-con-angular)
  - [Servicios](#servicios)
    - [Inyección de dependencias en una clase](#inyección-de-dependencias-en-una-clase)
    - [Exportar datos desde un servicio](#exportar-datos-desde-un-servicio)
  - [Debugging 🐞](#debugging-)
  - [GitHub 🐱](#github-)
    - [Commits](#commits)
    - [Tags](#tags)

---

Buena práctica modularizar con los modules. La escala sería app -> module -> component -> html, css, ts, etc

Para utilizar los mismos npm modules en otro equipo, primero ejecutar `npm install` e instalará todos los módulos que aparecen en el `package.json`.

## Componentes 🎁

Para crear un componente (saltando crear test):

```npm:
ng g c dbz/personajes --skipTests
```

El operador `...` en javascript es un Rest Parameter. Metiendo esto en un array, hacemos que podamos meter
todos los valores que queramos (entiendo que lo convierte en un array dinámico).
También se puede usar para desempaquetar el array en valores separados.

Ejemplo:

```typescript:
function myFunc(...[x, y, z]) {
  return x * y* z;
}

myFunc(1)          // NaN
myFunc(1, 2, 3)    // 6
myFunc(1, 2, 3, 4) // 6 (fourth parameter is not destructured)
```

[Link interesante sobre `...`](https://dev.to/sagar/three-dots---in-javascript-26ci)

## Mover datos entre html y componentes 📻

`[]` en el html para traer dato del componente
`()` en el html para escuchar evento

Ejemplo:

```html:
      <input
        type="text" placeholder="Nombre"
        [value]="nuevo.nombre"
        (click)="cambiarNombre($event)"
      >
```

- Para llevar variables de un componente a otro:

`[personajes]` es la variable destino y `"personajes"` la variable local

```html:
  <div class="col">
    <app-personajes [personajes]="personajes"></app-personajes>
  </div>
```

En el componente destino, `personajes` está declarado así:

```typescript:
export class PersonajesComponent {
  // dentro de @Input() se puede poner nombre opcional para referirse a la 
  // variable desde el exterior
  @Input('data') personajes: any[] = []
}
```

- Para llevar varias variables de un componente a otro:

```html:
  <div class="col">
    <app-personajes 
      [personajes]="personajes"
      [data]="nuevo"
    ></app-personajes>
  </div>
```

- Para emitir info de un componente a otro:

```typescript:
  @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();
```

En el componente donde se recibe la info está declarado así:

```html:
<div class="col">
    <app-agregar-heroe
      [data]="nuevo"
      (onNuevoPersonaje)="agregarNuevoPersonaje( $event )"
    >
    </app-agregar-heroe>
  </div>
```

Y definición de `agregarNuevoPersonaje()`:

```typescript:
  agregarNuevoPersonaje ( argumento: Personaje) {
    this.personajes.push(argumento);
  }
```

### Form realizado con Angular

```typescript:
<form (ngSubmit)="agregarHeroe()"> <!-- submit para fuera de Angular -->
  <input
    type="text" placeholder="Nombre"
    name="nombre"
    [(ngModel)] = "nuevo.nombre"
  />

  <input
    type="number" placeholder="Poder"
    name="poder"
    [(ngModel)] = "nuevo.poder"
  >

  <button type="submit">Agregar</button>
</form>
```

## Servicios

Los servicios se encargan de distribuir los datos entre servicios.
Son como clases estáticas con las que interactuan los componentes.
Toda la lógica para trabajar con estos datos se encuentra en el servicio.

Ejemplo:

```typescript:
import { Injectable } from "@angular/core";


@Injectable() // decorador para servicios
export class DbzService {}
```

### Inyección de dependencias en una clase

```typescript:
export class MainPageComponent {
/* Inyección de dependencias. Estamos inyectando el servicio en el componente. */
  constructor(private dbzService: DbzService){}
```

Si se declara el servicio duplicado entre componentes, solo se instacia una vez, porque Angular es muy listo

### Exportar datos desde un servicio

Se emplea `get` para exportar desde el servicio e importar desde el componenete
Ejemplo:

```typescript:
// en el Servicio
get personajes(): Personaje[]{
    return [...this._personajes]; // Los '...' son para decirle que separe los elementos del array y que cree uno nuevo (?)
  }
```

```typescript:
// en el Componente
export class PersonajesComponent {

  constructor( private dbzService: DbzService){}

  // @Input() personajes: Personaje[] = []
  get personajes(): Personaje[]{
    return this.dbzService.personajes;
  }
}
```

## Debugging 🐞

Si insertas `debbuger;` en una línea de ts/js, se comportará como un breakpoint manual. Se podrá visualizar los valores con los que entra a la función o whatever.

Si presionas `F5`, aparecerá un navegador a elegir. Al seleccionarlo, vscode te lleva hasta el file `launch.json` donde se puede configurar el puerto y dir donde tiene que debuggear a la app. Una vez configurado, la próxima vez que presiones `F5` se lanzará la versión adaptada del navegador para debug.

## GitHub 🐱

### Commits

Por convención, los commits deberían estructurarse de la siguiente forma:

```text:
<type>[optional scope]:
<description>

[optional body]

[optional footer(s)]
```

Los tipos de comit son los siguientes:

- **feat**
  Nueva funcionalidad añadida.
- **fix**
  Bug arreglado.
- **chore**
  Cambios no relacionados con un _fix_ o una _feature_ y que no modifican el `src` o `test` de la aplicación.
  Ej: Actualizar dependencias.
- **refactor**
  Refactorizar código que ni arregla un bug ni añade ninguna funcionalidad.
- **docs**
  Actualizar la documentación, como el README u otros ficheros markdown.
- **style**
  Cambios que no afectan al sentido del código, como quitar saltos de línea o espacios (maquetar)
- **test**
  Añadir o corregir test existentes
- **perf**
  Mejoras del rendimiento
- **ci**
  Relacionado con _integración continua_. Ejemplo supongo que Jenkins.
- **build**
  Cambios que afectan al sistema o dependencias externas.
- **revert**
  Cuando se revierte los cambios de un commit.

Ejemplo de commit completo:

```git:
fix: fix foo to enable bar

This fixes the broken behavior of the component by doing xyz. 

BREAKING CHANGE
Before this fix foo wasn't enabled at all, behavior changes from <old> to <new>

Closes D2IQ-12345
```

Link relacionado del [tema](https://www.freecodecamp.org/news/how-to-write-better-git-commit-messages/)

### Tags

Para hacer instantáneas del proyecto, crear tags.
Para crear un tag

```cmd:
git tag -a v0.1.0 -m "Sección intro de Angular completada"
```

Para subir el tag a GitHub

```cmd:
git push --tags
```

En GitHub se pueden gestionar los tags pusheados y editarlos para convertirlos en releases
