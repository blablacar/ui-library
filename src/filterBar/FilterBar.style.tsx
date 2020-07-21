import styled from 'styled-components'

import { color, space } from '../_utils/branding'
import { normalizeHorizontally } from '../layout/layoutNormalizer'
import { TextTitle } from '../typography/title'

const supplyItemHeight = '52px'

export const StyledFilterBar = styled.div`
  display: flex;
  align-items: center;
  ${normalizeHorizontally};
  padding-top: ${space.xl};
  padding-bottom: ${space.xl};
`

export const StyledSupplyInfo = styled.ul`
  display: flex;

  li {
    list-style: none;
    padding: 0;
    margin: 0;
    margin-right: ${space.l};
    display: block;
    text-align: center;
    height: ${supplyItemHeight}; /** Avoids the button to move up & down with isLoading prop */
  }

  li svg {
    display: block;
  }
`

export const StyledCta = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
`

export const StyledSupplyText = styled(TextTitle)`
  color: ${props => (props.isDisabled ? color.gray : '')};
`
