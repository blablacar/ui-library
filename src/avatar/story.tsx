import React from 'react'
import { boolean, select, text } from '@storybook/addon-knobs'

import { Avatar } from './index'

const sizes = {
  default: '',
  isMedium: 'isMedium',
  isLarge: 'isLarge',
}

export default {
  title: 'Components|Avatar',
  component: Avatar,
}

export const Basic = () => {
  const modifiers = select('Size', sizes, '')
  const propsModifiers = modifiers ? { [modifiers]: !!modifiers } : {}
  return (
    <Avatar
      image={text('url', '//placehold.it/48x48')}
      alt={text('alternative text', 'Avatar')}
      isIdChecked={boolean('isIdChecked', false)}
      unreadNotificationsCount={text('unreadNotificationsCount', '')}
      unreadNotificationsCountAriaLabel={text('unreadNotificationsCountAriaLabel', '')}
      {...propsModifiers}
    />
  )
}
