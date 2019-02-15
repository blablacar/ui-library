import React, { Component } from 'react'
import { canUseDOM, canUseEventListeners } from 'exenv'
import cc from 'classcat'
import TransitionGroup from 'react-transition-group/TransitionGroup'
import { createPortal } from 'react-dom'

import CustomTransition, { AnimationType } from 'transitions'
import { color } from '_utils/branding'
import Button from 'button'
import CrossIcon from 'icon/crossIcon'
import WarningIcon from 'icon/warningIcon'
import InfoIcon from 'icon/infoIcon'
import style from './style'
import KEYCODES from '_utils/keycodes'

export enum ConfirmationModalStatus {
  WARNING = 'warning',
  REMINDER = 'reminder',
}

export interface ConfirmationModalProps {
  readonly onClose: () => void
  readonly status: ConfirmationModalStatus
  readonly isOpen?: boolean
  readonly children?: JSX.Element | JSX.Element[]
  readonly className?: Classcat.Class
  readonly closeOnEsc?: boolean
  readonly closeButtonTitle?: string
  readonly onConfirm: () => void
  readonly confirmLabel?: string
  readonly large?: boolean
}

class ConfirmationModal extends Component<ConfirmationModalProps> {
  private portalNode: HTMLElement

  static STATUS = ConfirmationModalStatus

  static defaultProps: Partial<ConfirmationModalProps> = {
    isOpen: false,
    closeOnEsc: true,
    large: false,
  }

  constructor(props: ConfirmationModalProps) {
    super(props)
    if (canUseDOM) {
      this.portalNode = document.createElement('div')
      document.body.appendChild(this.portalNode)
    }
  }

  componentDidMount() {
    if (this.props.isOpen) {
      this.addListeners()
    }
  }

  componentDidUpdate(prevProps: ConfirmationModalProps) {
    if (!prevProps.isOpen && this.props.isOpen) {
      this.addListeners()
    }

    if (!this.props.isOpen && prevProps.isOpen) {
      this.removeListeners()
    }
  }

  componentWillUnmount() {
    this.removeListeners()
    document.body.removeChild(this.portalNode)
    this.portalNode = null
  }

  addListeners() {
    if (this.props.isOpen && canUseEventListeners) {
      if (this.props.closeOnEsc) {
        document.addEventListener('keydown', this.handleKeydown)
      }
    }
  }

  removeListeners() {
    if (!this.props.isOpen && canUseEventListeners) {
      document.removeEventListener('keydown', this.handleKeydown)
    }
  }

  handleKeydown = (event: KeyboardEvent) => {
    if (event.keyCode === KEYCODES.ESCAPE) {
      this.props.onClose()
    }
  }

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

    const confirmationModalElement = (
      <div>
        <TransitionGroup component="div" className="transition-wrapper">
          {isOpen && (
            <CustomTransition animationName={AnimationType.SLIDE_UP}>
              <div className={classNames}>
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
              </div>
            </CustomTransition>
          )}
        </TransitionGroup>
      </div>
    )

    if (!canUseDOM) {
      return null
    }
    return createPortal(confirmationModalElement, this.portalNode)
  }
}

export default ConfirmationModal
