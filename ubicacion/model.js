const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const lavaderoSchema = new Schema({
  nombre: String,
  direccion: String,
  ubicacion: {
    type: { type: String },
    coordinates: [Number]
  }
});

lavaderoSchema.index({ ubicacion: '2dsphere' });

const Lavadero = mongoose.model('Lavadero', lavaderoSchema);

module.exports = Lavadero;