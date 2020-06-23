import React from 'react'

import { color } from '../../_utils/branding'
import { CheckIcon } from '../../icon/checkIcon'
import { CircleIcon } from '../../icon/circleIcon'
import { Loader } from '../../loader'

export interface CheckboxIconProps {
  readonly isChecked?: boolean
  readonly isLoading?: boolean
  readonly isDisabled?: boolean
}

export const CheckboxIcon = ({
  isChecked = false,
  isLoading = false,
  isDisabled = false,
}: CheckboxIconProps) => {
  if (isLoading) {
    return <Loader size={24} inline />
  }
  if (isChecked) {
    return (
      <CheckIcon
        backgroundColor={color.blue}
        iconColor={color.white}
        isDisabled={isDisabled}
        thin
      />
    )
  }
  return <CircleIcon iconColor={color.blue} isDisabled={isDisabled} />
}

export default CheckboxIcon
