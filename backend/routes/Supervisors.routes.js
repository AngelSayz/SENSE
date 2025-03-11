const express = require('express');
const Supervisor = require('../models/Supervisors');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const supervisors = await Supervisor.find();
    res.json(supervisors);
  } catch (error) {
    console.error('Error al obtener supervisores:', error);
    res.status(500).json({ error: 'Error al obtener supervisores' });
  }
});

module.exports = router;