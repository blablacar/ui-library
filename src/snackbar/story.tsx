import React, { Component, Fragment } from 'react'
import { text } from '@storybook/addon-knobs'

import { Snackbar } from '../snackbar'

export default {
  title: 'Widgets|Snackbar',
  component: Snackbar,
}

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
      <Fragment>
        <button onClick={this.toggleErrorDisplay}>Don't click on this button</button>
        <Snackbar isOpen={this.state.isErrorOpen} close={this.toggleErrorDisplay}>
          {text('Text', 'I told you not to click on this button!')}
        </Snackbar>
      </Fragment>
    )
  }
}

export const ErrorMessage = () => <ErrorOpener />
