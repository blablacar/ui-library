import fs from 'fs'

import * as kirk from './index'

const lowercase = (str: string) => str.charAt(0).toLowerCase() + str.slice(1)

const getComponentDirectoriesInFolder = (folder: string) =>
  fs.readdirSync(folder).filter(file => fs.statSync(`${folder}/${file}`).isDirectory())

const getSrcComponentDirectories = () =>
  getComponentDirectoriesInFolder('src').filter(
    file =>
      !file.startsWith('_') &&
      !file.startsWith('icon') &&
      !file.startsWith('typings') &&
      !file.startsWith('layout') &&
      !file.startsWith('typography') &&
      !file.startsWith('pages') &&
      !file.startsWith('searchForm'),
  )

const exportedComponents = Object.keys(kirk).map(lowercase)

it('Should render the kirk library', () => {
  expect(exportedComponents.length).toBeGreaterThan(0)
})

it('Should export every component folder', () => {
  expect(exportedComponents).toEqual(
    expect.arrayContaining([
      ...getSrcComponentDirectories(),
      ...getComponentDirectoriesInFolder('src/layout/section'),
    ]),
  )
})

it('Should export the branding object', () => {
  expect(exportedComponents).toContain('branding')
})
