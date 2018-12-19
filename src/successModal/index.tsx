import React, { Component, forwardRef, Ref } from 'react'
import { canUseDOM, canUseEventListeners } from 'exenv'
import { createPortal } from 'react-dom'
import Modal, { ModalProps } from 'modal'
import { color } from '_utils/branding'

import cc from 'classcat'
import Button from 'button'
import style from './style'

export interface SuccessModalProps {
  readonly isOpen?: boolean
  readonly children?: JSX.Element | JSX.Element[]
  readonly className?: Classcat.Class
  readonly closeOnEsc?: boolean
  readonly onConfirm: () => void
  readonly confirmLabel?: string
  readonly imageSrc: string
  readonly imageText?: string
  readonly large?: boolean
  readonly forwardedRef?: Ref<HTMLDivElement>
}

class SuccessModal extends Component<SuccessModalProps> {
  private portalNode: HTMLElement

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
      className,
      large,
      onConfirm,
      confirmLabel,
      forwardedRef,
      imageSrc,
      imageText,
    } = this.props

    const baseClassName = 'kirk-successModal'

    const classNames = cc([
      baseClassName,
      {
        [`${baseClassName}--large`]: large,
      },
      className,
    ])

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
