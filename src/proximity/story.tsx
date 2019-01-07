import React from 'react'

import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withKnobs, text, selectV2 } from '@storybook/addon-knobs'

import Proximity, { Distances } from 'proximity'

const stories = storiesOf('Proximity', module)
stories.addDecorator(withKnobs)

stories.add(
  'default',
  withInfo('')(() => (
    <Proximity
      value={selectV2('Value', Distances, Distances.FAR)}
      title={text('Icon title', 'Distance to your position')}
    />
  )),
)
