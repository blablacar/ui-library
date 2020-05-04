import styled from 'styled-components'

import { color, font, responsiveBreakpoints, space } from '_utils/branding'

import TheVoice from './TheVoice'

const StyledTheVoice = styled(TheVoice)`
  & {
    text-align: center;
    font-size: ${font.xl.size};
    margin: ${space.xxl} 0;
  }

  &.kirk-title--inverse {
    color: ${color.white};
  }

  @media (${responsiveBreakpoints.isMediaSmall}) {
    text-align: left;
    margin: ${space.xl} 0;
  }
`

export { TheVoiceProps } from './TheVoice'
export default StyledTheVoice
