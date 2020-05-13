import React, { Component, Ref } from 'react'
import { createPortal } from 'react-dom'
import TransitionGroup from 'react-transition-group/TransitionGroup'
import cc from 'classcat'
import { canUseDOM, canUseEventListeners } from 'exenv'

import createFocusTrap, { FocusTrap } from 'focus-trap'

import { color } from '../_utils/branding'
import KEYCODES from '../_utils/keycodes'
import Button from '../button'
import CrossIcon from '../icon/crossIcon'
import CustomTransition, { AnimationType } from '../transitions'

export enum ModalSize {
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large',
  FULLSCREEN = 'fullscreen',
}

export type ModalProps = Readonly<{
  onClose: () => void
  isOpen?: boolean
  children?: React.ReactNode
  className?: string
  modalContentClassName?: string
  closeOnEsc?: boolean
  closeOnOutsideClick?: boolean
  displayCloseButton?: boolean
  size?: ModalSize
  displayDimmer?: boolean
  closeButtonTitle?: string
  forwardedRef?: Ref<HTMLDivElement>
  ariaLabelledBy?: string
  ariaDescribedBy?: string
}>

export default class Modal extends Component<ModalProps> {
  private portalNode: HTMLElement
  private contentNode: HTMLElement
  private focusTrap: FocusTrap

  static defaultProps: Partial<ModalProps> = {
    isOpen: false,
    closeOnEsc: true,
    closeOnOutsideClick: false,
    displayCloseButton: true,
    size: ModalSize.MEDIUM,
    displayDimmer: true,
    forwardedRef: null,
  }

  constructor(props: ModalProps) {
    super(props)
    if (canUseDOM) {
      this.portalNode = document.createElement('div')
      document.body.appendChild(this.portalNode)
      this.focusTrap = createFocusTrap(this.portalNode)
    }
  }

  componentDidMount() {
    if (this.props.isOpen) {
      this.addListeners()
      this.setDocumentScroll('hidden')
    }
  }

  componentDidUpdate(prevProps: ModalProps) {
    if (!prevProps.isOpen && this.props.isOpen) {
      this.addListeners()
      this.setDocumentScroll('hidden')
    }

    if (!this.props.isOpen && prevProps.isOpen) {
      this.removeListeners()
      this.setDocumentScroll('visible')
      this.focusTrap.deactivate()
    }
  }

  componentWillUnmount() {
    this.removeListeners()
    if (this.portalNode) {
      document.body.removeChild(this.portalNode)
      this.portalNode = null
    }
    this.setDocumentScroll('visible')
    this.focusTrap.deactivate()
  }

  setDocumentScroll = (cssValue: string) => {
    if (canUseDOM) {
      document.querySelector('html').style.overflow = cssValue
    }
  }

  addListeners() {
    if (this.props.isOpen && canUseEventListeners) {
      if (this.props.closeOnEsc) {
        document.addEventListener('keydown', this.handleKeydown)
      }

      if (this.props.closeOnOutsideClick) {
        document.addEventListener('mouseup', this.handleOutsideMouseClick)
        document.addEventListener('touchstart', this.handleOutsideMouseClick)
      }
    }
  }

  removeListeners() {
    if (!this.props.isOpen && canUseEventListeners) {
      document.removeEventListener('keydown', this.handleKeydown)
      document.removeEventListener('mouseup', this.handleOutsideMouseClick)
      document.removeEventListener('touchstart', this.handleOutsideMouseClick)
    }
  }

  handleOutsideMouseClick = (e: MouseEvent) => {
    const isButton = e.button && e.button !== 0
    if (!this.contentNode || this.contentNode.contains(e.target as Node) || isButton) {
      return
    }
    this.props.onClose()
  }

  handleKeydown = (event: KeyboardEvent) => {
    if (event.keyCode === KEYCODES.ESCAPE) {
      this.props.onClose()
    }
  }

  refContent = (contentNode: HTMLElement) => {
    this.contentNode = contentNode
  }

  onEntered = () => {
    this.focusTrap.activate()
  }

  render() {
    const baseClassName = 'kirk-modal'

    const dimmerClassNames = cc([
      this.props.className,
      `${baseClassName}-dimmer${this.props.size === ModalSize.FULLSCREEN ? '--fullscreen' : ''}`,
      `${baseClassName}-dimmer${this.props.displayDimmer ? '--visible' : '--hide'}`,
      `${baseClassName}-dimmer${this.props.isOpen ? '--active' : '--inactive'}`,
    ])

    const contentClassNames = cc([
      baseClassName,
      {
        [`${baseClassName}--${this.props.size}`]: this.props.size,
        [`${baseClassName}--hasCloseButton`]: this.props.displayCloseButton,
      },
      this.props.modalContentClassName,
    ])

    const modalElement = (
      <div className={dimmerClassNames}>
        <TransitionGroup component="div" className="transition-wrapper">
          {this.props.isOpen && (
            <CustomTransition animationName={AnimationType.SLIDE_UP} onEntered={this.onEntered}>
              <div
                className={contentClassNames}
                ref={this.props.forwardedRef}
                role="dialog"
                aria-labelledby={this.props.ariaLabelledBy}
                aria-describedby={this.props.ariaDescribedBy}
                aria-modal="true"
              >
                <div className={`${baseClassName}-dialog`}>
                  {this.props.displayCloseButton && (
                    <Button
                      isBubble
                      className={`${baseClassName}-closeButton`}
                      onClick={this.props.onClose}
                      title={this.props.closeButtonTitle}
                    >
                      <CrossIcon size="18" iconColor={color.blue} />
                    </Button>
                  )}
                  <div className={`${baseClassName}-body`}>{this.props.children}</div>
                </div>
              </div>
            </CustomTransition>
          )}
        </TransitionGroup>
      </div>
    )

    return this.portalNode ? createPortal(modalElement, this.portalNode) : modalElement
  }
}
