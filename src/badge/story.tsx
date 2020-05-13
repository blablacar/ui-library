import React from 'react'
import { text, withKnobs } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'

import Section from '../layout/section/baseSection'

import Badge from './index'

const stories = storiesOf('Widgets|Badge', module)
stories.addDecorator(withKnobs)

stories.add('Basic', () => (
  <Section>
    <Badge ariaLabel={text('ariaLabel', 'Unread messages')}>{text('children', '456')}</Badge>
  </Section>
))
