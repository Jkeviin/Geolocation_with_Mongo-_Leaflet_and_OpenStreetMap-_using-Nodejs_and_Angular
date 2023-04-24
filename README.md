Para mostrar los lavaderos en un mapa utilizando OpenStreetMap y Leaflet en Angular, puedes hacer lo siguiente:

1. Instala Leaflet y los tipos de TypeScript para Leaflet: `npm install leaflet @types/leaflet`.

2. Agrega los archivos CSS y JavaScript de Leaflet en el archivo `angular.json` en la sección de `styles` y `scripts` respectivamente:
```json
"styles": [
  "node_modules/leaflet/dist/leaflet.css",
  ...
],
"scripts": [
  "node_modules/leaflet/dist/leaflet.js",
  ...
]
```

3. En tu componente, importa Leaflet: `import * as L from 'leaflet';`

4. Crea un mapa utilizando Leaflet y agrega una capa de OpenStreetMap:
```typescript
const map = L.map('map').setView([latitudInicial, longitudInicial], zoomInicial);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors'
}).addTo(map);
```

5. Agrega marcadores al mapa para cada lavadero utilizando las coordenadas de su ubicación:
```typescript
this.lavaderos.forEach(lavadero => {
    const [longitud, latitud] = lavadero.ubicacion.coordinates;
    L.marker([latitud, longitud]).addTo(map)
        .bindPopup(`<b>${lavadero.nombre}</b><br>${lavadero.direccion}`);
});
```

Espero que esto te ayude a mostrar los lavaderos en un mapa utilizando OpenStreetMap y Leaflet en Angular.