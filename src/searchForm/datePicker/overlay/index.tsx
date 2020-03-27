import styled from 'styled-components'
import { space } from '_utils/branding'
import { overlayBaseStyle } from 'searchForm/baseStyles'

import DatePickerOverlay from './DatePickerOverlay'

const StyledDatePickerOverlay = styled(DatePickerOverlay)`
  & {
    ${overlayBaseStyle}
  }

  & .kirk-datePickerOverlay-datepicker {
    margin-top: ${space.l};
  }

  & .DayPicker-Month {
    margin-bottom: 0;
  }
`

export default StyledDatePickerOverlay
