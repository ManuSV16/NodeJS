var eventos = require('events'); 

var EmisorEventos = eventos.EventEmitter; 
var manejador = new EmisorEventos(); 

manejador.on('despedida', function(nombre){ 
    console.log("Adiós " + nombre); 
 }); 

manejador.on('saludo', function(nombre){ 
    console.log("Hola " + nombre); 
 }); 

 manejador.emit('saludo', "Manu"); 
 
 manejador.emit('despedida', "Manu"); 
