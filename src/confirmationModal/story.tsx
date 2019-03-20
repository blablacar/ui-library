import React, { Component } from 'react'

import { storiesOf } from '@storybook/react'
import { withKnobs, boolean, text } from '@storybook/addon-knobs'

import ConfirmationModal, { ConfirmationModalProps } from 'confirmationModal'

const stories = storiesOf('ConfirmationModal', module)
stories.addDecorator(withKnobs)

class ConfirmationModalOpener extends Component<ConfirmationModalProps> {
  state = {
    confirmationModalOpen: false,
  }

  openConfirmationModal = () => {
    this.setState({ confirmationModalOpen: true })
  }

  closeConfirmationModal = () => {
    this.setState({ confirmationModalOpen: false })
  }

  render() {
    return (
      <div>
        <button onClick={this.openConfirmationModal}>Open ConfirmationModal</button>
        <ConfirmationModal
          {...this.props}
          onClose={this.closeConfirmationModal}
          isOpen={this.state.confirmationModalOpen}
        >
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </div>
        </ConfirmationModal>
      </div>
    )
  }
}

stories.add('Warning', () => (
  <ConfirmationModalOpener
    status={ConfirmationModal.STATUS.WARNING}
    isOpen={false}
    onClose={() => {}}
    onConfirm={() => console.log('fhtagn')}
    confirmLabel={text('confirmLabel', 'Fhtagn')}
    large={boolean('large', false)}
    closeOnEsc={boolean('closeOnEsc', true)}
  />
))

stories.add('Reminder', () => (
  <ConfirmationModalOpener
    status={ConfirmationModal.STATUS.REMINDER}
    isOpen={false}
    onClose={() => {}}
    onConfirm={() => console.log('fhtagn')}
    confirmLabel={text('confirmLabel', 'Fhtagn')}
    large={boolean('large', false)}
    closeOnEsc={boolean('closeOnEsc', true)}
  />
))
