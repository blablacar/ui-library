import styled from 'styled-components'

import { sectionBaseStyle } from '../../../searchForm/baseStyles'
import { DatePickerSection } from './DatePickerSection'

const StyledDatePickerSection = styled(DatePickerSection)`
  & {
    ${sectionBaseStyle};
  }
`

export { StyledDatePickerSection as DatePickerSection }
