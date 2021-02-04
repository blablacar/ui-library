import React from 'react'

import { IconPropsWithStatus, StatusIcon } from '../_utils/icon/status'

export const MagazineIcon = (props: IconPropsWithStatus) => (
  <StatusIcon {...props}>
    <g fill="none" fillRule="evenodd">
      <path
        d="M5.913 12.37a.5.5 0 01.09.992l-.09.008-2.979-.001v6.457c0 .638.492 1.169 1.114 1.233l.126.006a.5.5 0 110 1c-1.18 0-2.151-.92-2.234-2.08l-.005-.159V12.87a.5.5 0 01.41-.492l.09-.008h3.478z"
        fill={props.iconColor}
        fillRule="nonzero"
      />
      <path
        d="M16.348 6.783h1.739-1.74zm0 3.478h1.739-1.74zM9.39 13.739h8.696-8.696zm0 3.478h8.696-8.696zm0-10.434h3.479v3.478H9.39V6.783z"
        stroke={props.iconColor}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.069 22.056l.105.01h15.652a2.244 2.244 0 002.24-2.24V2.435a.5.5 0 00-.5-.5H5.912a.5.5 0 00-.5.5v17.391c0 .638-.491 1.169-1.113 1.233l-.126.006c-.63 0-.665.892-.105.991zM21.065 2.934v16.892l-.006.126a1.245 1.245 0 01-1.233 1.113H6.035l.046-.068c.21-.34.332-.742.332-1.17V2.933h14.652z"
        fill={props.iconColor}
        fillRule="nonzero"
      />
    </g>
  </StatusIcon>
)

MagazineIcon.defaultProps = StatusIcon.defaultProps
