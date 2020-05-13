import React from 'react'

import CheckIcon from '../../icon/checkIcon'
import CircleIcon from '../../icon/circleIcon'
import Loader from '../../loader'
import { color } from '../branding'

interface CheckboxIconProps {
  readonly isChecked?: boolean
  readonly isLoading?: boolean
}

const CheckboxIcon = ({ isChecked = false, isLoading = false }: CheckboxIconProps) => {
  if (isLoading) {
    return <Loader size={24} inline />
  }
  if (isChecked) {
    return <CheckIcon iconColor={color.white} backgroundColor={color.blue} thin />
  }
  return <CircleIcon iconColor={color.blue} />
}

export default CheckboxIcon
