import React from 'react'
import { boolean, text } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'

import { color } from '../_utils/branding'
import { BaseSection as Section } from '../layout/section/baseSection'
import { TheVoice } from './index'

const stories = storiesOf('Text|TheVoice', module)

stories.add('Default', () => (
  <Section>
    <TheVoice id={text('id', 'MyId')} className={text('className', 'other-classes')}>
      {text(
        'TheVoice Content',
        'One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible ver',
      )}
    </TheVoice>
  </Section>
))
stories.add('isInverted', () => (
  <Section>
    <div style={{ backgroundColor: color.green }}>
      <TheVoice isInverted={boolean('isInverted', true)}>This is inverted The Voice !</TheVoice>
    </div>
  </Section>
))
