import React from 'react'
import cc from 'classcat'

import style from 'fakeTextField/style'

export interface FakeTextFieldProps {
  readonly children: JSX.Element|string,
  readonly className?: Classcat.Class,
  readonly addOn?: JSX.Element,
  readonly href?: JSX.Element|string,
  readonly ellipsis?: boolean
}

export const FakeTextField = ({
  children, className = '', addOn = null, ellipsis = false, href,
}:FakeTextFieldProps) => {
  let Component: tag
  let props = {}
  if (href && typeof href !== 'string') {
    Component = href.type
    props = { ...href.props }
  } else if (typeof href === 'string' && href.length > 0) {
    Component = 'a'
    props = { href }
  } else {
    Component = 'div'
  }

  return (
    <Component className={cc(['fakeTextField', className])} { ...props }>
      { addOn }
      <div className={cc(['fakeTextField-label', { 'fakeTextField-label--ellipsis': ellipsis }])}>
        { children }
      </div>
      <style jsx>{style}</style>
    </Component>
  )
}

export default FakeTextField
