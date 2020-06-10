import React from 'react'
import { select, text } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'

import { BaseSection as Section } from '../layout/section/baseSection'
import { BulletTypes } from './Bullet'
import { Bullet } from './index'

const stories = storiesOf('Widgets|Bullet', module)

stories.add('Basic', () => (
  <Section>
    <Bullet
      className={text('className', 'custom-class')}
      type={select('type', BulletTypes, BulletTypes.DEFAULT)}
    />
  </Section>
))
