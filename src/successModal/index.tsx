import React, { Component, Ref } from 'react'

import Modal from 'modal'
import Button from 'button'
import Text, { TextTagType, TextDisplayType } from 'text'
import { color } from '_utils/branding'
import style from './style'

export interface SuccessModalProps {
  readonly isOpen?: boolean
  readonly children?: string | number | React.ReactNode
  readonly closeOnEsc?: boolean
  readonly onConfirm: () => void
  readonly confirmLabel?: string
  readonly imageSrc: string
  readonly imageText?: string
  readonly large?: boolean
  readonly forwardedRef?: Ref<HTMLDivElement>
  readonly ariaLabelledBy?: string
  readonly ariaDescribedBy?: string
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
      onConfirm,
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
        close={onConfirm}
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
              onClick={onConfirm}
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
