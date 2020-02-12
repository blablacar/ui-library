import React from 'react'

import { storiesOf } from '@storybook/react'
import { text, select, withKnobs } from '@storybook/addon-knobs'
import Section from 'layout/section/baseSection'
import Bullet from './index'
import { BulletTypes } from './Bullet'

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
