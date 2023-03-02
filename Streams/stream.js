process.stdin.resume();                    // Indica la entrada del teclado
process.stdin.setEncoding('ascii');        // Informacion en codigo
process.stdin.on('data', function(line){   // Funcion que se identifica como data y hace un callback
   process.stdout.write(line);             // Imprime el valor del teclado
});