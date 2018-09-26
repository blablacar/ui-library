import React, { Component } from 'react'

import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withKnobs, text } from '@storybook/addon-knobs'

import Snackbar from 'snackbar'

const stories = storiesOf('Snackbar', module)
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
        <Snackbar isOpen={this.state.isErrorOpen} close={this.toggleErrorDisplay}>
          {text('Text', 'I told you not to click on this button!')}
        </Snackbar>
      </div>
    )
  }
}

stories.add(
  'Error message',
  withInfo('Global error message with a long message')(() => <ErrorOpener />),
)
