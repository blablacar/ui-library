import { addDecorator, addParameters } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'

// import { withA11y } from '@storybook/addon-a11y'
// import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
// import { addReadme } from 'storybook-readme'

// addDecorator(addReadme)
addDecorator(withKnobs)
// addDecorator(withA11y)

addParameters({
  options: {
    name: 'PIXAR - BlaBlaCar UI',
    options: {
      storySort: (a, b) =>
        a[1].kind === b[1].kind ? 0 : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
    },
  },
})
