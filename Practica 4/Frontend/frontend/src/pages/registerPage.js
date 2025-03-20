import React, { useState } from 'react';
import { register } from '../services/authService';

const RegisterPage = () => {
    const [registro_academico, setRegistroAcademico] = useState('');
    const [nombres, setNombres] = useState('');
    const [apellidos, setApellidos] = useState('');
    const [correo, setCorreo] = useState('');
    const [contraseña, setContraseña] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await register({ registro_academico, nombres, apellidos, correo, contraseña });
            // Redirige a la página de login o a la página principal
        } catch (err) {
            setError('Error al registrar el usuario');
        }
    };

    return (
        <div>
            <h2>Registrarse</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Registro académico"
                    value={registro_academico}
                    onChange={(e) => setRegistroAcademico(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Nombres"
                    value={nombres}
                    onChange={(e) => setNombres(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Apellidos"
                    value={apellidos}
                    onChange={(e) => setApellidos(e.target.value)}
                    required
                />
                <input
                    type="email"
                    placeholder="Correo"
                    value={correo}
                    onChange={(e) => setCorreo(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Contraseña"
                    value={contraseña}
                    onChange={(e) => setContraseña(e.target.value)}
                    required
                />
                <button type="submit">Registrarse</button>
            </form>
            {error && <p>{error}</p>}
        </div>
    );
};

export default RegisterPage;
