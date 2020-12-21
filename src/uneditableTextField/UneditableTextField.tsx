import React from 'react'
import cc from 'classcat'
import isEmpty from 'lodash.isempty'

import { StyledUneditableTextField } from './UneditableTextField.style'

export type UneditableTextFieldProps = Readonly<{
  children: JSX.Element | string
  className?: string
  addOn?: JSX.Element
  href?: JSX.Element | string
  ellipsis?: boolean
  isPlaceholder?: boolean
}>

export const UneditableTextField = ({
  children,
  className = '',
  addOn = null,
  ellipsis = false,
  isPlaceholder = false,
  href,
}: UneditableTextFieldProps) => {
  let componentType
  let props: any = {}
  if (href && typeof href !== 'string') {
    componentType = href.type
    props = href.props
  } else if (typeof href === 'string' && !isEmpty(href)) {
    componentType = 'a'
    props = { href }
  } else {
    componentType = 'div'
  }

  return React.createElement(
    componentType,
    {
      className: cc(['kirk-uneditableTextField', className]),
      ...props,
    },
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
    </StyledUneditableTextField>,
  )
}
