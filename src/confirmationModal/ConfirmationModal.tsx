import React, { Component } from 'react'
import cc from 'classcat'

import { color } from '_utils/branding'
import Button, { ButtonStatus } from 'button'
import Modal, { ModalSize } from 'modal'
import { ModalProps } from 'modal/Modal'
import TheVoice from 'theVoice'
import CrossIcon from 'icon/crossIcon'
import WarningIcon from 'icon/warningIcon'
import InfoIcon from 'icon/infoIcon'
import { assertModalSizes } from '_utils/assert'

export enum ConfirmationModalStatus {
  WARNING = 'warning',
  REMINDER = 'reminder',
}

export enum ConfirmationModalSize {
  SMALL = 'small',
  LARGE = 'large',
}

export interface ConfirmationModalProps extends ModalProps {
  readonly status: ConfirmationModalStatus
  readonly onConfirm?: () => void
  readonly confirmLabel?: string
  readonly confirmIsLoading?: boolean
  readonly size?: ModalSize
}

class ConfirmationModal extends Component<ConfirmationModalProps> {
  static defaultProps: Partial<ConfirmationModalProps> = {
    onConfirm() {},
    confirmLabel: '',
    confirmIsLoading: false,
    size: ModalSize.SMALL,
  }

  render() {
    const {
      status,
      isOpen,
      children,
      className,
      size,
      onClose,
      closeButtonTitle,
      onConfirm,
      confirmLabel,
      ariaLabelledBy,
      ariaDescribedBy,
      forwardedRef,
      confirmIsLoading,
    } = this.props

    // Will throw if we use a non allowed modal size
    assertModalSizes(ConfirmationModalSize, this.props.size)

    const isWarning = status === ConfirmationModalStatus.WARNING

    const baseClassName = 'kirk-confirmationModal'

    const classNames = cc([
      baseClassName,
      {
        [`${baseClassName}--large`]: size === ModalSize.LARGE,
        [`${baseClassName}--hasCloseButton`]: isWarning,
      },
      className,
    ])

    const iconProps = {
      className: `${baseClassName}-icon`,
      size: '100',
    }

    const getIcon = () => {
      if (isWarning) {
        return <WarningIcon {...iconProps} iconColor={color.danger} />
      }
      return <InfoIcon {...iconProps} iconColor={color.info} />
    }

    let confirmButtonStatus = isWarning ? ButtonStatus.WARNING : ButtonStatus.PRIMARY
    confirmButtonStatus = confirmIsLoading ? ButtonStatus.LOADING : confirmButtonStatus

    return (
      <Modal
        onClose={onClose}
        isOpen={isOpen}
        size={size}
        displayCloseButton={false}
        displayDimmer={false}
        forwardedRef={forwardedRef}
        modalContentClassName={classNames}
        ariaLabelledBy={ariaLabelledBy}
        ariaDescribedBy={ariaDescribedBy}
      >
        <div className={`${baseClassName}-dialog`}>
          {getIcon()}
          <div className={`${baseClassName}-body`}>
            <TheVoice isInverted>{children}</TheVoice>
          </div>
          <footer className={`${baseClassName}-footer`}>
            {isWarning && (
              <Button
                isBubble
                status={ButtonStatus.SECONDARY}
                className={`${baseClassName}-closeButton`}
                onClick={onClose}
                title={closeButtonTitle}
              >
                <CrossIcon size="24" iconColor={color.accent} />
              </Button>
            )}
            <Button
              status={confirmButtonStatus}
              className={`${baseClassName}-confirmButton`}
              onClick={onConfirm}
            >
              {confirmLabel}
            </Button>
          </footer>
        </div>
      </Modal>
    )
  }
}

export default ConfirmationModal
