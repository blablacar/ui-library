import React, { Component, createRef } from 'react'

import { storiesOf } from '@storybook/react'
import { withKnobs, boolean, text, select } from '@storybook/addon-knobs'
import Section from 'layout/section/baseSection'
import Modal, { ModalSize } from 'modal'
import { ModalProps } from './Modal'

import modalDoc from './specifications/modal.md'

const stories = storiesOf('Widgets|Modal', module)
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
      <Section>
        <button onClick={this.openModal}>Open modal 1</button>
        <button onClick={this.openModal2}>Open modal 2</button>
        <Modal {...this.props} onClose={this.closeModal} isOpen={this.state.modalOpen}>
          <div>
            <h1 id="label1">Modal 1</h1>
            <p id="description1">This is the description of my modal</p>
            <img src="http://placekitten.com/g/216/144" width="216" height="144" alt="A kitten" />
          </div>
        </Modal>

        <Modal {...this.props} onClose={this.closeModal2} isOpen={this.state.modalOpen2}>
          <div>
            <h1 id="label2">Modal 2</h1>
            <p id="description2">This is the description of my modal</p>
            <img src="http://placekitten.com/g/216/144" width="216" height="144" alt="A kitten" />
          </div>
        </Modal>
      </Section>
    )
  }
}

stories.add(
  'default',
  () => (
    <ModalOpener
      onClose={() => {}}
      closeOnEsc={boolean('closeOnEsc', true)}
      closeOnOutsideClick={boolean('closeOnOutsideClick', true)}
      displayDimmer={boolean('displayDimmer', true)}
      isOpen={false}
      closeButtonTitle={text('Close icon text', 'Close modal')}
      ariaLabelledBy="label1"
      ariaDescribedBy="description1"
      size={select('size', ModalSize, ModalSize.MEDIUM)}
    />
  ),
  {
    readme: { content: modalDoc },
  },
)

stories.add('fullscreen', () => (
  <ModalOpener
    onClose={() => {}}
    closeOnEsc={boolean('closeOnEsc', true)}
    closeOnOutsideClick={boolean('closeOnOutsideClick', false)}
    displayDimmer={boolean('displayDimmer', false)}
    displayCloseButton={boolean('displayCloseButton', true)}
    isOpen={false}
    ariaLabelledBy="label2"
    ariaDescribedBy="description2"
    size={select('size', ModalSize, ModalSize.FULLSCREEN)}
  />
))
