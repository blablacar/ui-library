import React, { Component } from 'react'
import cc from 'classcat'

import { color } from '_utils/branding'
import Button, { ButtonStatus } from 'button'
import Modal, { ModalSize } from 'modal'
import { ModalProps } from 'modal/Modal'
import CrossIcon from 'icon/crossIcon'
import WarningIcon from 'icon/warningIcon'
import InfoIcon from 'icon/infoIcon'

export enum ConfirmationModalStatus {
  WARNING = 'warning',
  REMINDER = 'reminder',
}

export interface ConfirmationModalProps extends ModalProps {
  readonly status: ConfirmationModalStatus
  readonly onConfirm?: () => void
  readonly confirmLabel?: string
}

class ConfirmationModal extends Component<ConfirmationModalProps> {
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
    } = this.props

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
          <div className={`${baseClassName}-body`}>{children}</div>
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
              status={isWarning ? ButtonStatus.WARNING : ButtonStatus.PRIMARY}
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
