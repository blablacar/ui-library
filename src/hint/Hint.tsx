import React, { Component } from 'react'
import cc from 'classcat'
import uniqueid from 'lodash.uniqueid'

import { A11yProps } from '_utils/interfaces'
import HintBubble, { HintBubblePosition } from './HintBubble'

export interface HintProps extends A11yProps {
  children: (id: string) => React.ReactNode
  title: string
  closeButtonTitle?: string
  description?: string
  position?: HintBubblePosition
  className?: Classcat.Class
  onClose?: () => void
  hidden?: boolean
}

export interface HintState {
  hiddenBubble: boolean
}

class Hint extends Component<HintProps, HintState> {
  static defaultProps: Partial<HintProps> = {
    description: null,
    closeButtonTitle: null,
    position: HintBubblePosition.ABOVE,
    className: '',
    onClose() {},
    hidden: false,
  }

  state: HintState = {
    hiddenBubble: this.props.hidden,
  }

  id: string = ''

  constructor(props: HintProps) {
    super(props)
    this.id = uniqueid('kirk-hint-')
  }

  onClose = () => {
    this.setState({ hiddenBubble: true })
  }

  render() {
    const {
      className,
      title,
      description,
      position,
      children,
      closeButtonTitle,
      onClose,
      hidden,
      ...props
    } = this.props
    return (
      <div className={cc([className, { 'hidden-bubble': this.state.hiddenBubble }])} {...props}>
        {children(this.id)}
        {!this.state.hiddenBubble && (
          <HintBubble
            title={title}
            description={description}
            closeButtonTitle={closeButtonTitle}
            position={position}
            onClose={this.onClose}
            id={this.id}
          />
        )}
      </div>
    )
  }
}

export default Hint
