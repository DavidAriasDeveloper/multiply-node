const fs = require('fs');
const colors = require('colors/safe');

let data = "";

let listTable = ( base, limit = 10 ) => {
    console.log('========================================='.green);
    console.log(`Tabla de ${ base }`.green);
    console.log('========================================='.green);
    return new Promise( (res,rej) => {
        if(!Number(base) && !Number(limit)){
            rej('No es un número');
            return;
        }

        for(let i = 1; i <= limit; i++){
            data += `${ base } * ${ i } = ${ base * i }\n`;
        }

        res(data);
    });
}

let makeFile = ( base, limit = 10 ) => {
    return new Promise( (res, rej) => {
        if (!Number(base) && !Number(limit)){
            rej('No es un número');
            return;
        }
        
        for(let i = 1; i <= limit; i++){
            data += `${ base } * ${ i } = ${ base * i }\n`;
        }

        let filename = `tables/${base}-table-to-${limit}.txt`

        fs.writeFile(filename, data , (err) => {
            if (err) rej(err);
            else
                res(`La tabla del ${ base } ha sido creada en ${ colors.blue(filename) }`);
        })
    });
}

module.exports = {
    makeFile,
    listTable
}