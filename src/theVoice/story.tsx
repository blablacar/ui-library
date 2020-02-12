import React from 'react'

import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'
import Section from 'layout/section/baseSection'
import TheVoice from '.'
import readme from 'theVoice/specifications/theVoice.md'

const stories = storiesOf('Widgets|TheVoice', module)
stories.addDecorator(withKnobs)

stories.add('Specifications', () => null, {
  readme: { content: readme },
})

stories.add('Default (responsive based on width)', () => (
  <Section>
    <TheVoice>This is the Voice !</TheVoice>
  </Section>
))
