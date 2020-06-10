import React from 'react'
import { text } from '@storybook/addon-knobs'

import { Badge } from './index'

export default {
  title: 'Components|Badge',
  component: Badge,
}

export const Basic = () => (
  <Badge ariaLabel={text('ariaLabel', 'Unread messages')}>{text('children', '456')}</Badge>
)
