import React from 'react'

import { storiesOf } from '@storybook/react'
import { withKnobs, boolean, select } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import Section from 'layout/section/baseSection'
import TimePicker from '.'

const stories = storiesOf('Widgets|TimePicker', module)
stories.addDecorator(withKnobs)

stories.add('default', () => (
  <Section>
    <TimePicker
      name="departure-time"
      minuteStep={30}
      onChange={action('onChange')}
      disabled={boolean('disabled', false)}
      timeStart={select('timeStart', ['00:00', '08:00', '12:00', '21:00'], '00:00')}
      focus
      small={boolean('small', false)}
    />
  </Section>
))
