import React from 'react'
import styled from 'styled-components'

import { Item } from '../_internals/item'
import { color } from '../_utils/branding'
import { Button, ButtonStatus } from '../button'
import { QuestionIcon } from '../icon/questionIcon'
import { TextDisplayType } from '../text'

export type DisclaimerProps = Readonly<{
  icon?: React.ReactNode
  children: string | JSX.Element
  // Whether this Disclaimer will be used as caption to another fragment of UI. In that case, it
  // will use some caption visual styles (e.g. smaller font)
  isCaption?: boolean
  // Whether to use a clickable Question mark blue icon on the right side of the Disclaimer or
  // not. Activating this affordance will redirect to deprecatedHelpUrl.
  // This is deprecated, you should use inline links inside the Disclaimer content instead.
  deprecatedHelpUrl?: string
}>

const StyledDisclaimer = styled(Item)`
  .kirk-item {
    color: ${color.lightMidningGreen};
  }
`

const deprecatedHelpButtonIcon = (deprecatedHelpUrl: string): JSX.Element => (
  <Button href={deprecatedHelpUrl} status={ButtonStatus.UNSTYLED} isBubble>
    <QuestionIcon iconColor={color.blue} />
  </Button>
)

export const Disclaimer = ({
  icon,
  isCaption = true,
  children,
  deprecatedHelpUrl = null,
}: DisclaimerProps) => (
  <StyledDisclaimer
    leftBody={children}
    leftBodyDisplay={isCaption ? TextDisplayType.CAPTION : TextDisplayType.BODY}
    leftAddon={icon}
    rightAddon={deprecatedHelpUrl ? deprecatedHelpButtonIcon(deprecatedHelpUrl) : null}
  />
)
