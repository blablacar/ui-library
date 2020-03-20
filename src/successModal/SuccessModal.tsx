import React, { Component } from 'react'
import uuidv4 from 'uuid/v4'

import Modal, { ModalProps } from 'modal'
import Button, { ButtonStatus } from 'button'
import TextDisplay1 from 'typography/display1'

export interface SuccessModalProps extends ModalProps {
  readonly confirmLabel?: string
  readonly imageSrc: string
  readonly imageText?: string
}

class SuccessModal extends Component<SuccessModalProps> {
  static defaultProps: Partial<SuccessModalProps> = {
    isOpen: false,
    closeOnEsc: false,
    forwardedRef: null,
    imageText: '',
  }

  render() {
    const {
      children,
      isOpen,
      onClose,
      confirmLabel,
      forwardedRef,
      imageSrc,
      imageText,
      className,
    } = this.props

    const baseClassName = 'kirk-successModal'
    const successContentId = `${baseClassName}-bodyItem-${uuidv4()}`

    return (
      <Modal
        onClose={onClose}
        isOpen={isOpen}
        closeOnEsc={false}
        displayCloseButton={false}
        displayDimmer={false}
        forwardedRef={forwardedRef}
        className={className}
        modalContentClassName={baseClassName}
        ariaLabelledBy={successContentId}
      >
        <img
          className={`${baseClassName}-bodyItem ${baseClassName}-image`}
          src={imageSrc}
          alt={imageText}
          aria-hidden // This image is always decorative
        />
        <div id={successContentId} className={`${baseClassName}-bodyItem`}>
          <TextDisplay1 isInverted>{children}</TextDisplay1>
          <footer className={`${baseClassName}-footer`}>
            <Button
              status={ButtonStatus.SECONDARY}
              className={`${baseClassName}-confirmButton`}
              onClick={onClose}
            >
              {confirmLabel}
            </Button>
          </footer>
        </div>
      </Modal>
    )
  }
}

export default SuccessModal
