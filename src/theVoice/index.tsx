import styled from 'styled-components'
import { space, font, responsiveBreakpoints } from '_utils/branding'

import TheVoice from './TheVoice'

const StyledTheVoice = styled(TheVoice)`
  & {
    text-align: center;
    font-size: ${font.xl.size};
    margin: ${space.xxl} 0;
  }

  @media (max-width: ${responsiveBreakpoints.small}) {
    text-align: left;
    font-size: ${font.l.size};
    margin: ${space.xl} 0;
  }
`

export default StyledTheVoice
