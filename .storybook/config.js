import { configure, addDecorator, addParameters } from '@storybook/react'

import { withA11y } from '@storybook/addon-a11y'
import { withKnobs } from '@storybook/addon-knobs'
import { addReadme } from 'storybook-readme'

import props from './props.md'

addDecorator(addReadme)
addDecorator(withA11y)
addDecorator(withKnobs)

addParameters({
  options: {
    name: 'BlaBlaCar UI',
  },
  knobs: {
    escapeHTML: false, // Escapes strings to be safe for inserting as innerHTML. This option is true by default. It's safe to set it to `false` with frameworks like React which do escaping on their side.
    // You can still set it to false, but it's strongly unrecommendend in cases when you host your storybook on some route of your main site or web app.
  },
  readme: {
    sidebar: props,
    codeTheme: 'xonokai',
  },
})

const req = require.context('../stories', true)

const loaderFn = () => {
  // manual loading
  require('../src/typography/display2/story.tsx')

  // dynamic loading
  const req = require.context('../stories', true)
  req.keys().forEach(fname => req(fname))
}

configure(loaderFn, module)
