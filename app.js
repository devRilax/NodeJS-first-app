const argv = require('yargs')
            .command('listar', 'Obtiene el listado de multiplicaciones', {
                base: {
                    demand: true,
                    alias: 'b',
                    default: 1
                },
                limit: {
                    demand: true,
                    alias: 'l',
                    default: 10
                }
            })
            .command('crear', 'Crea un archivo plano en la carpeta files, con el resultado de las multiplicaciones.', {
                base: {
                    demand: true,
                    alias: 'b',
                    default: 1
                },
                limit: {
                    demand: true,
                    alias: 'l',
                    default: 10
                }
            })
            .command('eliminar', 'Elimina un archivo de la ubicación files', {
                nombre: {
                    demand: true,
                    alias: 'n'
                }
            })
            .help()
            .argv

const multiplicacionLogic = require('./logic/multiplicacionLogic')
const fileHelper = require('./logic/fileLogic')


/**
 * Init app 
 * 
*/

function _setup() {

    let comando = argv._[0];
    switch( comando ) {
        case 'listar':
            _list();
            break;
        case 'crear':
            _create()
            break;
        case 'eliminar':
            _drop();
            break;

        default:
            console.log('Comando no reconocido')

    }
}

function _list() {
    multiplicacionLogic.multiplicar(argv.base, argv.limit)
    .then( success => {
        console.log(success)
    })
    .catch(err => {
        console.log(err)
    })
}

function _create() {
    multiplicacionLogic.multiplicar(argv.base, argv.limit)
     .then( success => {
        _createFile(success)
     })
     .catch(err => {
         console.log(err)
     })
}  

function _createFile(data) {
    fileHelper.create(data) 
    .then(success => {
        console.log('Archivo creado exitosamente')
    })
    .catch(err => {
        console.log(`Ha ocurrido un error al generar el archivo: ${err}`)
    })
}

function _drop() {
    if(!argv.nombre) {
        console.log('Debe especificar el nombre de un archivo')
        return
    }
    fileHelper.remove(argv.nombre)
    .then( success => {
        console.log(success)
    })
    .catch(err => {
        console.log(`Error al eliminar fichero: ${err}`)
    })
}

_setup(); 
