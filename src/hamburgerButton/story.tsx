import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withKnobs, boolean } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

import HamburgerButton from 'hamburgerButton'

const stories = storiesOf('HamburgerButton', module)
stories.addDecorator(withKnobs)

stories.add(
  'default',
  withInfo('')(() => (
    <HamburgerButton
      onClick={action('onClick')}
      open={boolean('open', false)}
    />
  )),
)
