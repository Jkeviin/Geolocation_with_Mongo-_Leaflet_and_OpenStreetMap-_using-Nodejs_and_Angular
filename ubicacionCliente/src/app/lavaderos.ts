export interface Lavadero {
  direccion: string;
  nombre: string;
  ubicacion: {
    coordinates: [number, number];
    type: string;
  };
}