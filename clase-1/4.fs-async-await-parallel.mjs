import { readFile } from 'node:fs/promises'

Promise.all([
  readFile('./archivo.txt', 'utf8'),
  readFile('./archivo2.txt', 'utf8')
]).then(([text, secondText]) => {
  console.log('leyendo el primer Archivo ... =>')
  console.log('primer texto: ', text)
  console.log('----> ME EJECUTA MIENTRAS LEE LO DEMÁS!')
  console.log('leyendo el Segundo Archivo ... =>')
  console.log('segundo texto: ', secondText)
})
