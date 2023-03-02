var express = require('express');
var path = require('path');
var app = express()
var port = 9000;

app.use(express.json)                // Servicio para recibir datos en json
app.use(express.urlencoded)          // SErvicio para codificar la información

app.post('/', (pet, resp) => {
    resp.send("Hola web");
})

// app.post('/peticion', (pet, resp) => {
//     let temperatura = pet.body.temperatura;
//     resp.sendFile(path.join(__dirname + "/html/index.html"))
// })

app.listen(port, () => {
    console.log("El servidor esta corriendo en el puerto " + port);
})