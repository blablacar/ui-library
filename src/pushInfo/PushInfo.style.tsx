import styled from 'styled-components'

import { color, font, fontWeight, radius, space } from '../_utils/branding'
import { normalizeHorizontally } from '../layout/layoutNormalizer'

export const animationDuration = 700
export const animationDelay = 300

export const StyledPushInfoWrapper = styled.div`
  ${normalizeHorizontally};
`

export const StyledPushInfo = styled.div`
  display: flex;
  align-items: center;
  background: ${color.midnightGreen};
  color: ${color.white};
  border-radius: ${radius.l};
  font-size: ${font.base.size};
  line-height: ${font.base.lineHeight};
  font-weight: ${fontWeight.regular};
  padding: 0 ${space.l};
  max-height: 0;
  overflow-y: hidden;
  animation: slide-down ${animationDuration}ms ease-out ${animationDelay}ms forwards;

  @keyframes slide-down {
    0% {
      max-height: 0;
    }
    100% {
      max-height: 300px;
      padding-top: ${space.l};
      padding-bottom: ${space.l};
    }
  }

  .kirk-pushInfo-headline {
    font-size: ${font.m.size};
    line-height: ${font.m.lineHeight};
    font-weight: ${fontWeight.medium};
    margin: 0 0 ${space.m};
  }

  .kirk-pushInfo-headline--standalone {
    margin: 0;
  }

  .kirk-pushInfo-content {
    margin: 0;
  }

  .kirk-pushInfo-icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    min-width: 40px;
    height: 40px;
    margin-right: ${space.l};
    background-color: ${color.white};
  }
`
