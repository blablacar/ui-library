import React, { Component } from 'react'

import { storiesOf } from '@storybook/react'
import { withKnobs, boolean, text, select } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import Section from 'layout/section/baseSection'
import SuccessModal from 'successModal'
import { SuccessModalProps, SuccessModalSize } from './SuccessModal'
import successModalDoc from './specifications/successModal.md'

const stories = storiesOf('Widgets|Modal|SuccessModal', module)

stories.addDecorator(withKnobs)

class SuccessModalOpener extends Component<SuccessModalProps> {
  state = {
    successModalOpen: false,
  }

  openSuccessModal = () => {
    this.setState({ successModalOpen: true })
  }

  closeSuccessModal = () => {
    this.setState({ successModalOpen: false })
    this.props.onClose()
  }

  render() {
    return (
      <Section>
        <button onClick={this.openSuccessModal}>Open SuccessModal</button>
        <SuccessModal
          {...this.props}
          onClose={this.closeSuccessModal}
          isOpen={this.state.successModalOpen}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
        </SuccessModal>
      </Section>
    )
  }
}

stories.add(
  'success',
  () => (
    <SuccessModalOpener
      isOpen={false}
      onClose={action('onClose')}
      imageSrc={text('imageSrc', 'https://svgshare.com/i/AGz.svg')}
      imageText={text('imageText', 'Illustation description')}
      confirmLabel={text('confirmLabel', 'Got it!')}
      size={select('size', SuccessModalSize, SuccessModalSize.SMALL)}
      closeOnEsc={boolean('closeOnEsc', false)}
    />
  ),
  {
    readme: { content: successModalDoc },
  },
)
