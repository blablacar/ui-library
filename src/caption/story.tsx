import React from 'react'

import { storiesOf } from '@storybook/react'
import { withKnobs, text } from '@storybook/addon-knobs'

import Caption from 'caption'
import Section from 'layout/section/baseSection'

const stories = storiesOf('Widgets|Caption', module)
stories.addDecorator(withKnobs)

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
