import React from 'react'
import { boolean, text } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'

import { BaseSection as Section } from '../layout/section/baseSection'
import { Paragraph } from './index'

const stories = storiesOf('Text|Paragraph', module)

const shortText = 'Short text (below max char)'
const longText = 'Long text (above max char) '.repeat(20)
const longTextWithoutSpaces = `http://${'long_url_without_spaces'.repeat(20)}.com`

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

stories.add('Long unbreakable text', () => (
  <Section>
    <Paragraph>{longTextWithoutSpaces}</Paragraph>
  </Section>
))
