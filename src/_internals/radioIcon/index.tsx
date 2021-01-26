import React from 'react'

import { color } from '../../_utils/branding'
import { CircleIcon } from '../../icon/circleIcon'
import { Loader } from '../../loader'

export type RadioIconProps = Readonly<{
  isChecked?: boolean
  isLoading?: boolean
  isDisabled?: boolean
}>

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
