import React from 'react'

import { StyledMarquee, StyledMarqueeItem } from './Marquee.style'

export type MarqueeProps = Readonly<{
  className?: string
  children: Array<React.ReactNode>
}>

export const Marquee = (props: MarqueeProps): JSX.Element => {
  const { className, children } = props

  return (
    <StyledMarquee className={className}>
      {children.filter(Boolean).map((child, index) => {
        const key = `marquee-item-${index}`

        return (
          <StyledMarqueeItem position={index} totalItems={children.length} key={key}>
            {child}
          </StyledMarqueeItem>
        )
      })}
    </StyledMarquee>
  )
}
