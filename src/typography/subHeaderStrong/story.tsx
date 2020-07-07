import React from 'react'
import { boolean, text } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'

import { color } from '../../_utils/branding'
import { BaseSection as Section } from '../../layout/section/baseSection'
import { TextSubHeaderStrong } from './index'

const stories = storiesOf('Design Tokens|Typography/', module)

stories.add('TextSubHeaderStrong', () => (
  <Section>
    <h1>
      <TextSubHeaderStrong isInverted={boolean('isInverted', false)}>
        {text('Text1', 'The quick\n brown fox jumps\n over the lazy\n dog')}
      </TextSubHeaderStrong>
    </h1>
    <h1 style={{ backgroundColor: color.blue }}>
      <TextSubHeaderStrong isInverted>
        {text('Text2', 'The quick brown fox jumps over the lazy dog')}
      </TextSubHeaderStrong>
    </h1>
  </Section>
))
