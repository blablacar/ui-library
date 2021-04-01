import React, { Component } from 'react'
import cc from 'classcat'

import { color } from '../_utils/branding'
import { pickA11yProps } from '../_utils/interfaces'
import { Button, ButtonStatus } from '../button'
import { CrossIcon } from '../icon/crossIcon'
import { InfoIcon } from '../icon/infoIcon'
import { WarningIcon } from '../icon/warningIcon'
import { ModalSize } from '../modal'
import { ModalProps } from '../modal/Modal'
import { TheVoice } from '../theVoice'
import { StyledConfirmationModal } from './ConfirmationModal.style'

export enum ConfirmationModalStatus {
  WARNING = 'warning',
  REMINDER = 'reminder',
}

export type ConfirmationModalProps = ModalProps &
  Readonly<{
    status: ConfirmationModalStatus
    onConfirm?: () => void
    confirmLabel?: string
    confirmIsLoading?: boolean
  }>

export class ConfirmationModal extends Component<ConfirmationModalProps> {
  static defaultProps: Partial<ConfirmationModalProps> = {
    onConfirm() {},
    confirmLabel: '',
    confirmIsLoading: false,
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
      confirmIsLoading,
    } = this.props

    const a11yAttrs = pickA11yProps<ConfirmationModalProps>(this.props)

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
        return <WarningIcon {...iconProps} iconColor={color.red} />
      }
      return <InfoIcon {...iconProps} iconColor={color.blue} />
    }
    let confirmButtonStatus = isWarning ? ButtonStatus.WARNING : ButtonStatus.PRIMARY
    confirmButtonStatus = confirmIsLoading ? ButtonStatus.LOADING : confirmButtonStatus

    return (
      <StyledConfirmationModal
        onClose={onClose}
        isOpen={isOpen}
        displayCloseButton={false}
        displayDimmer={false}
        modalContentClassName={classNames}
        {...a11yAttrs}
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
                <CrossIcon size="24" iconColor={color.blue} />
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
      </StyledConfirmationModal>
    )
  }
}
