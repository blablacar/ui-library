import React from 'react'
import cc from 'classcat'
import isEmpty from 'lodash.isempty'

import style from 'uneditableTextField/style'

export interface UneditableTextFieldProps {
  readonly children: JSX.Element|string,
  readonly className?: Classcat.Class,
  readonly addOn?: JSX.Element,
  readonly href?: JSX.Element|string,
  readonly ellipsis?: boolean
}

export const UneditableTextField = ({
  children, className = '', addOn = null, ellipsis = false, href,
}:UneditableTextFieldProps) => {
  let Component: tag
  let props = {}
  if (href && typeof href !== 'string') {
    Component = href.type
    props = { ...href.props }
  } else if (typeof href === 'string' && !isEmpty(href)) {
    Component = 'a'
    props = { href }
  } else {
    Component = 'div'
  }

  return (
    <Component className={cc(['uneditableTextField', className])} { ...props }>
      { addOn }
      <div className={cc([
        'uneditableTextField-label',
        { 'uneditableTextField-label--ellipsis': ellipsis },
      ])}>
        { children }
      </div>
      <style jsx>{style}</style>
    </Component>
  )
}

export default UneditableTextField
