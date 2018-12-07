import React, { PureComponent } from 'react'
import cc from 'classcat'
import css from 'styled-jsx/css'
import isEmpty from 'lodash.isempty'

import { color } from '_utils/branding'

interface CheckProps extends Icon {
  readonly absolute?: boolean,
  readonly validate?: boolean,
  readonly backgroundColor?: string,
  readonly thin?: boolean,
}

const style = css`.absolute {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
}
.validate path {
  stroke-dasharray: 24;
  stroke-dashoffset: -24;
  stroke-linecap: round;
  animation: dash 0.5s cubic-bezier(0.650, 0.000, 0.450, 1.000) forwards;
}
@keyframes dash {
  to {
    stroke-dashoffset: 0;
  }
}
`

class CheckIcon extends PureComponent<CheckProps> {
  static defaultProps: CheckProps = {
    absolute: false,
    className: '',
    iconColor: color.icon,
    size: 24,
    title: '',
    validate: false,
    backgroundColor: 'transparent',
  }

  render() {
    const { absolute, className, iconColor, size, title, validate, thin } = this.props
    return (
      <svg
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        className={cc(['kirk-icon', className, { validate, absolute }])}
        width={size}
        height={size}
        aria-hidden={isEmpty(title)}
      >
        { title && <title>{title}</title> }
        <path
          d="M6.5 12.5l4 4 8-8"
          fill="none"
          stroke={iconColor}
          strokeWidth={thin ? '1' : '2'}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
        />
        <style jsx>{style}</style>
        <style jsx>{`
          svg {
            background-color: ${this.props.backgroundColor};
            border-radius: 100%;
          }
        `}</style>
      </svg>
    )
  }
}

export default CheckIcon
