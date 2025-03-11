require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db'); // Esta es la única declaración de connectDB

// Importar rutas
const usersRoutes = require('./routes/User.routes');
const postsRoutes = require('./routes/Post.routes');
const recordsRoutes = require('./routes/Record.routes');
const notificationsRoutes = require('./routes/Notifications.routes');
const commentsRoutes = require('./routes/Comments.routes');
const supervisorsRoutes = require('./routes/Supervisors.routes');


const app = express();

// Conectar a la base de datos
connectDB();

// Middleware
app.use(cors({ origin: '*' }));
app.use(express.json());

// Rutas
app.use('/auth', usersRoutes);
app.use('/posts', postsRoutes);
app.use('/records', recordsRoutes);
app.use('/notifications', notificationsRoutes);
app.use('/comments', commentsRoutes);
app.use('/supervisors', supervisorsRoutes);

// Ruta de prueba
app.get('/', (req, res) => {
  res.json({ message: 'API funcionando' });
});

// Login
app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  console.log(`Recibiendo solicitud de login con email: ${email}`);

  try {
    const user = await User.findOne({ email });
    if (!user) {
      console.log('Usuario no encontrado');
      return res.status(400).json({ message: 'Usuario no encontrado' });
    }

    if (password !== user.password) {
      return res.status(400).json({ message: 'Contraseña incorrecta' });
    }
    

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    console.log('Inicio de sesión exitoso, generando token');
    res.json({ token });
  } catch (error) {
    console.error('Error en el servidor:', error);
    res.status(500).json({ message: 'Error en el servidor' });
  }
});



// Iniciar el servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});
