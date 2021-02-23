import styled from 'styled-components'

import { font, responsiveBreakpoints, space } from '../_utils/branding'

const separatorWidthPx = '14px'

export const StyledSearchRecap = styled.div`
  & .kirk-uneditableTextField {
    width: 100%;
    padding-top: ${space.m};
    padding-bottom: ${space.m};
  }

  & .kirk-uneditableTextField .kirk-icon {
    flex-shrink: 0;
  }

  & .kirk-uneditableTextField-label {
    width: calc(100% - (${space.l} * 3));
    display: flex;
    flex-direction: column;
  }

  & .kirk-requestRecap-route {
    display: flex;
    width: 100%;
  }

  & .kirk-requestRecap-locationSeparator {
    margin: 0 ${space.s};
    height: ${font.base.lineHeight};
    /* Visually align arrow icon and surrounding text */
    position: relative;
    top: 1px;
  }

  & .kirk-requestRecap-location {
    display: inline-block;
    text-overflow: ellipsis;
    /* Half the parent width minus half the arrow separator with margin */
    max-width: calc(50% - (${separatorWidthPx} / 2) - ${space.s});
    overflow: hidden;
    white-space: nowrap;
  }

  & .kirk-requestRecap-location,
  & .kirk-requestRecap-info {
    font-size: ${font.s.size};
    line-height: ${font.base.lineHeight};
  }

  @media (${responsiveBreakpoints.isMediaLarge}) {
    & .kirk-requestRecap-location,
    & .kirk-requestRecap-info {
      font-size: ${font.base.size};
    }

    & .kirk-requestRecap-locationSeparator {
      /* Visually align arrow icon and surrounding text */
      top: 0;
    }
  }
`
