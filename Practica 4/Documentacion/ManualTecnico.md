# Manual Técnico: Backend de la Práctica 4

Este documento proporciona una descripción técnica del backend de la Práctica 4, que incluye la configuración del entorno, las rutas disponibles, la lógica detrás de los controladores y la estructura de la base de datos.

## Índice

- [Manual Técnico: Backend de la Práctica 4](#manual-técnico-backend-de-la-práctica-4)
  - [Índice](#índice)
  - [Descripción General](#descripción-general)
  - [Estructura del Proyecto](#estructura-del-proyecto)
  - [Configuración del Entorno](#configuración-del-entorno)
  - [Base de Datos](#base-de-datos)
  - [Rutas y Controladores](#rutas-y-controladores)
    - [Rutas de Usuario](#rutas-de-usuario)
    - [Rutas de Publicaciones](#rutas-de-publicaciones)
  - [Testing del Backend con Postman](#testing-del-backend-con-postman)
  - [Dependencias](#dependencias)
  - [Consideraciones Adicionales](#consideraciones-adicionales)

---

## Descripción General

El backend de esta práctica está construido sobre Node.js y Express. Utiliza una base de datos MySQL para almacenar usuarios, publicaciones, comentarios y cursos. El sistema está diseñado para permitir el registro y login de usuarios, así como la creación y filtrado de publicaciones.

---

## Estructura del Proyecto

La estructura del proyecto está organizada en carpetas y archivos principales que se describen a continuación:

```
Practica 4/
├── Backend/
│   ├── config/
│   │   └── db.js                # Configuración de la conexión a la base de datos
│   ├── controllers/             
│   │   ├── publicacionController.js # Lógica de las publicaciones
│   │   └── userController.js         # Lógica de usuarios
│   ├── database/
│   │   ├── Practica4.mwb           # Archivo de la base de datos MySQL
│   │   └── Practica4.sql           # Script SQL para crear la base de datos
│   ├── routes/                    
│   │   └── userRoutes.js           # Rutas de usuario
│   ├── .env                        # Variables de entorno
│   ├── index.js                    # Archivo principal que inicia el servidor
│   ├── package.json                # Descripción del proyecto y dependencias
```

---

## Configuración del Entorno

1. **Instalar Dependencias**:
   ```bash
   npm install
   ```

2. **Archivo `.env`**:
   ```
   DB_HOST=localhost
   DB_USER=usuario
   DB_PASSWORD=contraseña
   DB_NAME=Practica4
   JWT_SECRET=secreto_que_debes_cambiar
   ```

---

## Base de Datos

La base de datos `Practica4` contiene las siguientes tablas:

- **usuarios**: Almacena información de los usuarios.
- **cursos**: Contiene información sobre los cursos.
- **catedraticos**: Almacena la información de los catedráticos.
- **publicaciones**: Almacena publicaciones.
- **comentarios**: Permite almacenar comentarios.
- **cursos_catedratico**: Relaciona los cursos con los catedráticos.
- **cursos_aprobados**: Guarda los cursos aprobados por los usuarios.

El script `Practica4.sql` crea la base de datos y las tablas necesarias.

---

## Rutas y Controladores

### Rutas de Usuario

- **POST /api/users/register**: Registra un nuevo usuario.
- **POST /api/users/login**: Inicia sesión.
- **GET /api/users/profile/:id**: Obtiene el perfil de un usuario.
- **POST /api/users/recover-password**: Recupera la contraseña.

### Rutas de Publicaciones

- **POST /api/publications/create**: Crea una nueva publicación.
- **GET /api/publications**: Obtiene todas las publicaciones.
- **GET /api/publications/filter**: Filtra publicaciones.
- **POST /api/publications/comment**: Agrega un comentario a una publicación.

---

## Testing del Backend con Postman

1. **Registro de usuario**:
   - `POST http://localhost:5000/api/users/register`

2. **Inicio de sesión**:
   - `POST http://localhost:5000/api/users/login`

3. **Obtener perfil de usuario**:
   - `GET http://localhost:5000/api/users/profile/123456`

4. **Crear publicación**:
   - `POST http://localhost:5000/api/publications/create`

5. **Filtrar publicaciones**:
   - `GET http://localhost:5000/api/publications/filter?tipo=Curso&valor=101`

---

## Dependencias

El proyecto utiliza las siguientes dependencias:

- **bcrypt**: Encriptación de contraseñas.
- **cors**: Para solicitudes cross-origin.
- **dotenv**: Variables de entorno.
- **express**: Framework web.
- **jsonwebtoken**: Tokens JWT.
- **mysql2**: Conexión a MySQL.

---

## Consideraciones Adicionales

- **Seguridad**: Las contraseñas son encriptadas con bcrypt.
- **Autenticación**: Se usa JWT para autenticación.

Este manual proporciona las bases para trabajar con el backend de la Práctica 4.

