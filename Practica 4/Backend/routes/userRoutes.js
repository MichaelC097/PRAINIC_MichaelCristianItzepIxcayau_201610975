const express = require('express');
const { register, login, getUserProfile, recoverPassword } = require('../controllers/userController');
const { createPublication, getAllPublications, filterPublications, addComment } = require('../controllers/publicationController');
const router = express.Router();

// Rutas de usuario
router.post('/register', register);
router.post('/login', login);
router.get('/profile/:id', getUserProfile);
router.post('/recover-password', recoverPassword);

// Rutas de publicaciones
router.post('/publications/create', createPublication);
router.get('/publications', getAllPublications);
router.get('/publications/filter', filterPublications);
router.post('/publications/comment', addComment);

module.exports = router;