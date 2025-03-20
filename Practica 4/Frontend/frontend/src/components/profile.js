import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../services/api';

const Profile = () => {
  const [user, setUser] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await api.get(`/users/profile/${id}`);
        setUser(res.data);
      } catch (error) {
        alert('Error al obtener el perfil');
      }
    };
    fetchUser();
  }, [id]);

  if (!user) return <div>Cargando...</div>;

  return (
    <div>
      <h2>Perfil de Usuario</h2>
      <p><strong>Nombre:</strong> {user.nombres} {user.apellidos}</p>
      <p><strong>Correo:</strong> {user.correo}</p>
    </div>
  );
};

export default Profile;
