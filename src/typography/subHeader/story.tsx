import React from 'react'
import { boolean, text } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'

import { color } from '../../_utils/branding'
import { BaseSection as Section } from '../../layout/section/baseSection'
import { TextSubHeader } from './index'

const stories = storiesOf('Design Tokens|Typography/', module)

stories.add('TextSubHeader', () => (
  <Section>
    <h1>
      <TextSubHeader isInverted={boolean('isInverted', false)}>
        {text('Text1', 'The quick\n brown fox jumps\n over the lazy\n dog')}
      </TextSubHeader>
    </h1>
    <h1 style={{ backgroundColor: color.blue }}>
      <TextSubHeader isInverted>
        {text('Text2', 'The quick brown fox jumps over the lazy dog')}
      </TextSubHeader>
    </h1>
  </Section>
))
