import React, { Fragment } from 'react'

import { storiesOf } from '@storybook/react'
import { withKnobs, text, boolean } from '@storybook/addon-knobs'
import Section from 'layout/section/baseSection'
import Message from 'message'

const stories = storiesOf('Widgets|Message', module)
stories.addDecorator(withKnobs)

const wrapInContainer = (content: React.ReactNode) => <Section>{content}</Section>

const veryLongMessage = 'long message '.repeat(10)
const veryLongMessageWithoutBreaks = 'longmessage_'.repeat(10)
stories.add('Conversation', () =>
  wrapInContainer(
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
    </Fragment>,
  ),
)

stories.add('Basic message', () =>
  wrapInContainer(
    <Message active={boolean('Current user', false)}>{text('text', 'A simple message')}</Message>,
  ),
)

stories.add("Current user's message", () =>
  wrapInContainer(
    <Message active={boolean('Current user', true)}>{text('text', 'A simple message')}</Message>,
  ),
)

stories.add('Message from author with message annotation', () =>
  wrapInContainer(
    <Message active messageAnnotation="Sent - 15:00">
      {text('text', 'A simple message')}
    </Message>,
  ),
)

stories.add('Message to author with message annotation', () =>
  wrapInContainer(
    <Message active={false} messageAnnotation="Delivered - 15:00">
      {text('text', 'A simple message')}
    </Message>,
  ),
)
