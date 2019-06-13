import React from 'react'

import { color } from '_utils/branding'
import Loader from 'loader'
import CircleIcon from 'icon/circleIcon'
import CheckIcon from 'icon/checkIcon'

interface CheckboxIconProps {
  readonly isChecked?: boolean
  readonly isLoading?: boolean
}

const CheckboxIcon = ({ isChecked = false, isLoading = false }: CheckboxIconProps) => {
  if (isLoading) {
    return <Loader size={24} inline />
  }
  if (isChecked) {
    return <CheckIcon iconColor={color.white} backgroundColor={color.primary} thin />
  }
  return <CircleIcon iconColor={color.primary} />
}

export default CheckboxIcon
