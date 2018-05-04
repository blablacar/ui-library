import React from 'react'

import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withKnobs, boolean, number, select } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

import TimePicker from 'timePicker'

const stories = storiesOf('TimePicker', module)
stories.addDecorator(withKnobs)

stories.add(
  'default',
  withInfo('TimePicker with all it’s default props')(() => (
    <TimePicker
      name="departure-time"
      minuteStep={number('minuteStep', 30)}
      onChange={action('onChange')}
      disabled={boolean('disabled', false)}
      locale={select('locale', ['fr-FR', 'en-US', 'ru-RU'], 'fr-FR')}
    />
  )),
)
