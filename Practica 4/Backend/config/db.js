const mysql = require('mysql2');  // Mantén la importación normal
require('dotenv').config();

// Crear conexión con Promesas
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
}).promise();  // Usa el método `.promise()` aquí

// Conectar a MySQL
connection.connect(error => {
  if (error) {
    console.error('❌ Error conectando a la base de datos:', error);
    return;
  }
  console.log('✅ Conectado a la base de datos MySQL');
});

module.exports = connection;
