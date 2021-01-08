import React from 'react'

import { BaseIcon, BaseIconDefaultProps, Icon } from '../_utils/icon'

export const CarMvpIcon = (props: Icon) => (
  <BaseIcon {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.87 10.217V7.174c0-.729.529-1.304 1.163-1.304h2.315v4.347H2.87zm4.347 0h3.478V5.87H7.217v4.347zM11.13 5h2.092c2.066 0 2.995 1.052 4.825 5.036.027.059.04.12.04.181h3.043c.48 0 .87.39.87.87v5.217c0 .48-.39.87-.87.87h-2.262a2.392 2.392 0 01-4.583.065H9.282a2.392 2.392 0 01-4.583-.065H2.87a.87.87 0 01-.869-.87V7.174C2 5.98 2.901 5 4.033 5h7.097zm3.062 11.24a2.392 2.392 0 014.757.064h2.181v-5.217H2.87v5.217h1.75a2.392 2.392 0 014.755-.065h4.817zM7.001 15c.744 0 1.363.534 1.495 1.24h-.039v.724A1.522 1.522 0 117.001 15zm4.564-9.13v4.347h5.608c-1.638-3.54-2.378-4.347-3.95-4.347h-1.658zm6.524 10.652a1.522 1.522 0 11-3.044 0 1.522 1.522 0 013.044 0z"
      fill={props.iconColor}
    />
  </BaseIcon>
)

CarMvpIcon.defaultProps = BaseIconDefaultProps
