import path from 'path'
import template from 'lodash.template'
import fs from 'fs-extra'
import ansi from 'ansi'

const cursor = ansi(process.stdout)

export const getTemplate = filePath => path.join(__dirname, './templates', filePath)

export const capitalize = string => string.charAt(0).toUpperCase() + string.slice(1)

export const lowercase = string => string.charAt(0).toLowerCase() + string.slice(1)

export const log = (message, color = 'green', lineBreak = true) => (
  cursor[color]().write(`${message}${lineBreak ? '\n' : ''}`).reset()
)

export const successLog = message => log(`✔ ${message}`)

export const getComponentDirectories = srcpath => (
  fs.readdirSync(srcpath).filter(file => (
    fs.statSync(path.join(srcpath, file)).isDirectory() && !file.startsWith('_') && !file.startsWith('icon') && !file.startsWith('typings')
  ))
)

export const getFileInDirectory = srcpath => (
  fs.readdirSync(srcpath).filter(file => (
    fs.statSync(path.join(srcpath, file)).isFile() && !file.startsWith('.')
  ))
)

export const rewrite = (filePath, data) => {
  const content = fs.readFileSync(filePath, 'utf8')
  const compiled = template(content)
  const result = compiled(data)
  fs.writeFileSync(filePath, result)
}

export const copy = (filename, destPath, data) => {
  fs.copySync(getTemplate(filename), destPath)
  rewrite(destPath, data)
  log(`↳ creating ${destPath}...`, 'grey')
}

export const removeExtension = filename => filename.split('.').slice(0, -1).join('.')

export const getIconFiles = srcpath => (
  fs.readdirSync(srcpath).reduce((arr, file) => {
    if (!file.startsWith('story') && !file.startsWith('index')) {
      arr.push(removeExtension(file))
    }
    return arr.filter(e => e)
  }, [])
)

export const createFolder = folder => new Promise((resolve, reject) => {
  if (fs.existsSync(folder)) {
    reject('folder already exists.')
  }

  fs.mkdirSync(folder)
  resolve('folder created.')
})
