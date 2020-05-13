import styled from 'styled-components'

import { space } from '../_utils/branding'

import QrCard from './QrCard'

const qrCardMaxWidth = '450px'

const StyledQrCard = styled(QrCard)`
  & {
    display: block;
    padding: ${space.none} ${space.xl};
    max-width: ${qrCardMaxWidth};
  }

  & img {
    width: 100%;
    padding: ${space.m} ${space.xl};
  }
`

export { QrCardProps } from './QrCard'
export default StyledQrCard
