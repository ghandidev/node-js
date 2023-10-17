const fs = require('node:fs')

console.log('leyendo el primer Archivo...')
const text = fs.readFileSync('./archivo.txt', 'utf-8')

console.log(text)
console.log('QUIERO QUE ME EJECUTES MIENTRAS LEES LO DEMÁS!')

console.log('leyendo el Segundo Archivo...')
const secondText = fs.readFileSync('./archivo2.txt', 'utf-8')
console.log(secondText)
