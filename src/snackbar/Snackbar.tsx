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

export interface SnackbarProps {
  readonly close: () => void
  readonly isOpen: boolean
  readonly className?: string
  readonly extraClassName?: string
  readonly children: JSX.Element
}

class Snackbar extends PureComponent<SnackbarProps> {
  private portalNode: HTMLElement
  static defaultProps: Partial<SnackbarProps> = {
    isOpen: false,
  }

  constructor(props: SnackbarProps) {
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
    const modalElement = (
      <TransitionGroup
        component="div"
        className={cc(['transition-wrapper kirk-snackbar-container', this.props.className])}
      >
        {this.props.isOpen && (
          <CustomTransition animationName={AnimationType.SLIDE_UP}>
            <div className={cc(['kirk-snackbar', this.props.extraClassName])}>
              <Text role="alert" display={TextDisplayType.TITLE} className="kirk-snackbar-content">
                {this.props.children}
              </Text>
              <Button
                status={Button.STATUS.UNSTYLED}
                className="kirk-snackbar-cross"
                onClick={this.props.close}
              >
                <CrossIcon iconColor={color.white} size="18px" />
              </Button>
            </div>
          </CustomTransition>
        )}
      </TransitionGroup>
    )

    if (!this.portalNode) {
      return modalElement
    }

    return createPortal(modalElement, this.portalNode)
  }
}

export default Snackbar
