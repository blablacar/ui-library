import React, { Component } from 'react'
import { createPortal } from 'react-dom'
import TransitionGroup  from 'react-transition-group/TransitionGroup'
import CustomTransition, { AnimationType } from 'transitions'
import { color } from '_utils/branding'

import cc from 'classcat'
import Button from 'button'
import CrossIcon from 'icon/crossIcon'
import style from './style'

const KEYCODES = {
  ESCAPE: 27,
}

export interface ModalProps {
  readonly close: () => void,
  readonly isOpen?: boolean,
  readonly children?: JSX.Element | JSX.Element[],
  readonly className?: Classcat.Class,
  readonly closeOnEsc?: boolean,
  readonly closeOnOutsideClick?: boolean,
  readonly displayCloseButton?: boolean,
  readonly large?: boolean,
  readonly fullscreen?: boolean,
  readonly displayDimmer?: boolean,
  readonly closeButtonTitle?: string,
}

class Modal extends Component <ModalProps> {
  private portalNode: HTMLElement
  private contentNode: HTMLElement

  static defaultProps:Partial<ModalProps> = {
    isOpen: false,
    closeOnEsc: true,
    closeOnOutsideClick: false,
    displayCloseButton: true,
    large: false,
    fullscreen: false,
    displayDimmer: true,
  }

  componentDidMount() {
    if (this.props.closeOnEsc) {
      document.addEventListener('keydown', this.handleKeydown)
    }
    if (this.props.closeOnOutsideClick) {
      document.addEventListener('mouseup', this.handleOutsideMouseClick)
      document.addEventListener('touchstart', this.handleOutsideMouseClick)
    }
  }

  componentWillUnmount() {
    if (this.props.closeOnEsc) {
      document.removeEventListener('keydown', this.handleKeydown)
    }
    if (this.props.closeOnOutsideClick) {
      document.removeEventListener('mouseup', this.handleOutsideMouseClick)
      document.removeEventListener('touchstart', this.handleOutsideMouseClick)
    }
    if (this.portalNode) {
      document.body.removeChild(this.portalNode)
    }
    this.portalNode = null
  }

  handleOutsideMouseClick = (e: MouseEvent) => {
    const isButton = e.button && e.button !== 0
    if (
      !this.contentNode ||
      this.contentNode.contains(e.target as Node) ||
      isButton
    ) {
      return
    }
    this.props.close()
  }

  handleKeydown = (event: KeyboardEvent) => {
    if (event.keyCode === KEYCODES.ESCAPE) {
      this.props.close()
    }
  }

  refContent = (contentNode: HTMLElement) => {
    this.contentNode = contentNode
  }

  render() {
    const baseClassName = 'kirk-modal'

    if (!this.portalNode) {
      const dimmer = document.createElement('div')
      this.portalNode = dimmer
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

    const modalElement = (
      <div className={
        `${baseClassName}-dimmer${this.props.fullscreen ? '--fullscreen' : ''}
        ${baseClassName}-dimmer${this.props.displayDimmer ? '--visible' : '--hide'}
        ${baseClassName}-dimmer${this.props.isOpen ? '--active' : '--inactive'}`}
        >
        <TransitionGroup component="div" className="transition-wrapper">
          { this.props.isOpen && (
            <CustomTransition animationName={AnimationType.SLIDE_UP}>
              <div className={classNames}>
                <div className={`${baseClassName}-dialog`} ref={this.refContent}>
                  {this.props.displayCloseButton && (
                    <Button
                      icon
                      className={`${baseClassName}-closeButton`}
                      onClick={this.props.close}
                      title={this.props.closeButtonTitle}
                    >
                      <CrossIcon size="18" iconColor={color.accent} />
                    </Button>
                  )}
                  <div className={`${baseClassName}-body`}>{this.props.children}</div>
                </div>
                <style jsx>{style}</style>
              </div>
            </CustomTransition>
          )}
        </TransitionGroup>
      </div>
    )

    return createPortal(modalElement, this.portalNode)
  }
}

export default Modal
