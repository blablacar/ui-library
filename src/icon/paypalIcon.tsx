import React from 'react'

import { BaseIcon, BaseIconDefaultProps, Icon } from '../_utils/icon'

export const PaypalIcon = (props: Icon) => (
  <BaseIcon {...props}>
    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.275 7.5c-.064 0-.183 1.976-.355 5.93l-.024.154a.716.716 0 01.707-.606h1.474c2.895 0 5.161-1.176 5.824-4.578.02-.1.036-.198.051-.294-.167-.088-.481-.541-.677-.606-.027-.01-2.36-.01-7 0z"
        fill="#10235B"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.668 8.658a2.492 2.492 0 00-.716-.552 8.238 8.238 0 01-.051.294c-.663 3.402-2.93 4.578-5.824 4.578h-1.474a.716.716 0 00-.707.606l.024-.155-.779 4.94-.214 1.357a.377.377 0 00.373.436h2.614c.309 0 .572-.225.62-.53l.026-.133.493-3.123.031-.172a.629.629 0 01.621-.531h.391c2.533 0 4.516-1.029 5.095-4.004.242-1.243.117-2.281-.523-3.01z"
        fill="#00AFE5"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.757 8.123a.63.63 0 01.621-.53h3.938c.466 0 .901.03 1.299.094a5.694 5.694 0 01.644.143l.149.046c.195.065.377.142.544.23.197-1.257-.001-2.113-.681-2.887C16.522 4.365 15.169 4 13.439 4H8.416a.719.719 0 00-.71.607L5.614 17.87a.431.431 0 00.426.498h3.101l.78-4.94.836-5.306z"
        fill="#103D72"
      />
    </g>
  </BaseIcon>
)

PaypalIcon.defaultProps = BaseIconDefaultProps
