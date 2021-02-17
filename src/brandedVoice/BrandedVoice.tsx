import React from 'react'

import { TextBrand } from '../typography/brand'
import { TextSubHeader } from '../typography/subHeader'
import { StyledBrandedVoice, StyledContent, StyledIcon, StyledWrapper } from './BrandedVoice.style'

// Should we consider having icon sizes in branding?
const BRANDED_VOICE_ICON_SIZE = 40

export type BrandedVoiceProps = Readonly<{
  label: string
  subLabel: string
  icon: JSX.Element
}>

export const BrandedVoice = ({ label, subLabel, icon }: BrandedVoiceProps) => (
  <StyledBrandedVoice>
    <StyledWrapper>
      <StyledIcon>
        {React.cloneElement(icon, { ...icon.props, size: BRANDED_VOICE_ICON_SIZE })}
      </StyledIcon>
      <StyledContent>
        <TextBrand isInverted>{label}</TextBrand>
        <TextSubHeader>{subLabel}</TextSubHeader>
      </StyledContent>
    </StyledWrapper>
  </StyledBrandedVoice>
)
