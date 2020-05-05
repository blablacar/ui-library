import styled from 'styled-components'

import { color, responsiveBreakpoints, space } from '_utils/branding'

import TheVoice from './TheVoice'

const StyledTheVoice = styled(TheVoice)`
  /* @TODO: Align scale and spec
  /* 32px it's not part of current scale. 4 it could be calculated by the base unit space.s  */
  --space-bottom: 32px;
  /* 40px is an exception on font scale  */
  --font-size-desktop: 40px;

  margin: 0;
  padding: ${space.xl} 0 var(--space-bottom);
  color: ${props => (props.isInverted ? color.white : '')};
  white-space: pre-line;

  @media (${responsiveBreakpoints.isMediaLarge}) {
    text-align: center;
    font-size: var(--font-size-desktop);
  }
`

export { TheVoiceProps } from './TheVoice'
export default StyledTheVoice
