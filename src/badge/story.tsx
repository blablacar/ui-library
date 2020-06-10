import React from 'react'
import { text } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'

import { BaseSection as Section } from '../layout/section/baseSection'
import { Badge } from './index'

const stories = storiesOf('Widgets|Badge', module)

stories.add('Basic', () => (
  <Section>
    <Badge ariaLabel={text('ariaLabel', 'Unread messages')}>{text('children', '456')}</Badge>
  </Section>
))
