import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { action } from '@storybook/addon-actions'
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs'
import Checkbox, { labelDisplays } from 'checkbox'

const stories = storiesOf('Checkbox', module)
stories.addDecorator(withKnobs)

stories.add('default', () => (
  <Checkbox
    name="checkbox1"
    value="value"
    onChange={action('Checkbox changed')}
    checked={boolean('Checked', false)}
    labelDisplay={select('Label display', labelDisplays, labelDisplays.RIGHT)}
    subLabel={text('Sub label', 'Sublabel checkbox')}
    status={select('status', Checkbox.STATUS, Checkbox.STATUS.DEFAULT)}
  >
    {text('Label', 'Label checkbox')}
  </Checkbox>
))
