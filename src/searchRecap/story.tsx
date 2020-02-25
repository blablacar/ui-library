import React from 'react'

import { storiesOf } from '@storybook/react'
import { withKnobs, text } from '@storybook/addon-knobs'
import Section from 'layout/section/baseSection'
import SearchRecap from './index'

const stories = storiesOf('Widgets|SearchRecap', module)
stories.addDecorator(withKnobs)

stories.add('default', () => (
  <Section>
    <SearchRecap
      from={text('from', 'Middlesbrough')}
      to={text('to', 'Stoke-on-Trent, city center')}
      info={text('info', 'Today 2:30pm, 2 passengers')}
    />
  </Section>
))
