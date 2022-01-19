const fs = require("fs");

console.log((process.hrtime()[0]/60).toFixed(5));
console.log("Antes da leitura do Arquivo");
// quando eu tenho o sync no metodo significa que ele é um metodo Bloqueante (blocking)

const dados = fs.readFileSync("file.txt");

console.log("Executando o console após o arquivo");

console.log((process.hrtime()[0]/60).toFixed(5));