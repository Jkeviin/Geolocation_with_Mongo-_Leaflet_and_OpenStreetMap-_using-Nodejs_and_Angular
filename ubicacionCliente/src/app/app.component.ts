import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as L from 'leaflet';

// Configurar la opción iconUrl y shadowUrl del icono por defecto de Leaflet
L.Icon.Default.prototype.options.iconUrl = 'assets/images/marker-icon.png';
L.Icon.Default.prototype.options.shadowUrl = 'assets/images/marker-shadow.png';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  lavaderos: any = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    const latitudInicial = 3.4851908;
    const longitudInicial = -76.5112471;
    const zoomInicial = 13;
    const map = L.map('map').setView(
      [latitudInicial, longitudInicial],
      zoomInicial
    );
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors',
    }).addTo(map);

    this.pedirUbicacion(map);
  }

  pedirUbicacion(map: L.Map) {
    navigator.geolocation.getCurrentPosition(
      (posicion) => {
        const latitud = posicion.coords.latitude;
        const longitud = posicion.coords.longitude;
        console.log(latitud, longitud);

        this.http
          .post('http://localhost:3000/lavaderos/get', { latitud, longitud })
          .subscribe((lavaderos: any) => {
            this.lavaderos = lavaderos;
            console.log(lavaderos);

            this.lavaderos.forEach((lavadero: any) => {
              const [longitud, latitud] = lavadero.ubicacion.coordinates;
              L.marker([latitud, longitud])
                .addTo(map)
                .bindPopup(
                  `<b>${lavadero.nombre}</b><br>${lavadero.direccion}`
                );
            });
          });
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
