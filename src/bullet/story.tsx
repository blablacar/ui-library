import React from 'react'
import { select, text, withKnobs } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'

import Section from '../layout/section/baseSection'
import { BulletTypes } from './Bullet'
import Bullet from './index'

const stories = storiesOf('Widgets|Bullet', module)
stories.addDecorator(withKnobs)

stories.add('Basic', () => (
  <Section>
    <Bullet
      className={text('className', 'custom-class')}
      type={select('type', BulletTypes, BulletTypes.DEFAULT)}
    />
  </Section>
))
