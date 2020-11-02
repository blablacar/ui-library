import styled from 'styled-components'

import { color, componentSizes } from '../_utils/branding'

export const StyledBullet = styled.div`
  box-sizing: border-box;
  width: ${componentSizes.bulletSize};
  height: ${componentSizes.bulletSize};
  background-color: ${color.white};
  border: 2px solid ${color.midnightGreen};
  border-radius: 50%;

  &.kirk-bullet--addon {
    border-color: ${color.gray};
  }

  &.kirk-bullet--small {
    width: ${componentSizes.bulletSizeSmall};
    height: ${componentSizes.bulletSizeSmall};
  }

  &.kirk-bullet--map-active,
  &.kirk-bullet--map-inactive,
  &.kirk-bullet--search {
    border-width: 3px;
  }

  &.kirk-bullet--map-active,
  &.kirk-bullet--map-inactive {
    width: ${componentSizes.bulletSizeMap};
    height: ${componentSizes.bulletSizeMap};
  }

  &.kirk-bullet--search {
    width: ${componentSizes.bulletSizeSearch};
    height: ${componentSizes.bulletSizeSearch};
  }

  &.kirk-bullet--map-active {
    border-color: ${color.midnightGreenDetail};
    box-shadow: 0 0 0 1px ${color.midnightGreen};
  }

  &.kirk-bullet--map-inactive {
    border-color: ${color.gray};
    box-shadow: 0 0 0 1px ${color.lightMidnightGreen};
  }

  &.kirk-bullet--search {
    border-width: 4px;
    border-color: ${color.lightMidnightGreen};
  }
`
