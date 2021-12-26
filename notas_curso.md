
# Notas del curso de Angular

Buena práctica modularizar con los modules. La escala sería app -> module -> component -> html, css, ts, etc

Para utilizar los mismos npm modules en otro equipo, primero ejecutar `npm install` e instalará todos los módulos que aparecen en el `package.json`.

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
