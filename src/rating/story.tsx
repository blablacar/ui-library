import React from 'react'

import { storiesOf } from '@storybook/react'
import { withKnobs, text, number } from '@storybook/addon-knobs'
import Section from 'layout/section/baseSection'
import Rating from 'rating'

const stories = storiesOf('Widgets|Rating', module)
stories.addDecorator(withKnobs)

stories.add('Rating', () => (
  <Section>
    <Rating ratings={number('ratings', 0)} score={number('score', 0)}>
      {text('ratings label', 'ratings')}
    </Rating>
  </Section>
))
