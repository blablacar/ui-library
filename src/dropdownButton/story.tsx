import React from 'react'
import { action } from '@storybook/addon-actions'
import { boolean } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'

import { Avatar } from '../avatar'
import { DropdownButton } from '../dropdownButton'
import { BaseSection as Section } from '../layout/section/baseSection'

const stories = storiesOf('Widgets|DropdownButton', module)

stories.add('default', () => (
  <Section>
    <DropdownButton onClick={action('onClick')} open={boolean('open', false)}>
      <Avatar />
    </DropdownButton>
  </Section>
))
