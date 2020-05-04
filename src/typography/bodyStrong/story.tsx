import React from 'react'
import { boolean, text, withKnobs } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'

import { color } from '_utils/branding'
import Section from 'layout/section/baseSection'

import TextBodyStrong from './index'

const stories = storiesOf('Brand|typography', module)
stories.addDecorator(withKnobs)

stories.add('TextBodyStrong', () => (
  <Section>
    <h1>
      <TextBodyStrong isInverted={boolean('isInverted', false)}>
        {text('Text1', 'The quick\n brown fox jumps\n over the lazy\n dog')}
      </TextBodyStrong>
    </h1>
    <h1 style={{ backgroundColor: color.blue }}>
      <TextBodyStrong isInverted>
        {text('Text2', 'The quick brown fox jumps over the lazy dog')}
      </TextBodyStrong>
    </h1>
  </Section>
))
