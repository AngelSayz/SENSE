require('dotenv').config(); // Cargar variables de entorno desde .env

console.log('MONGO_URI:', process.env.MONGO_URI);

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express(); // 🔹 Aquí se inicializa 'app'

// Middleware
app.use(cors({ origin: '*' })); // 🔹 Ahora se usa después de inicializar 'app'
app.use(express.json()); // Para parsear el cuerpo de las solicitudes como JSON

// Conectar a MongoDB
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('Conectado a MongoDB'))
    .catch(err => console.error('Error al conectar a MongoDB:', err));

// Definir una ruta de prueba
app.get('/', (req, res) => {
    res.json({ message: 'API funcionando' });
});

// Escuchar el servidor en el puerto especificado solo si este archivo se ejecuta directamente
if (require.main === module) {
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
        console.log(`Servidor corriendo en http://localhost:${PORT}`);
    });
} else {
    // Si este archivo se importa desde otro lugar (como server.js),
    // exportamos el app sin iniciar el servidor
    module.exports = app;
}