const fs = require('fs-extra')
const path = require('path')
const log = require('pretty-log')
const replace = require('replace')
const readline = require('readline')

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

const templatePath = path.join(__dirname, './component/')
const destination = path.join(__dirname, '../src/')
const query = 'Enter a capitalized component name without spaces (like Footer or ChocolateBar): '

function copyFiles({ name, dir }) {
  log.debug(`Copying ${name} files..`)
  return new Promise((resolve, reject) => {
    fs.copy(templatePath, dir, err => {
      err ? reject(err) : resolve({ name, dir })
    })
  })
}

function renameFiles({ name, dir }) {
  log.debug(`Renaming ${name} files..`)

  return new Promise((resolve, reject) => {
    fs.readdir(dir, (err, files) => {
      if (err) {
        return reject(err)
      }

      const components = files.filter((f) => f !== 'index.tsx')
      const componentName = name.charAt(0).toUpperCase() + name.slice(1)

      components.forEach(f => {
        const rest = f
          .split('.')
          .splice(1)
          .join('.')
        fs.rename(`${dir}${f}`, `${dir}${componentName}.${rest}`, err => {
          err ? reject(err) : resolve({ name, dir })
        })
      })
    })
  })
}

function updateFiles({ name, dir }) {
  const componentName = name.charAt(0).toUpperCase() + name.slice(1)
  const componentDirectory = name.charAt(0).toLowerCase() + name.slice(1)
  log.debug(`Updating ${componentName} files..`)
  replace({
    regex: '__COMPONENT_NAME__',
    replacement: componentName,
    paths: [dir],
    recursive: true,
    silent: true,
  })
  replace({
    regex: '__COMPONENT_DIRECTORY__',
    replacement: componentDirectory,
    paths: [dir],
    recursive: true,
    silent: true,
  })
  return Promise.resolve({ name, dir })
}

function success({ name, dir }) {
  log.success(`Done..
    Name: ${name}
    Path: ${dir}
  `)
}

function fail(err) {
  log.error('Error while scaffolding component..', err)
}

function directoryExists(d) {
  try {
    fs.statSync(d)
    return true
  } catch (e) {
    return false
  }
}

function scaffoldComponent({ name, dir }) {
  log.debug(`Scaffolding ${name} component..`)
  return Promise.resolve({ name, dir })
    .then(copyFiles)
    .then(renameFiles)
    .then(updateFiles)
    .then(success)
    .catch(fail)
}

reader.question(query, name => {
  reader.close()

  const dirName = name.charAt(0).toLowerCase() + name.slice(1)

  const dir = path.join(destination, dirName, '/')
  if (directoryExists(dir)) {
    return log.error(`Component "${name}" already exists. Aborting..`)
  }
  return scaffoldComponent({ name, dir })
})
