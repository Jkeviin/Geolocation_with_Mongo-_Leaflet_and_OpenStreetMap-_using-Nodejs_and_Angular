
const mongoose = require("mongoose");
mongoose.set("debug", true);
mongoose.set("strictQuery", false);

const conectarMongoDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://Jkeviin:Jkeviin2130@cluster0.ovudi9t.mongodb.net/lavaderos", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
/*
    const Lavadero = require('./model');

const lavaderos = [
  {
    nombre: 'Lavadero 1',
    direccion: 'Dirección 1',
    ubicacion: {
      type: 'Point',
      coordinates: [-76.5112471, 3.4851908]
    }
  },
  {
    nombre: 'Lavadero 2',
    direccion: 'Dirección 2',
    ubicacion: {
      type: 'Point',
      coordinates: [-76.5112471, 3.4851908 + 0.05]
    }
  },
  {
    nombre: 'Lavadero 3',
    direccion: 'Dirección 3',
    ubicacion: {
      type: 'Point',
      coordinates: [-76.5112471 + 0.05, 3.4851908]
    }
  },
  {
    nombre: 'Lavadero 4',
    direccion: 'Dirección 4',
    ubicacion: {
      type: 'Point',
      coordinates: [-76.5112471 + 0.05, 3.4851908 + 0.05]
    }
  }
];

    Lavadero.insertMany(lavaderos)
      .then(() => console.log('Lavaderos insertados'))
*/
    console.log("Conexión a la base de datos MongoDB exitosa");
  } catch (error) {
    console.error(`Error al conectarse a la base de datos MongoDB: ${error.message}`);
    process.exit(1);
  }
};

module.exports = conectarMongoDB;
