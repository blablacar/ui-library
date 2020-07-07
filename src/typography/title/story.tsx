import React from 'react'
import { boolean, text, withKnobs } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'

import { color } from '../../_utils/branding'
import { BaseSection as Section } from '../../layout/section/baseSection'
import { TextTitle } from './index'

const stories = storiesOf('Design Tokens|Typography/', module)
stories.addDecorator(withKnobs)

stories.add('TextTitle', () => (
  <Section>
    <h1>
      <TextTitle isInverted={boolean('isInverted', false)}>
        {text('Text1', 'The quick\n brown fox jumps\n over the lazy\n dog')}
      </TextTitle>
    </h1>
    <h1 style={{ backgroundColor: color.blue }}>
      <TextTitle isInverted>
        {text('Text2', 'The quick brown fox jumps over the lazy dog')}
      </TextTitle>
    </h1>
  </Section>
))
