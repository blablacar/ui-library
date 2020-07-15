import React from 'react'
import { action } from '@storybook/addon-actions'
import { withKnobs } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'

import { ItemRadio } from '../itemRadio'
import { ItemRadioGroup } from '../itemRadioGroup'
import { TheVoice } from '../theVoice'
import { Grip } from './index'
import readme from './specifications/grip.md'

const stories = storiesOf('Widgets|Grip', module).addDecorator(withKnobs)

stories.add(
  'default',
  () => (
    <Grip onSlideUp={action('Slide Up')} onSlideDown={action('Slide Down')}>
      <TheVoice>What is your route?</TheVoice>
      <ItemRadioGroup>
        <ItemRadio labelTitle="Via A10" label="Tolls" name="foo" value="1" />
        <ItemRadio labelTitle="Via N200" label="No tolls" name="foo" value="2" />
      </ItemRadioGroup>
    </Grip>
  ),
  {
    readme: { content: readme },
  },
)
