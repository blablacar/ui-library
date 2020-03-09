import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, boolean, withKnobs } from '@storybook/addon-knobs'

import { color } from '_utils/branding'

import Section from 'layout/section/baseSection'
import TextDisplay2 from './index'

const stories = storiesOf('Brand|typography', module)
stories.addDecorator(withKnobs)

stories.add('TextDisplay2', () => (
  <Section>
    <h1>
      <TextDisplay2 isInverted={boolean('isInverted', false)}>
        {text('Text1', 'The quick\n brown fox jumps\n over the lazy\n dog')}
      </TextDisplay2>
    </h1>
    <h1 style={{ backgroundColor: color.primary }}>
      <TextDisplay2 isInverted>
        {text('Text2', 'The quick brown fox jumps over the lazy dog')}
      </TextDisplay2>
    </h1>
  </Section>
))
