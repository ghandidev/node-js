const os = require('node:os')

console.log('Información del sistema Operativo')
console.log('---------------------')
console.log('nombre del sistema Operativo', os.platform())
console.log('version del sistema Operativo', os.release())
console.log('arquitectura del sistema Operativo', os.arch())
console.log('CPUs', os.cpus())
console.log('Memoria Libre', os.freemem() / 1024 / 1024)
console.log('Memoria Total', os.totalmem() / 1024 / 1024)
console.log('Uptime', os.uptime / 60 / 60)
console.log('Información de Usuario', os.userInfo([2]))