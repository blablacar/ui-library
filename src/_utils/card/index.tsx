import styled from 'styled-components'

import { radius, transition, color, shadow } from '_utils/branding'
import Card from './Card'

const StyledCard = styled(Card)`
  & {
    border-radius: ${radius.l};
    box-shadow: ${shadow.card};
    list-style-type: none;
    transition: box-shadow ${transition.duration.base} ${transition.easing.default};
    background-color: ${color.defaultBackground};
  }

  &:hover {
    box-shadow: ${shadow.cardHover};
  }
`

export default StyledCard
