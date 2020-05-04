import styled from 'styled-components'

import { space } from '_utils/branding'

import Proximity from './Proximity'

const StyledProximity = styled(Proximity)`
  & {
    display: inline-block;
    line-height: 0;
  }

  & svg {
    margin-top: ${space.s};
  }

  & svg + svg {
    margin-left: ${space.s};
  }
`
export { Distances, ProximityProps } from './Proximity'
export default StyledProximity
