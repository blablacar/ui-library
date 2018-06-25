import React, { PureComponent } from 'react'
import cc from 'classcat'
import isEmpty from 'lodash.isempty'
import css from 'styled-jsx/css'

import { color } from '_utils/branding'

interface CircleProps extends Icon {
  readonly absolute?: boolean,
  readonly spinning?: boolean,
}

const offset = 187
const duration = '1.4s'

const style = css`
  @keyframes dash {
    0% { stroke-dashoffset: ${offset} }
    50% {
      stroke-dashoffset: ${offset / 4};
      transform:rotate(135deg);
    }
    100% {
      stroke-dashoffset: ${offset};
      transform:rotate(450deg);
    }
  }
  @keyframes rotator {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(270deg); }
  }

  .spinning {
    animation: rotator ${duration} linear infinite;
  }

  circle {
    stroke-width: 6;
    fill: none;
    stroke-linecap: round;
  }

  .spinning circle {
    stroke-dasharray: ${offset};
    stroke-dashoffset: 0;
    transform-origin: center;
    animation:
      dash ${duration} ease-in-out infinite;
  }

  .absolute {
    position: absolute;
  }
`

class CircleIcon extends PureComponent<CircleProps> {
  static defaultProps: CircleProps = {
    absolute: false,
    className: '',
    iconColor: color.icon,
    size: 24,
    spinning: false,
    title: '',
  }

  render() {
    const { className, absolute, iconColor, spinning, size, title } = this.props
    return (
      <svg
        viewBox="0 0 66 66"
        xmlns="http://www.w3.org/2000/svg"
        className={cc(['kirk-icon', className, { spinning, absolute }])}
        width={size}
        height={size}
        aria-hidden={isEmpty(title)}
      >
        { title && <title>{title}</title> }
        <circle cx="33" cy="33" r="30" fill="none" stroke={iconColor} />
        <style jsx>{style}</style>
      </svg>
    )
  }
}

export default CircleIcon
