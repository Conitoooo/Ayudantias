const { Pool } = require('pg');

const pool = new Pool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
});

pool.connect((err) => {
    if (err) {
        console.error('Error conectando a la base de datos: ', err);
    } else {
        console.log('Conectado a la base de datos PostgreSQL.');
    }
});

module.exports = pool;
