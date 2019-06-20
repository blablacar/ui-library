import React, { Component, forwardRef, Ref } from 'react'
import { canUseDOM, canUseEventListeners } from 'exenv'
import { createPortal } from 'react-dom'
import TransitionGroup from 'react-transition-group/TransitionGroup'
import createFocusTrap, { FocusTrap } from 'focus-trap'
import cc from 'classcat'

import CustomTransition, { AnimationType } from 'transitions'
import { color } from '_utils/branding'
import Button from 'button'
import CrossIcon from 'icon/crossIcon'
import style from './style'
import KEYCODES from '_utils/keycodes'

export enum ModalSize {
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large',
}

export interface ModalProps {
  readonly onClose: () => void
  readonly isOpen?: boolean
  readonly children?: React.ReactNode
  readonly className?: Classcat.Class
  readonly closeOnEsc?: boolean
  readonly closeOnOutsideClick?: boolean
  readonly displayCloseButton?: boolean
  readonly size?: ModalSize
  readonly fullscreen?: boolean
  readonly displayDimmer?: boolean
  readonly closeButtonTitle?: string
  readonly forwardedRef?: Ref<HTMLDivElement>
  readonly ariaLabelledBy?: string
  readonly ariaDescribedBy?: string
}

class Modal extends Component<ModalProps> {
  private portalNode: HTMLElement
  private contentNode: HTMLElement
  private focusTrap: FocusTrap

  static MODAL_SIZE = ModalSize

  static defaultProps: Partial<ModalProps> = {
    isOpen: false,
    closeOnEsc: true,
    closeOnOutsideClick: false,
    displayCloseButton: true,
    size: ModalSize.MEDIUM,
    fullscreen: false,
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

    const classNames = cc([
      baseClassName,
      {
        [`${baseClassName}--${this.props.size}`]: this.props.size,
        [`${baseClassName}--hasCloseButton`]: this.props.displayCloseButton,
      },
      this.props.className,
    ])

    const dimmerClassNames = cc([
      `${baseClassName}-dimmer${this.props.fullscreen ? '--fullscreen' : ''}`,
      `${baseClassName}-dimmer${this.props.displayDimmer ? '--visible' : '--hide'}`,
      `${baseClassName}-dimmer${this.props.isOpen ? '--active' : '--inactive'}`,
    ])

    const modalElement = (
      <div className={dimmerClassNames}>
        <TransitionGroup component="div" className="transition-wrapper">
          {this.props.isOpen && (
            <CustomTransition animationName={AnimationType.SLIDE_UP} onEntered={this.onEntered}>
              <div
                className={classNames}
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

    return this.portalNode ? createPortal(modalElement, this.portalNode) : modalElement
  }
}

export default forwardRef<HTMLDivElement, ModalProps>((props, ref) => (
  <Modal {...props} forwardedRef={ref} />
))
