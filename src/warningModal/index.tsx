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
  readonly close: () => void,
  readonly isOpen?: boolean,
  readonly children?: JSX.Element | JSX.Element[],
  readonly className?: Classcat.Class,
  readonly closeOnEsc?: boolean,
  readonly displayCloseButton?: boolean,
  readonly closeButtonTitle?: string,
  readonly confirm: () => void,
  readonly confirmLabel?: string,
  readonly title?: string,
  readonly large?: boolean,
}

class WarningModal extends Component <WarningModalProps> {
  private portalNode: HTMLElement

  static defaultProps:Partial<WarningModalProps> = {
    isOpen: false,
    closeOnEsc: true,
    displayCloseButton: true,
    large: false,
  }

  componentDidMount() {
    if (this.props.closeOnEsc && canUseEventListeners) {
      document.addEventListener('keydown', this.handleKeydown)
    }
  }

  componentWillUnmount() {
    if (this.props.closeOnEsc && canUseEventListeners) {
      document.removeEventListener('keydown', this.handleKeydown)
    }
    if (this.portalNode && canUseDOM) {
      document.body.removeChild(this.portalNode)
    }
    this.portalNode = null
  }

  handleKeydown = (event: KeyboardEvent) => {
    if (event.keyCode === KEYCODES.ESCAPE) {
      this.props.close()
    }
  }

  onConfirm = () => {
    this.props.confirm()
  }

  render() {
    const baseClassName = 'kirk-warningModal'

    if (!this.portalNode && canUseDOM) {
      this.portalNode = document.createElement('div')
      document.body.appendChild(this.portalNode)
    }

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
          { this.props.isOpen && (
            <CustomTransition animationName={AnimationType.SLIDE_UP}>
              <div className={classNames}>
                <div className={`${baseClassName}-dialog`}>
                  <Title className={`${baseClassName}-title`}>
                    {this.props.title}
                  </Title>
                  <div className={`${baseClassName}-body`}>
                    {this.props.children}
                  </div>
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
                        onClick={this.onConfirm}
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
