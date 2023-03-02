var express = require('express');
var app = express()
var port = 8000;

app.get('/', (pet, resp) => {
    resp.send("<h1>Hola esto es un servicio N.1</h1>")
})

app.get('/saludo', (pet, resp) => {
    resp.send("Hola esto es el servicio N.2")
})

app.get('/saludo2', (pet, resp) => {
    resp.send("<html><body bgcolor=red>Hola</body></html>")
})

app.listen(port, () => {
    console.log("El servidor esta corriendo en el puerto " + port);
})