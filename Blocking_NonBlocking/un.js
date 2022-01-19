// Nesse exercicio fiz os 2 metodos misturados, bloqueantes e não bloqueantes somente para ver oque acontecia.

const fs = require("fs");

//metodo do node para ler um arquivo

fs.readFile("file.txt",(err, data)=>{
    if(err) throw err;
    console.log(data);

    //Metodo padrao do mode para excluir um arquivo.

    fs.unlink("file.txt",(unlinkErr) =>{
        if(unlinkErr) throw unlinkErr;
        console.log("Arquivo Excluido com sucesso!")

    });
});
//Metodo padrao do mode para excluir um arquivo.

