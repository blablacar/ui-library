import React from 'react'
import { boolean, text } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'

import { color } from '../../_utils/branding'
import { BaseSection as Section } from '../../layout/section/baseSection'
import { TextBody } from './index'

const stories = storiesOf('Design Tokens|Typography/', module)

stories.add('TextBody', () => (
  <Section>
    <h1>
      <TextBody isInverted={boolean('isInverted', false)}>
        {text('Text1', 'The quick\n brown fox jumps\n over the lazy\n dog')}
      </TextBody>
    </h1>
    <h1 style={{ backgroundColor: color.blue }}>
      <TextBody isInverted>{text('Text2', 'The quick brown fox jumps over the lazy dog')}</TextBody>
    </h1>
  </Section>
))
