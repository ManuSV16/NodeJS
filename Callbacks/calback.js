suma = (a, b) => a+b;

function promedio(a, b, callback){
    let out = callback(a, b);
    return out/2;
}

let res = promedio(2, 7, suma);
console.log(res);