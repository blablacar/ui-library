import styled from 'styled-components'
import BlankSeparator, { BlankSeparatorSize } from './BlankSeparator'
import { space } from '_utils/branding'

const StyledBlankSeparator = styled(BlankSeparator)`
  & {
    /* No background color for blank separator. */
    padding-top: ${props => {
      switch (props.size) {
        case BlankSeparatorSize.LARGE:
          return space.xl
        case BlankSeparatorSize.MEDIUM:
          return space.l
        case BlankSeparatorSize.SMALL:
        default:
          return space.m
      }
    }};
  }
`
export { BlankSeparatorSize, BlankSeparatorProps } from './BlankSeparator'
export default StyledBlankSeparator
