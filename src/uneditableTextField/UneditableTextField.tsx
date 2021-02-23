import React from 'react'
import cc from 'classcat'

import { StyledUneditableContainer, StyledUneditableTextField } from './UneditableTextField.style'

export type UneditableTextFieldProps = Readonly<{
  children: JSX.Element | string
  className?: string
  addOn?: JSX.Element
  ellipsis?: boolean
  isPlaceholder?: boolean
}>

export const UneditableTextField = ({
  children,
  addOn = null,
  ellipsis = false,
  isPlaceholder = false,
  className = '',
}: UneditableTextFieldProps) => (
  <StyledUneditableContainer className={cc(['kirk-uneditableTextField', className])}>
    <StyledUneditableTextField>
      {addOn}
      <div
        className={cc([
          'kirk-uneditableTextField-label',
          { 'kirk-uneditableTextField-label--ellipsis': ellipsis },
          { 'kirk-uneditableTextField-label--placeholder': isPlaceholder },
        ])}
      >
        {children}
      </div>
    </StyledUneditableTextField>
  </StyledUneditableContainer>
)
