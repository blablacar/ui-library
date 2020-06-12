import React from 'react'
import { select, text } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'

import { color, font } from '../_utils/branding'
import { BaseSection as Section } from '../layout/section/baseSection'
import { RideAxis } from './index'
import readme from './specifications/index.md'

const stories = storiesOf('Widgets|RideAxis', module)
stories.addParameters({
  readme,
})

stories.add('FromTo', () => (
  <Section>
    <div
      style={{
        padding: '16px',
        margin: 'auto',
        fontSize: text('fontSize', font.s.size),
        color: select('color', color, color.midnightGreen),
      }}
    >
      <RideAxis from={text('from', 'Paris')} to={text('to', 'Lille')} />
    </div>
    <div
      style={{
        padding: '16px',
        fontSize: font.m.size,
        color: color.lightMidnightGreen,
      }}
    >
      <RideAxis from={text('from', 'Paris')} to={text('to', 'Lille')} />
    </div>
    <div
      style={{
        padding: '16px',
        fontSize: font.l.size,
        color: color.midnightGreen,
      }}
    >
      <RideAxis from={text('from', 'Paris')} to={text('to', 'Lille')} />
    </div>
  </Section>
))
