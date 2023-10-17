import { readFile } from 'node:fs/promises'

console.log('leyendo el primer Archivo ... =>')

const text = await readFile('./archivo.txt', 'utf-8')
console.log('primer texto: ', text)

console.log('----> ME EJECUTA MIENTRAS LEE LO DEMÁS!')

console.log('leyendo el Segundo Archivo ... =>')
const secondText = await readFile('./archivo2.txt', 'utf-8')
console.log('segundo texto: ', secondText)
