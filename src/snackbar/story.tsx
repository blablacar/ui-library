import React, { Component } from 'react'

import { storiesOf } from '@storybook/react'
import { withKnobs, text } from '@storybook/addon-knobs'
import Section from 'layout/section/baseSection'
import Snackbar from 'snackbar'

const stories = storiesOf('Widgets|Snackbar', module)
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
      <Section>
        <button onClick={this.toggleErrorDisplay}>Don't click on this button</button>
        <Snackbar isOpen={this.state.isErrorOpen} close={this.toggleErrorDisplay}>
          {text('Text', 'I told you not to click on this button!')}
        </Snackbar>
      </Section>
    )
  }
}

stories.add('Error message', () => <ErrorOpener />)
