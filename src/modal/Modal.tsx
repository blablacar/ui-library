import React, { Component } from 'react'
import { createPortal } from 'react-dom'
import TransitionGroup from 'react-transition-group/TransitionGroup'
import cc from 'classcat'
import { canUseDOM, canUseEventListeners } from 'exenv'

import createFocusTrap, { FocusTrap } from 'focus-trap'

import { color } from '../_utils/branding'
import { A11yProps, pickA11yProps } from '../_utils/interfaces'
import { KEYCODES } from '../_utils/keycodes'
import { Button } from '../button'
import { CrossIcon } from '../icon/crossIcon'
import { AnimationType, Transitions as CustomTransition } from '../transitions'
import { StyledModal } from './Modal.style'

export enum ModalSize {
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large',
  FULLSCREEN = 'fullscreen',
}

export type ModalProps = A11yProps &
  Readonly<{
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
    noHorizontalSpacing?: boolean
    layoutModeEnabled?: boolean
    isLoading?: boolean
  }>

export class Modal extends Component<ModalProps> {
  private portalNode: HTMLElement
  private contentNode: HTMLElement
  private focusTrap: FocusTrap
  private setModalRef: (elem: HTMLDivElement) => void

  static defaultProps: Partial<ModalProps> = {
    isOpen: false,
    closeOnEsc: true,
    closeOnOutsideClick: false,
    displayCloseButton: true,
    size: ModalSize.MEDIUM,
    displayDimmer: true,
    isLoading: false,
  }

  state = {
    showFooterBorder: false,
  }

  constructor(props: ModalProps) {
    super(props)
    if (canUseDOM) {
      this.setModalRef = element => {
        // Trigger the onScroll function in case of scrollable content
        // to update the showFooterBorder state
        if (element) {
          element.dispatchEvent(new CustomEvent('scroll'))
        }
      }
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

  onEntered = () => {
    this.focusTrap.activate()
  }

  onScroll = (e: React.UIEvent<HTMLElement>): void => {
    const element = e.currentTarget
    const isAtBottom = element.clientHeight + element.scrollTop >= element.scrollHeight
    this.setState({
      showFooterBorder: !isAtBottom,
    })
  }

  render() {
    const baseClassName = 'kirk-modal'
    const a11yAttrs = pickA11yProps<ModalProps>(this.props)

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
      <StyledModal
        noHorizontalSpacing={this.props.noHorizontalSpacing}
        layoutModeEnabled={this.props.layoutModeEnabled}
        className={dimmerClassNames}
      >
        <TransitionGroup component="div" className="transition-wrapper">
          {this.props.isOpen && (
            <CustomTransition animationName={AnimationType.SLIDE_UP} onEntered={this.onEntered}>
              <div
                className={contentClassNames}
                ref={this.setModalRef}
                {...a11yAttrs}
                role="dialog"
                aria-modal="true"
                onScroll={this.onScroll}
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
                  <div
                    className={cc([
                      `${baseClassName}-body`,
                      this.state.showFooterBorder ? `${baseClassName}-modalFooterBorder` : '',
                    ])}
                  >
                    {this.props.children}
                  </div>
                </div>
              </div>
            </CustomTransition>
          )}
        </TransitionGroup>
      </StyledModal>
    )

    return this.portalNode ? createPortal(modalElement, this.portalNode) : modalElement
  }
}
