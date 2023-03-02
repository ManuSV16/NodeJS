const http = require("http");
const host = 'localhost';
const port = 8000;

const respuesta = function(pet, resp){
    resp.setHeader("Content-Type", "text/html");

    resp.end("Hola bienvenido al servicio del backend")
}
const server = http.createServer(respuesta);
server.listen(port, host, () => {
    console.log("El servidor esta corriendo en el puerto " + port);
})