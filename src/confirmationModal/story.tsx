import React, { Component, Fragment } from 'react'
import { action } from '@storybook/addon-actions'
import { boolean, text } from '@storybook/addon-knobs'

import { ConfirmationModal, ConfirmationModalStatus } from '../confirmationModal'
import { ConfirmationModalProps } from './ConfirmationModal'

export default {
  title: 'Widgets|Modal|ConfirmationModal',
  component: ConfirmationModal,
}

class ConfirmationModalOpener extends Component<ConfirmationModalProps> {
  state = {
    confirmationModalOpen: false,
  }

  openConfirmationModal = () => {
    this.setState({ confirmationModalOpen: true })
  }

  closeConfirmationModal = () => {
    this.setState({ confirmationModalOpen: false })
    this.props.onClose()
  }

  confirmConfirmationModal = () => {
    this.setState({ confirmationModalOpen: false })
    this.props.onConfirm()
  }

  render() {
    return (
      <Fragment>
        <button type="button" onClick={this.openConfirmationModal}>
          Open ConfirmationModal
        </button>
        <ConfirmationModal
          {...this.props}
          onClose={this.closeConfirmationModal}
          onConfirm={this.confirmConfirmationModal}
          isOpen={this.state.confirmationModalOpen}
          confirmIsLoading={this.props.confirmIsLoading}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua.
        </ConfirmationModal>
      </Fragment>
    )
  }
}

export const Warning = () => (
  <ConfirmationModalOpener
    status={ConfirmationModalStatus.WARNING}
    onClose={action('onClose')}
    onConfirm={action('onConfirm')}
    confirmLabel={text('confirmLabel', 'Fhtagn')}
    closeOnEsc={boolean('closeOnEsc', true)}
    confirmIsLoading={boolean('confirmIsLoading', false)}
  />
)

export const Reminder = () => (
  <ConfirmationModalOpener
    status={ConfirmationModalStatus.REMINDER}
    onClose={action('onClose')}
    confirmLabel={text('confirmLabel', 'Fhtagn')}
    onConfirm={action('onConfirm')}
    closeOnEsc={boolean('closeOnEsc', true)}
  />
)
