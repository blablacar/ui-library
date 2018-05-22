import React, { Fragment, PureComponent } from 'react'
import Transition  from 'react-transition-group/Transition'
import cc from 'classcat'
import { transition } from '_utils/branding'
import style from './style'

export enum AnimationType {
  FADE = 'fade',
  SLIDE_UP = 'slide-up',
}

interface CustomTransitionProps {
  readonly children: JSX.Element,
  readonly animationName?: AnimationType,
  readonly delayEnter?: number,
  readonly delayLeave?: number,
  readonly in?: boolean,
}
export default class CustomTransition extends PureComponent<CustomTransitionProps> {
  static TYPES = AnimationType

  static defaultProps: Partial<CustomTransitionProps> = {
    animationName:  AnimationType.FADE,
    delayEnter:  0,
    delayLeave:  parseInt(transition.duration.base, 10),
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
    } = this.props

    return (
      <Transition in={inProp} timeout={{ enter: delayEnter, exit: delayLeave }}>
        {
          (status:string) => {
            if (status === 'exited') {
              return null
            }

            return <Fragment>
              {
                React.cloneElement(children, {
                  className: cc([
                    children.props.className,
                    animationName,
                    `${animationName}-${status}`]),
                })
              }
              <style jsx>{style}</style>
            </Fragment>
          }
        }
      </Transition>
    )
  }
}
