import React from 'react'

import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs'

import Avatar from 'avatar'

const sizes = {
  default: '',
  medium: 'medium',
  large: 'large',
}

const stories = storiesOf('Avatar', module)
stories.addDecorator(withKnobs)

stories.add(
  'Overview',
  withInfo('')(() => {
    const modifiers = select('Size', sizes, 'default')
    const propsModifiers = { [modifiers]: !!modifiers }
    return (
      <Avatar
        alt={text('alternative text', 'Avatar')}
        checked={boolean('Id Check', false)}
        image={text('url', '//placehold.it/80x80')}
        title={text('title for icon', 'id check')}
        {...propsModifiers}
      />
    )
  }),
)
