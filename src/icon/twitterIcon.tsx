import React, { PureComponent } from 'react'
import cc from 'classcat'
import isEmpty from 'lodash.isempty'

import { color } from '_utils/branding'

class TwitterIcon extends PureComponent<Icon> {
  static defaultProps: Icon = {
    className: '',
    iconColor: color.icon,
    size: 24,
    title: '',
  }

  render() {
    const { className, iconColor, size, title } = this.props
    return (
      <svg
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        className={cc(['kirk-icon', className])}
        width={size}
        height={size}
        aria-hidden={isEmpty(title)}
      >
        {title && <title>{title}</title>}
        <g fill="none" fillRule="evenodd">
          <path
            // tslint:disable-next-line
            d="M22 6.167c-.75.333-1.5.583-2.333.666.833-.5 1.5-1.333 1.833-2.25-.833.5-1.667.834-2.583 1a4.034 4.034 0 0 0-3-1.333 4.09 4.09 0 0 0-4.084 4.083c0 .334 0 .667.084.917-3.5-.167-6.5-1.833-8.5-4.333C3 5.583 2.833 6.25 2.833 7c0 1.417.75 2.667 1.834 3.417-.667 0-1.334-.167-1.834-.5V10c0 2 1.417 3.667 3.25 4-.333.083-.666.167-1.083.167-.25 0-.5 0-.75-.084.5 1.667 2 2.834 3.833 2.834C6.667 18 4.917 18.667 3 18.667c-.333 0-.667 0-1-.084 1.833 1.167 4 1.834 6.25 1.834 7.583 0 11.667-6.25 11.667-11.667v-.5c.833-.583 1.5-1.333 2.083-2.083z"
            fill={iconColor}
            fillRule="nonzero"
          />
        </g>
      </svg>
    )
  }
}

export default TwitterIcon
