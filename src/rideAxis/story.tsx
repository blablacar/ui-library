import React from 'react'
import { text } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'

import { RideAxis } from './index'
import readme from './specifications/index.md'

const stories = storiesOf('Widgets|RideAxis', module)
stories.addParameters({
  readme: readme,
})

stories.add('From', () => <RideAxis from={text('from', 'Paris')} />)
stories.add('FromTo', () => <RideAxis from={text('from', 'Paris')} to={text('to', 'Lille')} />)
