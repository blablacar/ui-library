import React from 'react'

import { StyledMarquee, StyledMarqueeItem } from './Marquee.style'

export type MarqueeProps = Readonly<{
  children: Array<React.ReactNode>
}>

export const Marquee = (props: MarqueeProps): JSX.Element => {
  const { children } = props

  return (
    <StyledMarquee>
      {children.filter(Boolean).map((child, index) => {
        const key = `marquee-item-${index}`

        return (
          <StyledMarqueeItem delay={index} totalItems={children.length} key={key}>
            {child}
          </StyledMarqueeItem>
        )
      })}
    </StyledMarquee>
  )
}
