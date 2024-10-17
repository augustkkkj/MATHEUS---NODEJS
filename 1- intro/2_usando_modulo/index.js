const fs = require('fs'); // file system

fs.readFile('aqui.txt', 'utf8', (erro, data) => {
    if (erro) { 
        console.log(erro);
        return
    }

    console.log(data);
});