import React from 'react'

import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withKnobs, text } from '@storybook/addon-knobs'

import Caption from 'caption'

const stories = storiesOf('Caption', module)
stories.addDecorator(withKnobs)

stories.add(
  'A basic caption',
  withInfo('')(() => (
    <Caption isoDate="2017-08-07T14:10:40.526Z">
      {text('date', '05 jul - 17:39')}
    </Caption>
  )),
)

stories.add(
  'A caption with additional text',
  withInfo('')(() => (
    <Caption isoDate="2017-08-07T14:10:40.526Z" secondaryText={text('secondary text', 'Delivered')}>
      {text('date', '05 jul - 17:39')}
    </Caption>
  )),
)

stories.add(
  'A caption with a link',
  withInfo('')(() => (
    <Caption
      href="https://m.blablacar.fr"
      secondaryText={text('secondary text', 'Report')}
      isoDate="2017-08-07T14:10:40.526Z"
    >
      {text('date', '05 jul - 17:39')}
    </Caption>
  )),
)
