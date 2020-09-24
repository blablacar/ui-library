import styled from 'styled-components'

import { componentSizes, space } from '../_utils/branding'
import { normalizeHorizontally } from '../layout/layoutNormalizer'

const supplyItemHeight = '52px'

export const StyledFilterBar = styled.div`
  display: flex;
  align-items: center;
  ${normalizeHorizontally};
  padding-top: ${space.xl};
  padding-bottom: ${space.xl};
  max-width: ${componentSizes.smallSectionWidth};
  margin: auto;
  /* Make the button not moving up & down when Loader becomes visible */
  min-height: 100px;
`

export const StyledSupplyInfo = styled.ul`
  display: flex;
`
export const StyledSupplyInfoItem = styled.li`
  list-style: none;
  padding: 0;
  margin: 0;
  margin-right: ${space.l};
  display: block;
  text-align: center;
  height: ${supplyItemHeight}; /** Avoids the button to move up & down with isLoading prop */

  svg {
    display: block;
  }
`

export const StyledCta = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
`
