CREATE DATABASE Practica4;
use Practica4;

-- Tabla de Usuarios
CREATE TABLE usuarios (
    registro_academico VARCHAR(20) PRIMARY KEY,
    nombres VARCHAR(100) NOT NULL,
    apellidos VARCHAR(100) NOT NULL,
    correo VARCHAR(100) UNIQUE NOT NULL,
    contraseña VARCHAR(255) NOT NULL
);

-- Tabla de Cursos
CREATE TABLE cursos (
    codigo_curso VARCHAR(10) PRIMARY KEY,
    nombre_curso VARCHAR(100) NOT NULL ,
    catedratico VARCHAR(100) NOT NULL
);

-- Tabla de Catedráticos
CREATE TABLE catedraticos (
    codigo_catedratico VARCHAR(10) PRIMARY KEY,
    nombre_catedratico VARCHAR(100) NOT NULL,
    correo_catedratico VARCHAR(100) UNIQUE NOT NULL
);
-- Tabla de Publicaciones
CREATE TABLE publicaciones (
    id_publicacion INT AUTO_INCREMENT PRIMARY KEY,
    id_curso VARCHAR(10) NOT NULL,
    id_catedratico VARCHAR(10) NOT NULL,
    registro_academico VARCHAR(20) NOT NULL,
    contenido TEXT NOT NULL,
    fecha_publicacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    tipo ENUM('Curso', 'Catedratico') NOT NULL,
    FOREIGN KEY (id_curso) REFERENCES cursos(codigo_curso),
    FOREIGN KEY (id_catedratico) REFERENCES catedraticos(codigo_catedratico),
    FOREIGN KEY (registro_academico) REFERENCES usuarios(registro_academico)
);

-- Tabla de Comentarios
CREATE TABLE comentarios (
    id_comentario INT AUTO_INCREMENT PRIMARY KEY,
    id_publicacion INT NOT NULL,
    registro_academico VARCHAR(20) NOT NULL,
    comentario TEXT NOT NULL,
    fecha_comentario TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (id_publicacion) REFERENCES publicaciones(id_publicacion),
    FOREIGN KEY (registro_academico) REFERENCES usuarios(registro_academico)
);

-- Tabla de Cursos_catedratico
CREATE TABLE cursos_catedratico (
    id_catedratico VARCHAR(10) NOT NULL,
    id_curso VARCHAR(10) NOT NULL,
    PRIMARY KEY (id_catedratico, id_curso),
    FOREIGN KEY (id_catedratico) REFERENCES catedraticos(codigo_catedratico),
    FOREIGN KEY (id_curso) REFERENCES cursos(codigo_curso)
);

-- Tabla de Cursos_aprobados
CREATE TABLE cursos_aprobados (
    registro_academico VARCHAR(20) NOT NULL,
    id_curso VARCHAR(10) NOT NULL,
    PRIMARY KEY (registro_academico, id_curso),
    FOREIGN KEY (registro_academico) REFERENCES usuarios(registro_academico),
    FOREIGN KEY (id_curso) REFERENCES cursos(codigo_curso)
);
