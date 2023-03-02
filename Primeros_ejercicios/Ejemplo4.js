var json = '{"nombre":"Manu","edad":26,"nacionalidad":"Mexicana","hobbies":["Futbol Americano","video juegos"]}';
var obj = JSON.parse(json);
console.log(obj.hobbies[0]);
