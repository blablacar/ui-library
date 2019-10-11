import React, { Fragment } from 'react'
import cc from 'classcat'
import isEmpty from 'lodash.isempty'
import { KirkCard } from '_utils/layout'

export interface UneditableTextFieldProps {
  readonly children: JSX.Element | string
  readonly className?: Classcat.Class
  readonly addOn?: JSX.Element
  readonly href?: JSX.Element | string
  readonly ellipsis?: boolean
}

export const UneditableTextField = ({
  children,
  className = '',
  addOn = null,
  ellipsis = false,
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


  const element = React.createElement(
    componentType,
    {
      className: cc(['uneditableTextField', className]),
      ...props,
    },
    <Fragment>
      {addOn}
      <div
        className={cc([
          'uneditableTextField-label',
          { 'uneditableTextField-label--ellipsis': ellipsis },
        ])}
      >
        {children}
      </div>
    </Fragment>,
  )
  return <KirkCard>
    {element}
  </KirkCard>
}

export default UneditableTextField
