import React from 'react'

import { storiesOf } from '@storybook/react'
import { withKnobs, boolean, number } from '@storybook/addon-knobs'

import Loader from './index'

const stories = storiesOf('Loader', module)
stories.addDecorator(withKnobs)

stories.add('default', () => (
  <Loader
    inline={boolean('inline', true)}
    size={number('size', 48)}
    done={boolean('done', false)}
  />
))
