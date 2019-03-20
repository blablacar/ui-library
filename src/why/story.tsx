import React from 'react'

import { storiesOf } from '@storybook/react'
import { withKnobs, text } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

import Why from 'why'

const stories = storiesOf('Why', module)
stories.addDecorator(withKnobs)

stories.add('default', () => (
  <Why
    onClick={action('clicked')}
    title={text('Title', 'Why this is a text that is so long ? (new window)')}
  >
    {text('Text', 'Why this is a text that is so long ?')}
  </Why>
))
