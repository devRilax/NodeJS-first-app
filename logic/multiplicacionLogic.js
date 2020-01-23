

let multiplicar = (base, limit) => {
    return new Promise ( (resolve, reject) => {
        if(isNaN(base)) {
           reject('El valor especificado no es numérico')
           return
        }
    
        let contenido = ''
        for(let numero = 1; numero < limit + 1; numero++){
            contenido += `${base} x ${numero} = ${numero * base}\n`
        }
    
        resolve({
            name: `files/Multiplicacion-${ base }.txt`,
            content: contenido
        })
    })
}

module.exports = {
    multiplicar
}