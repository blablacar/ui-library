import styled from 'styled-components'

import { space } from '../_utils/branding'

const qrCardMaxWidth = '450px'

export const StyledQrCard = styled.div`
  & .kirk-card {
    display: block;
    padding: ${space.none};
    max-width: ${qrCardMaxWidth};
  }

  & img {
    width: 100%;
    padding: ${space.m} ${space.xl};
  }
`
