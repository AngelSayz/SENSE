const express = require('express');
const Post = require('../models/Post');

const router = express.Router();

// ✅ GET: Obtener todas las publicaciones
router.get('/', async (req, res) => {
  try {
    const posts = await Post.find().populate('id_user', 'username');
    console.log(posts);
    res.json(posts);
  } catch (error) {
    console.error('Error al obtener publicaciones:', error);
    res.status(500).json({ error: 'Error al obtener publicaciones' });
  }
});

module.exports = router;
