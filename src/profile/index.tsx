import styled from 'styled-components'
import Profile from './profile'

const StyledProfile = styled(Profile)`
  &.kirk-profile-size-medium .kirk-item-leftText {
    align-self: flex-end;
  }
`

export { ProfileProps } from './profile'
export default StyledProfile
