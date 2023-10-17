const { readFile } = require('node:fs/promises') // <-- teniendo las promises ya se puede usar async await

// IIFE - Immediately Invoked Function Expression

;(async () => {
  // <-- esto es una función, la estamos invocando y llamando --> //
  console.log('leyendo el primer Archivo ... =>')

  const text = await readFile('./archivo.txt', 'utf-8')
  console.log('primer texto: ', text)

  console.log('----> ME EJECUTA MIENTRAS LEE LO DEMÁS!')

  console.log('leyendo el Segundo Archivo ... =>')
  const secondText = await readFile('./archivo2.txt', 'utf-8')
  console.log('segundo texto: ', secondText)
})()
