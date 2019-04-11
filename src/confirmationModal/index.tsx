import React, { Component } from 'react'
import cc from 'classcat'

import { color } from '_utils/branding'
import Button from 'button'
import Modal, { ModalProps } from 'modal'
import CrossIcon from 'icon/crossIcon'
import WarningIcon from 'icon/warningIcon'
import InfoIcon from 'icon/infoIcon'
import style from './style'

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
  static STATUS = ConfirmationModalStatus

  render() {
    const {
      status,
      isOpen,
      children,
      className,
      large,
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
        [`${baseClassName}--large`]: large,
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
        large={large}
        displayCloseButton={false}
        displayDimmer={false}
        forwardedRef={forwardedRef}
        className={classNames}
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
                status={Button.STATUS.SECONDARY}
                className={`${baseClassName}-closeButton`}
                onClick={onClose}
                title={closeButtonTitle}
              >
                <CrossIcon size="24" iconColor={color.accent} />
              </Button>
            )}
            <Button
              status={isWarning ? Button.STATUS.WARNING : Button.STATUS.PRIMARY}
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

export default ConfirmationModal
