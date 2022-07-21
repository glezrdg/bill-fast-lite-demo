

// Recibe un string y retorna el string inverso


const reverStringPromise = (str) => {
  return new Promise((resolve, reject) => {
    setTimeout(()=> {
      resolve(str.split('').reverse().join(''))
    }, 3000)
  })
}

const handleReverseString = async () => {
  try {
    console.log('sincrono')
    const res = await reverStringPromise('hola')
    console.log('asincrono')
    console.log(res)
  } catch (error) {
    console.log(error)
  }

}

// const handleReverseString = () => {
//   reverStringPromise('Hola')
//     .then((res) => {
//       reverStringPromise(res)
//         .then((res) => console.log(res))
//     })
//     .catch((err) => console.error(err))
//   console.log('Asincrono')
// }

handleReverseString()

// const reverString = (str, callback)  => {
//    callback(str.split('').reverse().join(''))
// }

// reverString('Hola', (str) => {
//   console.log(str)
// })

// 