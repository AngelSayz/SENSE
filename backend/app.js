// app.js
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

// Middleware para parsear JSON
app.use(express.json());

// Conectar a MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("Conectado a MongoDB"))
.catch(err => console.error("Error al conectar a MongoDB:", err));

// Ruta de prueba
app.get('/', (req, res) => {
  res.send("Servidor Node.js y MongoDB funcionando");
});

// Definir el puerto y levantar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});

const userRoutes = require('./src/routes/userRoutes');
app.use('/api/users', userRoutes);

