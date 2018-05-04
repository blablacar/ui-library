import * as kirk from './index'
import * as icon from './icon/index'
import { lowercase, getComponentDirectories } from '../bin/utils'

const components = Object.keys(kirk).map(lowercase)
const icons = Object.keys(icon).map(lowercase)

it('Should render the kirk library', () => {
  expect(components.length).toBeGreaterThan(0)
})

it('Should import every component folder', () => {
  // Add the branding import manually
  expect(components).toEqual([
    ...getComponentDirectories('src'),
    ...icons,
    'branding',
    'flush',
    'flushToHTML',
  ])
})
