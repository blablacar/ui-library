import React from 'react'
import { action } from '@storybook/addon-actions'
import { boolean } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'

import { HamburgerButton } from '../hamburgerButton'
import { BaseSection as Section } from '../layout/section/baseSection'

const stories = storiesOf('Widgets|HamburgerButton', module)

stories.add('default', () => (
  <Section>
    <HamburgerButton onClick={action('onClick')} open={boolean('open', false)} />
  </Section>
))
