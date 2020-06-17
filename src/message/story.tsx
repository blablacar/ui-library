import React, { Fragment } from 'react'
import { boolean, text } from '@storybook/addon-knobs'

import { Message } from '../message'

export default {
  title: 'Widgets|Message',
  component: Message,
}

const veryLongMessage = 'long message '.repeat(10)
const veryLongMessageWithoutBreaks = 'longmessage_'.repeat(10)

export const Conversation = () => (
  <Fragment>
    <Message messageAnnotation="Delivered - 15:29" active={false}>
      Msg
    </Message>
    <Message messageAnnotation="Delivered - 15:29" active={false}>
      {veryLongMessage}
    </Message>
    <Message messageAnnotation="Delivered - 15:30" active={false}>
      {veryLongMessageWithoutBreaks}
    </Message>
    <Message messageAnnotation="Delivered - 15:32" active={false}>
      Msg
    </Message>
    <Message messageAnnotation="Delivered - 15:35" active>
      {veryLongMessageWithoutBreaks}
    </Message>
    <Message active>Msg</Message>
    <Message active>{veryLongMessage}</Message>
    <Message messageAnnotation="Sent - 15:40" active>
      Msg 2
    </Message>
    <Message messageAnnotation="Delivered - 15:45" active>
      Msg 1
    </Message>
  </Fragment>
)

export const BasicMessage = () => (
  <Message active={boolean('Current user', false)}>{text('text', 'A simple message')}</Message>
)

export const CurrentUserMessage = () => (
  <Message active={boolean('Current user', true)}>{text('text', 'A simple message')}</Message>
)

export const CurrentUserWithMessageNotation = () => (
  <Message active messageAnnotation="Sent - 15:00">
    {text('text', 'A simple message')}
  </Message>
)

export const WithMessageAnnotation = () => (
  <Message active={false} messageAnnotation="Delivered - 15:00">
    {text('text', 'A simple message')}
  </Message>
)
