import React from 'react'

import { storiesOf } from '@storybook/react'
import { withKnobs, text } from '@storybook/addon-knobs'
import Badge from './index'

const stories = storiesOf('Badge', module)
stories.addDecorator(withKnobs)

stories.add('Basic', () => (
  <Badge ariaLabel={text('ariaLabel', 'Unread messages')}>{text('children', '456')}</Badge>
))
