import styled from 'styled-components'
import { space, color, responsiveBreakpoints } from '_utils/branding'

import TheVoice from './TheVoice'

const StyledTheVoice = styled(TheVoice)`
  margin: 0;
  padding: ${space.xl} 0 calc(${space.xl} + ${space.m}); /* 32px it's not en scale but on spec :() */
  color: ${props => (props.isInverted ? color.white : '')};

  @media (${responsiveBreakpoints.isMediaLarge}) {
    text-align: center;
  }
`

export { TheVoiceProps } from './TheVoice'
export default StyledTheVoice
