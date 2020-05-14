import React from 'react'
import { action } from '@storybook/addon-actions'
import { boolean, withKnobs } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'

import HamburgerButton from '../hamburgerButton'
import Section from '../layout/section/baseSection'

const stories = storiesOf('Widgets|HamburgerButton', module)
stories.addDecorator(withKnobs)

stories.add('default', () => (
  <Section>
    <HamburgerButton onClick={action('onClick')} open={boolean('open', false)} />
  </Section>
))
