const path = require('node:path')

// unir rutas con path.join
console.log(path.sep)

const filePath = path.join('content', 'subfolder', 'test.txt')
console.log(filePath)

const base = path.basename('tmp/ghandidev/password.txt')
console.log(base)

const filename = path.basename('/tmp/ghandidev/password.txt', '.txt')
console.log(filename)

const extension = path.extname('./README.md')
console.log(extension)
