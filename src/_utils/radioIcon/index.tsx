import React from 'react'

import { color } from '../branding'
import CircleIcon from '../../icon/circleIcon'
import Loader from '../../loader'

interface RadioIconProps {
  readonly isChecked?: boolean
  readonly isLoading?: boolean
}

const RadioIcon = ({ isChecked = false, isLoading = false }: RadioIconProps) => {
  if (isLoading) {
    return <Loader size={24} inline />
  }
  if (isChecked) {
    return <CircleIcon iconColor={color.blue} innerDisc />
  }
  return <CircleIcon iconColor={color.blue} />
}

export default RadioIcon
