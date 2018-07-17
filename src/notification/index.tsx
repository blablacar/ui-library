import React, { PureComponent } from 'react'
import { canUseDOM } from 'exenv'
import cc from 'classcat'
import { CrossIcon } from 'icon'
import { createPortal } from 'react-dom'
import { color } from '_utils/branding'
import TransitionGroup from 'react-transition-group/TransitionGroup'
import CustomTransition, { AnimationType } from 'transitions'
import Button from 'button'
import Text, { TextDisplayType } from 'text'

import style from './style'

export interface NotificationProps {
  readonly close: () => void
  readonly isOpen: boolean
  readonly className?: string
}

class Notification extends PureComponent<NotificationProps> {
  private portalNode: HTMLElement
  static defaultProps: Partial<NotificationProps> = {
    isOpen: false,
  }

  constructor(props: NotificationProps) {
    super(props)
    if (canUseDOM) {
      this.portalNode = document.createElement('div')
      document.body.appendChild(this.portalNode)
    }
  }

  componentWillUnmount() {
    if (this.portalNode) {
      document.body.removeChild(this.portalNode)
      this.portalNode = null
    }
  }

  render() {
    if (!this.portalNode) {
      return null
    }

    const modalElement = (
      <TransitionGroup component="div" className="transition-wrapper kirk-notification-container">
        {this.props.isOpen && (
          <CustomTransition animationName={AnimationType.SLIDE_UP}>
            <div className={cc(['kirk-notification', this.props.className])}>
              <Text display={TextDisplayType.TITLE} className="kirk-notification-content">
                {this.props.children}
              </Text>
              <Button
                status={Button.STATUS.UNSTYLED}
                className="kirk-notification-cross"
                onClick={this.props.close}
              >
                <CrossIcon iconColor={color.white} size="18px" />
              </Button>
              <style jsx>{style}</style>
            </div>
          </CustomTransition>
        )}
      </TransitionGroup>
    )

    return createPortal(modalElement, this.portalNode)
  }
}

export default Notification
