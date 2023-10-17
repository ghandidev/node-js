// Esto sólo en los módulos nativos
// que no tienen promesas nativas

// const { promisify } = require('node:util')
// const readFilePromise = promisify(fs.readFile)

const fs = require('node:fs/promises') // <-- Las promesas son Asíncronos -->

console.log('leyendo el primer Archivo Async...=>')
fs.readFile('./archivo.txt', 'utf-8').then((text) => {
  console.log('primer texto: ', text)
})

console.log('----> ME EJECUTA MIENTRAS LEE LO DEMÁS!')

console.log('leyendo el Segundo Archivo Async...=>')
fs.readFile('./archivo2.txt', 'utf-8').then((text) => {
  console.log('segundo texto: ', text)
})
