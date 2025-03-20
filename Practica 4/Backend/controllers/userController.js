const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const db = require('../config/db');
require('dotenv').config();

// Registro de usuario
exports.register = async (req, res) => {
    const { registro_academico, nombres, apellidos, correo, contraseña } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(contraseña, 10);
        const query = 'INSERT INTO usuarios (registro_academico, nombres, apellidos, correo, contraseña) VALUES (?, ?, ?, ?, ?)';
        await db.query(query, [registro_academico, nombres, apellidos, correo, hashedPassword]);
        res.status(201).json({ message: 'Usuario registrado exitosamente' });
    } catch (error) {
        res.status(500).json({ error: 'Error al registrar usuario' });
    }
};

// Inicio de sesión
exports.login = async (req, res) => {
    const { correo, contraseña } = req.body;
    try {
        const [user] = await db.query('SELECT * FROM usuarios WHERE correo = ?', [correo]);
        if (user.length === 0) return res.status(401).json({ error: 'Credenciales inválidas' });

        const validPassword = await bcrypt.compare(contraseña, user[0].contraseña);
        if (!validPassword) return res.status(401).json({ error: 'Credenciales inválidas' });

        const token = jwt.sign({ registro_academico: user[0].registro_academico }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.json({ token });
    } catch (error) {
        res.status(500).json({ error: 'Error en el inicio de sesión' });
    }
};

// Obtener perfil de usuario
exports.getUserProfile = async (req, res) => {
    const { registro_academico } = req.params;
    try {
        const [user] = await db.query('SELECT registro_academico, nombres, apellidos, correo FROM usuarios WHERE registro_academico = ?', [registro_academico]);
        if (user.length === 0) return res.status(404).json({ error: 'Usuario no encontrado' });
        res.json(user[0]);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener el perfil' });
    }
};

// Recuperación de contraseña
exports.recoverPassword = async (req, res) => {
    const { registro_academico, correo, nuevaContraseña } = req.body;
    try {
        const [user] = await db.query('SELECT * FROM usuarios WHERE registro_academico = ? AND correo = ?', [registro_academico, correo]);
        if (user.length === 0) return res.status(404).json({ error: 'Usuario no encontrado' });
        
        const hashedPassword = await bcrypt.hash(nuevaContraseña, 10);
        await db.query('UPDATE usuarios SET contraseña = ? WHERE registro_academico = ?', [hashedPassword, registro_academico]);
        res.json({ message: 'Contraseña actualizada exitosamente' });
    } catch (error) {
        res.status(500).json({ error: 'Error al recuperar la contraseña' });
    }
};
