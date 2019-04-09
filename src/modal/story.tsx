import React, { Component, createRef } from 'react'

import { storiesOf } from '@storybook/react'
import { withKnobs, boolean, text } from '@storybook/addon-knobs'

import Modal, { ModalProps } from 'modal'

import modalDoc from './specifications/modal.md'

const stories = storiesOf('Modal', module)
stories.addDecorator(withKnobs)

class ModalOpener extends Component<ModalProps> {
  state = {
    modalOpen: false,
    modalOpen2: false,
  }

  openModal = () => {
    this.setState({ modalOpen: true })
  }

  closeModal = () => {
    this.setState({ modalOpen: false })
  }

  openModal2 = () => {
    this.setState({ modalOpen2: true })
  }

  closeModal2 = () => {
    this.setState({ modalOpen2: false })
  }

  ref = createRef<HTMLDivElement>()

  render() {
    return (
      <div>
        <button onClick={this.openModal}>Open modal 1</button>
        <button onClick={this.openModal2}>Open modal 2</button>
        <Modal {...this.props} close={this.closeModal} isOpen={this.state.modalOpen} ref={this.ref}>
          <div>
            <h1 id="label1">Modal 1</h1>
            <p id="description1">This is the description of my modal</p>
            <img
              src="http://placekitten.com/g/216/144"
              width="216"
              height="144"
              alt="The picture of a cat"
            />
          </div>
        </Modal>

        <Modal {...this.props} close={this.closeModal2} isOpen={this.state.modalOpen2}>
          <div>
            <h1 id="label2">Modal 2</h1>
            <p id="description2">This is the description of my modal</p>
            <img
              src="http://placekitten.com/g/216/144"
              width="216"
              height="144"
              alt="The picture of a cat"
            />
          </div>
        </Modal>
      </div>
    )
  }
}

stories.add(
  'default',
  () => (
    <ModalOpener
      close={() => {}}
      closeOnEsc={boolean('closeOnEsc', true)}
      closeOnOutsideClick={boolean('closeOnOutsideClick', true)}
      fullscreen={boolean('fullscreen', false)}
      displayDimmer={boolean('displayDimmer', true)}
      large={boolean('large', false)}
      isOpen={false}
      closeButtonTitle={text('Close icon text', 'Close modal')}
      ariaLabelledBy="label1"
      ariaDescribedBy="description1"
    />
  ),
  {
    readme: { content: modalDoc },
  },
)

stories.add('fullscreen', () => (
  <ModalOpener
    fullscreen={boolean('fullscreen', true)}
    displayDimmer={boolean('displayDimmer', false)}
    close={() => {}}
    closeOnEsc={boolean('closeOnEsc', true)}
    closeOnOutsideClick={boolean('closeOnOutsideClick', false)}
    displayCloseButton={boolean('displayCloseButton', true)}
    isOpen={false}
    ariaLabelledBy="label2"
    ariaDescribedBy="description2"
  />
))
