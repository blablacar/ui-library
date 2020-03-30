import { configure, addDecorator, addParameters } from '@storybook/react'
import { withA11y } from '@storybook/addon-a11y'
import { withKnobs } from '@storybook/addon-knobs'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
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
  viewport: {
    viewports: INITIAL_VIEWPORTS,
    defaultViewport: 'iPhone 6',
  },
  readme: {
    sidebar: props,
    codeTheme: 'xonokai',
  },
})

const req = require.context('../stories', true)

function loadStories() {
  req.keys().forEach(req)
}

configure(loadStories, module)
