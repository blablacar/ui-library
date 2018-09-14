import React from 'react'

import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withKnobs, boolean, text, select } from '@storybook/addon-knobs'

import Avatar from 'avatar'

const sizes = {
  default: '',
  isMedium: 'medium',
  isLarge: 'large',
}

const stories = storiesOf('Avatar', module)
stories.addDecorator(withKnobs)

stories.add(
  'Basic',
  withInfo('')(() => {
    const modifiers = select('Size', sizes, 'default')
    const propsModifiers = { [modifiers]: !!modifiers }
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
  }),
)
