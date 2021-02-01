import React from 'react'

import { StyledShowcase, StyledShowcaseItem } from './Showcase.style'

export type ShowcaseProps = Readonly<{
  children: Array<React.ReactNode>
}>

export const Showcase = (props: ShowcaseProps): JSX.Element => {
  const { children } = props

  return (
    <StyledShowcase>
      {children.map((child, index) => {
        const key = `showcase-item-${index}`

        return (
          <StyledShowcaseItem delay={index} totalItems={children.length} key={key}>
            {child}
          </StyledShowcaseItem>
        )
      })}
    </StyledShowcase>
  )
}
