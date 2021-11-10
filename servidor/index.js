const express = require('express');
const conectarDB = require('./config/db');

//Crear el servidor
const app = express();

//Conectar a la base de datos
conectarDB();

//Habilitar express.json
app.use( express.json({extend:true}) );

//puerto de la app
const PORT = process.env.PORT || 9000;

//Importar Rutas
app.use('/api/users', require('./routes/usuarios'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/proyectos', require('./routes/proyectos'));
app.use('/api/tareas', require('./routes/tareas'));

//iniciar el servdor
app.listen(PORT, () => {
    console.log(`PORT ${PORT}`)
});

