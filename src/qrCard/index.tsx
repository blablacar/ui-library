import styled from 'styled-components'
import { space } from '_utils/branding'

import QrCard from './QrCard'

const StyledQrCard = styled(QrCard)`
  & {
    display: block;
    padding: ${space.none} ${space.xl};
  }

  & img {
    width: 100%;
    padding: ${space.m} ${space.xl};
  }
`

export { QrCardProps } from './QrCard'
export default StyledQrCard
