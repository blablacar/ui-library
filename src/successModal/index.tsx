import React, { Component, Ref } from 'react'
import Modal from 'modal'

import Button from 'button'
import style from './style'

export interface SuccessModalProps {
  readonly isOpen?: boolean
  readonly children?: JSX.Element | JSX.Element[]
  readonly closeOnEsc?: boolean
  readonly onConfirm: () => void
  readonly confirmLabel?: string
  readonly imageSrc: string
  readonly imageText?: string
  readonly large?: boolean
  readonly forwardedRef?: Ref<HTMLDivElement>
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
      >
        <img
          className={`${baseClassName}-bodyItem ${baseClassName}-image`}
          src={imageSrc}
          alt={imageText}
        />
        <div className={`${baseClassName}-bodyItem`}>
          {children}
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
