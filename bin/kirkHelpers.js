import path from 'path'
import fs from 'fs-extra'
import glob from 'glob'
import kebabCase from 'lodash.kebabcase'
import camelCase from 'lodash.camelcase'
import inquirer from 'inquirer'

import { capitalize, getComponentDirectories, getIconFiles, copy, createFolder, removeExtension, log, successLog } from './utils'

const src = path.join(__dirname, '../src/')

const generateStories = () => new Promise((resolve, reject) => {
  glob('./src/**/story.tsx', (error, files) => {
    if (error) {
      reject(new Error('Error while getting the stories.'))
    }
    copy('stories.tsx', path.join(__dirname, '../stories/index.tsx'), {
      files: files.map(file => `.${removeExtension(file)}`),
    })
    resolve()
  })
})

const generateDispatcher = () => new Promise((resolve) => {
  const components = getComponentDirectories(src).map(name => ({
    name,
    capitalized: capitalize(name),
    root: '',
  }))
    .concat(getIconFiles('src/icon').map(name => ({
      name,
      capitalized: capitalize(name),
      root: 'icon/',
    })))

  copy('components.tsx', path.join(src, 'index.tsx'), { components })
  resolve()
})

export const generateGetters = () => {
  log('Updating the exports...')
  generateStories()
    .then(generateDispatcher())
    .then(() => successLog('Global Getters regenerated'))
    .catch(error => log(error, 'red'))
}

export const generateComponent = () => {
  const questions = [
    {
      type: 'input',
      name: 'name',
      message: 'What is the name of your component?',
      validate(value) {
        return /^[a-zA-Z]+$/.test(value) || 'The name must be in camelCase format: someName'
      },
    },
    {
      type: 'list',
      name: 'type',
      choices: ['Class Component', 'Functional Component'],
      message: 'What kind of Component do you want?',
    },
  ]

  inquirer
    .prompt(questions)
    .then(({ name, type }) => {
      const componentType = capitalize(type.split(' ').shift().toLowerCase())
      const componentKebabCase = kebabCase(name)
      const componentName = capitalize(camelCase(name))
      const componentPath = path.join(src, name)

      createFolder(componentPath)
        .then(() => {
          log('Creating the folder...')
          const data = { name, componentName, componentKebabCase }
          copy('style.ts', path.join(componentPath, 'style.ts'), data)
          copy('component.unit.tsx', path.join(componentPath, 'index.unit.tsx'), data)
          copy('componentStory.tsx', path.join(componentPath, 'story.tsx'), data)
          copy(`component${componentType}.tsx`, path.join(componentPath, 'index.tsx'), data)

          generateGetters()
        })
        .catch(() => {
          log('This folder already exists.', 'red')
          process.exit()
        })
    })
}

export const generateIcon = () => {
  const questions = [
    {
      type: 'input',
      name: 'name',
      message: 'What is the name of your icon? (will be suffixed with -Icon)',
    },
  ]

  inquirer
    .prompt(questions)
    .then(({ name }) => {
      copy('icon.tsx', path.join(src, 'icon', `${camelCase(name)}Icon.tsx`), {
        componentName: `${capitalize(camelCase(name))}Icon`,
      })
      successLog('Icon generated')
      generateGetters()
    })
}

export const deleteComponent = () => {
  const questions = [
    {
      type: 'list',
      name: 'component',
      choices: getComponentDirectories(src),
      message: 'What component would you like to remove?',
    },
    {
      type: 'list',
      name: 'validation',
      choices: ['No', 'Yes'],
      message: 'Are you sure (CAREFUL!)?',
    },
  ]

  inquirer
    .prompt(questions)
    .then(({ validation, component }) => {
      if (validation === 'Yes') {
        fs.remove(path.join(src, component), generateGetters)
      }
    })
}

export const deleteIcon = () => {
  const questions = [
    {
      type: 'list',
      name: 'icon',
      choices: getIconFiles('src/icon'),
      message: 'What icon would you like to remove?',
    },
    {
      type: 'list',
      name: 'validation',
      choices: ['No', 'Yes'],
      message: 'Are you sure (CAREFUL!)?',
    },
  ]

  inquirer
    .prompt(questions)
    .then(({ validation, icon }) => {
      if (validation === 'Yes') {
        fs.remove(path.join('src/icon', `${icon}.tsx`), generateGetters)
      }
    })
}
