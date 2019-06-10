import React from 'react'

import { color } from '_utils/branding'
import Loader from 'loader'
import CircleIcon from 'icon/circleIcon'

interface RadioProps {
  readonly isChecked?: boolean
  readonly isLoading?: boolean
}

const Radio = ({ isChecked = false, isLoading = false }: RadioProps) => {
  if (isLoading) {
    return <Loader size={24} inline />
  }
  if (isChecked) {
    return <CircleIcon iconColor={color.primary} innerDisc />
  }
  return <CircleIcon iconColor={color.primary} />
}

export default Radio
