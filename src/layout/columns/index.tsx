import styled from 'styled-components'
import { responsiveBreakpoints } from '_utils/branding'

import Columns from './columns'

const StyledColumns = styled(Columns)`
  & {
    display: flex;
    flex-direction: row;
  }

  @media (${responsiveBreakpoints.isMediaSmall}) {
    & {
      flex-direction: column;
    }
  }
`

export { ColumnsProps } from './columns'
export default StyledColumns
