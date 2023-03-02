// Biblioteca
const fs = require('fs');

// Escribir informacion
fs.writeFileSync('archivo.txt', "Hola, este es un archivo nuevo, creado de manera sincrónica");
fs.writeFile('archivo2.txt', "Hola, este es un archivo nuevo, creado de manera asincrónica", (err) => {
   if (err)
      console.log(err);
   else {
    console.log("Guardando informacion...");
   }
});


// Leer informacion
let informacion = fs.readFileSync('archivo.txt', 'utf8');
console.log(informacion);

// fs.unlinkSync('archivo.txt');