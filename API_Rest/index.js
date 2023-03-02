var express = require('express');
var app = express();
app.use(express.json());
app.use(express.urlencoded());
const ruta = require('path');

var persona = {
    nombre: "",
    apellido: "",
    id: ""
}

app.get('/', (req,res) => {
    res.sendFile('/home/Manu/Documentos/GitHub/Programacion-javascript-nodejs/API_REST/html/index.html');
})

// Crear entrada
app.get('/crearEntrada', (req,res) => {
    res.sendFile(__dirname + '/html/crearEntrada.html');
})

app.post('/envioDeDatos', (req,res) => {
    persona.nombre = req.body.nombre;
    persona.apellido = req.body.apellido;
    persona.id = req.body.id;  
    res.sendFile(__dirname + '/html/index.html');
})

// Consultar entrdada
app.get('/consultarEntrada', (req,res) => {
    if(persona.nombre !== '' && persona.apellido !== '' && persona.id !== ''){
        res.json(persona)
    }
    else{
        res.sendFile(__dirname + '/html/consultarDatos.html')
    }
})

// Elimiar entrada
app.post('/eliminarEntrada', (req,res) => {
    persona.nombre = '';
    persona.apellido = '';
    persona.id = ''; 
    res.sendFile(__dirname + '/html/eliminarEntrada.html');
})



app.listen(8000, () => {
    console.log("El servidor esta trabajando en el puerto 8000")
})
