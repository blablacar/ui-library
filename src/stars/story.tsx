import React from 'react'
import { number } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'

import { BaseSection as Section } from '../layout/section/baseSection'
import { Stars } from '../stars'

const stories = storiesOf('Widgets|Stars', module)

stories.add('Stars', () => (
  <Section>
    <Stars stars={number('amount of stars', 0)} />
  </Section>
))
