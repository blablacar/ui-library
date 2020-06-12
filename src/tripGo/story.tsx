import React from 'react'
import { text } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'

import { TripGo } from './index'
import readme from './specifications/index.md'

const stories = storiesOf('Widgets|TripGo', module)
stories.addParameters({
  readme: readme,
})

stories.add('From', () => <TripGo from={text('from', 'Paris')} />)
stories.add('FromTo', () => <TripGo from={text('from', 'Paris')} to={text('to', 'Lille')} />)
