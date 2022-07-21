

// Recibe un string y retorna el string inverso

const reverString = (str: string, callback: any)  => {
   callback(()=> {
    return str.split('').reverse().join('')
   })
}

console.log(reverString('Hola'))

// 