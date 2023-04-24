const Lavadero = require('./model');

exports.filtrarLavaderos = async (req, res) => {
  try {
    const { latitud, longitud } = req.body;
    const radio = 5000; // 5 km en metros

    const lavaderos = await Lavadero.find({
      ubicacion: {
        $near: {
          $geometry: {
            type: 'Point',
            coordinates: [longitud, latitud]
          },
          $maxDistance: radio
        }
      }
    })
    .limit(2)
    .sort({ ubicacion: 'asc' });;

    res.json(lavaderos);
    console.log(lavaderos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};