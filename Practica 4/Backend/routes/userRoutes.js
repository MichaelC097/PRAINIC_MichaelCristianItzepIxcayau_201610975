const express = require('express');
const { registerUser } = require('../controllers/userController'); // Importar el controlador

const router = express.Router();

// Ruta para registrar usuarios
router.post('/register', registerUser);


module.exports = router;
