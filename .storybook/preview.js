import { withSmartKnobs } from 'storybook-addon-smart-knobs'
import { withA11y } from '@storybook/addon-a11y'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'

import '../stories/stories.css'

export const parameters = {
  options: {
    showPanel: true,
    isToolshown: true,
    storySort: (a, b) =>
      a[1].kind === b[1].kind ? 0 : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
  },
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
  a11y: {
    element: '#root',
    config: {},
    options: {},
  },
}

// Ignore leftAddon as it breaks previews.
// https://blablacar.atlassian.net/browse/BBC-9382
export const decorators = [withSmartKnobs({ ignoreProps: ['leftAddon', 'icon'] })]
