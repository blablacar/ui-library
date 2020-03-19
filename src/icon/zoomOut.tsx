// tslint:disable:max-line-length
import React from 'react'
import BaseIcon from '_utils/icon'
import { BaseIconDefaultProps } from '_utils/icon/BaseIcon'

export const ZoomOutIcon = (props: Icon) => (
  <BaseIcon {...props} viewBox="0 0 18 2">
    <path
      fillRule="evenodd"
      d="M17.504.5c.274 0 .496.224.496.5a.5.5 0 01-.407.492l-.09.008H.497A.498.498 0 010 1 .5.5 0 01.407.508L.497.5h17.007z"
    />
  </BaseIcon>
)

ZoomOutIcon.defaultProps = BaseIconDefaultProps

export default React.memo(ZoomOutIcon)
