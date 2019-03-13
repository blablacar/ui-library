import { configure, addDecorator, addParameters } from '@storybook/react'

import { withInfo } from '@storybook/addon-info'
import { withA11y } from '@storybook/addon-a11y'
import { withKnobs } from '@storybook/addon-knobs'

addDecorator(
  withInfo({
    header: true,
    inline: true,
    maxPropsIntoLine: 1,
    maxPropObjectKeys: 10,
    maxPropArrayLength: 10,
    maxPropStringLength: 100,
    propTables: null, // no use for this since we don't use proptypes
  }),
)
addDecorator(withA11y)
addDecorator(withKnobs)

addParameters({
  knobs: {
    escapeHTML: false, // Escapes strings to be safe for inserting as innerHTML. This option is true by default. It's safe to set it to `false` with frameworks like React which do escaping on their side.
    // You can still set it to false, but it's strongly unrecommendend in cases when you host your storybook on some route of your main site or web app.
  },
})

const req = require.context('../stories', true)

function loadStories() {
  req.keys().forEach(req)
}

configure(loadStories, module)
