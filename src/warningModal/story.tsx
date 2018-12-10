import React, { Component } from 'react'

import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withKnobs, boolean, text } from '@storybook/addon-knobs'

import WarningModal, { WarningModalProps } from 'warningModal'

const stories = storiesOf('WarningModal', module)
stories.addDecorator(withKnobs)

class WarningModalOpener extends Component<WarningModalProps> {
  state = {
    warningModalOpen: false,
  }

  openWarningModal = () => {
    this.setState({ warningModalOpen: true })
  }

  closeWarningModal = () => {
    this.setState({ warningModalOpen: false })
  }

  render() {
    return (
      <div>
        <button onClick={this.openWarningModal}>Open WarningModal</button>
        <WarningModal
          {...this.props}
          close={this.closeWarningModal}
          isOpen={this.state.warningModalOpen}
        >
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </div>
        </WarningModal>
      </div>
    )
  }
}

stories.add(
  'default',
  withInfo('WarningModal with all it’s default props')(() => (
    <WarningModalOpener
      title={text('title', 'Are you sure?')}
      isOpen={false}
      close={() => {}}
      confirm={() => console.log('fhtagn')}
      confirmLabel={text('confirmLabel', 'Fhtagn')}
      large={boolean('large', false)}
      displayCloseButton={boolean('displayCloseButton', true)}
      closeOnEsc={boolean('closeOnEsc', true)}
    />
  )),
)
