import React from 'react'

import { CircleIcon } from '../../icon/circleIcon'
import { Loader } from '../../loader'
import { color } from '../branding'

export interface RadioIconProps {
  readonly isChecked?: boolean
  readonly isLoading?: boolean
  readonly isDisabled?: boolean
}

export const RadioIcon = ({
  isChecked = false,
  isLoading = false,
  isDisabled = false,
}: RadioIconProps) => {
  if (isLoading) {
    return <Loader size={24} inline />
  }
  if (isChecked) {
    return <CircleIcon iconColor={color.blue} isDisabled={isDisabled} innerDisc />
  }
  return <CircleIcon iconColor={color.blue} isDisabled={isDisabled} />
}

export default RadioIcon
