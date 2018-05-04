import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { action } from '@storybook/addon-actions'
import { withKnobs, text, boolean, number, select } from '@storybook/addon-knobs'
import Checkbox from 'checkbox'

const stories = storiesOf('Checkbox', module)
stories.addDecorator(withKnobs)

stories.add(
  'Simple checkbox',
  withInfo('')(() => (
    <Checkbox name="checkbox1" value="value" onChange={action('Checkbox changed')}>
      {text('Label', 'Label checkbox')}
    </Checkbox>
  )),
)

stories.add(
  'Checked checkbox',
  withInfo('')(() => (
    <Checkbox name="checkbox1" value="value" checked onChange={action('Checkbox changed')}>
      {text('Label', 'Label checkbox')}
    </Checkbox>
  )),
)

stories.add(
  'Checkbox with sublabel',
  withInfo('')(() => (
    <Checkbox
      name="checkbox1"
      value="value"
      checked
      onChange={action('Checkbox changed')}
      subLabel={text('Sub label', 'Sublabel checkbox')}
    >
      {text('Label', 'Label checkbox')}
    </Checkbox>
  )),
)
