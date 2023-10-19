import { createRequire } from 'node:module'
const require = createRequire(import.meta.url) // <--  ESModules recomendado...

export const readJSON = (path) => require(path)
