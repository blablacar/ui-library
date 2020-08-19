import React, { PureComponent } from 'react'
import Transition from 'react-transition-group/Transition'
import cc from 'classcat'

import { transition } from '../_utils/branding'

export enum AnimationType {
  FADE = 'fade',
  SLIDE_UP = 'slide-up',
}

export type TransitionsProps = Readonly<{
  className?: string
  children: JSX.Element
  animationName?: AnimationType
  delayEnter?: number
  delayLeave?: number
  in?: boolean
  onEntered?: () => void
}>

export class Transitions extends PureComponent<TransitionsProps> {
  static defaultProps: Partial<TransitionsProps> = {
    animationName: AnimationType.FADE,
    delayEnter: 0,
    delayLeave: parseInt(transition.duration.base, 10),
    in: false,
  }

  render() {
    const {
      // Rename "in" props from Transition component cause of private naming
      children,
      animationName,
      delayEnter,
      delayLeave,
      in: inProp,
      onEntered,
      className,
    } = this.props

    return (
      <Transition
        in={inProp}
        timeout={{ enter: delayEnter, exit: delayLeave }}
        onEntered={onEntered}
      >
        {(status: string) => {
          if (status === 'exited') {
            return null
          }

          return React.cloneElement(children, {
            className: cc([
              className,
              children.props.className,
              animationName,
              `${animationName}-${status}`,
            ]),
          })
        }}
      </Transition>
    )
  }
}
