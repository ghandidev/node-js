// .js -> por defecto usa CommonJs
// .mjs -> para utilizar ES Modules
// .cjs -> para utilizar CommonJs

import { sum, sub, multi } from './sum.mjs'

console.log(sum(13, 2))
console.log(sub(13, 2))
console.log(multi(13, 2))
