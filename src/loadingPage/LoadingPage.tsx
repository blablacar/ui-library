import React from 'react'

import { TheVoice } from '../theVoice'
import { StyledLoadingPage } from './LoadingPage.style'

export type LoadingPageProps = Readonly<{
  icon?: React.ElementType
  iconColor?: string
  iconBackground?: string
  title?: string
}>

export const LoadingPage = ({
  icon: DisplayedIcon,
  iconColor,
  iconBackground,
  title,
}: LoadingPageProps) => (
  <StyledLoadingPage>
    <div className="content-container">
      {DisplayedIcon && (
        <div className="logo" style={{ backgroundColor: iconBackground }}>
          <DisplayedIcon iconColor={iconColor} />
        </div>
      )}
      {title && <TheVoice>{title}</TheVoice>}
    </div>
  </StyledLoadingPage>
)
