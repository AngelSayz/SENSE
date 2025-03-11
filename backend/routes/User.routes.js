const express = require('express');
const jwt = require('jsonwebtoken');
const User = require('../models/Users');

const router = express.Router();

// Registrar usuario (Solo para pruebas, puedes eliminarlo luego)
router.post('/register', async (req, res) => {
  const { email, password } = req.body;

  try {
    const newUser = new User({ email, password: password });  // Guardamos la contraseña tal cual.
    await newUser.save();

    res.status(201).json({ message: 'Usuario registrado' });
  } catch (error) {
    res.status(500).json({ message: 'Error en el servidor' });
  }
});

// Login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  // Agregar los logs para ver lo que llega
  console.log('Email recibido:', email);
  console.log('Contraseña recibida:', password);

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: 'Usuario no encontrado' });

    // Comparación de contraseñas en texto plano
    if (password !== user.password) {
      return res.status(400).json({ message: 'Contraseña incorrecta' });
    }    

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.json({ token });
  } catch (error) {
    res.status(500).json({ message: 'Error en el servidor' });
  }
});

module.exports = router;
