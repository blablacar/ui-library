import React from 'react'

import { color } from '../_utils/branding'
import { Button, ButtonStatus } from '../button'
import { Loader } from '../loader'
import { TextTitle } from '../typography/title'
import { StyledCta, StyledFilterBar, StyledSupplyInfo } from './FilterBar.style'

export interface FilterBarProps {
  readonly ctaText: string
  readonly onClick: (event: React.MouseEvent<HTMLElement>) => void
  readonly supplyInfo: Array<{
    icon: Function
    liquidity: number
    ariaLabel: string
    isDisabled?: boolean
  }>
  readonly isLoading?: boolean
}

export const FilterBar = ({ supplyInfo, isLoading = false, onClick, ctaText }: FilterBarProps) => (
  <StyledFilterBar>
    <StyledSupplyInfo>
      {isLoading ? (
        <li>
          <Loader inline size={32} />
        </li>
      ) : (
        supplyInfo.map(supply => (
          <li aria-label={supply.ariaLabel} key={supply.ariaLabel}>
            <supply.icon iconColor={color.midnightGreen} size="32" isDisabled={supply.isDisabled} />
            <TextTitle isDisabled={supply.isDisabled}>{supply.liquidity}</TextTitle>
          </li>
        ))
      )}
    </StyledSupplyInfo>
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
