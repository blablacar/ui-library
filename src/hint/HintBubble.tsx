import React from 'react'
import cc from 'classcat'
import styled from 'styled-components'

import { color, radius, space, fontWeight, shadow } from '_utils/branding'
import { A11yProps, pickA11yProps } from '_utils/interfaces'
import Button, { ButtonStatus } from 'button'
import CrossIcon from 'icon/crossIcon'

export enum HintBubblePosition {
  ABOVE = 'above',
  BELOW = 'below',
}

export interface HintBubbleProps extends A11yProps {
  title: string
  className?: Classcat.Class
  onClose: () => void
  closeButtonTitle?: string
  description?: string
  position?: HintBubblePosition
}

export const HintBubble = (props: HintBubbleProps): JSX.Element => {
  const a11yProps = pickA11yProps<HintBubbleProps>(props)
  const { title, description, closeButtonTitle, position, className, onClose } = props
  return (
    <aside className={cc([className, `bubble-arrow--${position}`])} {...a11yProps}>
      <p>
        <strong>{title}</strong>
        {description}
      </p>
      <Button
        onClick={onClose}
        title={closeButtonTitle}
        status={ButtonStatus.UNSTYLED}
        aria-controls={a11yProps.id}
      >
        <CrossIcon size={18} iconColor={color.textWithBackground} />
      </Button>
    </aside>
  )
}

export default styled(HintBubble)`
  & {
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    padding: ${space.l} ${space.xl};
    background-color: ${color.pushBackground};
    color: ${color.textWithBackground};
    border-radius: ${radius.l};
    box-shadow: ${shadow.icon};
  }

  & strong {
    display: block;
    font-weight: ${fontWeight.medium};
  }

  & p {
    margin: 0;
    padding: 0;
  }

  & .kirk-button {
    padding: 0 0 0 ${space.l};
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
    border-top: 8px solid ${color.pushBackground};
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
    border-bottom: 8px solid ${color.pushBackground};
  }
`
