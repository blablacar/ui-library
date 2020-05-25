import React from 'react'
import { text, withKnobs } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'

import { BaseSection as Section } from '../layout/section/baseSection'
import { Badge } from './index'

const stories = storiesOf('Widgets|Badge', module)
stories.addDecorator(withKnobs)

stories.add('Basic', () => (
  <Section>
    <Badge aria-label={text('aria-label', 'Unread messages')}>{text('children', '456')}</Badge>
  </Section>
))
