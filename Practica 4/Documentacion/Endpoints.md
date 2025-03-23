# 📌 API Endpoints - Practica 4

## 🛠 Configuración Inicial

- **Base URL**: `http://localhost:5000/api/users`
- **Formato de datos**: JSON
- **Autenticación**: Algunas rutas requieren un token JWT en los headers.

---

## 🧑‍💻 Usuarios

### 1️⃣ Registro de Usuario
- **Método:** `POST`
- **Endpoint:** `/register`
- **Descripción:** Permite registrar un nuevo usuario en la base de datos.

#### 🔹 Ejemplo de Request (JSON)
```json
{
  "registro_academico": "2021001",
  "nombres": "Juan",
  "apellidos": "Pérez",
  "correo": "juan@example.com",
  "contraseña": "123456"
}
```

#### 🔹 Ejemplo de Respuesta (201 Created)
```json
{
  "message": "Usuario registrado exitosamente"
}
```

---

### 2️⃣ Inicio de Sesión
- **Método:** `POST`
- **Endpoint:** `/login`
- **Descripción:** Inicia sesión y devuelve un token JWT para autenticación.

#### 🔹 Ejemplo de Request (JSON)
```json
{
  "correo": "juan@example.com",
  "contraseña": "123456"
}
```

#### 🔹 Ejemplo de Respuesta (200 OK)
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ..."
}
```

---

### 3️⃣ Obtener Perfil de Usuario
- **Método:** `GET`
- **Endpoint:** `/profile/:registro_academico`
- **Descripción:** Obtiene la información del usuario según su registro académico.

#### 🔹 Ejemplo de Request
```plaintext
GET /api/users/profile/2021001
```

#### 🔹 Ejemplo de Respuesta (200 OK)
```json
{
  "registro_academico": "2021001",
  "nombres": "Juan",
  "apellidos": "Pérez",
  "correo": "juan@example.com"
}
```

---

### 4️⃣ Recuperar Contraseña
- **Método:** `POST`
- **Endpoint:** `/recover-password`
- **Descripción:** Permite actualizar la contraseña de un usuario en caso de olvido.

#### 🔹 Ejemplo de Request (JSON)
```json
{
  "registro_academico": "2021001",
  "correo": "juan@example.com",
  "nuevaContraseña": "nuevo123"
}
```

#### 🔹 Ejemplo de Respuesta (200 OK)
```json
{
  "message": "Contraseña actualizada exitosamente"
}
```

---

## 📜 Publicaciones

### 5️⃣ Crear Publicación
- **Método:** `POST`
- **Endpoint:** `/publications/create`
- **Descripción:** Crea una nueva publicación asociada a un curso y un usuario.

#### 🔹 Ejemplo de Request (JSON)
```json
{
  "id_curso": 101,
  "id_catedratico": 1,
  "registro_academico": "2021001",
  "contenido": "Nueva publicación sobre redes neuronales",
  "tipo": "Anuncio"
}
```

#### 🔹 Ejemplo de Respuesta (201 Created)
```json
{
  "message": "Publicación creada exitosamente"
}
```

---

### 6️⃣ Obtener Todas las Publicaciones
- **Método:** `GET`
- **Endpoint:** `/publications`
- **Descripción:** Devuelve la lista de todas las publicaciones creadas.

#### 🔹 Ejemplo de Request
```plaintext
GET /api/users/publications
```

#### 🔹 Ejemplo de Respuesta (200 OK)
```json
[
  {
    "id_publicacion": 1,
    "id_curso": 101,
    "id_catedratico": 1,
    "registro_academico": "2021001",
    "contenido": "Nueva publicación sobre redes neuronales",
    "tipo": "Anuncio",
    "fecha_publicacion": "2024-03-20T12:00:00Z"
  }
]
```

---

### 7️⃣ Filtrar Publicaciones
- **Método:** `GET`
- **Endpoint:** `/publications/filter`
- **Descripción:** Filtra publicaciones según curso o catedrático.

#### 🔹 Ejemplo de Request
```plaintext
GET /api/users/publications/filter?tipo=Curso&valor=101
```

#### 🔹 Ejemplo de Respuesta (200 OK)
```json
[
  {
    "id_publicacion": 1,
    "id_curso": 101,
    "id_catedratico": 1,
    "registro_academico": "2021001",
    "contenido": "Nueva publicación sobre redes neuronales",
    "tipo": "Anuncio",
    "fecha_publicacion": "2024-03-20T12:00:00Z"
  }
]
```

---

### 8️⃣ Agregar Comentario a una Publicación
- **Método:** `POST`
- **Endpoint:** `/publications/comment`
- **Descripción:** Agrega un comentario a una publicación existente.

#### 🔹 Ejemplo de Request (JSON)
```json
{
  "id_publicacion": 1,
  "registro_academico": "2021002",
  "comentario": "¡Muy interesante, gracias por compartir!"
}
```

#### 🔹 Ejemplo de Respuesta (201 Created)
```json
{
  "message": "Comentario agregado exitosamente"
}
```

---

## 📌 Notas
✅ **Autenticación:** Algunas rutas requieren un token JWT en los headers.
✅ **Base de Datos:** Asegúrate de configurar las variables de entorno en `.env`.
✅ **Servidor:** Usa `npm run dev` para iniciar el backend con **nodemon**.

---

🚀 **Importa estos endpoints en Postman para pruebas fáciles y rápidas.** 🚀

