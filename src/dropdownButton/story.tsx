import React from 'react'

import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withKnobs, boolean } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

import DropdownButton from 'dropdownButton'
import Avatar from 'avatar'

const stories = storiesOf('DropdownButton', module)
stories.addDecorator(withKnobs)

stories.add(
  'default',
  withInfo('')(() => (
    <DropdownButton
      onClick={action('onClick')}
      open={boolean('open', false)}
    >
      <Avatar />
    </DropdownButton>
  )),
)
