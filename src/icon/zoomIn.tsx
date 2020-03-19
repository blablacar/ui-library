// tslint:disable:max-line-length
import React from 'react'
import BaseIcon from '_utils/icon'
import { BaseIconDefaultProps } from '_utils/icon/BaseIcon'

export const ZoomInIcon = (props: Icon) => (
  <BaseIcon {...props} viewBox="0 0 18 18">
    <path
      fillRule="evenodd"
      d="M9 0c.244 0 .446.175.488.407l.008.09v8.006h8.008a.496.496 0 01.09.985l-.09.008H9.496v8.008a.496.496 0 01-.984.09l-.008-.09-.001-8.008H.496a.496.496 0 01-.09-.984l.09-.008 8.007-.001V.496C8.504.222 8.727 0 9 0z"
    />
  </BaseIcon>
)

ZoomInIcon.defaultProps = BaseIconDefaultProps

export default React.memo(ZoomInIcon)
