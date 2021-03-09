import React from 'react'
import cc from 'classcat'
import styled from 'styled-components'

import { color, fontWeight, horizontalSpace, radius, shadow, space } from '../_utils/branding'
import { A11yProps, pickA11yProps } from '../_utils/interfaces'
import { Button, ButtonStatus } from '../button'
import { CrossIcon } from '../icon/crossIcon'

export enum HintBubblePosition {
  ABOVE = 'above',
  BELOW = 'below',
}

export type HintBubbleProps = A11yProps &
  Readonly<{
    mainTitle: string
    className?: string
    onClose: () => void
    closeButtonTitle?: string
    description?: string
    position?: HintBubblePosition
  }>

const HintBubble = (props: HintBubbleProps): JSX.Element => {
  const a11yProps = pickA11yProps<HintBubbleProps>(props)
  const { mainTitle, description, closeButtonTitle, position, className, onClose } = props
  return (
    <aside className={cc([className, `bubble-arrow--${position}`])} {...a11yProps}>
      <p>
        <strong>{mainTitle}</strong>
        {description}
      </p>
      <Button
        onClick={onClose}
        title={closeButtonTitle}
        status={ButtonStatus.UNSTYLED}
        aria-controls={a11yProps.id}
      >
        <CrossIcon size={18} iconColor={color.white} />
      </Button>
    </aside>
  )
}

const StyledHintBubble = styled(HintBubble)`
  & {
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    padding: ${space.l};
    background-color: ${color.midnightGreen};
    color: ${color.white};
    border-radius: ${radius.l};
    box-shadow: ${shadow.icon};
    /* Normalization */
    margin-left: ${horizontalSpace.global};
    margin-right: ${horizontalSpace.global};
  }

  & strong {
    display: block;
    font-weight: ${fontWeight.medium};
    padding-bottom: ${space.s};
  }

  & p {
    margin: 0;
    padding: 0;
    flex: 1;
  }

  & .kirk-button {
    padding: 0 0 0 ${space.m};
    min-height: 0;
    height: auto;
  }

  & .kirk-button svg {
    margin: 0;
  }

  &.bubble-arrow--above::after {
    content: ' ';
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -4px;
    width: 0;
    height: 0;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-top: 8px solid ${color.midnightGreen};
  }

  &.bubble-arrow--below::after {
    content: ' ';
    position: absolute;
    bottom: 100%;
    left: 50%;
    margin-left: -4px;
    width: 0;
    height: 0;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-bottom: 8px solid ${color.midnightGreen};
  }
`
export { StyledHintBubble as HintBubble }
