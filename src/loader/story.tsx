import React from 'react'

import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withKnobs, boolean, number } from '@storybook/addon-knobs'

import Loader from 'loader'

const stories = storiesOf('Loader', module)
stories.addDecorator(withKnobs)

stories.add(
  'default',
  withInfo('')(() => (
    <Loader
      inline={boolean('inline', true)}
      size={number('size', 48)}
    />
  )),
)
