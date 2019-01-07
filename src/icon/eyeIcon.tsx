import React, { PureComponent } from 'react'
import cc from 'classcat'
import isEmpty from 'lodash.isempty'

import { color } from '_utils/branding'

interface EyeProps extends Icon {
  readonly off?: boolean
}

class EyeIcon extends PureComponent<EyeProps> {
  static defaultProps: EyeProps = {
    className: '',
    iconColor: color.icon,
    size: 24,
    title: '',
    off: false,
  }

  render() {
    const { className, iconColor, size, title, off } = this.props
    const svgProps = {
      xmlns: 'http://www.w3.org/2000/svg',
      width: size,
      height: size,
      viewBox: '0 0 24 24',
      fill: 'none',
      stroke: iconColor,
      strokeWidth: '1',
      strokeLinecap: 'round' as 'round',
      strokeLinejoin: 'round' as 'round',
      className: cc(['kirk-icon', className]),
      contentScriptType: 'application/ecmascript',
      'aria-hidden': isEmpty(title),
    }
    /* tslint:disable */
    return off ? (
      <svg {...svgProps}>
        {title && <title>{title}</title>}
        <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
        <line x1="1" y1="1" x2="23" y2="23" />
      </svg>
    ) : (
      <svg {...svgProps}>
        {title && <title>{title}</title>}
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    )
    /* tslint:enable */
  }
}

export default EyeIcon
