
# Notas del curso de Angular

Buena práctica modularizar con los modules. La escala sería app -> module -> component -> html, css, ts, etc

Para utilizar los mismos npm modules en otro equipo, primero ejecutar `npm install` e instalará todos los módulos que aparecen en el `package.json`.

## Componentes

Para crear un componente (saltando crear test):
```npm:
ng g c dbz/personajes --skipTests
```

## Mover data entre html y componente

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

Para llevar variables de un componente a otro:
`[personajes]` es la variable destino y `"personajes"` la variable local
```html:
  <div class="col">
    <app-personajes [personajes]="personajes"></app-personajes>
  </div>
```
En el componente destino, `personajes` está declarado así:
```typescript:
export class PersonajesComponent {
  // dentro de @Input() se puede poner nombre opcional para referirse a la variable desde el exterior
  @Input('data') personajes: any[] = []

}```

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

## GitHub

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
