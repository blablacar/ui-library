import React from 'react'
import { text } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'

import { Caption } from '../caption'
import { BaseSection as Section } from '../layout/section/baseSection'

const stories = storiesOf('Design Tokens|Text (legacy)/Caption', module)

stories.add('A basic caption', () => (
  <Section>
    <Caption isoDate="2017-08-07T14:10:40.526Z">{text('date', '05 jul - 17:39')}</Caption>
  </Section>
))

stories.add('A caption with additional text', () => (
  <Section>
    <Caption isoDate="2017-08-07T14:10:40.526Z" secondaryText={text('secondary text', 'Delivered')}>
      {text('date', '05 jul - 17:39')}
    </Caption>
  </Section>
))

stories.add('A caption with a link', () => (
  <Section>
    <Caption
      href="https://m.blablacar.fr"
      secondaryText={text('secondary text', 'Report')}
      isoDate="2017-08-07T14:10:40.526Z"
    >
      {text('date', '05 jul - 17:39')}
    </Caption>
  </Section>
))
