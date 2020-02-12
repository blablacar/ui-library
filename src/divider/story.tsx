import React from 'react'

import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'
import spec from 'divider/specifications/divider.md'
import Divider from 'divider'
import Section from 'layout/section/baseSection'

const stories = storiesOf('Widgets|Divider', module)
stories.addDecorator(withKnobs)
stories.add('Specifications', () => <Divider />, { readme: spec })

stories.add('default', () => (
  <Section>
    Some content to divide...
    <Divider />
    ...Rest of the divided content.
  </Section>
))
