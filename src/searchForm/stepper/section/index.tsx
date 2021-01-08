import styled from 'styled-components'

import { sectionBaseStyle } from '../../../searchForm/baseStyles'
import { StepperSection } from './StepperSection'

const StyledStepperSection = styled(StepperSection)`
  & {
    ${sectionBaseStyle};
  }
`

export { StyledStepperSection as StepperSection }
