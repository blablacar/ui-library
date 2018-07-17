import React, { Component } from 'react'

import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withKnobs, text } from '@storybook/addon-knobs'

import Notification from 'notification'

const stories = storiesOf('Notification', module)
stories.addDecorator(withKnobs)

interface ErrorOpenerState {
  readonly isErrorOpen?: boolean
}

class ErrorOpener extends Component {
  state: ErrorOpenerState = {
    isErrorOpen: false,
  }

  toggleErrorDisplay = () => {
    this.setState(({ isErrorOpen }: ErrorOpenerState) => ({
      isErrorOpen: !isErrorOpen,
    }))
  }

  render() {
    return (
      <div>
        <button onClick={this.toggleErrorDisplay}>Don't click on this button</button>
        <Notification isOpen={this.state.isErrorOpen} close={this.toggleErrorDisplay}>
          {text('Text', 'I told you not to click on this button !')}
        </Notification>
      </div>
    )
  }
}

stories.add(
  'Error message',
  withInfo('Global error message with a long message')(() => <ErrorOpener />),
)
