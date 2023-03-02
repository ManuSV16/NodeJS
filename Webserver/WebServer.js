const express = require('express');
const app = express();
const port = 8000;

app.get('/', (request, response) => {
    response.send("Hola este es un servicio en la nube local");
});

app.listen(port, () => {
    console.log('El servidor web ya esta listo para el puerto ' + port);
});