const fileHelper = require('fs');


let create = (fileContent) => {

    return new Promise( (resolve, reject) => {
        fileHelper.writeFile(fileContent.name, fileContent.content, (err) => {
            if(err) {
                reject(err)
                return
            }
            resolve('archivo creado exitosamente')
        });
    });
}

let remove = (filename) => {

    return new Promise( (resolve, reject) => {
        if(!fileHelper.existsSync(`files/${filename}`)) {
            reject('El archivo especificado no existe')
            return
        }
    
        fileHelper.unlink(`files/${filename}`, (err) => {
            if(err) {
                reject(err) 
                return
            }

            resolve('Archivo eliminado correctamente!')
        });
    });


}


module.exports = {
    create,
    remove
}