import styled from 'styled-components'
import { color, radius, space } from '_utils/branding'

import DatePickerOverlay from './DatePickerOverlay'

const overlayWidth = '375px'

const StyledDatePickerOverlay = styled(DatePickerOverlay)`
  & {
    box-sizing: border-box;
    width: ${overlayWidth};
    border: 1px solid ${color.border};
    border-radius: ${radius.l};
    padding: ${space.xl};
    /* Same as TripCard, we might need to have box-shadow specs so that we can move it to branding file */
    box-shadow: 0 1pt 4pt rgba(0, 0, 0, 0.16), 0 2pt 8pt rgba(0, 0, 0, 0.08);
  }

  & .kirk-datePickerOverlay-datepicker {
    margin-top: ${space.l};
  }

  & .DayPicker-Month {
    margin-bottom: 0;
  }
`

export default StyledDatePickerOverlay
