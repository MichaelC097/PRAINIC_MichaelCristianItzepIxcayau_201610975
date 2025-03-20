// userController.js
const bcrypt = require('bcrypt');
const db = require('../config/db'); // Importar conexión a la base de datos
const jwt = require('jsonwebtoken');

// Función para registrar un usuario
const registerUser = async (req, res) => {
    console.log("Datos recibidos:", req.body);  // Agregar un log para verificar los datos
    const { registro_academico, nombres, apellidos, correo, contraseña } = req.body;

    try {
        const [user] = await db.query('SELECT * FROM usuarios WHERE correo = ?', [correo]);
        if (user.length > 0) {
            return res.status(400).json({ message: 'El usuario ya está registrado' });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(contraseña, salt);

        await db.query('INSERT INTO usuarios (registro_academico, nombres, apellidos, correo, contraseña) VALUES (?, ?, ?, ?, ?)',
            [registro_academico, nombres, apellidos, correo, hashedPassword]);

        res.status(201).json({ message: 'Usuario registrado exitosamente' });
    } catch (error) {
        console.error('Error en el servidor:', error);  // Agregar un log para verificar el error
        res.status(500).json({ message: 'Error en el servidor', error });
    }
};


module.exports = {
  registerUser,
};
