import React from 'react'

import { color } from '../_utils/branding'
import { Button, ButtonStatus } from '../button'
import { Loader } from '../loader'
import { TextTitle } from '../typography/title'
import {
  StyledCta,
  StyledFilterBar,
  StyledSupplyInfo,
  StyledSupplyInfoItem,
} from './FilterBar.style'

export type FilterBarSupplyInfo = {
  icon: React.ElementType
  iconTitle: string
  liquidity: React.ReactNode
  ariaLabel: string
  isDisabled?: boolean
}

export type FilterBarProps = Readonly<{
  ctaText: string
  onClick: (event: React.MouseEvent<HTMLElement>) => void
  supplyInfo: Array<FilterBarSupplyInfo>
  isLoading?: boolean
}>

export const FilterBar = ({ supplyInfo, isLoading = false, onClick, ctaText }: FilterBarProps) => (
  <StyledFilterBar>
    {isLoading ? (
      <Loader inline size={32} />
    ) : (
      <StyledSupplyInfo>
        {supplyInfo.map(supply => (
          <StyledSupplyInfoItem key={supply.ariaLabel} aria-label={supply.ariaLabel}>
            <supply.icon
              iconColor={color.midnightGreen}
              size="32"
              isDisabled={supply.isDisabled}
              title={supply.iconTitle}
            />
            <TextTitle isDisabled={supply.isDisabled}>{supply.liquidity}</TextTitle>
          </StyledSupplyInfoItem>
        ))}
      </StyledSupplyInfo>
    )}
    <StyledCta>
      <Button
        status={ButtonStatus.PRIMARY}
        onClick={evt => {
          if (!isLoading) {
            onClick(evt)
          }
        }}
      >
        {ctaText}
      </Button>
    </StyledCta>
  </StyledFilterBar>
)
