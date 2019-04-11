import React, { Component, Ref } from 'react'

import Modal, { ModalProps } from 'modal'
import Button from 'button'
import Text, { TextTagType, TextDisplayType } from 'text'
import { color } from '_utils/branding'
import style from './style'

export interface SuccessModalProps extends ModalProps {
  readonly confirmLabel?: string
  readonly imageSrc: string
  readonly imageText?: string
}

class SuccessModal extends Component<SuccessModalProps> {
  static defaultProps: Partial<SuccessModalProps> = {
    isOpen: false,
    closeOnEsc: false,
    large: false,
    forwardedRef: null,
    imageText: '',
  }

  render() {
    const {
      isOpen,
      children,
      large,
      onClose,
      confirmLabel,
      forwardedRef,
      imageSrc,
      imageText,
      ariaLabelledBy,
      ariaDescribedBy,
    } = this.props

    const baseClassName = 'kirk-successModal'

    return (
      <Modal
        onClose={onClose}
        isOpen={isOpen}
        large={large}
        closeOnEsc={false}
        displayCloseButton={false}
        displayDimmer={false}
        forwardedRef={forwardedRef}
        className={baseClassName}
        ariaLabelledBy={ariaLabelledBy}
        ariaDescribedBy={ariaDescribedBy}
      >
        <img
          className={`${baseClassName}-bodyItem ${baseClassName}-image`}
          src={imageSrc}
          alt={imageText}
        />
        <div className={`${baseClassName}-bodyItem`}>
          <Text
            display={TextDisplayType.SUBHEADER}
            tag={TextTagType.PARAGRAPH}
            textColor={color.white}
          >
            {children}
          </Text>
          <footer className={`${baseClassName}-footer`}>
            <Button
              status={Button.STATUS.SECONDARY}
              className={`${baseClassName}-confirmButton`}
              onClick={onClose}
            >
              {confirmLabel}
            </Button>
          </footer>
        </div>
        <style jsx>{style}</style>
      </Modal>
    )
  }
}

export default SuccessModal
