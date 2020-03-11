import React from 'react'

import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'

import ItemInfo from 'itemInfo'
import ItemsSection from './index'

const stories = storiesOf('Sections|ItemsSection', module)
stories.addDecorator(withKnobs)

stories.add('default', () => (
  <ItemsSection>
    <ItemInfo mainTitle="Bus number" mainInfo="1234" />
    <ItemInfo mainTitle="Gate number" mainInfo="12" />
  </ItemsSection>
))
