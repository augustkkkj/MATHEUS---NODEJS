const fs = require('fs'); // file system

fs.readFile('cu.txt', 'utf8', (erro, data) => {
    if (erro) { // Corrigido de "err" para "erro"
        console.log(erro);
    }

    console.log(data);
});