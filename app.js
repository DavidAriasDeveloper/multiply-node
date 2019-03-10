/**
 * Requires
 */

const argv = require('./config/yargs').argv;
const colors = require('colors/safe');

const { makeFile, listTable } = require('./multiply/multiply');

//console.log(argv);

let command = argv._[0];

switch( command ) {
    case 'list':
        console.log('Listar');
        listTable(argv.base, argv.limit)
            .then(list => console.log(list));
        break;
    case 'create':
        console.log('Create');
        makeFile(argv.base, argv.limit)
            .then( file => console.log(`Archivo creado: ${ file }`))
            .catch(err => console.log(err));
        break;
    default:
        console.log('Comando no reconocido');
}