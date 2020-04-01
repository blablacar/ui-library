import styled from 'styled-components'
import { sectionBaseStyle } from 'searchForm/baseStyles'

import StepperSection from './StepperSection'

const StyledStepperSection = styled(StepperSection)`
  & {
    ${sectionBaseStyle};
  }

  & .kirk-stepperSection-submit {
    text-align: center;
  }
`

export default StyledStepperSection
