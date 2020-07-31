import styled from 'styled-components'

import { color, shadow, transition } from '../../../_utils/branding'

export const StyledSlideLayout = styled.div`
  position: relative;
  overflow: hidden;
  border-bottom: 1px solid ${color.gray};
`

export const StyledSlidePanel = styled.div<{
  minimalHeight: number
  defaultHeight: number
  expandedHeight: number
}>`
  background-color: ${color.white};
  height: ${props => props.expandedHeight}px;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  transition: transform ease ${transition.duration.base};
  box-shadow: ${shadow.slideSection};

  &.default {
    transform: translateY(-${props => props.defaultHeight}px);
  }

  &.expanded {
    transform: translateY(-${props => props.expandedHeight}px);
    overflow: auto;
  }

  &.reduced {
    transform: translateY(-${props => props.minimalHeight}px);
  }
`
