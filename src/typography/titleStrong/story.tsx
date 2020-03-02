import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, boolean, withKnobs } from '@storybook/addon-knobs'

import { color } from '_utils/branding'

import Section from 'layout/section/baseSection'
import TextTitleStrong from './index'

const stories = storiesOf('Brand|typography', module)
stories.addDecorator(withKnobs)

stories.add('TextTitleStrong', () => (
  <Section>
    <h1>
      <TextTitleStrong isInverted={boolean('isInverted', false)}>
        {text('Text1', 'The quick\n brown fox jumps\n over the lazy\n dog')}
      </TextTitleStrong>
    </h1>
    <h1 style={{ backgroundColor: color.primary }}>
      <TextTitleStrong isInverted>
        {text('Text2', 'The quick brown fox jumps over the lazy dog')}
      </TextTitleStrong>
    </h1>
  </Section>
))
