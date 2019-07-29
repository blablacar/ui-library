import fs from 'fs'

import * as kirk from './index'
import * as icon from './icon/index'

const lowercase = string => string.charAt(0).toLowerCase() + string.slice(1)

const getComponentDirectories = srcpath =>
  fs
    .readdirSync(srcpath)
    .filter(
      file =>
        fs.statSync(`src/${file}`).isDirectory() &&
        !file.startsWith('_') &&
        !file.startsWith('icon') &&
        !file.startsWith('typings'),
    )

const components = Object.keys(kirk).map(lowercase)
const icons = Object.keys(icon).map(lowercase)

it('Should render the kirk library', () => {
  expect(components.length).toBeGreaterThan(0)
})

it('Should export every component folder', () => {
  expect(components).toEqual(expect.arrayContaining([...getComponentDirectories('src'), ...icons]))
})

it('Should export the branding object', () => {
  expect(components).toContain('branding')
})
