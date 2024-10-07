const mysql = require('mysql2');

const connection = mysql.createConnection({
    // Usa la variable de entorno para la conexión
    uri: process.env.MYSQL_URL, // Asegúrate de que esta variable esté configurada en Railway
});

connection.connect((err) => {
    if (err) {
        console.error('Error conectando a la base de datos: ' + err.stack);
        return;
    }
    console.log('Conectado a la base de datos como ID ' + connection.threadId);
});

module.exports = connection;
