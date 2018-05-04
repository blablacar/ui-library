import React from 'react'
import cc from 'classcat'

import Button from 'button'
import style from 'caption/style'

export const renderSecondary = (href?: string, secondaryText?: string) => href
  ? <Button unstyled href={href}>{secondaryText}</Button>
  : <span>{secondaryText}</span>

interface Caption {
  readonly className?: Classcat.Class,
  readonly children: any,
  readonly isoDate: string,
  readonly href?: string,
  readonly secondaryText?: string,
}

const Caption = ({ className, children, href, secondaryText, isoDate }: Caption) => (
  <div className={cc(['kirk-caption', className])}>
    <time dateTime={isoDate || null}>{children}</time>
    { secondaryText &&
      <span>
        {' '}-{' '}{renderSecondary(href, secondaryText)}
      </span>
    }
    <style jsx>{style}</style>
  </div>
)

export default Caption

// @TODO

// isoDate(props, propName, componentName) {
//   if (props[propName]) {
//     const validDate = new Date(props[propName]).getTime()
//     if (isNaN(validDate)) {
//       return new Error(
//         `Invalid prop ${propName} supplied to ${componentName}. Not a valid ISO date.`,
//       )
//     }
//   }
//   return null
// },
