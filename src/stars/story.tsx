import React from 'react'

import { storiesOf } from '@storybook/react'
import { withKnobs, number } from '@storybook/addon-knobs'

import Stars from 'stars'

const stories = storiesOf('Stars', module)
stories.addDecorator(withKnobs)

stories.add('Stars', () => <Stars stars={number('amount of stars', 0)} />)
