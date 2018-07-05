import React, { PureComponent } from 'react'
import cc from 'classcat'
import isEmpty from 'lodash.isempty'

import { color } from '_utils/branding'

export enum SmokeType {
  ON = 'on',
  OFF = 'off',
  DEFAULT = 'default',
}

interface SmokeIconProps extends Icon {
  readonly status?: SmokeType,
}

class SmokeIcon extends PureComponent<SmokeIconProps> {
  static defaultProps: SmokeIconProps = {
    className: '',
    iconColor: color.icon,
    size: 24,
    title: '',
    status: SmokeType.DEFAULT,
  }

  render() {
    const { className, iconColor, size, title, status } = this.props
    const highlightedIconColor = status === 'on' ? color.iconHighlight : iconColor
    return (
      <svg
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        className={cc(['kirk-icon', className])}
        width={size}
        height={size}
        aria-hidden={isEmpty(title)}
      >
        { title && <title>{title}</title> }

        { (status === 'default' || status === 'on') && (
          <g>
            <path
              fill={highlightedIconColor}
              // tslint:disable-next-line:max-line-length
              d="M22.558,17.817L8.371,9.626C7.908,9.359,7.27,9.532,7.004,9.992l-1.518,2.629c-0.275,0.477-0.111,1.09,0.366,1.366l14.188,8.191c0.151,0.087,0.324,0.133,0.498,0.133c0.356,0,0.688-0.19,0.867-0.499l1.518-2.629C23.198,18.706,23.035,18.094,22.558,17.817z M20.54,21.312C20.54,21.312,20.539,21.312,20.54,21.312l-14.188-8.19l1.518-2.629l14.187,8.191L20.54,21.312z"
            />
	          <path
              fill={highlightedIconColor}
              // tslint:disable-next-line:max-line-length
              d="M4.237,5.03C4.471,5.175,4.78,5.103,4.925,4.868l1.14-1.843c1.002-1.619,3.079-2.142,4.727-1.19l5.47,3.158c0.693,0.4,1.463,0.605,2.242,0.605c0.391,0,0.784-0.052,1.172-0.155c1.161-0.312,2.132-1.056,2.731-2.097l0.234-0.406c0.139-0.239,0.057-0.545-0.183-0.683c-0.238-0.136-0.545-0.057-0.683,0.183l-0.235,0.406c-0.467,0.81-1.221,1.389-2.124,1.63c-0.904,0.243-1.846,0.118-2.655-0.35l-5.47-3.158c-2.121-1.225-4.79-0.552-6.078,1.53l-1.14,1.843C3.93,4.576,4.002,4.884,4.237,5.03z"
            />
            <path
              fill={highlightedIconColor}
              // tslint:disable-next-line:max-line-length
              d="M10.52,3.568C9.325,2.878,7.794,3.289,7.105,4.483L6.611,5.338C6.473,5.577,6.555,5.883,6.794,6.021c0.237,0.138,0.544,0.056,0.683-0.183l0.494-0.854c0.2-0.347,0.524-0.595,0.911-0.699c0.388-0.104,0.791-0.05,1.138,0.15l5.152,2.975c0.079,0.045,0.165,0.067,0.25,0.067c0.172,0,0.341-0.089,0.433-0.25c0.139-0.239,0.057-0.545-0.183-0.683L10.52,3.568z"
            />
            <path
              fill={highlightedIconColor}
              // tslint:disable-next-line:max-line-length
              d="M3.183,6.727C2.944,6.588,2.638,6.67,2.5,6.91l-2,3.464c-0.138,0.239-0.056,0.545,0.183,0.683c0.079,0.045,0.165,0.067,0.25,0.067c0.173,0,0.341-0.089,0.434-0.25l2-3.464C3.504,7.171,3.422,6.865,3.183,6.727z"
            />
	          <path
              fill={highlightedIconColor}
              // tslint:disable-next-line:max-line-length
              d="M5.183,8.067C4.944,7.929,4.638,8.01,4.5,8.25l-2,3.464c-0.138,0.239-0.056,0.545,0.183,0.683c0.079,0.046,0.165,0.067,0.25,0.067c0.173,0,0.341-0.09,0.434-0.25l2-3.464C5.504,8.511,5.422,8.205,5.183,8.067z"
            />
          </g>
        )}

        { status === 'off' && (
          <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <path
              stroke={color.iconFaded}
              // tslint:disable-next-line:max-line-length
              transform="translate(14.204966, 16.902203) rotate(-150.000000) translate(-14.204966, -16.902203)"
              // tslint:disable-next-line:max-line-length
              d="M6.01418099,14.884254 L22.3957509,14.884254 L22.3957509,14.884254 C22.6718932,14.884254 22.8957509,15.1081116 22.8957509,15.384254 L22.8957509,18.4201524 L22.8957509,18.4201524 C22.8957509,18.6962948 22.6718932,18.9201524 22.3957509,18.9201524 L6.01418099,18.9201524 L6.01418099,18.9201524 C5.73803862,18.9201524 5.51418099,18.6962948 5.51418099,18.4201524 L5.51418099,15.384254 L5.51418099,15.384254 C5.51418099,15.1081116 5.73803862,14.884254 6.01418099,14.884254 Z"
            />
            <polyline
              stroke={color.iconFaded}
              stroke-linecap="round"
              // tslint:disable-next-line:max-line-length
              transform="translate(1.603011, 9.642054) rotate(-150.000000) translate(-1.603011, -9.642054)"
              points="1.10301136 7.64205363 1.10301136 11.6420537 1.10301136 11.6420537"
            />
            <polyline
              stroke={color.iconFaded}
              stroke-linecap="round"
              // tslint:disable-next-line:max-line-length
              transform="translate(3.933013, 10.982051) rotate(-150.000000) translate(-3.933013, -10.982051)"
              points="3.43301316 8.98205132 3.43301316 12.9820513 3.43301316 12.9820513"
            />
            <path
              stroke={color.iconFaded}
              stroke-linecap="round"
              // tslint:disable-next-line:max-line-length
              transform="translate(10.330288, 6.760456) scale(-1, 1) rotate(-30.000000) translate(-10.330288, -6.760456)"
              // tslint:disable-next-line:max-line-length
              d="M7.39847763,5.26702579 L7.39847763,5.26702579 L11.2620983,5.26702579 L11.2620983,5.26702579 C12.3666678,5.26702579 13.2620983,6.1624563 13.2620983,7.26702579 L13.2620983,8.25388607"
            />
            <path
              stroke={color.iconFaded}
              stroke-linecap="round"
              // tslint:disable-next-line:max-line-length
              transform="translate(13.354646, 4.647114) scale(-1, 1) rotate(-30.000000) translate(-13.354646, -4.647114)"
              // tslint:disable-next-line:max-line-length
              d="M6.16506325,-0.609455613 L6.16506325,-0.141216059 L6.16506325,-0.141216059 C6.16506325,2.06792294 7.95592425,3.85878394 10.1650632,3.85878394 L16.4804851,3.85878394 L16.4804851,3.85878394 C18.642492,3.85878394 20.4132271,5.57672046 20.4786531,7.73773719 L20.5442283,9.90368411"
            />
            <path
              d="M0.5,23.5 L22.5,1.5"
              stroke={color.danger}
              fill={color.iconFaded}
              fill-rule="nonzero"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M0.5,22.5 L22.5,0.5"
              stroke={color.white}
              fill={color.iconFaded}
              fill-rule="nonzero"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
        )}
      </svg>
    )
  }
}

export default SmokeIcon
