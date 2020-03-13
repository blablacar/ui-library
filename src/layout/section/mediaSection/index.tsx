import styled from 'styled-components'
import { responsiveBreakpoints, componentSizes, space } from '_utils/branding'

import MediaSection from './mediaSection'

const StyledMediaSection = styled(MediaSection)`
  @media (${responsiveBreakpoints.isMediaLarge}) {
    & {
      padding-left: ${space.xl};
      padding-right: ${space.xl};
      margin-left: auto;
      margin-right: auto;
      max-width: ${componentSizes.smallSectionWidth};
    }
  }
`

export { MediaSectionProps } from './mediaSection'
export default StyledMediaSection
