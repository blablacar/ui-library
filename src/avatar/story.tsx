import React from 'react'

import { storiesOf } from '@storybook/react'
import { withKnobs, boolean, text, select } from '@storybook/addon-knobs'

import Avatar from './index'

const sizes = {
  default: '',
  isMedium: 'isMedium',
  isLarge: 'isLarge',
}

const stories = storiesOf('Avatar', module)
stories.addDecorator(withKnobs)

stories.add('Basic', () => {
  const modifiers = select('Size', sizes, '')
  const propsModifiers = modifiers ? { [modifiers]: !!modifiers } : {}
  return (
    <Avatar
      image={text('url', '//placehold.it/80x80')}
      alt={text('alternative text', 'Avatar')}
      isIdChecked={boolean('isIdChecked', false)}
      unreadNotificationsCount={text('unreadNotificationsCount', '')}
      unreadNotificationsCountAriaLabel={text('unreadNotificationsCountAriaLabel', '')}
      {...propsModifiers}
    />
  )
})
