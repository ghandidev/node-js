const fs = require('node:fs/promises')
const path = require('node:path')
const pc = require('picocolors')

const folder = process.argv[2] ?? '.'

async function ls(folder) {
  let files
  try {
    files = await fs.readdir(folder)
  } catch {
    console.error(pc.red(`No se pudo leer el Directorio: ${folder}`))
    process.exit(1)
  }
  const filesPromises = files.map(async (file) => {
    const filePath = path.join(folder, file)
    let stats
    try {
      stats = await fs.stat(filePath) // status - información del archivo
    } catch {
      console.error(pc.red(`No se pudo leer el Directorio: ${folder}`))
      process.exit(1)
    }
    const isDirectory = stats.isDirectory()
    const fileType = isDirectory ? 'd: ' : 'f: '
    const fileSize = stats.size.toString()
    const fileModified = stats.mtime.toLocaleString()

    return `${pc.magenta(fileType)} ${pc.blue(
      file.padEnd(30)
    )} ${fileSize.padStart(10)} ${pc.yellow(fileModified)}`
  })
  const filesInfo = await Promise.all(filesPromises)
  filesInfo.forEach((filesInfo) => console.log(pc.green(filesInfo)))
}
ls(folder)
