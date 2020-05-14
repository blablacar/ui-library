import React from 'react'
import { action } from '@storybook/addon-actions'
import { boolean, select, text, withKnobs } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'

import Section from '../layout/section/baseSection'
import ToggleButton, { ToggleButtonStatus } from './index'

const stories = storiesOf('Widgets|ToggleButton', module)
stories.addDecorator(withKnobs)

stories.add('ToggleButton', () => (
  <Section>
    <ToggleButton
      name="toggle"
      onChange={action('ToggleButton changed')}
      checked={boolean('Checked', false)}
      disabled={boolean('Disabled', false)}
      label={text('Label', 'Label')}
      sublabel={text('Sub label', 'Sublabel')}
      status={select('status', ToggleButtonStatus, ToggleButtonStatus.DEFAULT)}
    />
  </Section>
))
