import React from 'react'
import { withKnobs } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'

import ItemEditableInfo from '../itemEditableInfo'
import Section from '../layout/section/baseSection'
import readme from './specifications/specs.md'

const stories = storiesOf('Widgets|ItemEditableInfo', module)
stories.addDecorator(withKnobs)

stories.add(
  'Default',
  () => (
    <Section>
      <ItemEditableInfo href="http://google.fr`" label="First name" value="John" />
      <ItemEditableInfo
        href="http://google.fr`"
        label="Last name"
        value="Doe"
        ariaLabel="Edit last name: Doe"
      />
      <ItemEditableInfo label="Gender (readonly)" value="Female" readonly />
      <ItemEditableInfo
        href="http://google.fr`"
        label="Bio"
        value={'A very long bio '.repeat(20)}
      />
      <ItemEditableInfo
        label="Item with onClick callback"
        value="Some value"
        onClick={() => {
          window.alert('Clicked')
        }}
      />
    </Section>
  ),
  {
    readme: { content: readme },
  },
)
