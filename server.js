// Trouxemos um modulo nativo do nodejs chamado require(http) que dentro dele temos a possibilidade de criar um servidor

const http  = require("http")
const host = "127.0.0.1"
const port = 3000

// aqui o metodo createserver nos possibilita de criarmos um servidor e armazenarmos ele na constante server
// na criação do meu server eu configurei oque eu quero que ele mostre, no caso a mensagem Ola mundo

const server = http.createServer((req, res)=>{
    res.statusCode = 200;
    res.setHeader('Contente-Type','text/plain');
    res.end('Olá Mundo \n palmeiras e tricampeao da libertadores');
})
// a constante server conseguiu ouvir na porta do meu host oque esta acontecendo 

server.listen(port, host, ()=>{
    console.log(`Server Running at http://${host}:${port}`)
})