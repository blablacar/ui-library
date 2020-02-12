import styled from 'styled-components'
import { responsiveBreakpoints, space, font, radius } from '_utils/branding'

import MediaContentSection from './mediaContentSection'

const StyledMediaContentSection = styled(MediaContentSection)`
  & {
    margin-top: ${space.xl};
    margin-bottom: ${space.xl};
  }

  & .kirk-media-content-title {
    font-size: ${font.xl.size};
    line-height: ${font.xl.lineHeight};
  }

  & .kirk-media-content-wrapper {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }

  & .kirk-media-content-img {
    min-height: 320px;
    background-position: 50% 30%;
    background-repeat: no-repeat;
    background-size: cover;
    margin-right: ${space.xl};
    border-radius: ${radius.s};
  }

  & .kirk-media-content-button {
    margin-top: ${space.l};
  }

  @media (${responsiveBreakpoints.isMediaLarge}) {
    & .kirk-media-content-title {
      /* Remove padding top from subheader to allow proper vertical centering. */
      padding-top: 0;
    }
  }

  @media (${responsiveBreakpoints.isMediaSmall}) {
    & .kirk-media-content-img {
      height: 136px;
      min-height: 0;
      margin-left: -${space.xl};
      margin-right: -${space.xl};
    }

    & .kirk-media-content-wrapper {
      align-items: center;
    }
  }
`

export { MediaContentSectionProps } from './mediaContentSection'
export default StyledMediaContentSection
