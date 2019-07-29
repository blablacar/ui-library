import React from 'react'

import { storiesOf } from '@storybook/react'
import { withKnobs, text, select } from '@storybook/addon-knobs'

import Proximity, { Distances } from './index'

const stories = storiesOf('Proximity', module)
stories.addDecorator(withKnobs)

stories.add('default', () => (
  <Proximity
    value={select('Value', Distances, Distances.FAR)}
    title={text('Icon title', 'Distance to your position')}
  />
))
