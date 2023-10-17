import {
  platform,
  release,
  arch,
  cpus,
  freemem,
  totalmem,
  uptime,
  userInfo
} from 'node:os'

console.log('Información del sistema Operativo')
console.log('---------------------')
console.log('nombre del sistema Operativo', platform())
console.log('version del sistema Operativo', release())
console.log('arquitectura del sistema Operativo', arch())
console.log('CPUs', cpus())
console.log('Memoria Libre', freemem() / 1024 / 1024)
console.log('Memoria Total', totalmem() / 1024 / 1024)
console.log('Uptime', uptime / 60 / 60)
console.log('Información de Usuario', userInfo())
