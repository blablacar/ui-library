import React, { Component } from 'react'

import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withKnobs, boolean } from '@storybook/addon-knobs'

import Modal, { ModalProps } from 'modal'

const stories = storiesOf('Modal', module)
stories.addDecorator(withKnobs)

class ModalOpener extends Component <ModalProps> {
  state = {
    modalOpen: false,
  }

  openModal = () => {
    this.setState({ modalOpen: true })
  }

  closeModal = () => {
    this.setState({ modalOpen: false })
  }

  render() {
    return (
      <div>
        <button onClick={this.openModal}>Open modal</button>
        {this.state.modalOpen && (
          <Modal {...this.props} close={this.closeModal}>
            <div>
              <img
                src="http://placekitten.com/g/216/144"
                width="216"
                height="144"
                alt=""
              />
            </div>
          </Modal>
        )}
      </div>
    )
  }
}

stories.add(
  'default',
  withInfo('Modal with all it’s default props')(() => (
    <ModalOpener
      close={() => {}}
      closeOnEsc={boolean('closeOnEsc', true)}
      closeOnOutsideClick={boolean('closeOnOutsideClick', false)}
      displayCloseButton={boolean('displayCloseButton', true)}
      fullscreen={boolean('fullscreen', false)}
      displayDimmer
      large={boolean('large', false)}
    />
  )),
)

stories.add(
  'fullscreen',
  withInfo('Modal fullscreen')(() => (
    <ModalOpener
      fullscreen
      close={() => {}}
      closeOnEsc={boolean('closeOnEsc', true)}
      closeOnOutsideClick={boolean('closeOnOutsideClick', false)}
      displayCloseButton={boolean('displayCloseButton', true)}
    />
  )),
)

stories.add(
  'wrapped',
  withInfo('Modal wrapped')(() => (
    <ModalOpener
      wrapper={<div className="wrapper" />}
      close={() => {}}
      closeOnEsc={boolean('closeOnEsc', true)}
      closeOnOutsideClick={boolean('closeOnOutsideClick', false)}
      displayCloseButton={boolean('displayCloseButton', true)}
    />
  )),
)
