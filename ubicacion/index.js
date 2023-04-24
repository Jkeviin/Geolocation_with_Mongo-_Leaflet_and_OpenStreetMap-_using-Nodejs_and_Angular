const express = require('express');
const cors = require('cors');
const conectarMongoDB = require('./mongodb');
const lavaderoRouter = require('./router');

const app = express();
const port = process.env.PORT || 3000;

conectarMongoDB();

app.use(cors());
app.use(express.json());
app.use('/lavaderos', lavaderoRouter);

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});