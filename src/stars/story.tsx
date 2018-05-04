import React from 'react'

import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withKnobs, number } from '@storybook/addon-knobs'

import Stars from 'stars'


const stories = storiesOf('Stars', module)
stories.addDecorator(withKnobs)

stories.add(
  'Stars',
  withInfo('')(() => (
    <Stars stars={number('amount of stars', 0)} />
  )),
)
