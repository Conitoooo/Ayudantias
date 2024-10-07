const express = require('express');
const cors = require('cors');
const db = require('./config/db'); // Importa tu conexión a la base de datos

const app = express();
app.use(cors());
app.use(express.json()); // Para manejar JSON en las solicitudes

const PORT = process.env.PORT || 3000;

// Inicia el servidor
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
