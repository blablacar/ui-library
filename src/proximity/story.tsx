import React from 'react'

import { storiesOf } from '@storybook/react'
import { withKnobs, text, select } from '@storybook/addon-knobs'
import Section from 'layout/section/baseSection'
import Proximity, { Distances } from './index'

const stories = storiesOf('Widgets|Proximity', module)
stories.addDecorator(withKnobs)

stories.add('default', () => (
  <Section>
    <Proximity
      value={select('Value', Distances, Distances.FAR)}
      title={text('Icon title', 'Distance to your position')}
    />
  </Section>
))
