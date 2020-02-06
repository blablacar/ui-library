import React from 'react'

import { storiesOf } from '@storybook/react'
import { withKnobs, text, select } from '@storybook/addon-knobs'
import Section from 'layout/section/baseSection'
import Title from 'title'

const stories = storiesOf('Widgets|Title', module)
const optionHeading = {
  1: '1',
  2: '2',
  3: '3',
  4: '4',
  5: '5',
  6: '6',
}

stories.addDecorator(withKnobs)

stories.add('basic', () => (
  <Section>
    <Title headingLevel={select('Heading', optionHeading, '1')}>
      {text('Title', 'Voice title')}
    </Title>
  </Section>
))
