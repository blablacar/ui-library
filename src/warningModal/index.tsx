import React, { Component } from 'react'
import { canUseDOM, canUseEventListeners } from 'exenv'
import { createPortal } from 'react-dom'
import TransitionGroup from 'react-transition-group/TransitionGroup'
import CustomTransition, { AnimationType } from 'transitions'
import { color } from '_utils/branding'

import cc from 'classcat'
import Button from 'button'
import CrossIcon from 'icon/crossIcon'
import Title from 'title'
import style from './style'

const KEYCODES = {
  ESCAPE: 27,
}

export interface WarningModalProps {
  readonly close: () => void
  readonly isOpen?: boolean
  readonly children?: JSX.Element | JSX.Element[]
  readonly className?: Classcat.Class
  readonly closeOnEsc?: boolean
  readonly displayCloseButton?: boolean
  readonly closeButtonTitle?: string
  readonly confirm: () => void
  readonly confirmLabel?: string
  readonly title?: string
  readonly large?: boolean
}

class WarningModal extends Component<WarningModalProps> {
  private portalNode: HTMLElement

  static defaultProps: Partial<WarningModalProps> = {
    isOpen: false,
    closeOnEsc: true,
    displayCloseButton: true,
    large: false,
  }

  constructor(props: WarningModalProps) {
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

  componentDidUpdate(prevProps: WarningModalProps) {
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
      this.props.close()
    }
  }

  render() {
    const baseClassName = 'kirk-warningModal'

    const classNames = cc([
      baseClassName,
      {
        [`${baseClassName}--large`]: this.props.large,
        [`${baseClassName}--hasCloseButton`]: this.props.displayCloseButton,
      },
      this.props.className,
    ])

    const warningModalElement = (
      <div>
        <TransitionGroup component="div" className="transition-wrapper">
          {this.props.isOpen && (
            <CustomTransition animationName={AnimationType.SLIDE_UP}>
              <div className={classNames}>
                <div className={`${baseClassName}-dialog`}>
                  <Title className={`${baseClassName}-title`}>{this.props.title}</Title>
                  <div className={`${baseClassName}-body`}>{this.props.children}</div>
                  <footer className={`${baseClassName}-footer`}>
                    {this.props.displayCloseButton && (
                      <Button
                        icon
                        status={Button.STATUS.SECONDARY}
                        className={`${baseClassName}-closeButton`}
                        onClick={this.props.close}
                        title={this.props.closeButtonTitle}
                      >
                        <CrossIcon size="24" iconColor={color.accent} />
                      </Button>
                    )}
                    <Button
                      status={Button.STATUS.WARNING}
                      className={`${baseClassName}-confirmButton`}
                      onClick={this.props.confirm}
                    >
                      {this.props.confirmLabel}
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
    return createPortal(warningModalElement, this.portalNode)
  }
}

export default WarningModal
