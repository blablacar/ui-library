import React, { Component } from 'react'

import Modal, { ModalSize } from 'modal'
import { ModalProps } from 'modal/Modal'
import Button, { ButtonStatus } from 'button'
import TheVoice from 'theVoice'
import { assertModalSizes } from '_utils/assert'
import uuidv4 from 'uuid/v4'

export interface SuccessModalProps extends ModalProps {
  readonly confirmLabel?: string
  readonly imageSrc: string
  readonly imageText?: string
}

export enum SuccessModalSize {
  SMALL = 'small',
  LARGE = 'large',
}

class SuccessModal extends Component<SuccessModalProps> {
  static defaultProps: Partial<SuccessModalProps> = {
    isOpen: false,
    closeOnEsc: false,
    size: ModalSize.SMALL,
    forwardedRef: null,
    imageText: '',
  }

  render() {
    const {
      isOpen,
      children,
      size,
      onClose,
      confirmLabel,
      forwardedRef,
      imageSrc,
      imageText,
      className,
    } = this.props

    // Will throw if we use a non allowed modal size
    assertModalSizes(SuccessModalSize, this.props.size)

    const baseClassName = 'kirk-successModal'
    const successContentId = `${baseClassName}-bodyItem-${uuidv4()}`

    return (
      <Modal
        onClose={onClose}
        isOpen={isOpen}
        size={size}
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
          // This image is always decorative
          aria-hidden
        />
        <div id={successContentId} className={`${baseClassName}-bodyItem`}>
          <TheVoice isInverted>{children}</TheVoice>
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
