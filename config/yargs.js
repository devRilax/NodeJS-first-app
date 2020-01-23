const baseOptions = {
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
}

const argv = require('yargs')
            .command('listar', 'Obtiene el listado de multiplicaciones', baseOptions)
            .command('crear', 'Crea un archivo plano en la carpeta files, con el resultado de las multiplicaciones.', baseOptions)
            .command('eliminar', 'Elimina un archivo de la ubicación files', {
                nombre: {
                    demand: true,
                    alias: 'n'
                }
            })
            .help()
            .argv;

module.exports = {
    argv
}