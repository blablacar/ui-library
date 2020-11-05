import * as React from 'react'
import { CSSTransition, SwitchTransition } from 'react-transition-group'
import styled from 'styled-components'

import { TransitionDuration } from '../_utils/branding'

export enum SlideSwitchTransitionSide {
  TOP = 'top',
  RIGHT = 'right',
  BOTTOM = 'bottom',
  LEFT = 'left',
}

const DIRECTION_TRANSFORM_VALUES: {
  [key in SlideSwitchTransitionSide]: AnimatedDivProps['transform']
} = {
  [SlideSwitchTransitionSide.TOP]: { in: 'translateY(0)', out: 'translateY(-100%)' },
  [SlideSwitchTransitionSide.RIGHT]: { in: 'translateX(0)', out: 'translateX(100%)' },
  [SlideSwitchTransitionSide.BOTTOM]: { in: 'translateY(0)', out: 'translateY(100%)' },
  [SlideSwitchTransitionSide.LEFT]: { in: 'translateX(0)', out: 'translateX(-100%)' },
}

type AnimatedDivProps = {
  transitionDuration: TransitionDuration
  transform: {
    /**
     * CSS transformation to apply when the element is in the screen (visible).
     */
    in: string

    /**
     * CSS transformation to apply when the element is out of screen (hidden).
     */
    out: string
  }
}

const AnimatedDiv = styled.div<AnimatedDivProps>`
  opacity: 1;
  transform: ${p => p.transform?.in};
  transition-property: opacity, transform;
  transition-duration: ${p => p.transitionDuration}ms;

  &.slide-enter {
    opacity: 0;
    transform: ${p => p.transform?.out};
  }

  &.slide-enter-active {
    opacity: 1;
    transform: ${p => p.transform?.in};
    transition-timing-function: ease-out;
  }

  &.slide-exit {
    opacity: 1;
    transform: ${p => p.transform?.in};
  }

  &.slide-exit-active {
    opacity: 0;
    transform: ${p => p.transform?.out};
    transition-timing-function: ease-in;
  }
`

export type SlideSwitchTransitionProps = {
  /**
   * Key of the current children used to identify them.
   * When the key changes, the previous children will be animated out and the
   * new ones will be animated in.
   */
  childrenKey: React.Key
  side?: SlideSwitchTransitionSide
  transitionDuration?: TransitionDuration
  children?: React.ReactNode
}

export function SlideSwitchTransition({
  childrenKey,
  side = SlideSwitchTransitionSide.BOTTOM,
  transitionDuration = TransitionDuration.BASE,
  children,
}: SlideSwitchTransitionProps) {
  return (
    <SwitchTransition>
      <CSSTransition key={childrenKey} timeout={transitionDuration} classNames="slide">
        <AnimatedDiv
          transform={DIRECTION_TRANSFORM_VALUES[side]}
          transitionDuration={transitionDuration}
        >
          {children}
        </AnimatedDiv>
      </CSSTransition>
    </SwitchTransition>
  )
}
