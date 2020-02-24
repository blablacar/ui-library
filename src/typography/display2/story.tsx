import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, withKnobs } from '@storybook/addon-knobs'

import Section from '../../layout/section/baseSection'

import TextDisplay2 from './index'

const stories = storiesOf('Brand|typography', module)
stories.addDecorator(withKnobs)

stories.add('Display2', () => (
  <Section>
    <TextDisplay2>{text('Text', 'The quick brown fox jumps over the lazy dog')}</TextDisplay2>
  </Section>
))
