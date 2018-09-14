import React from 'react'

import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withKnobs, text } from '@storybook/addon-knobs'

import Badge from 'badge'

const stories = storiesOf('Badge', module)
stories.addDecorator(withKnobs)

stories.add(
  'Basic',
  withInfo('')(() => (
    <Badge ariaLabel={text('ariaLabel', 'Unread messages')}>{text('children', '456')}</Badge>
  )),
)
