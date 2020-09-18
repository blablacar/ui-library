import styled from 'styled-components'

import { color, shadow } from '../../../_utils/branding'

export const StyledSlideLayout = styled.div`
  position: relative;
  overflow: hidden;
  border-bottom: 1px solid ${color.gray};
`

export const StyledSlidePanel = styled.div<{
  expandedHeight: number
}>`
  background-color: ${color.white};
  height: ${props => props.expandedHeight}px;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  box-shadow: ${shadow.slideSection};
  transition: width ease 200ms;

  &.expanded {
    overflow: auto;
  }

  &.animated {
    transition: transform ease 200ms;
  }
`
