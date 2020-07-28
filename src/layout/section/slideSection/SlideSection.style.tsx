import styled from 'styled-components'

import { shadow } from '../../../_utils/branding'

export const StyledSlideLayout = styled.div`
  position: relative;
  overflow: hidden;
  border-bottom: 1px solid #ddd;
`

export const StyledSlidePanel = styled.div<{
  minimalHeight: number
  defaultHeight: number
  expandedHeight: number
}>`
  background-color: #fff;
  height: ${props => props.expandedHeight}px;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  transition: transform ease 300ms;
  box-shadow: ${shadow.slideSection};

  &.default {
    transform: translateY(-${props => props.defaultHeight}px);
  }

  &.expanded {
    transform: translateY(-${props => props.expandedHeight}px);
    overflow: scroll;
  }

  &.reduced {
    transform: translateY(-${props => props.minimalHeight}px);
  }
`
