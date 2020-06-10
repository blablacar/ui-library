import React from 'react'
import { storiesOf } from '@storybook/react'

import { Divider } from '../divider'
import { BaseSection as Section } from '../layout/section/baseSection'
import spec from './specifications/divider.md'

const stories = storiesOf('Widgets|Divider', module)

stories.add('Specifications', () => <Divider />, { readme: spec })

stories.add('default', () => (
  <Section>
    Some content to divide...
    <Divider />
    ...Rest of the divided content.
  </Section>
))
