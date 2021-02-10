import React, { useState } from 'react'

import { TextBody } from '../typography/body'
import { StyledCollapsible, StyledWrapper } from './Collapsible.style'
import { CollapsibleLines } from './CollapsibleLines'
import { Lines } from './Itinerary'
import { StyledLabel } from './Place.style'

export type CollapsibleProps = Readonly<{
  children: React.ReactNode
  label: string
}>

export const Collapsible = ({ children, label }: CollapsibleProps) => {
  const [hidden, setHidden] = useState(true)

  return (
    <StyledCollapsible
      onClick={() => {
        setHidden(!hidden)
      }}
    >
      <StyledWrapper>
        {/* We don't display time for collapsible */}
        <time aria-hidden="true" />

        <CollapsibleLines line={Lines.ACTIVE} />
        <StyledLabel>
          <TextBody>{label}</TextBody>
        </StyledLabel>
      </StyledWrapper>
      <div>{!hidden && children}</div>
    </StyledCollapsible>
  )
}
