import styled from 'styled-components'

import { space } from '../_utils/branding'
import { TextBody } from '../typography/body'
import { TextSubHeaderStrong } from '../typography/subHeaderStrong'

export const StyledTripCardSample = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  flex-wrap: wrap;
`

export const StyledPriceBlock = styled.div`
  margin: 0 0 ${space.xl} ${space.m};
  text-align: right;
`

export const StyledPriceTextBody = styled(TextBody)`
  display: block;
`

export const StyledPriceTextSubHeaderStrong = styled(TextSubHeaderStrong)`
  display: block;
`
