import React from 'react'

import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withKnobs, text, boolean } from '@storybook/addon-knobs'

import Message from 'message'

const stories = storiesOf('Message', module)
stories.addDecorator(withKnobs)

stories.add('Basic message', () => (
  <Message author={text('author', 'author')} active={boolean('Current user', false)}>
    {text('text', 'A simple message')}
  </Message>
))

stories.add("Current user's message", () => (
  <Message active={boolean('Current user', true)} author={text('author', 'author')}>
    {text('text', 'A simple message')}
  </Message>
))

stories.add('Message with date', () => (
  <Message
    author={text('author', 'author')}
    isoDate="2017-08-07T14:10:40.526Z"
    date={text('date', '05 jul - 17:39')}
    secondaryText={text('secondary text', 'Report')}
    secondaryLink="/message"
  >
    {text('text', 'A simple message')}
  </Message>
))
