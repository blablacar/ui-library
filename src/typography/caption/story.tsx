import React from 'react'
import { boolean, text } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'

import { color } from '../../_utils/branding'
import { BaseSection as Section } from '../../layout/section/baseSection'
import { TextCaption } from './index'

const stories = storiesOf('Brand|typography', module)

stories.add('TextCaption', () => (
  <Section>
    <h1>
      <TextCaption isInverted={boolean('isInverted', false)}>
        {text('Text1', 'The quick\n brown fox jumps\n over the lazy\n dog')}
      </TextCaption>
    </h1>
    <h1 style={{ backgroundColor: color.blue }}>
      <TextCaption isInverted>
        {text('Text2', 'The quick brown fox jumps over the lazy dog')}
      </TextCaption>
    </h1>
  </Section>
))
