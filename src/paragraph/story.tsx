import React from 'react'

import { storiesOf } from '@storybook/react'
import { withKnobs, text, boolean } from '@storybook/addon-knobs'
import Section from 'layout/section/baseSection'
import Paragraph from './index'

const stories = storiesOf('Widgets|Paragraph', module)
stories.addDecorator(withKnobs)

const shortText = 'Short text (below max char)'
const longText =
  'Long text (above max char) - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'

stories.add('Long text', () => (
  <Section>
    <Paragraph
      isExpandable={boolean('isExpandable', true)}
      expandLabel={text('expandLabel', 'Expand')}
    >
      {longText}
    </Paragraph>
  </Section>
))

stories.add('Short text', () => (
  <Section>
    <Paragraph>{shortText}</Paragraph>
  </Section>
))
