const express = require('express');
const Record = require('../models/Record');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const records = await Record.find().populate('id_user', 'name').populate('comments');
    res.json(records);
  } catch (error) {
    console.error('Error al obtener registros:', error);
    res.status(500).json({ error: 'Error al obtener registros' });
  }
});

module.exports = router;