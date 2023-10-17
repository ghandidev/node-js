const fs = require('node:fs')

// const buffer = fs.readFileSync('./archivo.txt')
// console.log(buffer)

/*
console.log('leyendo el primer Archivo...')
const text = fs.readFileSync('./archivo.txt', 'utf-8')

console.log(text)
console.log('QUIERO QUE ME EJECUTES MIENTRAS LEES LO DEMÁS!')

console.log('leyendo el Segundo Archivo...')
const secondText = fs.readFileSync('./archivo2.txt', 'utf-8')
console.log(secondText)
*/

// ahora No Sincronía sino Asincronía

console.log('leyendo el primer Archivo Async...=>')
fs.readFile('./archivo.txt', 'utf-8', (textAsync) => {
  // <-- Ejecuta el callBack
  console.log('primer texto: ', textAsync)
})

console.log('----> ME EJECUTA MIENTRAS LEE LO DEMÁS!')

console.log('leyendo el Segundo Archivo Async...=>')
fs.readFile('./archivo2.txt', 'utf-8', (secondTextAsync) => {
  // <-- Ejecuta el callBack
  console.log('SegundoTexto: ', secondTextAsync)
})
