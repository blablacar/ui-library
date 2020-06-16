import styled from 'styled-components'

import { color } from '../_utils/branding'
import { Disclaimer } from './Disclaimer'

const StyledDisclaimer = styled(Disclaimer)`
  .kirk-item {
    color: ${color.lightMidningGreen};
  }
`

export { DisclaimerProps } from './Disclaimer'
export { StyledDisclaimer as Disclaimer }
export default StyledDisclaimer
