import React from 'react'
import { number, text } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'

import { BaseSection as Section } from '../layout/section/baseSection'
import { Rating } from '../rating'

const stories = storiesOf('Widgets|Rating', module)

stories.add('Rating', () => (
  <Section>
    <Rating ratings={number('ratings', 0)} score={number('score', 0)}>
      {text('ratings label', 'ratings')}
    </Rating>
  </Section>
))
